'use client'

import Link from 'next/link'
import { useState } from 'react'

import FormField from '@/components/ui/form-field'
import FormLegalLine from '@/components/ui/form-legal-line'
import MagneticButton from '@/components/ui/magnetic-button'
import {
  AVAILABILITY_OPTIONS,
  CAMPAIGN_EXPERIENCE_OPTIONS,
  HELP_OPTIONS,
  MONTANA_COUNTIES,
  MONTANA_REGIONS,
  REGISTERED_VOTER_OPTIONS,
} from '@/constants/montana'
import { formatPhoneInput, validateOptionalPhone } from '@/lib/phone'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zipCode: '',
  county: '',
  region: '',
  registeredVoter: '',
  campaignExperience: '',
  helpOptions: [],
  availability: '',
  issues: '',
  anythingElse: '',
  smsUpdates: false,
}

const validate = (values) => {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'First name is required.'
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.region) errors.region = 'Please choose a region.'
  if (!values.registeredVoter) {
    errors.registeredVoter = 'Please confirm your voter registration.'
  }
  if (!values.campaignExperience) {
    errors.campaignExperience = 'Please tell us your experience level.'
  }
  if (values.helpOptions.length === 0) {
    errors.helpOptions = 'Please pick at least one way to help.'
  }
  if (!values.availability) errors.availability = 'Please choose an availability.'
  if (!values.issues.trim()) errors.issues = 'Please tell us what matters most.'
  const phoneError = validateOptionalPhone(values.phone)
  if (phoneError) errors.phone = phoneError
  return errors
}

const toSelectOptions = (list) => [
  { value: '', label: 'Select one…' },
  ...list.map((item) => ({ value: item, label: item })),
]

const GetInvolvedSignup = () => {
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

  const handleHelpToggle = (option) => {
    setValues((prev) => {
      const exists = prev.helpOptions.includes(option)
      return {
        ...prev,
        helpOptions: exists
          ? prev.helpOptions.filter((item) => item !== option)
          : [...prev.helpOptions, option],
      }
    })
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
      const response = await fetch('/api/get-involved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: values.phone,
          zipCode: values.zipCode.trim(),
          county: values.county,
          region: values.region,
          registeredVoter: values.registeredVoter,
          campaignExperience: values.campaignExperience,
          helpOptions: values.helpOptions.join(', '),
          availability: values.availability,
          issues: values.issues.trim(),
          anythingElse: values.anythingElse.trim(),
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
      console.error('[GetInvolvedSignup]:', error)
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
          You&rsquo;re in
        </span>
        <h3 className="font-display text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-900">
          Welcome to the fight.
        </h3>
        <p className="text-base leading-[1.65] text-stone-600 max-w-[52ch]">
          A team member will follow up shortly with next steps and your nearest precinct
          contact.
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
        name="firstName"
        label="First name"
        required
        autoComplete="given-name"
        placeholder="First name"
        value={values.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <FormField
        name="lastName"
        label="Last name"
        required
        autoComplete="family-name"
        placeholder="Last name"
        value={values.lastName}
        onChange={handleChange}
        error={errors.lastName}
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
        name="zipCode"
        label="ZIP code (optional)"
        inputMode="numeric"
        pattern="[0-9]{5}"
        autoComplete="postal-code"
        placeholder="59866"
        value={values.zipCode}
        onChange={handleChange}
        error={errors.zipCode}
      />
      <FormField
        name="county"
        as="select"
        label="County (optional)"
        options={toSelectOptions(MONTANA_COUNTIES)}
        value={values.county}
        onChange={handleChange}
        error={errors.county}
      />
      <FormField
        name="region"
        as="select"
        label="Region"
        required
        options={toSelectOptions(MONTANA_REGIONS)}
        value={values.region}
        onChange={handleChange}
        error={errors.region}
      />
      <FormField
        name="registeredVoter"
        as="select"
        label="Registered to vote in Oregon?"
        required
        options={toSelectOptions(REGISTERED_VOTER_OPTIONS)}
        value={values.registeredVoter}
        onChange={handleChange}
        error={errors.registeredVoter}
      />
      <div className="md:col-span-2">
        <FormField
          name="campaignExperience"
          as="select"
          label="Prior campaign experience"
          required
          options={toSelectOptions(CAMPAIGN_EXPERIENCE_OPTIONS)}
          value={values.campaignExperience}
          onChange={handleChange}
          error={errors.campaignExperience}
        />
      </div>

      <fieldset className="md:col-span-2 flex flex-col gap-3">
        <legend className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
          How would you like to help? <span aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {HELP_OPTIONS.map((option) => {
            const checked = values.helpOptions.includes(option)
            return (
              <label
                key={option}
                className={`flex items-center gap-3 rounded-[4px] border bg-paper px-4 py-3 font-body text-[14px] text-ink-900 cursor-pointer transition-colors ${
                  checked
                    ? 'border-ochre-500 bg-ochre-500/10'
                    : 'border-bone-200 hover:border-ochre-500'
                }`}
              >
                <input
                  type="checkbox"
                  name="helpOptions"
                  value={option}
                  checked={checked}
                  onChange={() => handleHelpToggle(option)}
                  className="accent-ochre-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre-500"
                />
                {option}
              </label>
            )
          })}
        </div>
        {errors.helpOptions && (
          <p role="alert" className="font-mono text-[11px] leading-[1.5] text-rust">
            {errors.helpOptions}
          </p>
        )}
      </fieldset>

      <div className="md:col-span-2">
        <FormField
          name="availability"
          as="select"
          label="Availability"
          required
          options={toSelectOptions(AVAILABILITY_OPTIONS)}
          value={values.availability}
          onChange={handleChange}
          error={errors.availability}
        />
      </div>

      <div className="md:col-span-2">
        <FormField
          name="issues"
          as="textarea"
          rows={3}
          label="What issue(s) matter most to you?"
          required
          placeholder="Healthcare, affordability, public lands — whatever drives you."
          value={values.issues}
          onChange={handleChange}
          error={errors.issues}
        />
      </div>

      <div className="md:col-span-2">
        <FormField
          name="anythingElse"
          as="textarea"
          rows={3}
          label="Anything else to share? (optional)"
          placeholder="Skills, schedule quirks, questions — anything helpful."
          value={values.anythingElse}
          onChange={handleChange}
          error={errors.anythingElse}
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
        <MagneticButton type="submit" variant="ochre" size="lg" disabled={submitting}>
          {submitting ? 'Signing you up…' : 'Sign me up'}
        </MagneticButton>
      </div>

      <FormLegalLine />
    </form>
  )
}

export default GetInvolvedSignup
