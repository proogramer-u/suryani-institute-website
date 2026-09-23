import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="article-detail">
        <section className="article-detail__hero" aria-labelledby="article-title">
          <div className="page-container article-detail__hero-inner">
            <Link className="article-detail__back" href="/articles/"><ArrowLeft aria-hidden="true" /> Back to articles</Link>
            <p className="section-label">{article.location} / {article.date}</p>
            <h1 id="article-title">{article.title}</h1>
            <p>{article.summary}</p>
          </div>
        </section>
        <div className="page-container article-detail__body">
          <div className="article-detail__image"><Image src="/placeholder.svg" alt="" fill sizes="(max-width: 767px) 100vw, 70vw" aria-hidden="true" /><span>Placeholder image</span></div>
          <div className="article-detail__copy">{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link className="article-detail__next" href="/contact/">Talk to SIMH <ArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
