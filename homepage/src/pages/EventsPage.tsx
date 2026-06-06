import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "../components/cinematic-hero/Navbar";
import { CommandBand } from "../components/ui/CommandBand";
import { Magnet } from "../components/ui/Magnet";
import { ShinyText } from "../components/ui/ShinyText";
import { SignalAside } from "../components/ui/SignalAside";
import { useReducedMotion } from "../hooks/useReducedMotion";

type EventType =
  | "Workshop"
  | "Build Night"
  | "Hackathon"
  | "Open Lab"
  | "Speaker Session";

type EventItem = {
  title: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
  description: string;
  tag: string;
  href?: string;
};

type EventCategory = {
  title: string;
  description: string;
  accent: "cyan" | "blue" | "red";
};

type PastHighlight = {
  title: string;
  outcome: string;
  note: string;
};

const featuredEvent: EventItem = {
  title: "Open Lab: Build With Us",
  type: "Open Lab",
  date: "Friday",
  time: "6:00 PM",
  location: "Dev Cell Room / Online",
  description:
    "Bring a project, a bug, or just curiosity. Work with other students, ask seniors for help, and make progress on something real.",
  tag: "Beginner Friendly",
  href: "#upcoming-schedule",
};

const eventCategories: EventCategory[] = [
  {
    title: "Build Nights",
    description:
      "Informal coding sessions where students sit together, build projects, and solve bugs.",
    accent: "cyan",
  },
  {
    title: "Workshops",
    description:
      "Hands-on sessions on frontend, backend, Git, APIs, databases, deployment, and tools.",
    accent: "blue",
  },
  {
    title: "Hackathons",
    description:
      "Team-based building sprints where students create prototypes and present working demos.",
    accent: "red",
  },
  {
    title: "Open Labs",
    description:
      "Beginner-friendly spaces to ask doubts, get code reviews, and work with seniors.",
    accent: "cyan",
  },
  {
    title: "Speaker Sessions",
    description:
      "Talks by seniors, alumni, developers, and contributors about real-world building.",
    accent: "blue",
  },
];

const upcomingEvents: EventItem[] = [
  {
    title: "Open Lab: Build With Us",
    type: "Open Lab",
    date: "Friday / Week 1",
    time: "6:00 PM",
    location: "Dev Cell Room / Online",
    description:
      "Bring a project, ask doubts, and make progress with other student builders.",
    tag: "Open to All",
    href: "#join-events",
  },
  {
    title: "Git & GitHub Starter Workshop",
    type: "Workshop",
    date: "Saturday / Week 1",
    time: "11:00 AM",
    location: "Lab Block",
    description:
      "A beginner-first session on version control, pull requests, and collaboration basics.",
    tag: "Beginner Friendly",
    href: "#join-events",
  },
  {
    title: "React UI Build Night",
    type: "Build Night",
    date: "Tuesday / Week 2",
    time: "7:00 PM",
    location: "Dev Cell Room",
    description:
      "Work on layouts, states, and interfaces alongside the frontend crew.",
    tag: "Hands-on",
    href: "#join-events",
  },
  {
    title: "Hackathon Team Formation Meet",
    type: "Hackathon",
    date: "Thursday / Week 2",
    time: "5:30 PM",
    location: "Seminar Hall",
    description:
      "Find teammates, shape ideas, and get early feedback before building sprints begin.",
    tag: "Team Event",
    href: "#join-events",
  },
  {
    title: "Portfolio Review Session",
    type: "Speaker Session",
    date: "Saturday / Week 3",
    time: "4:00 PM",
    location: "Online / Meet",
    description:
      "Bring your work, get practical review notes, and sharpen how you present projects.",
    tag: "Open to All",
    href: "#join-events",
  },
];

const pastHighlights: PastHighlight[] = [
  {
    title: "Web Starter Workshop",
    outcome:
      "Students built their first landing pages, pushed their code live, and left with something they could keep improving.",
    note: "First builds shipped",
  },
  {
    title: "Project Demo Night",
    outcome:
      "Teams shared working prototypes, dashboards, and small tools in front of the community and got practical feedback.",
    note: "Live product demos",
  },
  {
    title: "Mini Hack Sprint",
    outcome:
      "Builders teamed up quickly, sharpened rough ideas, and shipped small demos in a single evening sprint.",
    note: "Fast team prototypes",
  },
];

const beginnerChecklist = [
  "Bring your laptop",
  "Join the community group",
  "Pick a session",
  "Ask questions",
  "Build something small",
];

