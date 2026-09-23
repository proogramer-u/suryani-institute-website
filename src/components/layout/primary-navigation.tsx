"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/lib/navigation";

type PrimaryNavigationProps = {
  className?: string;
  onNavigate?: () => void;
};

export function PrimaryNavigation({ className, onNavigate }: PrimaryNavigationProps) {
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    const currentPath = pathname.replace(/\/$/, "") || "/";
    const targetPath = href.replace(/\/$/, "") || "/";

    return currentPath === targetPath || currentPath === `/en${targetPath}` || currentPath === `/id${targetPath}`;
  };

  return (
    <nav className={className} aria-label="Primary navigation">
      {primaryNavigation.map((item) => {
        const current = isCurrent(item.href);

        return (
          <Link
            key={item.href}
            className={`navigation-link${current ? " navigation-link--current" : ""}`}
            href={item.href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
      <Link className="button button--header navigation-donate" href="/donate/" onClick={onNavigate}>
        Donate
      </Link>
    </nav>
  );
}
