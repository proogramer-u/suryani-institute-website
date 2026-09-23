"use client";

import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { aboutData, type AboutCarouselItem } from "@/data/about";

function Carousel({ items, label, direction = "ltr" }: { items: readonly AboutCarouselItem[]; label: string; direction?: "ltr" | "rtl" }) {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const moved = useRef(false);
  const max = items.length - 1;

  const move = (amount: number) => setActive((current) => Math.max(0, Math.min(max, current + amount)));
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
    moved.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null || Math.abs(event.clientX - startX.current) < 12) return;
    moved.current = true;
  };
  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current !== null && moved.current) move(event.clientX < startX.current ? 1 : -1);
    startX.current = null;
    moved.current = false;
  };

  return (
    <div className={`about-carousel about-carousel--${direction}`}>
      <div className="about-carousel__controls">
        <p className="about-carousel__count" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
        <div className="about-carousel__buttons">
          <button type="button" className="carousel-button" aria-label={`Previous ${label}`} onClick={() => move(-1)} disabled={active === 0}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" className="carousel-button" aria-label={`Next ${label}`} onClick={() => move(1)} disabled={active === max}><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="about-carousel__viewport" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div className="about-carousel__track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {items.map((item) => <article className={`about-carousel__slide about-carousel__slide--${item.tone}`} key={`${item.title}-${item.year ?? "item"}`}><span>{item.year ?? "SIMH"}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
        </div>
      </div>
      <p className="about-carousel__hint">Drag to explore</p>
    </div>
  );
}

export function AboutPage() {
  const [activePurpose, setActivePurpose] = useState<"mission" | "vision">("mission");
  const [openTeam, setOpenTeam] = useState(0);

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="page-container about-hero__inner"><div><p className="section-label">{aboutData.hero.eyebrow}</p><h1 id="about-title">{aboutData.hero.title}</h1><p className="about-hero__description">{aboutData.hero.description}</p></div><div className="about-hero__mark" aria-hidden="true"><span>SIMH</span><b>01</b></div></div>
      </section>

      <section className="about-background" aria-labelledby="background-title"><div className="page-container about-section-heading"><div><p className="section-label">What guides us</p><h2 id="background-title">The work behind the work.</h2></div><p>Our approach is built from a few durable commitments. They keep the work close to people and accountable to what matters.</p></div><div className="page-container"><Carousel items={aboutData.background} label="our principles" direction="rtl" /></div></section>

      <section className="about-purpose" aria-labelledby="purpose-title"><div className="page-container about-purpose__inner"><div><p className="section-label">Why we exist</p><h2 id="purpose-title">Make room for a different future.</h2></div><div className="about-purpose__content"><div className="purpose-tabs" role="tablist" aria-label="Our purpose"><button type="button" role="tab" aria-selected={activePurpose === "mission"} className={activePurpose === "mission" ? "is-active" : ""} onClick={() => setActivePurpose("mission")}>Mission</button><button type="button" role="tab" aria-selected={activePurpose === "vision"} className={activePurpose === "vision" ? "is-active" : ""} onClick={() => setActivePurpose("vision")}>Vision</button></div><p className="purpose-copy" role="tabpanel">{aboutData.mission[activePurpose]}</p></div></div></section>

      <section className="about-history" aria-labelledby="history-title"><div className="page-container about-section-heading"><div><p className="section-label">Our way of working</p><h2 id="history-title">From listening to lasting change.</h2></div><p>We move carefully: understand the context, try useful things, and share the learning so it can travel.</p></div><div className="page-container"><Carousel items={aboutData.history} label="our way of working" /></div></section>

      <section className="about-team" aria-labelledby="team-title"><div className="page-container about-team__inner"><div className="about-team__intro"><p className="section-label">People behind SIMH</p><h2 id="team-title">Many perspectives, one shared practice.</h2><p>Our work is stronger when different forms of knowledge sit at the same table.</p></div><div className="team-list">{aboutData.team.map((member, index) => { const isOpen = openTeam === index; return <div className={`team-item${isOpen ? " is-open" : ""}`} key={member.name}><button type="button" className="team-item__button" aria-expanded={isOpen} aria-controls={`team-detail-${index}`} onClick={() => setOpenTeam(isOpen ? -1 : index)}><span className="team-item__initials" aria-hidden="true">{member.initials}</span><span><strong>{member.name}</strong><small>{member.role}</small></span>{isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button>{isOpen && <div className="team-item__detail" id={`team-detail-${index}`}><p>{member.detail}</p></div>}</div>; })}</div></div></section>
    </div>
  );
}
