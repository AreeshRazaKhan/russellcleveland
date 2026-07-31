import {
  PHONE_INCOMPLETE_MESSAGE,
  isPhoneComplete,
  normalizePhoneForSubmit,
} from '@/lib/phone'

const WEBHOOK_URLS = [
  process.env.GHL_EVENT_RSVP_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/FaG446JdwSd8pds3ep6N',
  process.env.GHL_COMPLIANCE_WEBHOOK ||
    'https://services.leadconnectorhq.com/hooks/XVFl34pDIwwm1Hr3qXss/webhook-trigger/VdldWHSDeAJebFb0qFG2',
]

export async function POST(request) {
  try {
    const body = await request.json()
    const firstName = (body.firstName || '').toString().trim()
    const lastName = (body.lastName || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const eventName = (body.eventName || '').toString().trim()
    const eventDate = (body.eventDate || '').toString().trim()
    const eventTime = (body.eventTime || '').toString().trim()
    const eventCategory = (body.eventCategory || '').toString().trim()
    const phone = (body.phone || '').toString().trim()

    if (!firstName || !email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (phone && !isPhoneComplete(phone)) {
      return Response.json({ error: PHONE_INCOMPLETE_MESSAGE }, { status: 400 })
    }

    const payload = {
      type: 'Event_RSVP',
      firstName,
      lastName,
      email,
      phone: normalizePhoneForSubmit(phone),
      eventName,
      eventDate,
      eventTime,
      eventCategory,
      sms_updates: body.sms_updates === 'Yes' ? 'Yes' : 'No',
      sms_promo: body.sms_promo === 'Yes' ? 'Yes' : 'No',
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/events/rsvp]: webhook error', url, error)
          return { ok: false }
        }),
      ),
    )

    if (!results.some((response) => response.ok)) {
      return Response.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[api/events/rsvp]:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
