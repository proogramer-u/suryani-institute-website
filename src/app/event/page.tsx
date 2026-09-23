import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { EventsPage } from "@/components/events-page";

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content"><EventsPage /></main>
      <SiteFooter />
    </div>
  );
}
