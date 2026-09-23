"use client";

import { useEffect, useState } from "react";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

export function LiveDateTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();

    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (!now) {
    return <span className="footer-live-time">Loading local time…</span>;
  }

  return (
    <span className="footer-live-time">
      <time dateTime={now.toISOString()}>{formatDate(now)}</time>
      <time dateTime={now.toISOString()}>{formatTime(now)}</time>
    </span>
  );
}
