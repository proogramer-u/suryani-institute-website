import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { pastEvents, upcomingEvents, type EventItem } from "@/data/events";

function EventCard({ event, featured = false }: { event: EventItem; featured?: boolean }) {
  return (
    <article className={`event-card ${featured ? "event-card--featured" : ""}`}>
      <div className="event-card__topline">
        <span>{event.category}</span>
        <span>{event.status === "upcoming" ? "Open opportunity" : "Past event"}</span>
      </div>
      <h3><Link href={`/event/${event.slug}/`}>{event.title}</Link></h3>
      <p className="event-card__summary">{event.summary}</p>
      <dl className="event-card__details">
        <div><dt><CalendarDays aria-hidden="true" /> Date</dt><dd>{event.date}<br />{event.time}</dd></div>
        <div><dt><MapPin aria-hidden="true" /> Location</dt><dd>{event.location}</dd></div>
      </dl>
      <Link className="event-card__link" href={`/event/${event.slug}/`}>View opportunity <ArrowUpRight aria-hidden="true" /></Link>
    </article>
  );
}

export function EventsPage() {
  const [featuredEvent, ...otherEvents] = upcomingEvents;

  return (
    <div className="events-page">
      <section className="events-hero" aria-labelledby="events-title">
        <div className="page-container events-hero__inner">
          <div>
            <p className="section-label">Events and volunteer opportunities</p>
            <h1 id="events-title">Find a way to take part.</h1>
          </div>
          <p className="events-hero__intro">Join upcoming workshops, community activities, talks, and volunteer opportunities connected to SIMH&apos;s work.</p>
        </div>
      </section>

      <section className="events-upcoming" aria-labelledby="upcoming-title">
        <div className="page-container events-section-heading">
          <div><p className="section-label">Coming up</p><h2 id="upcoming-title">Ways to get involved.</h2></div>
          <p className="events-mock-note">MOCK CONTENT: Dates, places, volunteer roles, and registration details will be replaced with approved information.</p>
        </div>
        <div className="page-container events-list">
          {featuredEvent ? <EventCard event={featuredEvent} featured /> : null}
          <div className="events-list__secondary">{otherEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div>
        </div>
      </section>

      <section className="events-past" aria-labelledby="past-title">
        <div className="page-container events-section-heading">
          <div><p className="section-label">The archive</p><h2 id="past-title">Previous events.</h2></div>
          <p>Look back at conversations and activities that have shaped SIMH&apos;s community work.</p>
        </div>
        <div className="page-container events-past__grid">{pastEvents.map((event) => <EventCard event={event} key={event.slug} />)}</div>
      </section>
    </div>
  );
}
