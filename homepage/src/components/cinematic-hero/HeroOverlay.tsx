import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Navbar } from "./Navbar";
import { ScrollCue } from "./ScrollCue";

type HeroOverlayProps = {
  cueOpacity?: MotionValue<number>;
  overlayOpacity?: MotionValue<number>;
  hideScrollCue?: boolean;
};

export function HeroOverlay({
  cueOpacity,
  overlayOpacity,
  hideScrollCue = false,
}: HeroOverlayProps) {
  return (
    <motion.div className="hero-overlay" style={{ opacity: overlayOpacity }}>
      <Navbar />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-top-fade" aria-hidden="true" />
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="hud-line hud-line-left" aria-hidden="true" />
      <div className="hud-line hud-line-right" aria-hidden="true" />
      {!hideScrollCue && <ScrollCue opacity={cueOpacity} />}
    </motion.div>
  );
}