const eventSignals = [
  { label: "Session Tone", value: "Practical", text: "Students leave with clearer work, not just notes." },
  { label: "Entry Mode", value: "Beginner Safe", text: "Open labs and review spaces lower the barrier to showing up." },
  { label: "Cadence", value: "Recurring", text: "A steady rhythm keeps the club from feeling like one-off announcements." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function EventsAnimatedBlock({
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

function EventsSectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="events-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function EventsPage() {
  return (
    <main className="events-page" id="top">
      <Navbar />

      <section className="events-hero" aria-labelledby="events-page-title">
        <div className="events-hero-grid" aria-hidden="true" />
        <div className="events-hero-frame" aria-hidden="true" />
        <EventsAnimatedBlock className="events-hero-content">
          <p className="eyebrow">Dev Cell Events</p>
          <h1 id="events-page-title">
            Build nights, workshops, hackathons, and open labs.
          </h1>
          <p>
            Join sessions where students learn together, debug together, build
            real projects, and turn ideas into working demos.
          </p>
          <div className="events-actions">
            <a className="events-primary-link" href="#upcoming-schedule">
              Open Event Board
            </a>
            <a
              className="events-secondary-link"
              href="/community#community-join"
            >
              Enter Community Channel
            </a>
          </div>
        </EventsAnimatedBlock>
      </section>

      <section className="content-section page-command-band-section">
        <EventsAnimatedBlock>
          <CommandBand items={eventSignals} variant="events" />
        </EventsAnimatedBlock>
      </section>

      <section className="content-section events-section">
        <EventsSectionHeader eyebrow="Priority Signal / Featured" title="Next Up" />
        <EventsAnimatedBlock className="featured-event-card section-shell">
          <div className="section-shell__main">
            <div className="featured-event-card__status">Next</div>
            <div className="featured-event-card__meta">
              <span>{featuredEvent.type}</span>
              <span>{featuredEvent.date}</span>
              <span>{featuredEvent.time}</span>
              <span>{featuredEvent.location}</span>
            </div>
            <h2>{featuredEvent.title}</h2>
            <p>{featuredEvent.description}</p>
            <div className="featured-event-card__tag">
              <ShinyText>{featuredEvent.tag}</ShinyText>
            </div>
            <Magnet>
              <a className="events-primary-link" href={featuredEvent.href ?? "#join-events"}>
                Claim Your Spot
              </a>
            </Magnet>
          </div>
          <SignalAside
            label="Bring With You"
            text="A rough project, one bug you want solved, or just enough curiosity to ask better questions in the room."
          />
        </EventsAnimatedBlock>
      </section>

      <section className="content-section events-section">
        <EventsSectionHeader
          eyebrow="Activity Types / What Happens Here"
          title="What happens here"
          text="Every session is built around doing real work together, not just watching from the back row."
        />
        <div className="events-category-grid">
          {eventCategories.map((category) => (
            <EventsAnimatedBlock
              className={`events-category-card events-category-card--${category.accent}`}
              key={category.title}
            >
              <span className="events-category-card__accent" aria-hidden="true" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </EventsAnimatedBlock>
          ))}
        </div>
      </section>

      <section
        className="content-section events-section"
        id="upcoming-schedule"
      >
        <EventsSectionHeader
          eyebrow="Mission Schedule / Upcoming"
          title="Upcoming Schedule"
          text="A practical rhythm of sessions, team meetups, and builder time students can actually join."
        />
        <div className="events-list-grid">
          {upcomingEvents.map((event) => (
            <EventsAnimatedBlock className="event-list-card" key={event.title}>
              <div className="event-list-card__topline">
                <span>{event.type}</span>
                <span className="event-list-card__tag">{event.tag}</span>
              </div>
              <h3>{event.title}</h3>
              <div className="event-list-card__details">
                <span>{event.date}</span>
                <span>{event.time}</span>
                <span>{event.location}</span>
              </div>
              <p>{event.description}</p>
              <a className="events-text-link" href={event.href ?? "#join-events"}>
                Reserve Seat
              </a>
            </EventsAnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section events-section">
        <EventsSectionHeader
          eyebrow="Signal Archive / Past Highlights"
          title="Past Highlights"
          text="A quick look at the kind of energy and outcomes Dev Cell sessions are building."
        />
        <div className="events-past-grid">
          {pastHighlights.map((highlight) => (
            <EventsAnimatedBlock className="events-past-card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.outcome}</p>
              <span>{highlight.note}</span>
            </EventsAnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section events-section">
        <EventsAnimatedBlock className="events-beginner-panel">
          <EventsSectionHeader
            eyebrow="New Here / Beginner Friendly"
            title="Never attended before?"
            text="You do not need to be an expert to attend Dev Cell events. Come with curiosity, a laptop if needed, and a willingness to build. Seniors and team members will help you get started."
          />
          <div className="events-checklist">
            {beginnerChecklist.map((item) => (
              <div className="events-checklist__item" key={item}>
                <span aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </EventsAnimatedBlock>
      </section>

      <section
        className="content-section events-section events-final-section"
        id="join-events"
      >
        <EventsAnimatedBlock className="events-final-panel">
          <EventsSectionHeader
            eyebrow="Access Point / Final Call"
            title="Come to the next session."
            text="Meet other builders, ask doubts, work on projects, and take your first step into the Dev Cell community."
          />
          <div className="events-actions events-actions--center">
            <a className="events-primary-link" href="mailto:hello@devcell.club">
              Join Next Session
            </a>
            <a className="events-secondary-link" href="/community">
              Enter Community Channel
            </a>
            <a className="events-secondary-link" href="/team">
              View Crew Roster
            </a>
          </div>
        </EventsAnimatedBlock>
      </section>

      <footer className="events-footer">
        <a href="/">Dev Cell Club</a>
        <span>Practical sessions, real builders, and something worth showing up for.</span>
      </footer>
    </main>
  );
}
