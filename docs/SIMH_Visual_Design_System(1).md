# SIMH Visual Design System

Version 1.0 · 18 September 2026 · Proposed direction for review

This document defines the visual language and reusable interface patterns for the Suryani Institute for Mental Health website. It accompanies the website PRD and covers public pages, bilingual content, help requests, and the editorial dashboard. It is a visual design specification; technology and infrastructure decisions belong in a separate technical architecture document.

**Direction: calm editorial design with solid color blocks. No gradients anywhere.**

## 1. Reference and adaptation

The reference is [Consultiva](https://consultiva.framer.website/), inspected on 18 September 2026. Its visible design combines a deep blue frame, warm light panels, terracotta accents, serif display typography, sans-serif body copy, strong rectangular sections, and photographic storytelling. The inspected page uses Merriweather for prominent headings and Inter for body text.

SIMH will adapt those qualities into an accessible, community-focused institutional website. Use original SIMH content and approved images. Do not copy the reference's logo, marketing claims, photographs, or corporate case studies.

| Reference quality | SIMH application |
| --- | --- |
| Blue frame and light editorial panels | Navy navigation and footer surrounding warm ivory content |
| Large serif headlines | Clear, humane statements about community mental health |
| Terracotta and warm accent blocks | Selected editorial panels and secondary calls to action |
| Structured service sections | Program summaries and three audience pathways |
| Case study and insight patterns | Consent-cleared field stories, research, news, and events |

The palette below is a proposed website palette, not a claim about SIMH's official logo colors. Preserve the official logo as supplied and check its contrast during detailed design.

## 2. Nonnegotiable visual rules

- Use solid fills only. No linear, radial, conic, mesh, text, border, or image-overlay gradients.
- Use clear alignment, spacing, and thin rules to organize content.
- Avoid glass effects, blurred backgrounds, decorative noise, glowing borders, and oversized shadows.
- Keep text on opaque surfaces. Hero copy sits beside or below photography, rather than over an unpredictable image.
- Keep Contact and Donate immediately available through the homepage, header, and footer. The Contact route is for general, non-sensitive inquiries.
- Use calm wording and genuine community imagery with documented permissions.
- Do not add intro loaders, animated counters, scroll hijacking, or autoplay media.
- Show dates and sources for impact claims. Never invent statistics to fill a layout.

## 3. Color system

### Brand and neutral tokens

| Token | Hex | Purpose |
| --- | --- | --- |
| `navy-700` | `#213E63` | Primary action, navigation, footer, selected controls |
| `navy-800` | `#182F4D` | Primary hover and pressed surface |
| `ivory-100` | `#F4F1E7` | Main public-page background |
| `paper` | `#FFFFFF` | Form fields, editorial cards, dashboard workspace |
| `terracotta-600` | `#9C4930` | Editorial accents, feature panels, secondary action |
| `terracotta-700` | `#813B27` | Terracotta hover and pressed surface |
| `apricot-300` | `#FFB062` | Highlighted actions on navy, restrained accents |
| `sand-200` | `#E7E0D2` | Alternate sections and neutral status backgrounds |
| `ink-900` | `#212D3D` | Main text |
| `slate-600` | `#56616D` | Secondary text and supporting metadata |
| `line-subtle` | `#D5D1C5` | Decorative section and card dividers |
| `line-control` | `#7B858E` | Input borders and meaningful control boundaries |

### Semantic tokens

| Token | Hex | Use |
| --- | --- | --- |
| `success` | `#2F644D` | Successful completion, approved status |
| `success-surface` | `#EDF4EF` | Success message background |
| `warning` | `#745114` | Action-needed status |
| `warning-surface` | `#FBF0D9` | Warning message background |
| `danger` | `#9F3333` | Errors and destructive actions |
| `danger-surface` | `#FAEEEE` | Error message background |

Always pair semantic color with a text label and, where useful, an icon. Terracotta is a brand accent; it does not mean an error.

### Approved text and surface pairs

Contrast ratios were calculated from the solid hex values. They describe these exact pairs, not certification of a completed website.

| Foreground / background | Contrast ratio | Use |
| --- | --- | --- |
| Navy / ivory | 9.61:1 | Headings and navigation links |
| Ink / ivory | 12.33:1 | Body text |
| Slate / ivory | 5.59:1 | Secondary text |
| Terracotta / ivory | 5.45:1 | Accent headings and links |
| Navy / apricot | 6.02:1 | Header action labels |
| White / terracotta | 6.16:1 | Solid feature panels |
| White / success | 6.88:1 | Filled approved badges |
| White / danger | 7.01:1 | Filled error or destructive controls |
| Control border / ivory | 3.33:1 | Visible input boundaries, not small text |

Do not place white text on apricot. Do not use subtle divider color as the only way to identify an input. Recheck contrast whenever colors, opacity, or backgrounds change.

Ivory and paper should dominate ordinary reading pages. Reserve navy for navigation, the footer, and selected feature sections. Use terracotta and apricot sparingly so important actions remain easy to recognize.

## 4. Typography

Use **Merriweather** for public-facing display headings and **Inter** for body copy, navigation, controls, metadata, and the CMS. Gambarino may be used only for approved display accents such as non-semantic metric numerals; it is not a replacement for body or interface text. Fallbacks: Georgia for serif text; system-ui and sans-serif for interface text. Preserve readable fallback text while fonts load. Font files and licenses must be approved before production use.

| Role | Desktop size / line height | Mobile size / line height | Weight and family |
| --- | --- | --- | --- |
| Hero display | 64 / 72 px | 40 / 48 px | Merriweather 400 |
| Page title | 48 / 58 px | 36 / 44 px | Merriweather 400 |
| Section heading | 40 / 50 px | 30 / 40 px | Merriweather 400 |
| Editorial card title | 24 / 34 px | 22 / 32 px | Merriweather 400 |
| Intro paragraph | 20 / 32 px | 18 / 29 px | Inter 400 |
| Body | 18 / 29 px | 17 / 27 px | Inter 400 |
| Navigation and buttons | 16 / 24 px | 16 / 24 px | Inter 500 |
| Metadata and helper text | 14 / 22 px | 14 / 22 px | Inter 400 |
| Section label | 12 / 18 px | 12 / 18 px | Inter 500, optional uppercase |
| CMS body and controls | 16 / 24 px | 16 / 24 px | Inter 400–500 |

Use fluid scaling between these endpoints. Allow headings to wrap naturally; do not force English line breaks into Indonesian translations. Keep reading columns around 60–70 characters wide. Use sentence case for navigation, buttons, and headings. Reserve uppercase for short section labels.

## 5. Layout and spacing

### Responsive grid

| Viewport | Grid | Side padding | Gap |
| --- | --- | --- | --- |
| 320–767 px | 4 columns; content usually spans all 4 | 20 px | 16 px |
| 768–1023 px | 8 columns | 32 px | 24 px |
| 1024 px and above | 12 columns | 48 px minimum | 24 px |

Maximum content width: 1280 px. Maximum long-form reading width: 720 px. Breakpoints are layout rules, not device detection. Content must still fit at 320 px and when users enlarge text.

Spacing scale: **4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px**.

- Desktop section padding: 96 px top and bottom; 128 px only for the main hero.
- Mobile section padding: 48–64 px top and bottom.
- Card padding: 24–32 px desktop; 20–24 px mobile.
- Field label to control: 8 px. Control to helper text: 8 px.
- Related form fields: 24 px vertical spacing.
- Form groups: 32–48 px separation.
- Separate sections with a background change or a 1 px rule, not both everywhere.

Large page panels and image blocks use square corners. Buttons and fields use a 6 px radius. Small tags use a 4 px radius. Avoid making every surface pill-shaped. Default elevation is flat; floating menus may use a restrained neutral shadow.

## 6. Navigation and actions

The PRD is authoritative for navigation labels and product behavior. Desktop and mobile headers contain exactly these items in this order: About Us, Our Program, Event, Articles, Contact, and Donate. The logo links to Home. Donate is the only filled action in the header. Language switching remains in the footer.

Desktop uses a full-width navy bar with the logo at left and the approved navigation aligned right. Active navigation uses a contrasting rectangular background and `aria-current="page"`; color is not the only active-state cue. At widths where labels no longer fit comfortably, switch to the mobile menu rather than compressing, wrapping, or truncating labels.

Mobile uses a compact logo and an accessible menu button. The expanded menu contains all six approved items, with Donate visually distinct. The menu exposes its expanded state, follows logical focus order, closes with Escape, returns focus to the trigger, and remains operable at 200% zoom.

Use `English` and `Bahasa Indonesia` as accessible language names; short EN / ID labels may appear visually. A language switch opens the equivalent page and preserves the current task wherever safe.

### Buttons

| Variant | Appearance | Use |
| --- | --- | --- |
| Primary | Navy fill, ivory label | Main action on light surfaces |
| Primary on dark | Apricot fill, navy label | Contact or another primary action on a navy surface outside the header |
| Secondary | Ivory fill, navy border and label | Supporting action |
| Editorial | Terracotta fill, white label | Optional editorial call to action |
| Text link | Navy or terracotta, underline in body text | Read story, view publication |
| Destructive | Danger fill, white label | Confirmed destructive action in admin |

Default button height is at least 48 px; compact admin controls may be 44 px. Horizontal padding is 24 px. Keep the label and optional arrow inside one accessible link or button, even if visually separated. Use a 20 px icon with an 8 px label gap.

Required states: default, hover, focus-visible, pressed, disabled, and loading. Hover darkens a solid fill; it never introduces a gradient. A keyboard focus ring must remain visible on both light and dark surfaces: navy outside a light surface, apricot outside a navy surface, with a contrasting offset. Loading preserves the control width and announces progress. Disabled controls explain what is required when that is not obvious.

## 7. Reusable content components

| Component | Required content | Layout and behavior |
| --- | --- | --- |
| Audience pathway | Need, short explanation, one action | Three equal columns on desktop; stacked on mobile |
| Program row | Program name, summary, destination | Rule-separated editorial rows; image optional |
| Field story | Image, topic, title, excerpt, date | 4:3 image; consent-cleared content only |
| Publication | Title, authors, year, source, language, link/file | Text-first; no mandatory decorative cover image |
| Event | Date, time zone, title, place, status, action | Upcoming, ongoing, cancelled, and past states distinct |
| Impact metric | Verified value, label, reporting period, source note | No count-up animation; hide unsupported values |
| Accordion | Question, answer, expand control | Native keyboard behavior; no hover-only interaction |
| Alert | Label, concise message, action if needed | Solid tinted background; icon plus text |

Avoid repeating the same generic rounded card throughout the site. Use a mix of program rows, editorial story layouts, text-based publication lists, and event rows. Cards should follow the content's job.

Empty states use a clear message and useful next step, for example “No upcoming events are listed. Explore recent activities.” Broken images fall back to the section's solid neutral surface without changing layout height.

## 8. Page composition

### Homepage

1. Navy header with the approved six-item navigation; Contact and Donate remain immediately available through the homepage pathways and footer.
2. Wide, consent-cleared community photograph. Use a static image at launch.
3. Solid split hero below the image: ivory title panel taking roughly two-thirds of the width; terracotta summary and action panel taking the remaining third. On mobile, stack title, summary, and actions in reading order.
4. Three audience pathways: support, learning, and involvement.
5. An editorial introduction to the biopsycho-spirit-sociocultural approach.
6. Verified impact, followed by program summaries.
7. Stories from the Field, with one leading story and smaller supporting entries if available.
8. Articles and approved media in a compact editorial layout.
9. Events with distinct dates, status, and content labels.
10. Approved partners, final participation action, and navy footer.

Suggested hero copy: “Mental health care rooted in community and culture.” This is design copy for review, not a clinical outcome claim.

### Contact

Use an ivory reading surface and restrained navy actions. Show verified public contact details before the general inquiry form. Use a single-column form with an approximate maximum width of 640 px. Keep labels above controls; never use placeholder text as the only label. Do not request clinical details, medical records, or crisis narratives.

### Donate and Get Involved

Use clear option selection, approved program information, and a single primary action per stage. Keep payment-provider handoff and payment states understandable. Do not imply that this design specification chooses a donation processor.

## 9. Editorial dashboard

Use the same color and spacing tokens with a denser Inter-based interface. Reserve serif type for previews of public content. The workspace is primarily paper white with navy navigation and subtle dividers.

Content collections include Stories, Articles, Events, Programs, Media, Team, and Impact Metrics. General Contact inquiries remain separate from ordinary editorial lists.

Each editor view has a content-type label, language tabs, completion status, content fields, metadata, preview, revision history, and publishing actions. Show desktop and mobile previews. Keep controls stable as users switch languages.

Publishing states: Draft → In review → Published, with Needs changes, Scheduled, and Archived when applicable. Label every state in text.

- Editors create drafts and request review.
- Authorized story reviewers handle consent, identity protection, image permissions, and safeguarding checks.
- Publishers approve, publish, schedule, or unpublish.
- Missing required story evidence blocks publishing and identifies the missing requirement.
- A homepage featured flag selects an approved item; it does not bypass publishing checks.
- Core pages require both languages. An untranslated non-core editorial item needs an explicit approved fallback.

These are interface requirements. Actual security must be enforced by the selected CMS and server, not merely by hiding buttons.

## 10. Photography and iconography

Prioritize genuine SIMH community work, staff collaboration, education, and Balinese settings. Show people with dignity and agency. Use documented permission for identifiable people and clinical stories. Do not present stock or AI-generated people as actual SIMH patients or staff.

Use wide editorial crops for the hero, 4:3 for stories, and 1:1 for approved portraits. Store image focal points and language-specific alt text. Keep text off photographs; no gradient scrims. Use a solid fallback panel while an image loads.

Use one consistent outline icon family. Standard sizes: 20 px in controls and 24 px in standalone utility contexts. Decorative icons are hidden from assistive technology; icon-only controls need accessible names. Avoid ornamental cultural symbols without an appropriate reason and review.

## 11. Motion and interaction

Use 120–180 ms transitions for color, border, or disclosure states. Motion is optional and should never delay access to content. Respect reduced-motion preferences. Avoid automatic marquees, parallax, cursor followers, screen-covering loaders, and animated statistics. Accordions and menus remain usable without animation.

## 12. Implementation tokens

The following CSS is a portable design handoff, independent of any framework.

```css
:root {
  --simh-navy: #213E63;
  --simh-navy-hover: #182F4D;
  --simh-ivory: #F4F1E7;
  --simh-paper: #FFFFFF;
  --simh-terracotta: #9C4930;
  --simh-terracotta-hover: #813B27;
  --simh-apricot: #FFB062;
  --simh-sand: #E7E0D2;
  --simh-ink: #212D3D;
  --simh-muted: #56616D;
  --simh-line: #D5D1C5;
  --simh-control-border: #7B858E;
  --simh-success: #2F644D;
  --simh-warning: #745114;
  --simh-danger: #9F3333;
  --simh-font-display: "Merriweather", Georgia, serif;
  --simh-font-body: "Inter", system-ui, sans-serif;
  --simh-content-max: 80rem;
  --simh-reading-max: 45rem;
  --simh-radius-control: 0.375rem;
  --simh-radius-panel: 0;
  --simh-space-1: 0.25rem;
  --simh-space-2: 0.5rem;
  --simh-space-3: 0.75rem;
  --simh-space-4: 1rem;
  --simh-space-6: 1.5rem;
  --simh-space-8: 2rem;
  --simh-space-12: 3rem;
  --simh-space-16: 4rem;
  --simh-space-24: 6rem;
}
```

The initial design target is a light editorial website with intentionally dark navy sections. A separate dark theme is outside this visual proposal and must not be produced through automatic color inversion.

## 13. Design acceptance checklist

- No gradients in CSS, illustrations, decorative backgrounds, exported UI assets, or text treatments.
- Proposed tokens are used consistently; official logo artwork is preserved.
- Navigation, Contact, Donate, and language switching work at every supported width.
- No clipping or horizontal page scrolling at 320, 390, 768, 1024, and 1440 px.
- English and Indonesian labels fit without truncating essential information.
- Text and interactive boundaries meet the project's accessibility contrast targets.
- Keyboard focus remains visible; menus, dialogs, forms, and accordions are keyboard operable.
- Error, loading, empty, success, disabled, and permission-restricted states are designed.
- Photography has rights, consent where needed, alt text, and responsive crops.
- Public content has no fabricated statistics, testimonials, contact details, or service promises.
- CMS publishing states and story approval requirements are clear.
- Technical access controls, backend storage, hosting, and payment integration are addressed separately before implementation.

## 13.1 Controlled texture and framing

The supplied grid texture is an occasional framing device, not a default page background. Use it on section-label bands, selected navy transitions, and footer framing where it helps establish hierarchy. Ordinary reading surfaces remain solid ivory, paper, sand, terracotta, or navy. Do not repeat the texture behind long-form text, forms, dense lists, or every section on a page. Any texture asset must preserve readable contrast, avoid flashing or motion, and remain decorative rather than carrying meaning.

## 13.2 Interaction and content states

Every interactive component defines default, hover, focus-visible, pressed, disabled, and loading states. State changes use solid colors and 120–180 ms transitions, with reduced-motion support. Focus must remain visible on light and dark surfaces. Status must be communicated with text and, where useful, an icon; color alone is insufficient.

Public content also has explicit mock, draft, in review, approved, published, expired, and unavailable states. Mock content is allowed in prototypes only when visibly labeled. Unsupported impact values, unapproved partner marks, unverified contacts, and unavailable translations are hidden or replaced with a useful empty state before launch.

## 13.3 Bilingual layout behavior

English and Bahasa Indonesia content must share component structures without fixed English line breaks. Labels, headings, navigation items, buttons, metadata, errors, and empty states must wrap at 320 CSS px and 200% text zoom without clipping or horizontal scrolling. Core pages require equivalent content in both languages. Non-core content without a translation must state the approved fallback rather than silently presenting misleading language.

## 13.4 Image governance in the design system

Every public image requires a source, usage-rights record, meaningful language-specific alt text, caption where relevant, consent status where people are identifiable, and review or expiry date. Story and clinical imagery require documented consent, identity treatment, and safeguarding review before publication. Images must have stable responsive crops and a solid fallback surface; text must not be placed over unpredictable photography.

## 14. Next design deliverable

Apply this system to high-fidelity desktop and mobile designs for the homepage and Contact page, plus one CMS editor screen. Review real bilingual copy and approved imagery in those layouts before extending the component set to Our Program, Event, Articles, and Donate.

Reference: [Consultiva website](https://consultiva.framer.website/). The values and component rules in this document are the proposed SIMH adaptation.
