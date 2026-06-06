import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "../components/cinematic-hero/Navbar";
import { CommandBand } from "../components/ui/CommandBand";
import { Magnet } from "../components/ui/Magnet";
import { ScrollStack, ScrollStackItem } from "../components/ui/ScrollStack";
import { ShinyText } from "../components/ui/ShinyText";
import { SignalAside } from "../components/ui/SignalAside";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ChallengeStatus = "Active" | "Upcoming" | "Closed";

type ChallengeDifficulty = "Beginner" | "Intermediate" | "Advanced";

type ChallengeItem = {
  title: string;
  category: string;
  difficulty: ChallengeDifficulty;
  status: ChallengeStatus;
  deadline: string;
  points: number;
  description: string;
  href?: string;
};

type MissionType = {
  title: string;
  description: string;
  accent: "cyan" | "blue" | "red";
};

type RecognitionItem = {
  title: string;
  text: string;
};

type PastMission = {
  title: string;
  difficulty: ChallengeDifficulty;
  points: number;
  outcome: string;
};

const activeMission: ChallengeItem = {
  title: "Build a responsive developer portfolio",
  category: "Frontend",
  difficulty: "Beginner",
  status: "Active",
  deadline: "Sunday, 11:59 PM",
  points: 100,
  description:
    "Create a clean personal portfolio with sections for intro, skills, projects, contact, and responsive layout. Focus on clarity, structure, and deployment.",
  href: "#mission-board",
};

const missionTypes: MissionType[] = [
  {
    title: "Frontend Missions",
    description:
      "Build layouts, landing pages, UI components, animations, and responsive interfaces.",
    accent: "cyan",
  },
  {
    title: "Backend Missions",
    description:
      "Create APIs, authentication flows, database models, and server-side logic.",
    accent: "blue",
  },
  {
    title: "Design Missions",
    description:
      "Work on UI concepts, wireframes, visual systems, and interaction ideas.",
    accent: "cyan",
  },
  {
    title: "Open Source Missions",
    description:
      "Fix issues, improve documentation, refactor components, or contribute to club repositories.",
    accent: "blue",
  },
  {
    title: "Hackathon Missions",
    description:
      "Build fast prototypes around real problems and present working demos.",
    accent: "red",
  },
];

const challengeBoard: ChallengeItem[] = [
  {
    title: "Responsive Portfolio",
    category: "Frontend",
    difficulty: "Beginner",
    status: "Active",
    deadline: "This week / Sunday",
    points: 100,
    description:
      "Build a clean personal portfolio with responsive sections, project highlights, and contact details.",
    href: "mailto:hello@devcell.club?subject=Dev%20Cell%20Challenge%20Submission",
  },
  {
    title: "GitHub Profile README",
    category: "Open Source",
    difficulty: "Beginner",
    status: "Upcoming",
    deadline: "Next week",
    points: 50,
    description:
      "Design a polished README that introduces you, your work, and the kind of builder you are becoming.",
    href: "#mission-board",
  },
  {
    title: "Event Landing Page",
    category: "Frontend",
    difficulty: "Intermediate",
    status: "Upcoming",
    deadline: "Coming soon",
    points: 120,
    description:
      "Create an event microsite with schedule, speaker highlights, and mobile-ready call-to-action flow.",
    href: "#mission-board",
  },
  {
    title: "Simple REST API",
    category: "Backend",
    difficulty: "Intermediate",
    status: "Upcoming",
    deadline: "Coming soon",
    points: 150,
    description:
      "Ship a small API with clean routes, validation, and clear response structure for a practical student use case.",
    href: "#mission-board",
  },
  {
    title: "UI Redesign Sprint",
    category: "Design",
    difficulty: "Beginner",
    status: "Closed",
    deadline: "Last week",
    points: 80,
    description:
      "Refresh an existing student interface with stronger hierarchy, cleaner spacing, and clearer interaction cues.",
    href: "#past-missions",
  },
];

const participationSteps = [
  "Pick a mission",
  "Build your solution",
  "Push it to GitHub",
  "Deploy it if possible",
  "Submit your links",
  "Get feedback and points",
];

const beginnerChecklist = [
  "Start with simple HTML/CSS tasks",
  "Ask for help in the community",
  "Submit even if it is not perfect",
  "Learn from review comments",
  "Try again next week",
];

const recognitionPreview: RecognitionItem[] = [
  {
    title: "Weekly builders",
    text: "Students who showed up, shipped something, and kept momentum alive.",
  },
  {
    title: "Top contributors",
    text: "Builders who help others, review work, and make the whole crew sharper.",
  },
  {
    title: "Most improved",
    text: "Students whose progress stands out week after week through steady iteration.",
  },
  {
    title: "Featured submissions",
    text: "Projects worth spotlighting for clarity, creativity, or thoughtful execution.",
  },
];

