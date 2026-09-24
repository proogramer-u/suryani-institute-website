"use client";

import {
  Archive,
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  FileText,
  FolderOpen,
  Image,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ContentStatus = "Published" | "In review" | "Draft" | "Scheduled";

type ContentItem = {
  title: string;
  type: string;
  language: string;
  updated: string;
  status: ContentStatus;
  owner: string;
};

const contentItems: ContentItem[] = [
  {
    title: "Community mental health outreach",
    type: "Story from the Field",
    language: "EN / ID",
    updated: "Today, 09:42",
    status: "In review",
    owner: "Ayu Pratama",
  },
  {
    title: "Community care and connection",
    type: "Article",
    language: "EN / ID",
    updated: "Yesterday",
    status: "Published",
    owner: "Made Wirawan",
  },
  {
    title: "Teacher wellbeing workshop",
    type: "Event",
    language: "ID only",
    updated: "18 Sep 2026",
    status: "Draft",
    owner: "Ayu Pratama",
  },
  {
    title: "Listening to communities",
    type: "Publication",
    language: "EN / ID",
    updated: "16 Sep 2026",
    status: "Scheduled",
    owner: "Made Wirawan",
  },
  {
    title: "Our approach to care",
    type: "Program",
    language: "EN / ID",
    updated: "12 Sep 2026",
    status: "Published",
    owner: "Suryani team",
  },
];

const contentTypes = [
  ["Articles", FileText],
  ["Stories", BookOpen],
  ["Events", CalendarDays],
  ["Programs", FolderOpen],
  ["Publications", Archive],
  ["Media library", Image],
];

const navigation = [
  ["Overview", LayoutDashboard],
  ["Content", FileText],
  ["Review queue", ClipboardCheck],
  ["Media library", Image],
];

export default function AdminPage() {
  const [activeNavigation, setActiveNavigation] = useState("Overview");
  const [activeFilter, setActiveFilter] = useState("All content");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileNavOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileNavOpen]);

  const filteredItems = contentItems.filter((item) => {
    const matchesFilter = activeFilter === "All content" || item.status === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const selectNavigation = (item: string) => {
    setActiveNavigation(item);
    setMobileNavOpen(false);
  };

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar${mobileNavOpen ? " admin-sidebar--open" : ""}`}>
        <div className="admin-sidebar__brand">
          <span className="admin-brand-mark">S</span>
          <div>
            <strong>SIMH</strong>
            <span>Editorial workspace</span>
          </div>
          <button
            className="admin-mobile-close"
            type="button"
            aria-label="Close admin navigation"
            onClick={() => {
              setMobileNavOpen(false);
              menuButtonRef.current?.focus();
            }}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <nav id="admin-navigation" className="admin-sidebar__nav" aria-label="Admin navigation">
          <p className="admin-nav-label">Workspace</p>
          {navigation.map(([label, Icon]) => (
            <button
              className={`admin-nav-item${activeNavigation === label ? " admin-nav-item--active" : ""}`}
              type="button"
              key={label as string}
              onClick={() => selectNavigation(label as string)}
            >
              <Icon aria-hidden="true" />
              <span>{label as string}</span>
              {label === "Review queue" && <span className="admin-nav-count">3</span>}
            </button>
          ))}

          <p className="admin-nav-label admin-nav-label--spaced">Collections</p>
          {contentTypes.map(([label, Icon]) => (
            <button className="admin-nav-item admin-nav-item--quiet" type="button" key={label as string}>
              <Icon aria-hidden="true" />
              <span>{label as string}</span>
            </button>
          ))}
        </nav>

        <div className="admin-sidebar__bottom">
          <button className="admin-nav-item admin-nav-item--quiet" type="button">
            <Settings aria-hidden="true" />
            <span>Settings</span>
          </button>
          <div className="admin-user-card">
            <span className="admin-avatar">AP</span>
            <span>
              <strong>Ayu Pratama</strong>
              <small>Editor</small>
            </span>
            <ChevronDown aria-hidden="true" />
          </div>
        </div>
      </aside>

      {mobileNavOpen && <button className="admin-sidebar-backdrop" type="button" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} />}

      <main className="admin-main">
        <header className="admin-topbar">
          <button
            ref={menuButtonRef}
            className="admin-mobile-menu"
            type="button"
            aria-label="Open admin navigation"
            aria-expanded={mobileNavOpen}
            aria-controls="admin-navigation"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
          <div className="admin-breadcrumb">
            <span>SIMH admin</span>
            <span>/</span>
            <strong>{activeNavigation}</strong>
          </div>
          <div className="admin-topbar__actions">
            <button className="admin-icon-button" type="button" aria-label="View notifications">
              <Bell aria-hidden="true" />
              <span className="admin-notification-dot" />
            </button>
            <a className="admin-view-site" href="/" target="_blank" rel="noreferrer">
              View site <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="admin-content">
          <section className="admin-intro">
            <div>
              <p className="admin-eyebrow">Monday, 21 September 2026</p>
              <h1>Good morning, Ayu.</h1>
              <p className="admin-intro__copy">Here is what needs your attention across the SIMH website.</p>
            </div>
            <button className="admin-primary-button" type="button">
              <Plus aria-hidden="true" />
              Create content
            </button>
          </section>

          <section className="admin-metrics" aria-label="Content overview">
            <article className="admin-metric-card admin-metric-card--accent">
              <span>Needs your attention</span>
              <strong>3</strong>
              <small>items in the review queue</small>
              <span className="admin-metric-arrow">↗</span>
            </article>
            <article className="admin-metric-card">
              <span>Published content</span>
              <strong>28</strong>
              <small>2 updated this week</small>
            </article>
            <article className="admin-metric-card">
              <span>Translation progress</span>
              <strong>84%</strong>
              <small>across core pages</small>
            </article>
            <article className="admin-metric-card">
              <span>Scheduled</span>
              <strong>4</strong>
              <small>next publication 24 Sep</small>
            </article>
          </section>

          <div className="admin-dashboard-grid">
            <section className="admin-panel admin-panel--content">
              <div className="admin-panel__header">
                <div>
                  <p className="admin-eyebrow">Content library</p>
                  <h2>Recent content</h2>
                </div>
                <button className="admin-text-button" type="button" onClick={() => selectNavigation("Content")}>View all <ArrowUpRight aria-hidden="true" /></button>
              </div>

              <div className="admin-table-toolbar">
                <div className="admin-search">
                  <Search aria-hidden="true" />
                  <label className="sr-only" htmlFor="content-search">Search content</label>
                  <input id="content-search" type="search" placeholder="Search content" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                </div>
                <div className="admin-filters" aria-label="Filter content by status">
                  {["All content", "In review", "Draft", "Scheduled"].map((filter) => (
                    <button className={activeFilter === filter ? "admin-filter--active" : ""} type="button" key={filter} onClick={() => setActiveFilter(filter)}>
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr><th>Title</th><th>Type</th><th>Language</th><th>Updated</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr key={item.title}>
                        <td data-label="Content"><strong>{item.title}</strong><small>{item.owner}</small></td>
                        <td data-label="Type">{item.type}</td>
                        <td data-label="Language"><span className={item.language === "ID only" ? "admin-language admin-language--missing" : "admin-language"}>{item.language}</span></td>
                        <td data-label="Updated">{item.updated}</td>
                        <td data-label="Status"><span className={`admin-status admin-status--${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredItems.length === 0 && <p className="admin-empty-state">No content matches this search.</p>}
              </div>
            </section>

            <aside className="admin-panel admin-panel--queue">
              <div className="admin-panel__header">
                <div>
                  <p className="admin-eyebrow">Editorial workflow</p>
                  <h2>Review queue <span>3</span></h2>
                </div>
                <ClipboardCheck className="admin-panel-icon" aria-hidden="true" />
              </div>
              <div className="admin-queue-list">
                <article className="admin-queue-item">
                  <span className="admin-queue-icon admin-queue-icon--story"><BookOpen aria-hidden="true" /></span>
                  <div><strong>Community mental health outreach</strong><small>Story from the Field · English ready</small></div>
                  <button type="button" aria-label="Review community mental health outreach"><ArrowUpRight aria-hidden="true" /></button>
                </article>
                <article className="admin-queue-item">
                  <span className="admin-queue-icon admin-queue-icon--event"><CalendarDays aria-hidden="true" /></span>
                  <div><strong>Teacher wellbeing workshop</strong><small>Event · Needs Bahasa Indonesia</small></div>
                  <button type="button" aria-label="Review teacher wellbeing workshop"><ArrowUpRight aria-hidden="true" /></button>
                </article>
                <article className="admin-queue-item">
                  <span className="admin-queue-icon admin-queue-icon--security"><ShieldCheck aria-hidden="true" /></span>
                  <div><strong>Consent check required</strong><small>Field story · Safeguarding review</small></div>
                  <button type="button" aria-label="Review consent check"><ArrowUpRight aria-hidden="true" /></button>
                </article>
              </div>
              <button className="admin-queue-link" type="button" onClick={() => selectNavigation("Review queue")}>Open review queue <ArrowUpRight aria-hidden="true" /></button>
            </aside>
          </div>

          <section className="admin-notice">
            <span className="admin-notice__icon"><Users aria-hidden="true" /></span>
            <div><strong>Keep publishing safe</strong><p>Stories from the Field need consent, image permission, and safeguarding review before they can be published.</p></div>
            <button className="admin-text-button" type="button">Read the guide <ArrowUpRight aria-hidden="true" /></button>
          </section>
        </div>
      </main>
    </div>
  );
}
