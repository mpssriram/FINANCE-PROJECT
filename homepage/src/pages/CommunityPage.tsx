import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "../components/cinematic-hero/Navbar";
import { CommandBand } from "../components/ui/CommandBand";
import { Dev3DCard } from "../components/ui/Dev3DCard";
import { SignalAside } from "../components/ui/SignalAside";
import { useReducedMotion } from "../hooks/useReducedMotion";

type CardItem = {
  title: string;
  text: string;
};

type JourneyStep = CardItem & {
  step: string;
};

const activityCards: CardItem[] = [
  {
    title: "Build Nights",
    text: "Sit together, code together, debug together, and ship small projects.",
  },
  {
    title: "Workshops",
    text: "Learn frontend, backend, Git, deployment, APIs, databases, and modern tools.",
  },
  {
    title: "Projects",
    text: "Work on real club websites, internal tools, dashboards, and open-source ideas.",
  },
  {
    title: "Hackathons",
    text: "Form teams, brainstorm ideas, prototype fast, and present working products.",
  },
  {
    title: "Mentorship",
    text: "Learn from seniors, ask doubts, get code reviews, and improve through feedback.",
  },
];

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Join",
    text: "Enter the community and meet other student builders.",
  },
  {
    step: "02",
    title: "Learn",
    text: "Attend workshops, ask doubts, and explore different domains.",
  },
  {
    step: "03",
    title: "Build",
    text: "Start with small tasks, weekly challenges, or team projects.",
  },
  {
    step: "04",
    title: "Ship",
    text: "Deploy projects, share GitHub links, and showcase your work.",
  },
  {
    step: "05",
    title: "Lead",
    text: "Mentor juniors, run sessions, organize events, and become part of the core crew.",
  },
];

const culturePrinciples = [
  "Learn by making",
  "Help before judging",
  "Ship small, improve fast",
  "Share what you know",
  "Build for real users",
  "Everyone starts somewhere",
];

