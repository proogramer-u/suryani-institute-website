export function PagePlaceholder({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="placeholder-section">
      <div className="page-container">
        <p className="section-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="placeholder-section__message">Content for this page will be added from approved SIMH materials.</p>
      </div>
    </section>
  );
}
