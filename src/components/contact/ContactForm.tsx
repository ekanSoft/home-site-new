import { useState } from 'react'
import type { FormEvent } from 'react'
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
  'block w-full rounded-xl border-0 bg-surface px-3.5 py-2.5 text-heading shadow-sm ring-1 ring-inset ring-border placeholder:text-muted/60 focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6'

const labelClasses = 'block text-sm font-semibold leading-6 text-heading'

/**
 * Static contact form UI for phase 1. No network call is made on submit —
 * a placeholder success state is shown instead. Real submission (serverless
 * endpoint + Resend) is planned for a later phase.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-brand-soft p-10 text-center">
        <h3 className="text-xl font-semibold text-heading">Thanks for reaching out</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
          Message sending isn&apos;t wired up yet in this preview. In the meantime,
          email us directly at{' '}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-semibold text-brand hover:text-brand-dark"
          >
            {siteConfig.contactEmail}
          </a>{' '}
          and we&apos;ll get back to you.
        </p>
        {siteConfig.consultationUrl ? (
          <div className="mt-6">
            <Button href={siteConfig.consultationUrl} target="_blank" rel="noreferrer">
              Book a consultation
            </Button>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="mt-2">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone / WhatsApp <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className={labelClasses}>
            Project type <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <div className="mt-2">
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
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project, timeline, and goals."
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            id="consultationInterest"
            name="consultationInterest"
            type="checkbox"
            className="mt-1 size-4 rounded border-border text-brand focus:ring-brand"
          />
          <label htmlFor="consultationInterest" className="text-sm leading-6 text-muted">
            I&apos;m interested in booking a free consultation call.
          </label>
        </div>

        {/* Honeypot: non-functional placeholder for future anti-spam. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="mt-8">
        <Button size="lg" className="w-full sm:w-auto" type="submit">
          Send message
        </Button>
        <p className="mt-3 text-xs text-muted">
          This form is a preview — sending will be enabled soon. For now, email
          us at{' '}
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
