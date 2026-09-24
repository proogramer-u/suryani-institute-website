# Product Requirements Document

## Suryani Institute for Mental Health Website

**Version:** 1.3
**Status:** Revised product scope for implementation alignment
**Date:** 23 September 2026

## Product Direction

A bilingual institutional website with six clear destinations:

1. About Us
2. Our Program
3. Event
4. Articles
5. Contact
6. Donate

The website explains SIMH's community-based and culturally grounded work, helps visitors explore programs and events, provides approved articles and media, offers verified general contact details, and explains how to donate.

## Scope Decisions

| Area | Decision |
| --- | --- |
| Primary navigation | About Us, Our Program, Event, Articles, Contact, Donate, in that order. |
| Logo | Links to Home and has the accessible name `SIMH home`. |
| Contact | General public contact information and a non-sensitive general inquiry form only. |
| Donation | Donation information and the approved payment or bank-transfer route. |
| Language | English and Bahasa Indonesia remain the core languages. The language switcher is in the footer. |
| CMS | Structured editorial content and publishing workflow; navigation and page structure remain controlled. |
| Content state | Mock content remains visibly labelled until approved SIMH content is available. |

### Confirmed Public Information

- Organization: Suryani Institute for Mental Health (SIMH)
- Phone: (0361) 467553
- Email: info@suryani-institute.com
- Address: Jl. Gandapura No. 30, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237, Indonesia
- Opening hours: Monday-Saturday, 8:00 AM-6:00 PM; Sunday closed
- Instagram and Facebook links are approved for public display.
- Donation recipient: Suryani Institute for Mental Health Foundation
- Donation bank: Bank Mandiri, Sanur - Bali branch
- Donation account number: 1450010622971
- Donation currency: TBD
- Donation receipt or confirmation process: TBD

Unconfirmed information must remain `TBD` and must not be invented in copy, structured data, or interface labels.

The launch scope does not include a clinical support-request workflow, emergency-response workflow, research collaboration workflow, volunteer application workflow, or partnership and sponsorship workflow.

## Product Principles

- **Institutional clarity:** Each destination has one clear purpose and canonical route.
- **Dignity before drama:** Use respectful language and consent-cleared imagery. Avoid sensational descriptions and distress imagery.
- **Culture is part of care:** Explain Balinese cultural and spiritual context respectfully without making unsupported clinical claims.
- **Evidence builds trust:** Show verified programs, team information, editorial content, sources, dates, and impact data.
- **Privacy by design:** Collect only the information needed for a general inquiry or approved donation process.
- **Simple maintenance:** Use structured content forms and reusable templates instead of a freeform page builder.

## Goals

- Present SIMH's mission, history, approach, people, and programs clearly.
- Make events, articles, stories, and media easy to discover.
- Provide verified public contact information and a safe general inquiry route.
- Explain approved donation uses, recipient details, and payment instructions.
- Give authorized staff a controlled way to maintain recurring content.
- Provide equivalent core information in English and Bahasa Indonesia.

## Non-Goals

- Patient portals, telepsychiatry, clinical records, diagnosis, or appointment tracking.
- Clinical triage, emergency response, or collection of sensitive mental-health narratives.
- Public user accounts, volunteer accounts, donor dashboards, or recurring-donation self-service.
- Research publication libraries or collaboration intake.
- Partnership, sponsorship, or institutional proposal intake.
- A fully configurable page builder.
- A complete Balinese-language interface.

## Audience

| Persona | Need | Successful outcome |
| --- | --- | --- |
| Community visitor | Understand SIMH and its work. | Finds relevant program, event, or article information. |
| Donor or supporter | Verify SIMH and understand how to contribute. | Reviews donation information and uses the approved donation route. |
| Article reader | Learn from SIMH's stories, education, and media. | Finds relevant, dated, clearly labelled content. |
| General inquirer | Find accurate contact details and send a non-sensitive message. | Selects a public contact route and receives clear submission status. |
| Content editor | Keep recurring content current without changing layouts. | Creates, translates, previews, submits, publishes, updates, and archives content. |

## Information Architecture