const pastMissions: PastMission[] = [
  {
    title: "Portfolio Starter",
    difficulty: "Beginner",
    points: 90,
    outcome:
      "Students shipped their first personal sites and learned how to present work with confidence.",
  },
  {
    title: "Git Basics Task",
    difficulty: "Beginner",
    points: 60,
    outcome:
      "New contributors practiced commits, pull requests, and the habits that make collaboration smoother.",
  },
  {
    title: "Landing Page Sprint",
    difficulty: "Intermediate",
    points: 120,
    outcome:
      "Builders focused on layout structure, responsive polish, and clean deployment under a short deadline.",
  },
];

const challengeSignals = [
  { label: "Pressure Level", value: "Low Ego", text: "Challenges reward momentum and iteration, not perfection theater." },
  { label: "Feedback Loop", value: "Weekly", text: "Students build, submit, learn, and come back sharper the next cycle." },
  { label: "Visibility", value: "Recognition On", text: "Useful effort should feel seen by the crew." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ChallengesAnimatedBlock({
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

function ChallengesSectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="challenges-section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function challengeCtaLabel(status: ChallengeStatus) {
  if (status === "Active") {
    return "Submit to Mission";
  }

  if (status === "Upcoming") {
    return "Queue This Mission";
  }

  return "Review Mission";
}

export function ChallengesPage() {
  return (
    <main className="challenges-page" id="top">
      <Navbar />

      <section
        className="challenges-hero"
        aria-labelledby="challenges-page-title"
      >
        <div className="challenges-hero-grid" aria-hidden="true" />
        <div className="challenges-hero-frame" aria-hidden="true" />
        <ChallengesAnimatedBlock className="challenges-hero-content">
          <p className="eyebrow">Weekly Builder Missions</p>
          <h1 id="challenges-page-title">Build small. Ship weekly. Grow fast.</h1>
          <p>
            Take on practical web development challenges, submit your work, get
            feedback, and improve with the Dev Cell community.
          </p>
          <div className="challenges-actions">
            <a className="challenges-primary-link" href="#active-mission">
              Open Active Mission
            </a>
            <a
              className="challenges-secondary-link"
              href="mailto:hello@devcell.club?subject=Dev%20Cell%20Challenge%20Submission"
            >
              Submit Your Build
            </a>
          </div>
        </ChallengesAnimatedBlock>
      </section>

      <section className="content-section page-command-band-section">
        <ChallengesAnimatedBlock>
          <CommandBand items={challengeSignals} variant="challenges" />
        </ChallengesAnimatedBlock>
      </section>

      <section
        className="content-section challenges-section"
        id="active-mission"
      >
        <div className="section-shell section-shell--header">
          <ChallengesSectionHeader
            eyebrow="Priority Signal / Active Mission"
            title="Active Mission"
            text="A practical weekly build you can start right now, even if you are still early in your journey."
          />
          <SignalAside
            label="Mission Intent"
            text="The challenge board should feel like a live operations queue, not a static list of homework prompts."
          />
        </div>
        <ChallengesAnimatedBlock className="active-mission-card">
          <div className="active-mission-card__topline">
            <span className="active-mission-card__status">Active</span>
            <span className="active-mission-card__category">
              {activeMission.category}
            </span>
          </div>
          <div className="active-mission-card__layout">
            <div className="active-mission-card__body">
              <h3>{activeMission.title}</h3>
              <p>{activeMission.description}</p>
              <div className="active-mission-card__submission">
                <span>Submission</span>
                <p>GitHub repository link and optional live demo link.</p>
              </div>
              <div className="challenges-actions">
                <Magnet>
                  <a
                    className="challenges-primary-link"
                    href={activeMission.href ?? "#mission-board"}
                  >
                    Open Mission Brief
                  </a>
                </Magnet>
                <Magnet>
                  <a
                    className="challenges-secondary-link"
                    href="mailto:hello@devcell.club?subject=Dev%20Cell%20Challenge%20Submission"
                  >
                    Submit to Mission
                  </a>
                </Magnet>
              </div>
            </div>
            <div className="active-mission-card__facts" aria-label="Mission facts">
              <div className="active-mission-card__fact">
                <span>Difficulty</span>
                <strong>{activeMission.difficulty}</strong>
              </div>
              <div className="active-mission-card__fact">
                <span>Deadline</span>
                <strong>{activeMission.deadline}</strong>
              </div>
              <div className="active-mission-card__fact">
                <span>Reward</span>
                <strong>{activeMission.points} points</strong>
              </div>
            </div>
          </div>
        </ChallengesAnimatedBlock>
      </section>

      <section className="content-section challenges-section">
        <ChallengesSectionHeader
          eyebrow="Mission Types / Find Your Track"
          title="Choose your kind of challenge"
          text="Different missions help different students start building in the way that feels most natural to them."
        />
        <div className="challenges-type-grid">
          {missionTypes.map((missionType) => (
            <ChallengesAnimatedBlock
              className={`challenges-type-card challenges-type-card--${missionType.accent}`}
              key={missionType.title}
            >
              <span className="challenges-type-card__accent" aria-hidden="true" />
              <h3>{missionType.title}</h3>
              <p>{missionType.description}</p>
            </ChallengesAnimatedBlock>
          ))}
        </div>
      </section>

      <section
        className="content-section challenges-section"
        id="mission-board"
      >
        <ChallengesSectionHeader
          eyebrow="Mission Board / Weekly Queue"
          title="Mission Board"
          text="A mix of active, upcoming, and closed missions so students can see what to build now and what is coming next."
        />
        <ScrollStack className="challenge-board-stack">
          {challengeBoard.map((challenge) => (
            <ScrollStackItem index={challengeBoard.indexOf(challenge)} key={challenge.title}>
              <ChallengesAnimatedBlock
                className={`challenge-board-card challenge-board-card--${challenge.status.toLowerCase()}`}
              >
                <div className="challenge-board-card__topline">
                  <span className="challenge-board-card__category">
                    <ShinyText>{challenge.category}</ShinyText>
                  </span>
                  <span
                    className={`challenge-board-card__status challenge-board-card__status--${challenge.status.toLowerCase()}`}
                  >
                    {challenge.status}
                  </span>
                </div>
                <h3>{challenge.title}</h3>
                <div className="challenge-board-card__meta">
                  <span>{challenge.difficulty}</span>
                  <span>{challenge.deadline}</span>
                  <span>{challenge.points} pts</span>
                </div>
                <p>{challenge.description}</p>
                <a className="challenges-text-link" href={challenge.href ?? "#mission-board"}>
                  {challengeCtaLabel(challenge.status)}
                </a>
              </ChallengesAnimatedBlock>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <section className="content-section challenges-section">
        <ChallengesAnimatedBlock className="challenges-flow-panel">
          <ChallengesSectionHeader
            eyebrow="Submission Flow / How To Participate"
            title="How to participate"
            text="You do not need to be perfect. The goal is to build consistently, learn from feedback, and improve every week."
          />
          <div className="challenges-flow-grid">
            {participationSteps.map((step, index) => (
              <div className="challenges-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </ChallengesAnimatedBlock>
      </section>

      <section className="content-section challenges-section">
        <ChallengesAnimatedBlock className="challenges-beginner-panel">
          <ChallengesSectionHeader
            eyebrow="New Here / Beginner Friendly"
            title="New to web development?"
            text="Start with beginner missions. You can ask doubts, attend build nights, get help from seniors, and submit even small improvements. Dev Cell challenges are meant to help students learn by making."
          />
          <div className="challenges-beginner-checklist">
            {beginnerChecklist.map((item) => (
              <div className="challenges-beginner-checklist__item" key={item}>
                <span aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </ChallengesAnimatedBlock>
      </section>

      <section className="content-section challenges-section">
        <div className="section-shell section-shell--header">
          <ChallengesSectionHeader
            eyebrow="Recognition / Why It Matters"
            title="Build. Submit. Get recognized."
            text="Points are used to recognize consistent participation, helpful contributors, and students who ship regularly."
          />
          <SignalAside
            label="Crew Psychology"
            text="Recognition works best when it feels like momentum tracking from a real builder culture, not gamified decoration."
          />
        </div>
        <div className="challenges-recognition-grid">
          {recognitionPreview.map((item) => (
            <ChallengesAnimatedBlock className="challenges-recognition-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ChallengesAnimatedBlock>
          ))}
        </div>
        <div className="challenges-inline-cta">
          <button
            className="challenges-secondary-link"
            title="Leaderboard coming soon"
            type="button"
          >
            View Leaderboard
          </button>
        </div>
      </section>

      <section
        className="content-section challenges-section"
        id="past-missions"
      >
        <ChallengesSectionHeader
          eyebrow="Mission Archive / Closed Builds"
          title="Past Missions"
          text="A quick preview of the kinds of weekly builds students have already taken on."
        />
        <div className="challenges-archive-grid">
          {pastMissions.map((mission) => (
            <ChallengesAnimatedBlock className="challenges-archive-card" key={mission.title}>
              <div className="challenges-archive-card__meta">
                <span>{mission.difficulty}</span>
                <span>{mission.points} pts</span>
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.outcome}</p>
              <a className="challenges-text-link" href="#past-missions">
                View Details
              </a>
            </ChallengesAnimatedBlock>
          ))}
        </div>
      </section>

      <section className="content-section challenges-section challenges-final-section">
        <ChallengesAnimatedBlock className="challenges-final-panel">
          <ChallengesSectionHeader
            eyebrow="Access Point / Final Call"
            title="Ready for your first mission?"
            text="Pick a challenge, build something small, and submit your work. Dev Cell is built for students who learn by doing."
          />
          <div className="challenges-actions challenges-actions--center">
            <a className="challenges-primary-link" href="#active-mission">
              Open Active Mission
            </a>
            <a className="challenges-secondary-link" href="mailto:hello@devcell.club">
              Join Builder Channel
            </a>
            <a className="challenges-secondary-link" href="/projects">
              Open Build Archive
            </a>
          </div>
        </ChallengesAnimatedBlock>
      </section>

      <footer className="challenges-footer">
        <a href="/">Dev Cell Club</a>
        <span>Weekly missions, steady progress, and a crew that wants you to keep shipping.</span>
      </footer>
    </main>
  );
}
