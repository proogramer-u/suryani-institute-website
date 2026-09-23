import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutPage } from "@/components/about-page";

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">
        <AboutPage />
      </main>
      <SiteFooter />
    </div>
  );
}
