import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactPage } from "@/components/contact-page";

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content"><ContactPage /></main>
      <SiteFooter />
    </div>
  );
}
