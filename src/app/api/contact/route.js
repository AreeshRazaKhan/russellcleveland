import {
  PHONE_INCOMPLETE_MESSAGE,
  isPhoneComplete,
  normalizePhoneForSubmit,
} from '@/lib/phone'

const WEBHOOK_URLS = [
  process.env.GHL_CONTACT_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/qUea5iHfnUuhdJnbFAy6',
  process.env.GHL_COMPLIANCE_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/VdldWHSDeAJebFb0qFG2',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || '').toString().trim()
    const lastName = (body.lastName || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const message = (body.message || '').toString().trim()
    const phone = (body.phone || '').toString().trim()
    const smsUpdates = body.sms_updates === 'Yes' ? 'Yes' : 'No'
    const smsPromo = body.sms_promo === 'Yes' ? 'Yes' : 'No'

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (phone && !isPhoneComplete(phone)) {
      return Response.json({ error: PHONE_INCOMPLETE_MESSAGE }, { status: 400 })
    }

    const payload = {
      type: 'Contact_Form',
      firstName,
      lastName,
      email,
      phone: normalizePhoneForSubmit(phone),
      message,
      sms_updates: smsUpdates,
      sms_promo: smsPromo,
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/contact]: webhook error', url, error)
          return { ok: false }
        }),
      ),
    )

    if (!results.some((response) => response.ok)) {
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/contact]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
