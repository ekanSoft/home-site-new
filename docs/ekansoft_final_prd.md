# ekansoft Software Consulting Website PRD

**Version:** 2.0 - Final UI Phase PRD  
**Date:** June 12, 2026  
**Prepared for:** ekansoft  
**Primary build target:** Existing Vite + React + TypeScript + Tailwind CSS project  
**Current implementation phase:** Static public UI only

---

## 1. Executive Summary

ekansoft is a founder-led software consulting practice that helps businesses design, build, integrate, and scale software systems. The website should present ekansoft as technical, premium, practical, honest, and approachable.

The first implementation should focus on a polished public UI only. It should not wire real email submission, Resend, calendar integrations, APIs, databases, authentication, CRM, or any backend logic yet. Infact unless u think otherwise, we should not have a backend for this application

The site should explain that ekansoft can help with:

- Custom web applications.
- Business websites and e-commerce platforms.
- Backend systems and APIs.
- Mobile applications.
- AI chatbots and voice agent systems.
- AI workflows and automation.
- Data analytics and dashboard.
- Payment, wallet, logistics, and third-party integrations.
- Cloud, DevOps, and technical consulting.

The site should not pretend ekansoft is already a large agency. The language should be confident but honest: senior engineering, practical delivery, and strong technical capability.

---

## 2. Final Direction and Decisions

This PRD is the source of truth for the UI build.

### 2.1 Build approach

Use the existing Vite app as the actual project.


Use Tailwind Plus, Oak's Lab, Radiant, and EBCD as layout references only, unless specific small snippets are manually placed in `docs/references/sample-code/`.

### 2.2 Phase 1 scope

Build only the static public UI:

- Pages.
- Layout.
- Navigation.
- Responsive behavior.
- Static contact form UI.
- Project gallery UI.
- Theme system.
- Data/config files.

Do not wire real functionality in this phase.

### 2.3 Page decision


```txt
/
/services
/work
/contact
```

### 2.4 Future functionality

The future contact form can use Resend, but Resend must not be called directly from frontend code because the API key must remain secret. For a Vite frontend, that means a later serverless function, backend endpoint, or deployment-provider function is required.

The future booking/consultation CTA can be a frontend-only external link to Calendly, Cal.com, Google Calendar appointment scheduling, or a similar scheduling URL.

---

## 3. Reference Sources

| Area | Reference | URL / Path | How to use |
|---|---|---|---|
| Navigation/header | User-selected top navigation screenshots | `docs/references/navigation/` | Primary authority for top navbar positioning, spacing, dropdown behavior, and CTA style and alo and also https://tailwindcss.com/plus/ui-blocks/marketing/elements/headers. |
| Header blocks | Tailwind Plus header examples | https://tailwindcss.com/plus/ui-blocks/marketing/elements/headers | Optional reference for header implementation patterns. |
| Homepage layout | Tailwind Plus Radiant preview | https://tailwindcss.com/plus/templates/radiant/preview | Use for homepage layout rhythm, hero polish, bento cards, white background, and modern business-marketing feel. |
| Radiant info | Tailwind Plus Radiant page | https://tailwindcss.com/plus/templates/radiant | Use as visual inspiration only. Do not migrate to Radiant/Next.js. |
| Consulting tone | Oak's Lab homepage | https://www.oakslab.com/ | Use for premium software consulting tone, AI/product/engineering positioning, CTA clarity, and contact style. |
| How we work | Oak's Lab style / uploaded screenshot | `docs/references/how-we-work/` | Use for the two-model delivery section and CTA card inspiration. |
| Technology marquee | Oak's Lab technology scrolling section | `docs/references/technology-scroll/` | Use for the constantly scrolling technology/capability strip. |
| Project gallery | EBCD projects page | https://www.ebcd.ie/projects | Use for Work page/project gallery inspiration, scrollable project feel, hover effects, and initial freelance-safe project list. |
| EBCD services/contact feel | EBCD services page | https://www.ebcd.ie/services | Use for simple small-business service language and straightforward contact direction. |
| Tailwind blocks | Tailwind Plus UI blocks | https://tailwindcss.com/plus/ui-blocks | Optional design inspiration. |
| Contact UI blocks | Tailwind Plus contact sections | https://tailwindcss.com/plus/ui-blocks/marketing/sections/contact-sections | Optional contact page inspiration. |
| Hero blocks | Tailwind Plus hero sections | https://tailwindcss.com/plus/ui-blocks/marketing/sections/heroes | Optional hero inspiration. |
| Feature blocks | Tailwind Plus feature sections | https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections | Optional service/feature card inspiration. |
| Bento blocks | Tailwind Plus bento grids | https://tailwindcss.com/plus/ui-blocks/marketing/sections/bento-grids | Optional bento service/card inspiration. |
| Footer blocks | Tailwind Plus footers | https://tailwindcss.com/plus/ui-blocks/marketing/sections/footers | Optional footer inspiration. |
| Selected snippets | Manually provided sample code | `docs/references/sample-code/` | Optional. Use only as reference snippets, not as a new codebase. |