### Primary Navigation

The desktop and mobile header contain exactly these items, in order:

**About Us, Our Program, Event, Articles, Contact, Donate**

Donate is the only filled header action and uses the approved apricot action style. The active page uses a visible style and `aria-current="page"`. Header language controls are not required; language switching is a footer utility.

On mobile, the menu button exposes its expanded state, follows logical focus order, closes with Escape, returns focus to the trigger, and remains usable at 200% zoom.

### Destination Boundaries

| Destination | Purpose |
| --- | --- |
| About Us | Mission, values, approach, history, people, governance, and organizational context. |
| Our Program | Program overview, detailed program pages, activities, audiences, service areas, and related content. |
| Event | Upcoming, ongoing, cancelled, and past events with dates, location, status, and related programs. |
| Articles | Educational articles, Stories from the Field, photography, documentary content, and approved media. |
| Contact | Verified phone, email, address, hours, social links, directions, and general non-sensitive inquiry. |
| Donate | Approved recipient, program uses, payment methods, donation instructions, and confirmation or receipt information. |

Program and event detail pages are secondary destinations linked from their indexes and related content. Each action points to one canonical destination.

## Homepage Requirements

1. Show the approved six-item header and logo link to Home.
2. State SIMH's purpose in plain language and offer Contact SIMH and Discover Our Work actions.
3. Route visitors to Our Program, Articles, and Donate through clear pathways.
4. Introduce the biopsycho-spirit-sociocultural model and link to About Us.
5. Display only approved impact statistics with a date range and source owner.
6. Summarize core programs and link to program pages.
7. Show approved and consent-cleared Stories from the Field.
8. Show approved or recent articles with source and publication date.
9. Show events with clear upcoming, ongoing, cancelled, and past states.
10. Offer Contact SIMH and Support SIMH as final actions.
11. Show footer contact details, policy links, accessibility link, language switcher, Contact, and Donate.

## Functional Requirements

### Global Experience

| ID | Requirement | Priority |
| --- | --- | --- |
| FR G1 | Work on current mobile, tablet, and desktop browsers with responsive layouts. | Must |
| FR G2 | Provide an English or Bahasa Indonesia switcher in the sitewide footer that preserves the closest equivalent destination. | Must |
| FR G3 | Use accessible headings, landmarks, keyboard navigation, visible focus, descriptive links, labels, status announcements, and image alternatives. | Must |
| FR G4 | Show publish or event dates and content type where relevant. | Must |
| FR G5 | Forms provide inline validation, clear error summaries, duplicate-submission protection, and a confirmation status or reference. | Must |
| FR G6 | Support consent-aware analytics without exposing form content or unnecessary identifiers. | Must |
| FR G7 | Header order is exactly About Us, Our Program, Event, Articles, Contact, Donate on desktop and mobile. | Must |
| FR G8 | The logo links Home and the active destination uses both visible and programmatic state. | Must |
| FR G9 | The mobile menu exposes state, supports keyboard focus, closes with Escape, and returns focus to its trigger. | Must |

### Articles, Events, and Contact

| ID | Requirement | Priority |
| --- | --- | --- |
| FR C1 | Articles aggregate approved Articles, Stories from the Field, and Media items with visible type and publication date. | Must |
| FR C2 | Articles do not duplicate event listings. Related links may connect articles and events. | Must |
| FR C3 | Events distinguish upcoming, ongoing, cancelled, and past states. | Must |
| FR C4 | Contact displays only verified public contact details and provides a general non-sensitive inquiry form. | Must |
| FR C5 | Contact submissions validate fields, prevent duplicate submission, show status, and do not request clinical or sensitive mental-health details. | Must |
| FR C6 | Article, event, story, and media detail pages show content type, date, owner or source where relevant, and related content. | Must |

### Donations

| ID | Requirement | Priority |
| --- | --- | --- |
| FR D1 | Donation pages explain approved program uses and identify the legal recipient. | Must |
| FR D2 | The donation route supports only payment methods formally approved by SIMH. | Must |
| FR D3 | The website never stores full card data; payment credentials are handled by the approved provider when applicable. | Must |
| FR D4 | Donation instructions state confirmation, receipt, cancellation, and refund information where applicable. | Must |
| FR D5 | Donation metadata and payment callbacks are handled safely and idempotently when an online provider is used. | Must |

