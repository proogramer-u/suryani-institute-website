import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";

export function ArticlesPage() {
  return (
    <div className="articles-page">
      <section className="articles-hero" aria-labelledby="articles-title">
        <div className="page-container articles-hero__inner">
          <div>
            <p className="section-label">Articles and field notes</p>
            <h1 id="articles-title">Where SIMH goes, what we learn.</h1>
          </div>
          <p className="articles-hero__intro">A growing archive of expeditions, community conversations, and practical learning from the field.</p>
        </div>
      </section>

      <section className="articles-archive" aria-labelledby="archive-title">
        <div className="page-container articles-archive__heading">
          <div><p className="section-label">The archive</p><h2 id="archive-title">Stories from the work.</h2></div>
          <p>These placeholder entries show how future expedition stories will be organised and shared.</p>
        </div>
        <div className="page-container articles-grid">
          {articles.map((article, index) => (
            <article className={`article-card article-card--${index % 2 === 0 ? "navy" : "paper"}`} key={article.slug}>
              <Link className="article-card__image" href={`/articles/${article.slug}/`} aria-label={`Read ${article.title}`}>
                <Image src="/placeholder.svg" alt="" fill sizes="(max-width: 767px) 100vw, 50vw" aria-hidden="true" />
                <span>Placeholder image</span>
              </Link>
              <div className="article-card__content">
                <p className="article-card__meta">{article.location} <span aria-hidden="true">/</span> {article.date}</p>
                <h3><Link href={`/articles/${article.slug}/`}>{article.title}</Link></h3>
                <p>{article.summary}</p>
                <Link className="article-card__link" href={`/articles/${article.slug}/`}>Read field note <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