---

## 4. Screenshot Reference Pack

Create this folder in the project:

```txt
docs/references/
```

Recommended structure:

```txt
docs/references/
  navigation/
  homepage/
  how-we-work/
    oakslab-two-models.png
  technology-scroll/
    oakslab-technology-marquee.png
  work-gallery/
  
  and just check the folder for doc/references for others
```


---

## 5. Product Goals

1. Present ekansoft as a premium but honest software consulting practice.
2. Convert visitors into leads through contact CTA, visible email, and a future consultation booking link.
3. Showcase only safe public freelance/contract projects on the Work page.
4. Explain service capabilities clearly to business owners and technical decision-makers.
5. Highlight founder credibility without misrepresenting employment/staff work as ekansoft portfolio work.
6. Make the website easy to maintain by storing copy, services, projects, links, theme values, and config in reusable files.
7. Keep the UI production-ready even before functionality is wired.

---

## 6. Non-Goals for Phase 1

Do not build:

- Real contact form submission.
- Resend integration.
- Calendar scheduling integration.
- Backend APIs.
- Database.
- Authentication.
- CRM.
- Blog/insights engine.
- Project detail pages.
- Fake testimonials.
- Fake awards.
- Fake client logos.
- Misleading client claims.

---

## 7. Site Map

```txt
/
  Home page with scrollable sections
/services
  Services overview
/work
  Selected public/freelance work gallery
/contact
  Static contact form UI + public email + consultation CTA
```

No separate `/about` page in phase 1. Founder/about content should be a section on the Home page.



Do not build optional future routes in phase 1.

---

## 8. Navigation Requirements

Use a top navigation/header layout.

### Desktop navigation

Recommended structure:

- ekansoft logo/brand on the left.
- Main nav items across the top.
- Dropdowns where useful.
- Prominent CTA button on the right: `Get in touch`, `Contact us`, or `Start a project`.

Recommended nav items:

```txt
Company
  How we work -> /#how-we-work
  Founder-led -> /#founder
  Technologies -> /#technologies

Services
  Web Applications -> /services#custom-web-applications
  E-commerce & Business Websites -> /services#business-websites-ecommerce
  Backend & APIs -> /services#backend-api-development
  AI Chatbots & Voice Agents -> /services#ai-chatbots-voice-agents
  Automation & Integrations -> /services#ai-workflows-automation

Work -> /work
Contact -> /contact
```

The exact labels can be adjusted for good design, but the navigation should remain simple and clear.

### Mobile navigation

Use a responsive mobile header with a menu/drawer/dropdown. The contact CTA should remain easy to access.

### Navigation visual rule

The provided navigation screenshots are the authority. Do not use Radiant navigation if it conflicts with those screenshots.

---

## 9. Visual Design Direction

- White background.
- Professional teal-blue accent.
- Clean consulting/business feel.
- Premium but not fake-big.
- Radiant-like layout polish, but not SaaS-product positioning.
- Oak's Lab-like consulting clarity, but not copied.
- EBCD-like project gallery simplicity.
- Avoid making the site black-heavy. Use dark text where needed, but not as the main theme.

Suggested palette:

