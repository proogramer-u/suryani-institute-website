import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { homepageData } from "@/data/homepage";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="home-section-label">
      <Image src="/Blue star.svg" alt="" aria-hidden="true" width={12} height={12} />
      <span>{children}</span>
    </p>
  );
}

export function Homepage() {
  const { hero, pathways, approach, impact, programs, stories, events, finalAction } = homepageData;

  return (
    <div className="homepage">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="page-container home-hero__frame">
          <div className="home-hero__copy">
            <SectionLabel>{hero.eyebrow}</SectionLabel>
            <h1 id="home-title">{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="home-actions">
              <ButtonLink href={hero.primaryAction.href}>{hero.primaryAction.label}</ButtonLink>
              <ButtonLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</ButtonLink>
            </div>
          </div>
          <div className="home-hero__image-wrap">
            <Image className="home-hero__image" src={hero.image} alt={hero.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 58vw" />
            <span className="home-hero__image-note">Community work · Placeholder image</span>
          </div>
        </div>
      </section>

      <section className="home-pathways" aria-labelledby="pathways-title">
        <div className="page-container">
          <div className="section-intro">
            <SectionLabel>Choose your path</SectionLabel>
            <h2 id="pathways-title">Start with what you need today.</h2>
          </div>
          <div className="home-pathways__grid">
            {pathways.map((pathway) => (
              <article className={`pathway-card pathway-card--${pathway.tone}`} key={pathway.label}>
                <h3>{pathway.label}</h3>
                <p>{pathway.description}</p>
                <ButtonLink href={pathway.href} variant={pathway.tone === "terracotta" ? "editorial" : pathway.tone === "navy" ? "secondary" : "primary"}>
                  Explore pathway
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-approach" aria-labelledby="approach-title">
        <div className="home-grid-band texture-band"><div className="page-container"><SectionLabel>{approach.eyebrow}</SectionLabel></div></div>
        <div className="page-container home-split-section">
          <h2 id="approach-title">{approach.title}</h2>
          <div className="home-split-section__content"><p>{approach.description}</p><ButtonLink href={approach.action.href} variant="editorial">{approach.action.label}</ButtonLink></div>
        </div>
      </section>

      <section className="home-impact" aria-labelledby="impact-title">
        <div className="page-container home-impact__inner">
          <div className="home-impact__copy"><SectionLabel>{impact.eyebrow}</SectionLabel><h2 id="impact-title">Evidence should be clear, current, and accountable.</h2><p>{impact.title}</p></div>
          <div className="impact-empty"><strong>Not published yet</strong><p>{impact.note}</p></div>
        </div>
      </section>

      <section className="home-work" aria-labelledby="work-title">
        <div className="page-container section-intro"><SectionLabel>{programs.eyebrow}</SectionLabel><h2 id="work-title">{programs.title}</h2><p>{programs.description}</p></div>
        <div className="page-container program-list">
          {programs.items.map((program) => <article className="program-row" key={program.title}><div><h3>{program.title}</h3><p>{program.description}</p></div><ButtonLink href={program.href} variant="secondary">View area</ButtonLink></article>)}
        </div>
      </section>

      <section className="home-editorial" aria-labelledby="stories-title">
        <div className="page-container section-intro section-intro--split"><div><SectionLabel>{stories.eyebrow}</SectionLabel><h2 id="stories-title">{stories.title}</h2></div><p>{stories.note}</p></div>
        <div className="page-container editorial-list">{stories.items.map((item) => <article className="editorial-row" key={item.title}><span>{item.type}</span><h3>{item.title}</h3><time>{item.date}</time></article>)}</div>
      </section>

       <section className="home-news" aria-labelledby="events-title">
        <div className="page-container section-intro section-intro--split"><div><SectionLabel>{events.eyebrow}</SectionLabel><h2 id="events-title">{events.title}</h2></div><p>{events.note}</p></div>
        <div className="page-container news-grid"><article className="news-card" key={events.event.title}><span>{events.event.type}</span><h3>{events.event.title}</h3><p>{events.event.date}</p><ButtonLink href="/event/" variant="secondary">View event</ButtonLink></article></div>
      </section>

      <section className="home-final-action" aria-labelledby="final-action-title">
        <div className="page-container home-final-action__inner"><div><SectionLabel>{finalAction.eyebrow}</SectionLabel><h2 id="final-action-title">{finalAction.title}</h2><p>{finalAction.description}</p></div><div className="home-actions">{finalAction.actions.map((action) => <ButtonLink key={action.label} href={action.href} variant={action.variant}>{action.label}</ButtonLink>)}</div></div>
      </section>
    </div>
  );
}
