import type { CSSProperties } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./background-beams.css";

type BeamSpec = {
  left: string;
  rotation: string;
  delay: string;
  duration: string;
  sway: string;
  shiftX: string;
  tone?: "default" | "soft";
};

type BackgroundBeamsProps = {
  className?: string;
};

const beamSpecs: BeamSpec[] = [
  { left: "4%", rotation: "-28deg", delay: "-2.4s", duration: "18s", sway: "5deg", shiftX: "1.5rem", tone: "soft" },
  { left: "16%", rotation: "-18deg", delay: "-6.8s", duration: "15s", sway: "4deg", shiftX: "1.1rem" },
  { left: "31%", rotation: "-8deg", delay: "-4.2s", duration: "17s", sway: "3.2deg", shiftX: "0.8rem", tone: "soft" },
  { left: "48%", rotation: "4deg", delay: "-7.5s", duration: "19s", sway: "3deg", shiftX: "0.95rem" },
  { left: "63%", rotation: "11deg", delay: "-1.8s", duration: "16s", sway: "4.5deg", shiftX: "1.25rem", tone: "soft" },
  { left: "79%", rotation: "19deg", delay: "-5.1s", duration: "20s", sway: "5.2deg", shiftX: "1.45rem" },
  { left: "91%", rotation: "28deg", delay: "-3.3s", duration: "18s", sway: "4.8deg", shiftX: "1.2rem", tone: "soft" },
];

function beamStyle(spec: BeamSpec): CSSProperties {
  return {
    left: spec.left,
    ["--beam-rotation" as string]: spec.rotation,
    ["--beam-delay" as string]: spec.delay,
    ["--beam-duration" as string]: spec.duration,
    ["--beam-sway" as string]: spec.sway,
    ["--beam-shift-x" as string]: spec.shiftX,
  };
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`background-beams${className ? ` ${className}` : ""}`}
    >
      <div className="background-beams__layer">
        <div className="background-beams__glow background-beams__glow--left" />
        <div className="background-beams__glow background-beams__glow--right" />
        <div className="background-beams__glow background-beams__glow--bottom" />
      </div>
      <div className="background-beams__layer">
        {beamSpecs.map((spec, index) => {
          const toneClass =
            spec.tone === "soft" ? " background-beams__beam--soft" : "";
          const motionClass = reducedMotion
            ? " background-beams__beam--still"
            : index % 2 === 0
              ? " background-beams__beam--slow"
              : " background-beams__beam--pulse";

          return (
            <span
              className={`background-beams__beam${toneClass}${motionClass}`}
              key={`${spec.left}-${spec.rotation}`}
              style={beamStyle(spec)}
            />
          );
        })}
      </div>
    </div>
  );
}
