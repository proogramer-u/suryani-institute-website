import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/page-placeholder";

const pages = new Map([
  ["about-us", "About Us"],
  ["our-program", "Our Program"],
  ["articles", "Articles"],
  ["contact", "Contact"],
  ["event", "Event"],
  ["donate", "Donate"],
]);

export default async function Page({ params }: PageProps<"/[locale]/[...slug]">) {
  const { slug } = await params;
  const title = pages.get(slug[0]);

  if (!title || slug.length !== 1) notFound();
  return <PagePlaceholder eyebrow={title} title={title} />;
}
