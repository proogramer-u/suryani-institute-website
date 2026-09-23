export type EventCategory = "Volunteer" | "Workshop" | "Community activity" | "Talk";

export type EventItem = {
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  summary: string;
  details: string[];
  audience: string;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    slug: "community-outreach-volunteer-day",
    title: "Community outreach volunteer day",
    category: "Volunteer",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Bali, Indonesia",
    summary: "A placeholder opportunity to support a SIMH community outreach day and learn alongside local partners.",
    details: [
      "This placeholder event will introduce volunteers to the day's activities, local context, and the practical ways they can contribute.",
      "Final timings, safeguarding information, volunteer roles, and registration instructions will be added after approval.",
    ],
    audience: "Adults interested in community-based mental health work",
    status: "upcoming",
  },
  {
    slug: "teacher-wellbeing-workshop",
    title: "Teacher wellbeing workshop",
    category: "Workshop",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Buleleng, Bali",
    summary: "A placeholder workshop for educators exploring practical approaches to wellbeing in learning environments.",
    details: [
      "This placeholder workshop will create space for teachers to share experiences and explore practical tools for supporting psychological health.",
      "The final programme, speaker information, and registration process are pending approval.",
    ],
    audience: "Teachers, school leaders, and education partners",
    status: "upcoming",
  },
  {
    slug: "community-meditation-session",
    title: "Community meditation session",
    category: "Community activity",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Denpasar, Bali",
    summary: "A placeholder community session for people who want to learn about meditation in a welcoming group setting.",
    details: [
      "This placeholder session will offer an accessible introduction to meditation and a chance to practise together.",
      "Final session details, accessibility information, and attendance instructions will be added before publication.",
    ],
    audience: "Open to community members; experience not required",
    status: "upcoming",
  },
  {
    slug: "crisis-support-community-talk",
    title: "Understanding community crisis support",
    category: "Talk",
    date: "Placeholder date",
    time: "Placeholder time",
    location: "Online",
    summary: "A placeholder public talk about local crisis support, referral pathways, and how communities can respond with care.",
    details: [
      "This placeholder talk will explain the role of community support and how people can find appropriate help when they are concerned about someone.",
      "The final speaker, access link, and questions process are pending approval.",
    ],
    audience: "Community members, families, and support workers",
    status: "past",
  },
];

export const upcomingEvents = events.filter((event) => event.status === "upcoming");
export const pastEvents = events.filter((event) => event.status === "past");