```txt
Primary brand: #0E7490
Primary dark: #155E75
Primary soft: #E0F2FE
Accent: #14B8A6
Main background: #FFFFFF
Soft background: #F8FAFC
Heading text: #0F172A
Body/muted text: #475569
Border: #E2E8F0
```

### Theme configuration rule

Do not hardcode random hex colors across components. Use CSS variables and/or Tailwind config so the brand color can be changed from one place.

Suggested semantic tokens:

```txt
--color-brand
--color-brand-dark
--color-brand-soft
--color-accent
--color-surface
--color-surface-soft
--color-heading
--color-muted
--color-border
```

---

## 10. Page Requirements

## 10.1 Home Page

The Home page should be the strongest page. It should quickly explain what ekansoft does, why the visitor should trust the firm, how ekansoft works, and what action the visitor should take next.

Required sections:

1. Top navigation.
2. Hero section.
3. Credibility/positioning strip.
4. Services preview using cards or bento-style layout.
5. How we work section inspired by the uploaded Oak's Lab screenshot.
6. Technology stack / capabilities scrolling marquee.
7. Featured work preview using only EBCD/freelance-safe projects.
8. Founder-led credibility section.
9. Process section: Discover, Plan, Build, Launch, Support.
10. Final CTA.

Suggested hero copy:

> We build reliable software for businesses that need more than just a website
>
> ekansoft helps businesses design, build, integrate, and scale web platforms, mobile apps, backend systems, AI workflows, and automation tools.

Suggested CTAs:

- Primary: `Start a project` or `Get in touch`.
- Secondary: `View our work`.

### Home: How We Work section

Use the uploaded Oak's Lab screenshot as inspiration for this section.

Suggested content:

- Label: `How we work`.
- Heading: `Two ways to work with us. One standard of delivery.`
- Intro: Explain that ekansoft can either own a delivery stream end-to-end or embed into a client's existing team.
- Card 1: `Model 01 - Project Delivery`.
- Card 2: `Model 02 - Embedded Engineering Support`.
- CTA card: `If one of these sounds like the right model for your situation, let's talk about how we can help.`

### Home: Technology scrolling section

Create a tasteful, constantly scrolling horizontal marquee of technologies/capabilities. It should feel like Oak's Lab's technology scroll but fit ekansoft's teal/white theme.

Technology examples:

```txt
Node.js
TypeScript
NestJS
Go
React
Next.js
Vite
PostgreSQL
MongoDB
Redis
Docker
Kubernetes
RabbitMQ
AWS
DigitalOcean
Paystack
Opay
Resend
OpenAI
Anthropic
Twilio
11Labs
```

## 10.2 Services Page

The Services page should be direct and practical. It should explain what clients can hire ekansoft to build.

Services:

1. **Custom Web Applications**: Business portals, dashboards, internal tools, booking systems, marketplaces, and operational platforms.
2. **Business Websites & E-commerce Platforms**: Responsive marketing websites, brochure websites, stores, product catalogs, checkout flows, and integrations.
3. **Backend Systems & API Development**: Scalable APIs, microservices, authentication, admin panels, queues, notifications, and third-party integrations.
4. **Mobile App Development**: Customer apps, staff apps, rider/dispatch apps, and mobile-first business tools.
5. **AI Chatbots & Voice Agent Systems**: Customer support bots, sales assistants, voice agents, call flows, LLM-powered agents, and human handoff workflows.
6. **AI Workflows & Automation**: Business process automation, AI-assisted internal tools, document/email workflows, and productivity agents.
7. **Data Dashboards & Analytics**: Reporting dashboards, business intelligence screens, operational metrics, charts, and data visibility tools.
8. **Payment, Wallet & Third-party Integrations**: Payment gateways, wallets, card issuing partners, logistics APIs, CRMs, notification providers, and custom partner APIs.
9. **Cloud, DevOps & Technical Consulting**: Architecture reviews, deployment planning, Docker, CI/CD, Redis, queues, cloud infrastructure, monitoring, and rescue projects.

Recommended sections:

1. Page hero.
2. Service grid.
3. AI chatbots and voice agents highlight section.
4. Technical capability section.
5. Final CTA.

