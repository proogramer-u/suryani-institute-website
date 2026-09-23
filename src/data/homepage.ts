export const homepageData = {
  hero: {
    eyebrow: "Homepage preview",
    title: "Mental health care rooted in community and culture.",
    description: "Placeholder copy for layout review. Approved SIMH homepage content will replace this mock text.",
    image: "/cropped-WhatsApp-Image-2024-02-02-at-15.25.45-2 (1).jpeg",
    imageAlt: "SIMH team photo placeholder",
    primaryAction: { label: "Contact SIMH", href: "/contact/" },
    secondaryAction: { label: "Discover Our Work", href: "/about-us/" },
  },
  pathways: [
    { label: "Explore Our Programs", description: "Learn how SIMH works with communities through practical programs and education.", href: "/our-program/", tone: "navy" },
    { label: "Read Our Articles", description: "Explore stories, ideas, and learning from SIMH and its community work.", href: "/articles/", tone: "ivory" },
    { label: "Support SIMH", description: "Find out how to contribute to SIMH's work through a donation.", href: "/donate/", tone: "terracotta" },
  ],
  approach: {
    eyebrow: "Our approach",
    title: "Mental health is shaped by more than one part of life.",
    description: "Placeholder introduction based on the approved SIMH model. The final copy will explain how biology, psychology, spirituality, family, culture, and community can interact in mental health and care.",
    action: { label: "Explore our approach", href: "/about-us/" },
  },
  impact: {
    eyebrow: "Verified impact",
    title: "A place for approved evidence, not invented numbers.",
    note: "MOCK DATA: Replace these placeholders with verified values, date ranges, and source owners before publication.",
    metrics: [
      { value: "00", label: "Mock metric label", period: "Placeholder reporting period" },
      { value: "00", label: "Mock metric label", period: "Placeholder reporting period" },
      { value: "00", label: "Mock metric label", period: "Placeholder reporting period" },
    ],
  },
  programs: {
    eyebrow: "Our work",
    title: "Programs shaped around community needs.",
    description: "MOCK CONTENT: Program summaries will be replaced with approved SIMH descriptions and canonical routes.",
    items: [
      { title: "Community-based care", description: "Placeholder summary for an approved program area.", href: "/about-us/" },
      { title: "Education and prevention", description: "Placeholder summary for an approved program area.", href: "/our-program/" },
      { title: "Research and advocacy", description: "Placeholder summary for an approved program area.", href: "/our-program/" },
    ],
  },
  stories: {
    eyebrow: "Stories from the Field",
    title: "Work, learning, and community voices.",
    note: "MOCK CONTENT: Stories require documented consent and review before publication.",
    items: [
      { type: "Mock story", title: "A placeholder field story", date: "Date pending approval" },
      { type: "Mock article", title: "A placeholder educational article", date: "Date pending approval" },
      { type: "Mock media", title: "A placeholder media item", date: "Date pending approval" },
    ],
  },
  events: {
    eyebrow: "Events",
    title: "What is happening at SIMH.",
    note: "MOCK CONTENT: Dates, event status, and registration details require verification.",
    event: { type: "Mock upcoming event", title: "Placeholder upcoming event", date: "Date and timezone pending approval" },
  },
  finalAction: {
    eyebrow: "Take the next step",
    title: "Learn more or help SIMH continue its work.",
    description: "Placeholder call to action for layout review. Final actions will use approved destinations.",
    actions: [
      { label: "Contact SIMH", href: "/contact/", variant: "primary" },
      { label: "Support SIMH", href: "/donate/", variant: "editorial" },
    ],
  },
} as const;
