const digitsOf = (value) => (value ? value.toString().replace(/\D/g, '') : '')

const stripCountryCode = (digits) =>
  digits.startsWith('1') ? digits.slice(1) : digits

export const formatPhoneInput = (value) => {
  const digits = digitsOf(value)
  const local = stripCountryCode(digits).slice(0, 10)
  if (local.length === 0) return ''
  if (local.length <= 3) return `+1 (${local}`
  if (local.length <= 6) return `+1 (${local.slice(0, 3)}) ${local.slice(3)}`
  return `+1 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`
}

export const PHONE_INCOMPLETE_MESSAGE =
  'Please enter a complete 10-digit phone number, or clear the field.'

/** True when the value holds a full 10-digit US number (country code optional). */
export const isPhoneComplete = (value) =>
  stripCountryCode(digitsOf(value)).length === 10

/**
 * Validation message for an optional phone field: empty is allowed, anything
 * shorter than a full 10-digit number is not.
 */
export const validateOptionalPhone = (value) => {
  const entered = value ? value.toString().trim() : ''
  if (!entered) return ''
  return isPhoneComplete(entered) ? '' : PHONE_INCOMPLETE_MESSAGE
}

export const normalizePhoneForSubmit = (value) => {
  const digits = digitsOf(value)
  const local = stripCountryCode(digits)
  if (local.length !== 10) return ''
  return `+1 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`
}
