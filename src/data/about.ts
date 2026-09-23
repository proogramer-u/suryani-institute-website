export type AboutCarouselItem = {
  title: string;
  detail: string;
  year?: string;
  tone: "navy" | "terracotta" | "sand";
};

export const aboutData = {
  hero: {
    eyebrow: "About SIMH",
    title: "A steadier way forward for mental health.",
    description:
      "Suryani Institute for Mental Health works alongside people, families, and communities to make care more humane, practical, and possible.",
  },
  background: [
    { title: "Care", detail: "Human-centred support", tone: "navy" },
    { title: "Evidence", detail: "Research that travels", tone: "sand" },
    { title: "Community", detail: "Change built together", tone: "terracotta" },
    { title: "Dignity", detail: "A right, not a reward", tone: "navy" },
  ] satisfies AboutCarouselItem[],
  history: [
    { year: "01", title: "Start with listening", detail: "We begin with lived experience and the knowledge already held by communities.", tone: "sand" },
    { year: "02", title: "Build practical care", detail: "We turn insight into tools, learning, and support that can meet people where they are.", tone: "navy" },
    { year: "03", title: "Share what works", detail: "We make useful evidence visible so better care can grow beyond one place.", tone: "terracotta" },
  ] satisfies AboutCarouselItem[],
  mission: {
    mission: "To make mental health care more accessible, grounded in dignity, and shaped by the people it exists to serve.",
    vision: "A future where every person can find understanding, support, and the agency to shape a life that feels like their own.",
  },
  team: [
    { name: "The care team", role: "Support and practice", detail: "A multidisciplinary group bringing patience, practical knowledge, and respect to every conversation.", initials: "CT" },
    { name: "The research team", role: "Evidence and learning", detail: "Researchers who ask useful questions and return what they learn to the communities around them.", initials: "RT" },
    { name: "Community partners", role: "Local leadership", detail: "People and organisations who help make change relevant, trusted, and lasting.", initials: "CP" },
  ],
} as const;
