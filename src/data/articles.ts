export type Article = {
  slug: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "community-mental-health-outreach",
    title: "Community mental health outreach",
    location: "Bali, Indonesia",
    date: "Placeholder date",
    summary: "A placeholder field note about listening to communities and learning how local support can grow.",
    content: [
      "This placeholder expedition story will document where SIMH travelled, who the team met, and what the community shared about mental health and care.",
      "The final article will include approved field notes, photographs, partner information, and the practical lessons that came from the work.",
    ],
  },
  {
    slug: "crisis-center-community-visit",
    title: "A visit to community crisis services",
    location: "Karangasem, Bali",
    date: "Placeholder date",
    summary: "A placeholder account of the people, places, and partnerships supporting crisis response in the community.",
    content: [
      "This placeholder expedition story will share how a SIMH team visits community crisis services and learns from the people providing first-line support.",
      "The final article will describe the local context, the challenges identified, and the next steps agreed with community partners.",
    ],
  },
  {
    slug: "teacher-wellbeing-workshop",
    title: "Learning with teachers",
    location: "Buleleng, Bali",
    date: "Placeholder date",
    summary: "A placeholder story from a teacher workshop focused on psychological health, learning, and everyday care.",
    content: [
      "This placeholder expedition story will follow a teacher workshop and the conversations that shaped its practical activities.",
      "The final article will include the educators' perspectives, approved workshop materials, and reflections on what supports children and teachers together.",
    ],
  },
  {
    slug: "elderly-care-community-program",
    title: "Supporting wellbeing in later life",
    location: "Denpasar, Bali",
    date: "Placeholder date",
    summary: "A placeholder field note about community-based support, connection, and care for older people.",
    content: [
      "This placeholder expedition story will introduce the community partners working to support older people and their families.",
      "The final article will explain what the team learned and how local knowledge can strengthen preventive care over time.",
    ],
  },
];