## 10.3 Work Page

The Work page is a public gallery of freelance/contract projects only. It should use screenshots and clickable cards. No internal project detail pages are required for phase 1.

Each card should include:

1. Screenshot.
2. Project title.
3. Category.
4. Short summary.
5. Tags.
6. External link or project link.

Click behavior:

1. Clicking the card opens the live project website or public EBCD project link.
2. Use `target="_blank"` and `rel="noreferrer"` for external links.
3. If no live link exists, use a clean `Coming soon` or `Link pending` state.

Initial project list:

| Project | Category | Notes |
|---|---|---|
| FX Buckley Butchers | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Custom Coins | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Mums & Babies Ireland | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Coffeeshop.ie | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Jim Crowley Craft Butchers | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Belles Fleurs Flowers | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Katies Kombucha | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Rossan Knitwear | E-commerce website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Industrial Temperature Sensors | Brochure website | Public EBCD project. Add screenshot and live/project link after asset collection. |
| Irish Dance Dublin | Brochure website | Public EBCD project. Add screenshot and live/project link after asset collection. |

## 10.4 Founder Credibility Section on Home

Founder credibility belongs on the Home page, not on a separate phase-1 About page.

Required content:

1. Founder-led positioning.
2. Engineering background.
3. Industries and systems worked on.
4. Careful explanation of previous staff/contract/freelance experience.
5. CTA to contact.

Allowed founder credibility examples:

- Backend and full-stack engineering experience across fintech, logistics, AI, e-commerce, banking, and enterprise systems.
- Experience working on systems involving wallet/payment workflows, Opay-related integrations, dispatch/logistics flows, rider assignment systems, AI chatbot/voice agent systems, and scalable APIs.
- Previous professional experience with companies/teams such as Sterling Bank, Pivo Africa, AAJ Logistics, and other client/partner systems, only where wording is honest and does not imply those were ekansoft clients.

Safe phrasing:

> ekansoft is led by a software engineer with experience building and contributing to fintech, logistics, banking, AI, and e-commerce systems across staff, contract, and freelance engagements.

Avoid:

> ekansoft built systems for Sterling Bank, Pivo Africa, AAJ Logistics, Temu, or Opay.

## 10.5 Contact Page

The Contact page should be simple, clean, and direct.

Phase 1 requirements:

1. Static contact form UI only.
2. Direct contact email shown publicly.
3. Consultation booking CTA button.
4. Frontend-only placeholder success state may be added if useful, but there should be no real network call.
5. No Resend integration in phase 1.

Recommended form fields:

- Name, required.
- Email, required.
- Company, optional.
- Phone/WhatsApp, optional.
- Project type, required.
- Message, required.
- Consultation interest, optional checkbox.
- Honeypot hidden field, optional for future anti-spam.

---

## 11. Content and Portfolio Rules

1. Tone: premium, confident, technical, honest, founder-led.
2. Avoid fake scale, fake testimonials, and fake client claims.
3. Use `founder-led` instead of pretending ekansoft is a large agency.
4. Say `selected freelance work` or `selected public work` on the Work page.
5. Say `previous engineering experience` for staff/company experience.
6. Keep copy clear enough for non-technical business owners.
7. Avoid jargon unless it helps explain capability.
8. Do not list employment/staff projects as ekansoft work.
9. Mention employment/staff work only as founder background.

---

## 12. Environment and Config

Because this is a Vite frontend, public environment variables should use the `VITE_` prefix.

### Phase 1 public config

| Variable | Visibility | Example | Purpose |
|---|---|---|---|
| `VITE_SITE_NAME` | Public | `ekansoft` | Displayed site name. |
| `VITE_SITE_URL` | Public | `https://ekansoft.com` | Used for metadata/canonical values later. |
| `VITE_CONTACT_EMAIL` | Public | `hello@ekansoft.com` | Displayed publicly in the UI/footer/contact page. |
| `VITE_CONSULTATION_URL` | Public | `https://calendly.com/...` or `https://cal.com/...` | External booking CTA destination. |
| `VITE_LINKEDIN_URL` | Public | empty placeholder | Optional founder/company LinkedIn. |
| `VITE_GITHUB_URL` | Public | empty placeholder | Optional founder/company GitHub. |

