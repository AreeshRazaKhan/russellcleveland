'use client'

import Link from 'next/link'
import { useState } from 'react'

import FormField from '@/components/ui/form-field'
import FormLegalLine from '@/components/ui/form-legal-line'
import MagneticButton from '@/components/ui/magnetic-button'
import { ISSUE_CATEGORIES } from '@/constants/issues'
import { formatPhoneInput, validateOptionalPhone } from '@/lib/phone'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  category: '',
  location: '',
  subject: '',
  description: '',
  smsUpdates: false,
}

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.category) errors.category = 'Please pick a category.'
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.description.trim()) {
    errors.description = 'Please tell us what’s on your mind.'
  }
  const phoneError = validateOptionalPhone(values.phone)
  if (phoneError) errors.phone = phoneError
  return errors
}

const toSelectOptions = (list) => [
  { value: '', label: 'Select a category…' },
  ...list.map((item) => ({ value: item, label: item })),
]

const IssueForm = () => {
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handlePhoneChange = (event) => {
    const formatted = formatPhoneInput(event.target.value)
    setValues((prev) => ({ ...prev, phone: formatted }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fieldErrors = validate(values)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setSubmitError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone,
          category: values.category,
          location: values.location.trim(),
          subject: values.subject.trim(),
          description: values.description.trim(),
          sms_updates: values.smsUpdates ? 'Yes' : 'No',
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        setSubmitError(data?.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSuccess(true)
      setValues(INITIAL_STATE)
    } catch (error) {
      console.error('[IssueForm]:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 flex flex-col gap-4 relative before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-[3px] before:bg-ochre-500"
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
          Question received
        </span>
        <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
          Thanks for reaching out.
        </h3>
        <p className="text-base leading-[1.65] text-stone-600 max-w-[52ch]">
          We read every question. The team may follow up directly if we need more context to
          answer well.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tablet:col-span-7 bg-white border border-bone-200 rounded-[4px] p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <FormField
        name="name"
        label="Full name"
        required
        autoComplete="name"
        placeholder="Full name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        name="phone"
        type="tel"
        label="Phone (optional)"
        autoComplete="tel"
        placeholder="+1 (541) 555-0123"
        value={values.phone}
        onChange={handlePhoneChange}
        error={errors.phone}
      />
      <FormField
        name="category"
        as="select"
        label="Category"
        required
        options={toSelectOptions(ISSUE_CATEGORIES)}
        value={values.category}
        onChange={handleChange}
        error={errors.category}
      />
      <div className="md:col-span-2">
        <FormField
          name="location"
          label="Location (optional)"
          placeholder="County, town, or neighborhood"
          value={values.location}
          onChange={handleChange}
          error={errors.location}
        />
      </div>
      <div className="md:col-span-2">
        <FormField
          name="subject"
          label="Subject"
          required
          placeholder="e.g., Property tax assessments in North Bend"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
        />
      </div>
      <div className="md:col-span-2">
        <FormField
          name="description"
          as="textarea"
          rows={6}
          label="Your question or story"
          required
          placeholder="Tell the story in your own words. We read every one."
          value={values.description}
          onChange={handleChange}
          error={errors.description}
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-3 border-t border-bone-200 pt-5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-600">
          SMS Consent
        </span>
        <label className="flex items-start gap-3 font-mono text-[11px] leading-[1.6] text-stone-600 cursor-pointer">
          <input
            type="checkbox"
            name="smsUpdates"
            checked={values.smsUpdates}
            onChange={handleChange}
            className="mt-1 accent-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
          />
          <span>
            By providing your phone number, you consent to receive calls and text messages
            from Coos County Republican Central Committee, Msg &amp; data rates may apply.
            Msg frequency may vary. Messaging may include requests for donation. Reply STOP
            to unsubscribe or HELP for help. View{' '}
            <Link
              href="/privacy-policy"
              className="underline decoration-ochre-500/60 underline-offset-4 hover:text-ochre-600"
            >
              Privacy Policy
            </Link>{' '}
            for more info.
          </span>
        </label>
      </div>

      {submitError && (
        <p
          role="alert"
          className="md:col-span-2 font-mono text-[12px] leading-[1.5] text-rust"
        >
          {submitError}
        </p>
      )}

      <div className="md:col-span-2 w-fit">
        <MagneticButton type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Submit question'}
        </MagneticButton>
      </div>

      <FormLegalLine />
    </form>
  )
}

export default IssueForm
