import { useEffect, useState } from "react";
import { CockpitHero } from "./components/cinematic-hero/CockpitHero";
import { Magnet } from "./components/ui/Magnet";
import { ShinyText } from "./components/ui/ShinyText";
import { ChallengesPage } from "./pages/ChallengesPage";
import { CommunityPage } from "./pages/CommunityPage";
import { EventsPage } from "./pages/EventsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TeamPage } from "./pages/TeamPage";

const projects = [
  {
    number: "01",
    title: "Build Nights",
    text: "Small teams. Fast experiments. A room full of people who would rather ship than speculate.",
  },
  {
    number: "02",
    title: "Open Source",
    text: "Useful tools, thoughtful contributions, and the kind of code review that makes everyone sharper.",
  },
  {
    number: "03",
    title: "Launchpad",
    text: "A clear runway for student ideas: prototype, test, iterate, demo, and take the next step.",
  },
];

const networkEntries = [
  {
    signal: "01",
    title: "Community",
    description:
      "Understand what Dev Cell is and how students learn, build, and grow here.",
    href: "/community",
    cta: "Enter Community",
  },
  {
    signal: "02",
    title: "Team",
    description:
      "Meet the students and mentors running sessions, projects, events, and reviews.",
    href: "/team",
    cta: "View Crew Roster",
  },
  {
    signal: "03",
    title: "Events",
    description:
      "Join build nights, workshops, open labs, hackathons, and speaker sessions.",
    href: "/events",
    cta: "Open Event Board",
  },
  {
    signal: "04",
    title: "Projects",
    description:
      "Explore websites, tools, dashboards, and open-source builds created by students.",
    href: "/projects",
    cta: "Open Build Archive",
  },
  {
    signal: "05",
    title: "Challenges",
    description:
      "Take on weekly builder missions, submit your work, and grow through feedback.",
    href: "/challenges",
    cta: "Enter Mission Board",
  },
];

const commandPreviews = [
  {
    label: "Live Channel / Challenges",
    title: "Active Builder Mission",
    description:
      "Build a responsive developer portfolio. Beginner friendly. Submit your GitHub link and optional live demo.",
    href: "/challenges",
    cta: "Open Live Mission",
  },
  {
    label: "Next Signal / Events",
    title: "Next Dev Cell Session",
    description:
      "Open Lab: bring a project, a bug, or just curiosity. Build with other students and seniors.",
    href: "/events",
    cta: "Open Session Board",
  },
  {
    label: "Featured Signal / Projects",
    title: "Featured Build",
    description:
      "Dev Cell Club Platform - the central home for events, projects, challenges, and community activity.",
    href: "/projects",
    cta: "Inspect Build Dossier",
  },
  {
    label: "Crew Signal / Team",
    title: "Built by students.",
    description:
      "Meet the team coordinating projects, workshops, design, development, and community participation.",
    href: "/team",
    cta: "View Crew Roster",
  },
];