## Primary User Flows

### Contact Flow

1. The visitor opens Contact from the header, footer, or relevant content.
2. The visitor reviews verified phone, email, address, hours, social links, and directions.
3. The visitor chooses direct contact or the general inquiry form.
4. The form collects only approved general-contact fields such as name, email, phone when needed, and a non-sensitive message.
5. The visitor reviews the privacy notice and submits.
6. The system validates the form, prevents duplicate submission, and shows a confirmation status or reference.
7. The inquiry routes to the designated general-contact owner without entering an editorial content list.

Failure states preserve only safe non-sensitive entries and provide verified direct-contact alternatives. The form must not encourage visitors to submit medical records, diagnoses, crisis details, or other sensitive health information.

### Event Flow

1. The visitor opens Event from the header, homepage, or related content.
2. The visitor browses or filters events when at least two populated options change results.
3. The visitor opens an event detail page.
4. The page shows title, description, event type, date and time, timezone, location or online link, status, registration link when approved, contact, and related program.
5. Past, ongoing, cancelled, and upcoming states remain visibly distinct.

### Article Flow

1. The visitor opens Articles from the header, homepage, or a related page.
2. The visitor browses approved articles, Stories from the Field, and Media items.
3. The visitor opens a detail page with type, date, author or source, body, image governance metadata where appropriate, and related content.
4. Stories from the Field appear only after consent, identity, image, and safeguarding review.

### Donation Flow

1. The visitor opens Donate from the header, homepage, or footer.
2. The visitor reviews the legal recipient, approved program uses, payment method, and accountability information.
3. The visitor follows the approved bank-transfer or payment-provider instructions.
4. The system displays the appropriate pending, success, cancellation, or failure information.
5. The visitor receives the approved confirmation or receipt path.

## CMS and Admin Requirements

The CMS is structured for recurring content, not unrestricted page construction. Navigation, global page templates, forms, system messages, permissions, and core layout remain controlled configuration.

### Roles

| Role | Permissions |
| --- | --- |
| Super Administrator | Manage users, roles, configuration, integrations, content, and audit history. |
| Publisher | Review, approve, publish, unpublish, archive, and schedule editorial content in both languages. |
| Editor | Create drafts, edit content, upload approved media, add translations, and submit for review. |
| Story Reviewer | Review consent, anonymization, image permission, sensitivity, and safeguarding fields. |
| Contact Reviewer | Access and manage general inquiries separately from editorial publishing rights. |

### Editorial Workflow

1. Create a draft with content, metadata, media, related content, and governance fields.
2. Add the equivalent translation and check actions, dates, files, and links.
3. Preview desktop and mobile presentation in each language.
4. Review accuracy, links, accessibility, translation completeness, and story governance.
5. Publish or schedule; record user and time.
6. Update, correct, unpublish, or archive while retaining revision history.

### Content Models

Public models include Article, Story from the Field, Event, Program, Media item, Team member, and Impact metric. Each model includes a unique slug, language, linked translation, SEO metadata, canonical and indexing controls, content owner, timestamps, review date, publication status, and revision history.

Stories additionally require consent status, identity treatment, image permission, sensitivity review, approver, and withdrawal handling.

Events additionally require start and end date and time, timezone, location or online link, status, and cancellation state.

Contact inquiries are kept outside ordinary editorial content lists, with limited access, access logs, retention rules, and no sensitive health-data collection.

## Content and Language

- English and Bahasa Indonesia are equal core languages for navigation, forms, validation, confirmation, policies, and key pages.
- Language switching opens the closest equivalent page or clearly explains an approved fallback.
- URLs should use a consistent language structure such as `/en/` and `/id/`.
- Dates, times, number formatting, and interface language follow the selected locale.
- Use calm, specific, humane language and avoid unsupported outcomes or service promises.
- Every public image requires a source, usage-rights record, meaningful alt text, caption where relevant, consent status where people are identifiable, and review date.