const communitySignals = [
  { label: "Open Access", value: "All Levels", text: "No gatekeeping, just a clear place to begin." },
  { label: "Live Rhythm", value: "Weekly Builds", text: "A steady cadence of sessions, labs, and feedback." },
  { label: "Support Layer", value: "Mentor Active", text: "Seniors and peers help keep momentum real." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="community-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function AnimatedBlock({
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
      viewport={{ once: true, amount: 0.22 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function CommunityPage() {
  return (
    <main className="community-page" id="top">
      <Navbar />

      <section className="community-hero" aria-labelledby="community-title">
        <div className="community-grid-overlay" aria-hidden="true" />
        <div className="community-hero-frame" aria-hidden="true" />
        <AnimatedBlock className="community-hero-content">
          <p className="eyebrow">Community Channel / Dev Cell</p>
          <h1 id="community-title">
            <span>A home for</span>
            <span>student</span>
            <span>builders.</span>
          </h1>
          <p>
            Dev Cell is the student developer community where beginners,
            builders, designers, and problem-solvers learn together, build real
            projects, and grow through workshops, hackathons, open-source work,
            and mentorship.
          </p>
          <div className="community-actions">
            <a className="community-primary-link" href="#community-join">
              Enter Community Channel
            </a>
            <a className="community-secondary-link" href="/team">
              View Crew Roster
            </a>
          </div>
        </AnimatedBlock>
        <div className="community-hero-status" aria-hidden="true">
          <span>BEGINNER FRIENDLY</span>
          <span>BUILD NIGHTS ONLINE</span>
          <span>MENTOR SIGNAL ACTIVE</span>
        </div>
      </section>

      <section className="content-section page-command-band-section">
        <AnimatedBlock>
          <CommandBand items={communitySignals} variant="community" />
        </AnimatedBlock>
      </section>

      <section className="content-section community-definition" id="about">
        <AnimatedBlock className="community-definition-panel section-shell">
          <div className="section-shell__main">
            <SectionHeader
              eyebrow="Transmission 002 / Identity"
              title="What is Dev Cell?"
            />
            <p>
              Dev Cell is a community for students who want to learn by building.
              Whether someone is starting with HTML/CSS, exploring backend
              systems, trying UI design, preparing for hackathons, or contributing
              to open source, Dev Cell gives them a place to learn, collaborate,
              and ship real work.
            </p>
          </div>
          <SignalAside
            label="Crew Note"
            text="The club works best when people can arrive curious, contribute small, and still feel like they are inside a real mission, not a classroom waiting room."
          />
        </AnimatedBlock>
      </section>

      <section className="content-section community-section" id="who-can-join">
        <SectionHeader
          eyebrow="Open Access / Who Can Join"
          title="Find your first crew."
          text="You do not need to arrive as an expert. Bring curiosity, patience, and the courage to try."
        />
        <div className="community-3d-card-grid">
          <Dev3DCard
            title="Beginners"
            description="Start with HTML, CSS, Git, and your first real website."
            ctaLabel="Find Lane"
            badgeTop="START"
            badgeMain="01"
            variant="cyan"
          />
          <Dev3DCard
            title="Builders"
            description="Create websites, tools, dashboards, and useful campus projects."
            ctaLabel="Find Lane"
            badgeTop="BUILD"
            badgeMain="02"
            variant="cyan"
          />
          <Dev3DCard
            title="Designers"
            description="Work on UI, UX, visual systems, and interaction ideas."
            ctaLabel="Find Lane"
            badgeTop="MAKE"
            badgeMain="03"
            variant="blue"
          />
          <Dev3DCard
            title="Hackathon Teams"
            description="Find teammates, shape ideas, prototype fast, and ship demos."
            ctaLabel="Find Lane"
            badgeTop="HACK"
            badgeMain="04"
            variant="red"
          />
          <Dev3DCard
            title="Open Source"
            description="Learn GitHub workflows and contribute to real repositories."
            ctaLabel="Find Lane"
            badgeTop="OSS"
            badgeMain="05"
            variant="cyan"
          />
        </div>
      </section>

      <section className="content-section community-section" id="activities">
        <div className="section-shell section-shell--header">
          <SectionHeader
            eyebrow="Shared Missions / What We Do Together"
            title="The club is built in rooms, repos, and late-night fixes."
          />
          <SignalAside
            label="Live Feed"
            text="Workshops teach the tools. Build nights turn them into habit. Projects give the habit a purpose."
          />
        </div>
        <div className="community-activity-list">
          {activityCards.map((activity, index) => (
            <AnimatedBlock className="community-activity" key={activity.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section community-section" id="journey">
        <div className="section-shell section-shell--header">
          <SectionHeader
            eyebrow="Growth Path / Student Journey"
            title="Your journey in Dev Cell"
            text="Start small. Stay close to people who are learning too. Keep shipping until you become the person helping the next student begin."
          />
          <SignalAside
            label="Trajectory"
            text="The point is not to look advanced on day one. The point is to stay in motion long enough to become useful to the next person."
          />
        </div>
        <div className="journey-timeline">
          {journeySteps.map((item) => (
            <AnimatedBlock className="journey-step" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section community-section culture-section">
        <SectionHeader
          eyebrow="Crew Protocol / Culture"
          title="How we work"
          text="The best builders remember what it felt like to be new. That is the rule underneath everything here."
        />
        <div className="culture-grid">
          {culturePrinciples.map((principle) => (
            <AnimatedBlock className="culture-pill" key={principle}>
              <span aria-hidden="true" />
              {principle}
            </AnimatedBlock>
          ))}
        </div>
      </section>

      <section
        className="content-section community-final-cta"
        id="community-join"
        aria-labelledby="community-cta-title"
      >
        <AnimatedBlock className="community-cta-panel">
          <p className="eyebrow">Access Point / Join</p>
          <h2 id="community-cta-title">Ready to build with Dev Cell?</h2>
          <p>
            Join the community, attend your first build night, meet the team, or
            start your first project with other student builders.
          </p>
          <div className="community-actions">
            <a className="community-primary-link" href="mailto:hello@devcell.club">
              Join Dev Cell Now
            </a>
            <a className="community-secondary-link" href="/team">
              Meet Core Crew
            </a>
            <a className="community-secondary-link" href="/events">
              Open Event Board
            </a>
          </div>
        </AnimatedBlock>
      </section>

      <footer className="community-footer">
        <a href="/">Dev Cell Club</a>
        <div>
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href="mailto:hello@devcell.club">Email</a>
          <a href="#community-join">Community</a>
        </div>
        <span>Student developer community / Copyright 2026</span>
      </footer>
    </main>
  );
}
