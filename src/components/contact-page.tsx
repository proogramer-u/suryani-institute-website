"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { organization } from "@/data/organization";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="page-container contact-hero__inner">
          <p className="section-label">Contact</p>
          <h1 id="contact-title">We&apos;d love to hear from you.</h1>
        </div>
      </section>

      <section className="contact-grid" aria-label="Contact information and message form">
        <div className="contact-details">
          <div className="contact-details__block">
            <p className="contact-section-label">Phone</p>
            <a href={organization.phone.href}>{organization.phone.label}</a>
          </div>
          <div className="contact-details__block">
            <p className="contact-section-label">Email</p>
            <a href={`mailto:${organization.email}`}>{organization.email}</a>
          </div>
          <div className="contact-details__block">
            <p className="contact-section-label">Address</p>
            <address>{organization.address.line}<br />{organization.address.locality}<br />{organization.address.region}</address>
          </div>
          <div className="contact-details__block">
            <p className="contact-section-label">Hours</p>
            <p>{organization.hours}</p>
          </div>
          <div className="contact-map" aria-label="Location map">
            <Image src="/placeholder.svg" alt="" fill sizes="(max-width: 767px) 100vw, 42vw" aria-hidden="true" />
            <a className="contact-map__link" href={organization.directions} target="_blank" rel="noreferrer">Get directions</a>
          </div>
          <div className="contact-socials">
            <a href={organization.instagram} target="_blank" rel="noreferrer"><span>ig</span>Instagram</a>
            <a href={organization.facebook} target="_blank" rel="noreferrer"><span>f</span>Facebook</a>
          </div>
          <div className="contact-details__block">
            <p className="contact-section-label">Google profile</p>
            <a href={organization.googleReviews.href} target="_blank" rel="noreferrer">{organization.googleReviews.rating} stars · {organization.googleReviews.count} reviews</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__field contact-form__field--full">
            <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
            </div>
          </div>
          <div className="contact-form__field contact-form__field--full">
            <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
            <textarea id="contact-message" name="message" rows={6} placeholder="Tell us how we can help…" required />
          </div>
          <div className="contact-form__footer">
            <button className="contact-form__submit" type="submit">Send Message</button>
            <p className="contact-form__status" role="status" aria-live="polite">{submitted ? "This form is ready to connect. Submission will be added later." : ""}</p>
          </div>
          <p className="contact-form__note">This is a visual form preview for now. No information is sent.</p>
          <Link className="contact-form__privacy" href="/privacy/">Read our privacy policy</Link>
        </form>
      </section>
    </div>
  );
}
