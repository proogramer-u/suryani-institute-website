import { PagePlaceholder } from "@/components/page-placeholder";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  return <PagePlaceholder eyebrow={locale === "id" ? "Beranda" : "Home"} title="SIMH" />;
}
