import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "../components/cinematic-hero/Navbar";
import { TeamMemberCarousel } from "../components/team/TeamMemberCarousel";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import { CommandBand } from "../components/ui/CommandBand";
import { SignalAside } from "../components/ui/SignalAside";
import type { TeamMember } from "../components/team/TeamMemberCard";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ContributorGroup = {
  label: string;
  entries: string[];
};

const coreTeamMembers: TeamMember[] = [
  {
    name: "Community Lead",
    role: "Club Operations",
    domain: "Community",
    description:
      "Coordinates weekly activity, student onboarding, planning rhythm, and the overall direction of the club.",
    status: "Onboarding Active",
    email: "mailto:hello@devcell.club?subject=Community%20Lead%20Desk",
    tag: "Core",
  },
  {
    name: "Frontend Lead",
    role: "Interfaces & Experience",
    domain: "Frontend",
    description:
      "Guides interfaces, frontend systems, design implementation, and student project reviews.",
    status: "Review Desk Open",
    email: "mailto:hello@devcell.club?subject=Frontend%20Lead%20Desk",
    tag: "Lead",
  },
  {
    name: "Backend Lead",
    role: "Systems & APIs",
    domain: "Backend",
    description:
      "Supports APIs, deployment paths, data flow, and architecture decisions for club builds.",
    status: "Build Support Active",
    email: "mailto:hello@devcell.club?subject=Backend%20Lead%20Desk",
    tag: "Lead",
  },
  {
    name: "Design Lead",
    role: "Product & Visual Direction",
    domain: "Design",
    description:
      "Shapes product thinking, visuals, interaction direction, and approachable user experiences.",
    status: "Critique Slot Open",
    email: "mailto:hello@devcell.club?subject=Design%20Lead%20Desk",
    tag: "Core",
  },
];

const contributorGroups: ContributorGroup[] = [
  {
    label: "Project Contributors",
    entries: ["UI builders", "Tooling helpers", "Project maintainers"],
  },
  {
    label: "Design Contributors",
    entries: ["Visual system contributors", "UX reviewers", "Brand helpers"],
  },
  {
    label: "Event Volunteers",
    entries: ["Session coordinators", "Hackathon runners", "Logistics crew"],
  },
  {
    label: "Open Source Contributors",
    entries: ["Issue triagers", "Docs writers", "PR reviewers"],
  },
];

const crewPath = [
  "Join the community",
  "Attend sessions",
  "Contribute to a project",
  "Help juniors or events",
  "Become part of the core crew",
];

const teamSignals = [
  { label: "Crew Shape", value: "Students First", text: "Real student builders with room to grow into leadership." },
  { label: "Ops Mode", value: "Hands-On", text: "Sessions, reviews, events, and project support run through the same crew." },
  { label: "Open Doors", value: "Contributor Path", text: "Students can move from attendee to trusted operator." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function TeamAnimatedBlock({
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

function TeamSectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="team-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function TeamPage() {
  return (
    <main className="team-page" id="top">
      <BackgroundBeams className="team-page__beams" />
      <Navbar />

      <section className="team-hero" aria-labelledby="team-page-title">
        <div className="team-hero-grid" aria-hidden="true" />
        <div className="team-hero-frame" aria-hidden="true" />
        <TeamAnimatedBlock className="team-hero-content">
          <p className="eyebrow">Dev Cell Team</p>
          <h1 id="team-page-title">Meet the Core Crew.</h1>
          <p>
            The people behind Dev Cell - students and mentors who run sessions,
            review projects, organize events, maintain club systems, and help
            new builders get started.
          </p>
          <div className="team-actions">
            <a className="team-primary-link" href="/community#community-join">
              Enter Community Channel
            </a>
            <a className="team-secondary-link" href="#join-team">
              Start Contributor Path
            </a>
          </div>
        </TeamAnimatedBlock>
      </section>

      <section className="content-section page-command-band-section">
        <TeamAnimatedBlock>
          <CommandBand items={teamSignals} variant="team" />
        </TeamAnimatedBlock>
      </section>

      <section className="content-section team-section">
        <div className="section-shell section-shell--header">
          <TeamSectionHeader
            eyebrow="Crew Board / Core Team"
            title="Core Crew"
            text="The students coordinating Dev Cell's projects, events, sessions, and community direction."
          />
          <SignalAside
            label="Roster Logic"
            text="These cards are laid out like an actual crew board: who owns what, who is active, and who a new member can approach first."
          />
        </div>
        <TeamAnimatedBlock>
          <TeamMemberCarousel
            ariaLabel="Core team member carousel"
            members={coreTeamMembers}
          />
        </TeamAnimatedBlock>
      </section>

      <section className="content-section team-section">
        <div className="section-shell section-shell--header">
          <TeamSectionHeader
            eyebrow="Signal Boost / Contributors"
            title="Contributors"
            text="Dev Cell runs on students who help through code, design, docs, events, and consistent support."
          />
          <SignalAside
            label="Why It Feels Real"
            text="Healthy clubs are not just leads and mentors. They have visible support roles, helpers, and repeat contributors holding the place together."
          />
        </div>
        <div className="team-contributor-grid">
          {contributorGroups.map((group) => (
            <TeamAnimatedBlock className="team-contributor-card" key={group.label}>
              <h3>{group.label}</h3>
              <div className="team-contributor-chip-list">
                {group.entries.map((entry) => (
                  <span className="team-contributor-chip" key={entry}>
                    {entry}
                  </span>
                ))}
              </div>
            </TeamAnimatedBlock>
          ))}
        </div>
      </section>

      <section
        className="content-section team-section team-join-section"
        id="join-team"
      >
        <TeamAnimatedBlock className="team-join-panel">
          <TeamSectionHeader
            eyebrow="Crew Path / Join"
            title="Want to become part of the crew?"
            text="Dev Cell grows through students who show up, build consistently, help others, and contribute to projects, events, or resources."
          />
          <div className="team-path-grid">
            {crewPath.map((step, index) => (
              <div className="team-path-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="team-actions team-actions--center">
            <a className="team-primary-link" href="mailto:hello@devcell.club">
              Join the Crew Channel
            </a>
            <a className="team-secondary-link" href="/events">
              Open Event Board
            </a>
            <a className="team-secondary-link" href="/community#community-join">
              Start Contributing
            </a>
          </div>
        </TeamAnimatedBlock>
      </section>

      <footer className="team-footer">
        <a href="/">Dev Cell Club</a>
        <span>Built by students, mentors, and future crew.</span>
      </footer>
    </main>
  );
}
