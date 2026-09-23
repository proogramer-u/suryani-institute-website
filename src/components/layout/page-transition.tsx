"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type TransitionPhase = "idle" | "covering" | "revealing";

const COVER_DURATION = 700;

function scrollToTopImmediately() {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousBehavior;
}

export function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingPath = useRef<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.search === window.location.search) return;

      event.preventDefault();
      if (pendingPath.current) return;

      pendingPath.current = `${url.pathname}${url.search}${url.hash}`;
      setPhase("covering");
      requestAnimationFrame(scrollToTopImmediately);
      timeoutRef.current = setTimeout(() => {
        if (pendingPath.current) router.push(pendingPath.current, { scroll: false });
      }, COVER_DURATION);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  useLayoutEffect(() => {
    if (!pendingPath.current || !pathname) return;

    pendingPath.current = null;
    scrollToTopImmediately();
    setPhase("revealing");
    timeoutRef.current = setTimeout(() => setPhase("idle"), COVER_DURATION);
  }, [pathname]);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  return <div className={`page-transition page-transition--${phase}`} aria-hidden="true" />;
}
