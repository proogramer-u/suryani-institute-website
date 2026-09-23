import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: PageProps<"/event/[slug]">) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="event-detail">
        <section className="event-detail__hero" aria-labelledby="event-title">
          <div className="page-container event-detail__hero-inner">
            <Link className="event-detail__back" href="/event/"><ArrowLeft aria-hidden="true" /> Back to events</Link>
            <p className="section-label">{event.category} / {event.status === "upcoming" ? "Open opportunity" : "Past event"}</p>
            <h1 id="event-title">{event.title}</h1>
            <p>{event.summary}</p>
          </div>
        </section>
        <div className="page-container event-detail__body">
          <div className="event-detail__facts">
            <div><CalendarDays aria-hidden="true" /><span><strong>Date and time</strong>{event.date}<br />{event.time}</span></div>
            <div><MapPin aria-hidden="true" /><span><strong>Location</strong>{event.location}</span></div>
            <div><Users aria-hidden="true" /><span><strong>Who can join</strong>{event.audience}</span></div>
          </div>
          <div className="event-detail__content">
            {event.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {event.status === "upcoming" ? <Link className="event-detail__register" href="/contact/">Register interest <ArrowUpRight aria-hidden="true" /></Link> : <p className="event-detail__closed">Registration for this event is closed.</p>}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
