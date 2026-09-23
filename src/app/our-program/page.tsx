import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProgramStack } from "@/components/program-stack";

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="program-page">
        <section className="program-hero" aria-labelledby="program-title">
          <div className="page-container program-hero__inner">
            <p className="section-label">Our Program</p>
            <h1 id="program-title">Our Activities and Programs</h1>
            <p className="program-hero__intro">We work with communities to make mental health support practical, culturally sensitive, and available to the people who need it.</p>
          </div>
        </section>
        <ProgramStack />
      </main>
      <SiteFooter />
    </div>
  );
}