Suggested `.env.example`:

```env
VITE_SITE_NAME=ekansoft
VITE_SITE_URL=https://ekansoft.com
VITE_CONTACT_EMAIL=hello@ekansoft.com
VITE_CONSULTATION_URL=https://calendly.com/your-link
VITE_LINKEDIN_URL=
VITE_GITHUB_URL=
```

### Future server-side email config

These are future variables for a serverless function or backend endpoint. Do not expose them in frontend code.

| Variable | Visibility | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Server only | Used by serverless/backend function to send email through Resend. |
| `RESEND_FROM_EMAIL` | Server only | Verified sender identity/domain in Resend. |
| `RESEND_TO_EMAIL` | Server only | Where contact form submissions are delivered. |
| `CONTACT_FORM_HONEYPOT_FIELD` | Server only | Optional anti-spam hidden field name. |

Security rules:

1. Only `VITE_` variables may be read in the Vite client bundle.
2. Do not expose `RESEND_API_KEY` to the browser.
3. Do not commit `.env.local`.
4. Add `.env.example` with placeholder values only.
5. Centralize public site values in a config file such as `src/config/site.ts`.

---

## 13. TypeScript Types

```ts
export type ServiceSlug =
  | 'custom-web-applications'
  | 'business-websites-ecommerce'
  | 'backend-api-development'
  | 'mobile-app-development'
  | 'ai-chatbots-voice-agents'
  | 'ai-workflows-automation'
  | 'data-dashboards-analytics'
  | 'payments-wallet-integrations'
  | 'cloud-devops-consulting'

export type ProjectCategory =
  | 'ecommerce-website'
  | 'brochure-website'
  | 'web-platform'
  | 'business-website'

export type ProjectSource = 'freelance-contract' | 'employment-experience'

export type WorkProject = {
  title: string
  slug: string
  category: ProjectCategory
  summary: string
  image: string
  href: string
  source: Extract<ProjectSource, 'freelance-contract'>
  tags?: string[]
  year?: string
}

export type FounderExperienceItem = {
  companyOrDomain: string
  industry: 'fintech' | 'banking' | 'logistics' | 'ai' | 'ecommerce' | 'enterprise'
  summary: string
  technologies?: string[]
  disclosure: 'employment-or-staff-role' | 'contract-role' | 'public-freelance-project'
}

export type ContactProjectType =
  | 'website-or-ecommerce'
  | 'custom-web-app'
  | 'mobile-app'
  | 'backend-api'
  | 'ai-chatbot-or-voice-agent'
  | 'automation-or-integration'
  | 'data-dashboard'
  | 'technical-consulting'
  | 'not-sure-yet'

export type ContactFormValues = {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: ContactProjectType
  message: string
  consultationInterest?: boolean
  website?: string // honeypot, should remain empty when implemented later
}

export type SiteConfig = {
  name: string
  url: string
  contactEmail: string
  consultationUrl?: string
  social?: {
    linkedin?: string
    github?: string
    x?: string
  }
}
```

---

## 14. Recommended File Structure

```txt
src/
  components/
    layout/
      Header.tsx
      MobileNav.tsx
      SiteLayout.tsx
      Footer.tsx
    common/
      Button.tsx
      Container.tsx
      SectionHeader.tsx
    home/
      Hero.tsx
      ServicesPreview.tsx
      HowWeWork.tsx
      TechnologyMarquee.tsx
      FeaturedWork.tsx
      FounderCredibility.tsx
      Process.tsx
      FinalCta.tsx
    services/
      ServiceCard.tsx
      ServiceGrid.tsx
    work/
      ProjectCard.tsx
      ProjectGallery.tsx
    contact/
      ContactForm.tsx
      ContactInfo.tsx
  config/
    site.ts
    theme.ts
  data/
    nav.ts
    services.ts
    projects.ts
    process.ts
    tech.ts
    founder-experience.ts
  pages/
    Home.tsx
    Services.tsx
    Work.tsx
    Contact.tsx
  routes/
    AppRoutes.tsx
  styles/
    theme.css
  types/
    site.ts
```

