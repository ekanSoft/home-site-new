import { useState } from 'react'
import type { ContactProjectType } from '../../types/site'
import { siteConfig } from '../../config/site'
import { Button } from '../common/Button'

const projectTypeOptions: { value: ContactProjectType; label: string }[] = [
  { value: 'website-or-ecommerce', label: 'Website or e-commerce' },
  { value: 'custom-web-app', label: 'Custom web application' },
  { value: 'mobile-app', label: 'Mobile app' },
  { value: 'backend-api', label: 'Backend / API' },
  { value: 'ai-chatbot-or-voice-agent', label: 'AI chatbot or voice agent' },
  { value: 'automation-or-integration', label: 'Automation or integration' },
  { value: 'data-dashboard', label: 'Data dashboard' },
  { value: 'technical-consulting', label: 'Technical consulting' },
  { value: 'not-sure-yet', label: 'Not sure yet' },
]

const inputClasses =
  'mt-2 block min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-heading shadow-sm outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand-soft'

const labelClasses = 'block text-base font-semibold leading-6 text-heading'

/**
 * Static contact form UI for phase 1. No network call is made on submit.
 * A placeholder success state is shown instead. Real submission is planned
 * for a later phase.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="rounded-3xl border border-border bg-surface-soft p-6 sm:p-10"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      noValidate={false}
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="projectType" className={labelClasses}>
          Project type <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={inputClasses}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-7">
        <label htmlFor="message" className={labelClasses}>
          Message <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project, timeline, and goals."
          className="mt-2 block min-h-40 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-heading shadow-sm outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand-soft"
        />
      </div>

      <label
        htmlFor="consultationInterest"
        className="mt-7 flex items-start gap-3 text-base leading-6 text-muted"
      >
        <input
          id="consultationInterest"
          name="consultationInterest"
          type="checkbox"
          className="mt-1 size-4 rounded border-border text-brand focus:ring-brand"
        />
        <span>I&apos;m interested in booking a free consultation call.</span>
      </label>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {submitted ? (
        <div
          className="mt-7 rounded-xl border border-brand bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-dark"
          role="status"
        >
          Thanks for reaching out. Message sending is not wired up yet in this
          preview, so please email us directly at {siteConfig.contactEmail}.
        </div>
      ) : null}

      <div className="mt-8">
        <Button size="lg" className="w-full px-7 py-3 text-base sm:w-auto" type="submit">
          Send message
        </Button>
        <p className="mt-4 text-sm leading-6 text-muted">
          This form is a preview. Sending will be enabled soon. For now, email us
          at{' '}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-semibold text-brand hover:text-brand-dark"
          >
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </div>
    </form>
  )
}