function HomePage() {
  return (
    <main>
      <CockpitHero />

      <section className="content-section intro-section" id="about">
        <p className="eyebrow">
          <ShinyText>Transmission 001 / About</ShinyText>
        </p>
        <div className="intro-grid">
          <h2>A place for people who learn by making.</h2>
          <div>
            <p className="lead">
              Dev Cell Club is a student developer community for building
              ambitious things with curious people.
            </p>
            <p>
              We run practical sessions, collaborate on projects, and create
              space for ideas to become working software. No grandstanding.
              Just a good crew and the momentum to keep going.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section network-section" aria-labelledby="network-heading">
        <p className="eyebrow">Mission Control / Entry Grid</p>
        <div className="section-heading">
          <h2 id="network-heading">Enter the Dev Cell network.</h2>
          <p>
            Find your place in the community - meet the team, join events,
            explore projects, and start your first weekly mission.
          </p>
        </div>

        <div className="network-grid">
          {networkEntries.map((entry) => (
            <a className="network-card" href={entry.href} key={entry.href}>
              <span className="network-card__signal">{entry.signal}</span>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <span className="network-card__cta">
                {entry.cta} <span aria-hidden="true">-&gt;</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section command-preview-section" aria-label="Dev Cell mission previews">
        <div className="command-preview-grid">
          {commandPreviews.map((preview) => (
            <a className="command-preview-card" href={preview.href} key={preview.title}>
              <span className="command-preview-card__label">{preview.label}</span>
              <h2>{preview.title}</h2>
              <p>{preview.description}</p>
              <span className="command-preview-card__cta">
                {preview.cta} <span aria-hidden="true">-&gt;</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <p className="eyebrow">Active Channels / Projects</p>
        <div className="section-heading">
          <h2>Choose your vector.</h2>
          <p>Three ways to start building with the club.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span>{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section events-section" id="events">
        <p className="eyebrow">Upcoming Signal / Events</p>
        <div className="event-panel">
          <div>
            <span className="event-date">Every Friday / 18:00</span>
            <h2>Open Lab</h2>
          </div>
          <p>
            Bring a problem, a half-built idea, or a blank editor. Leave with a
            clearer next step.
          </p>
          <a className="text-link" href="#join">
            Enter Open Lab <span aria-hidden="true">+</span>
          </a>
        </div>
      </section>

      <section className="content-section join-section" id="join">
        <p className="eyebrow">Access Point / Join</p>
        <h2>Ready to build something real?</h2>
        <p>
          Step into the lab. Meet the club, find a project, and make your first
          commit.
        </p>
        <Magnet>
          <a className="primary-link" href="mailto:hello@devcell.club">
            Request Dev Cell Access
          </a>
        </Magnet>
      </section>

      <footer>
        <a href="#top">Dev Cell Club</a>
        <span>Designed for the next build.</span>
      </footer>
    </main>
  );
}

export function App() {
  const [route, setRoute] = useState(() => ({
    pathname:
      window.location.pathname.replace(/\/+$/, "") || "/",
    hash: window.location.hash,
  }));

  useEffect(() => {
    const syncRoute = () =>
      setRoute({
        pathname:
          window.location.pathname.replace(/\/+$/, "") || "/",
        hash: window.location.hash,
      });

    const handleNavigationClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");

      if (
        !(anchor instanceof HTMLAnchorElement) ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (
        !href ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://")
      ) {
        return;
      }

      const nextUrl = new URL(anchor.href, window.location.origin);

      if (nextUrl.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();

      const nextPathname =
        nextUrl.pathname.replace(/\/+$/, "") || "/";
      const nextHash = nextUrl.hash;
      const nextRoute = `${nextPathname}${nextHash}`;
      const currentRoute = `${window.location.pathname.replace(/\/+$/, "") || "/"}${window.location.hash}`;

      if (nextRoute !== currentRoute) {
        window.history.pushState({}, "", nextRoute);
      }

      syncRoute();
    };

    window.history.scrollRestoration = "manual";
    syncRoute();
    window.addEventListener("popstate", syncRoute);
    document.addEventListener("click", handleNavigationClick);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      document.removeEventListener("click", handleNavigationClick);
    };
  }, []);

  useEffect(() => {
    if (route.hash) {
      window.requestAnimationFrame(() => {
        const targetId = route.hash.slice(1);
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });

      return;
    }

    window.scrollTo(0, 0);
  }, [route.hash, route.pathname]);

  if (route.pathname === "/community" || route.pathname === "/about") {
    return <CommunityPage />;
  }

  if (route.pathname === "/team") {
    return <TeamPage />;
  }

  if (route.pathname === "/events") {
    return <EventsPage />;
  }

  if (route.pathname === "/challenges") {
    return <ChallengesPage />;
  }

  if (route.pathname === "/projects") {
    return <ProjectsPage />;
  }

  return <HomePage />;
}