Use React Router if routing is not already set up.

---

## 15. Sample Site Config

```ts
export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME || 'ekansoft',
  url: import.meta.env.VITE_SITE_URL || 'https://ekansoft.com',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'hello@ekansoft.com',
  consultationUrl: import.meta.env.VITE_CONSULTATION_URL || '#',
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
    github: import.meta.env.VITE_GITHUB_URL || '',
  },
}
```

The contact email should be read from this central config everywhere it appears.

---

## 16. Future Contact Form Flow

This is not part of phase 1, but this is the intended direction later.

```txt
1. User submits /contact form.
2. Client validates basic required fields.
3. Client POSTs to a serverless function or backend endpoint.
4. Server validates with Zod or another schema validator.
5. Server checks honeypot field is empty.
6. Server sends email through Resend using RESEND_API_KEY.
7. Email goes to RESEND_TO_EMAIL.
8. User sees a success message with a secondary CTA to book consultation.
9. Errors are logged server-side and shown as a friendly generic error in the UI.
```

Resend must not be called directly from the browser.

---

## 17. SEO and Accessibility Requirements

Phase 1 should include:

1. Semantic HTML.
2. Proper heading structure.
3. Page titles where the app/router supports it.
4. Alt text for images/placeholders.
5. Visible contact email.
6. Responsive layout.
7. Keyboard-accessible navigation/dropdowns.
8. Accessible form labels.
9. Good contrast against white and soft backgrounds.

Suggested page titles:

- Home: `ekansoft | Software Consulting for Web, Mobile, Backend and AI Systems`.
- Services: `Services | ekansoft Software Consulting`.
- Work: `Selected Work | ekansoft`.
- Contact: `Contact ekansoft`.

---

## 18. Implementation Phases

### Phase 1: Static UI - Build Now

- Set up routes.
- Build top navigation/header.
- Build responsive mobile navigation.
- Build Home page sections.
- Build Services page.
- Build Work page with clickable external cards.
- Build Contact page UI.
- Add central theme tokens.
- Add config-driven contact email and consultation URL.
- Add reusable TypeScript data files.
- Add placeholder images if real screenshots are not available.

### Phase 2: Assets and Polish

- Add real project screenshots.
- Add founder photo.
- Add Open Graph image.
- Add favicon.
- QA mobile/tablet/desktop.
- Accessibility QA.
- Copy polish.

### Phase 3: Contact and Scheduling

- Add serverless/backend contact endpoint.
- Add Resend integration.
- Add validation.
- Add success/error states.
- Add consultation scheduling link or embed.

---

## 19. Phase 1 Acceptance Criteria

1. Routes `/`, `/services`, `/work`, and `/contact` exist and load correctly.
2. Site uses top navigation, not side navigation.
3. Desktop navigation resembles the provided navigation screenshots.
4. Mobile navigation is responsive and usable.
5. The Home page includes hero, services preview, how-we-work, technology scroll, selected work, founder credibility, process, and final CTA sections.
6. Services page includes all required services, including AI Chatbots & Voice Agent Systems.
7. Work page shows only approved freelance/EBCD-style projects.
8. Work cards are clickable and route externally where applicable.
9. Founder employment/staff credibility appears only as founder background, not as Work page portfolio.
10. Contact page has static form UI, visible email, and consultation CTA.
11. Public email and consultation link are driven by config/env values.
12. Theme colors are centralized and easy to change.
13. No Resend integration is wired in phase 1.
14. No backend/API/database/authentication/CRM is implemented.
15. No fake testimonials, fake logos, fake awards, or misleading client claims exist.
16. Build passes lint/type checks if available.
17. Site feels premium, simple, credible, and responsive.

---

## 20. Phase 1 Codex Instruction Summary

When implementing, Codex should:

1. Read this PRD first.
2. Inspect the current Vite project structure.
3. Use screenshots in `docs/references/` as visual references.
4. Use this PRD to resolve conflicts.
5. Build static UI only.
6. Avoid overengineering.
7. Keep data/config centralized.
8. Report changed files, assumptions, and next steps at the end.
