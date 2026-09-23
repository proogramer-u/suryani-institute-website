import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ArticlesPage } from "@/components/articles-page";

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content"><ArticlesPage /></main>
      <SiteFooter />
    </div>
  );
}
