import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "../components/cinematic-hero/Navbar";
import { CommandBand } from "../components/ui/CommandBand";
import { SignalAside } from "../components/ui/SignalAside";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ProjectFocus = {
  title: string;
  description: string;
  accent: "cyan" | "blue" | "red";
};

type BuildItem = {
  title: string;
  stage: string;
  stack: string;
  status: string;
  description: string;
  href: string;
};

const projectFocusAreas: ProjectFocus[] = [
  {
    title: "Club Platforms",
    description:
      "Homebases for events, challenges, onboarding, and the systems that keep Dev Cell organized.",
    accent: "cyan",
  },
  {
    title: "Campus Tools",
    description:
      "Practical products students can use on campus, from dashboards to workflow helpers.",
    accent: "blue",
  },
  {
    title: "Launch Experiments",
    description:
      "Fast-moving prototypes that let teams test ideas, learn quickly, and ship visible progress.",
    accent: "red",
  },
];

const activeBuilds: BuildItem[] = [
  {
    title: "Dev Cell Club Platform",
    stage: "Active Build",
    stack: "React / UI System",
    status: "Core Project",
    description:
      "The central hub for community info, events, projects, and weekly builder missions.",
    href: "mailto:hello@devcell.club?subject=Dev%20Cell%20Club%20Platform",
  },
  {
    title: "Event Signal Board",
    stage: "Prototype",
    stack: "Frontend / Data Views",
    status: "Seeking Builders",
    description:
      "A dashboard-style schedule board for sessions, highlights, and live event updates.",
    href: "/events#upcoming-schedule",
  },
  {
    title: "Challenge Tracker",
    stage: "Weekly Ops",
    stack: "Submissions / Feedback",
    status: "Mission Support",
    description:
      "A simple flow for challenge publishing, submissions, feedback loops, and recognition.",
    href: "/challenges#mission-board",
  },
  {
    title: "Open Source Starter Kits",
    stage: "Ongoing",
    stack: "Docs / Templates",
    status: "Contributor Ready",
    description:
      "Starter repos and templates that help new contributors learn the club workflow faster.",
    href: "/community#who-can-join",
  },
];

const contributionSteps = [
  "Pick a build that matches your current level",
  "Join a session or ask the crew where help is needed",
  "Take a small issue, UI block, or cleanup task",
  "Ship a visible improvement and keep the momentum going",
];

const projectSignals = [
  { label: "Build Logic", value: "Useful First", text: "Projects should solve club or campus needs, not just exist as demos." },
  { label: "Contribution Size", value: "Small Wins", text: "A project feels alive when new students can land real improvements fast." },
  { label: "Launch Energy", value: "Ship Visible", text: "Every build should leave behind something the next person can see and extend." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ProjectsAnimatedBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ProjectsSectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="projects-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function ProjectsPage() {
  return (
    <main className="projects-page" id="top">
      <Navbar />

      <section className="projects-hero" aria-labelledby="projects-page-title">
        <div className="projects-hero-grid" aria-hidden="true" />
        <div className="projects-hero-frame" aria-hidden="true" />
        <ProjectsAnimatedBlock className="projects-hero-content">
          <p className="eyebrow">Build Archive / Active Projects</p>
          <h1 id="projects-page-title">Projects that move from idea to working product.</h1>
          <p>
            Dev Cell projects are where students turn practice into useful software,
            better interfaces, and shared systems the whole community can build on.
          </p>
          <div className="projects-actions">
            <a className="projects-primary-link" href="#active-builds">
              Open Build Archive
            </a>
            <a className="projects-secondary-link" href="/community#community-join">
              Enter Community Channel
            </a>
          </div>
        </ProjectsAnimatedBlock>
      </section>

      <section className="content-section page-command-band-section">
        <ProjectsAnimatedBlock>
          <CommandBand items={projectSignals} variant="projects" />
        </ProjectsAnimatedBlock>
      </section>

      <section className="content-section projects-section">
        <div className="section-shell section-shell--header">
          <ProjectsSectionHeader
            eyebrow="Build Tracks / Where Projects Come From"
            title="What Dev Cell builds"
            text="The club stays strongest when projects are practical, collaborative, and small enough for students to actually contribute."
          />
          <SignalAside
            label="Product Bias"
            text="The strongest student projects feel like systems in use, not portfolio filler with placeholder stakes."
          />
        </div>
        <div className="projects-focus-grid">
          {projectFocusAreas.map((item) => (
            <ProjectsAnimatedBlock
              className={`projects-focus-card projects-focus-card--${item.accent}`}
              key={item.title}
            >
              <span className="projects-focus-card__accent" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ProjectsAnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section projects-section">
        <ProjectsAnimatedBlock className="projects-feature-card section-shell">
          <div className="section-shell__main">
            <ProjectsSectionHeader
              eyebrow="Priority Signal / Featured Build"
              title="The current flagship build is the club platform itself."
              text="A shared command center for the community, built to connect the homepage, events, projects, challenges, and future student contributions."
            />
            <div className="projects-actions">
              <a className="projects-primary-link" href="mailto:hello@devcell.club">
                Pitch a Build
              </a>
              <a className="projects-secondary-link" href="/team">
                View Crew Roster
              </a>
            </div>
          </div>
          <SignalAside
            label="Flagship Standard"
            text="The flagship build should demonstrate design taste, system thinking, and room for many contributors to leave a mark."
          />
        </ProjectsAnimatedBlock>
      </section>

      <section className="content-section projects-section" id="active-builds">
        <ProjectsSectionHeader
          eyebrow="Mission Board / Active Builds"
          title="Active builds"
          text="Not every project needs to be huge. The goal is to create a visible place where students can join in and keep shipping."
        />
        <div className="projects-build-grid">
          {activeBuilds.map((build) => (
            <ProjectsAnimatedBlock className="projects-build-card" key={build.title}>
              <div className="projects-build-card__topline">
                <span>{build.stage}</span>
                <span className="projects-build-card__status">{build.status}</span>
              </div>
              <h3>{build.title}</h3>
              <div className="projects-build-card__meta">
                <span>{build.stack}</span>
              </div>
              <p>{build.description}</p>
              <a className="projects-text-link" href={build.href}>
                View Build Brief
              </a>
            </ProjectsAnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section projects-section">
        <ProjectsAnimatedBlock className="projects-support-panel">
          <ProjectsSectionHeader
            eyebrow="Join Path / How To Contribute"
            title="How students join a build"
            text="You do not need to own an entire product. Start with one issue, one screen, one bug, or one helpful improvement."
          />
          <div className="projects-checklist">
            {contributionSteps.map((step, index) => (
              <div className="projects-checklist__item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </ProjectsAnimatedBlock>
      </section>

      <section className="content-section projects-section projects-final-section">
        <ProjectsAnimatedBlock className="projects-cta-panel">
          <ProjectsSectionHeader
            eyebrow="Access Point / Final Call"
            title="Ready to build with the crew?"
            text="Join Dev Cell, pick a project lane, and start contributing to something real with other students."
          />
          <div className="projects-actions projects-actions--center">
            <a className="projects-primary-link" href="mailto:hello@devcell.club">
              Join a Build Lane
            </a>
            <a className="projects-secondary-link" href="/challenges">
              Open Mission Board
            </a>
            <a className="projects-secondary-link" href="/events">
              Open Event Board
            </a>
          </div>
        </ProjectsAnimatedBlock>
      </section>

      <footer className="projects-footer">
        <a href="/">Dev Cell Club</a>
        <span>Student builds, shared systems, and work that keeps getting better.</span>
      </footer>
    </main>
  );
}