## Safety, Privacy, and Accessibility

- The website must not diagnose, recommend medication, or make unsupported clinical claims.
- General Contact messaging must not solicit medical records, diagnoses, crisis narratives, or other sensitive health information.
- Collect the minimum personal information needed for general contact or approved donation processing.
- Use TLS, secure headers, server-side validation, rate limits, anti-spam controls, managed secrets, access logs, and environment separation.
- Do not place personal information, form messages, access tokens, or payment data in analytics, URLs, client logs, or email subjects.
- Complete privacy and legal review against Indonesia's Law No. 27 of 2022 on Personal Data Protection and applicable vendor requirements before launch.
- Conform public pages and essential admin workflows to WCAG 2.2 Level AA.
- Test navigation, footer utilities, language switching, mobile menu, filters, forms, dialogs, and accordions at 320 CSS px, 200% zoom, and with keyboard navigation.
- Test representative pages in English and Bahasa Indonesia with at least one screen reader before launch.

## Nonfunctional Requirements

- Core Web Vitals targets: LCP <= 2.5 seconds, INP <= 200 milliseconds, CLS <= 0.1 at the 75th percentile.
- Target at least 99.9% monthly availability excluding announced maintenance.
- Back up managed content and configuration at least daily with documented restoration testing.
- Use reusable templates, documented taxonomy, automated checks, and separate production and staging environments.
- Provide unique titles and descriptions, canonical URLs, redirects, language annotations, sitemap, and robots controls.
- Monitor uptime, Core Web Vitals, broken links, form failures, payment failures, admin errors, and publication workflow failures without collecting form content.

## Launch Acceptance

- Desktop and mobile headers contain exactly About Us, Our Program, Event, Articles, Contact, and Donate in that order.
- The logo opens Home, Donate is the only filled header action, and language switching is available in the footer.
- Contact, Event, Article, and Donation flows work in English and Bahasa Indonesia.
- Contact submissions contain no sensitive clinical information and reach the designated general-contact owner.
- Story publication is blocked when required consent or safeguarding approval is missing.
- Donation success, pending, cancellation, and failure states are tested using the approved route.
- No known critical or high-severity security issues remain open.
- No known blockers remain for keyboard navigation, screen-reader completion, or contrast on primary flows.
- Public contact, donation, program, team, event, impact, and editorial information has a named SIMH approver and review date.
- Empty states, no-result states, expired content, 404 pages, 500-level failures, notification failures, and safe retry paths are tested.
- Backups, restoration, production configuration, monitoring, rollback, and post-deployment smoke tests are documented and exercised.

## Release Plan

| Stage | Contents | Exit condition |
| --- | --- | --- |
| Foundation | Design system, bilingual shell, six-item navigation, footer utilities, CMS roles, content models, preview, and policies. | Approved component library and content workflow. |
| Institutional content | Home, About Us, Our Program, Articles, Event, Contact, team, stories, media, and approved impact content. | Core bilingual content and navigation boundaries approved. |
| Donation | Donation information, approved payment or bank-transfer route, confirmations, and reconciliation requirements. | Finance, privacy, and payment review complete. |
| Public launch | Production domain, search indexing, analytics consent, monitoring, backups, staff training, and handover. | Launch acceptance criteria met and owners sign off. |

## Dependencies and Sign-Off

- Product owner approves scope, navigation, destinations, and primary flows.
- Finance or governance owner approves donation recipient, payment route, currencies, and receipt rules.
- Communications owner approves bilingual content, imagery, team information, and impact figures.
- Editorial owner approves article, event, program, and story content.
- Privacy or legal reviewer approves notices, consent, data handling, retention, and vendors.
- Technical owner approves security, accessibility, performance, monitoring, backups, and handover.

## Recommended Next Artifact

Create a page-level wireframe and content-state set for the homepage, six header destinations, footer, Contact form, Event detail, Article detail, Donate page, and the CMS editor screen. Validate mobile navigation, bilingual wrapping, general-contact form length, donation states, event status, story governance states, and CMS-driven content states before extending implementation.
