import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import "./dock.css";

export type DockItemData = {
  href: string;
  label: string;
  meta?: string;
  icon?: ReactNode;
};

type DockProps = {
  items: DockItemData[];
  className?: string;
};

function DockItem({
  item,
  mouseX,
}: {
  item: DockItemData;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();

    if (!bounds || value === Number.POSITIVE_INFINITY) {
      return 180;
    }

    return value - (bounds.left + bounds.width / 2);
  });
  const width = useTransform(distance, [-180, 0, 180], [92, 124, 92]);
  const height = useTransform(distance, [-180, 0, 180], [58, 72, 58]);
  const scale = useSpring(useTransform(distance, [-180, 0, 180], [1, 1.08, 1]), {
    damping: 18,
    stiffness: 180,
    mass: 0.15,
  });

  return (
    <motion.a
      className="dev-dock__item"
      href={item.href}
      ref={ref}
      style={{ width, height, scale }}
    >
      {item.icon ? <span className="dev-dock__icon">{item.icon}</span> : null}
      <span className="dev-dock__label">{item.label}</span>
      {item.meta ? <span className="dev-dock__meta">{item.meta}</span> : null}
    </motion.a>
  );
}

export function Dock({
  items,
  className,
}: DockProps) {
  const mouseX = useMotionValue<number>(Number.POSITIVE_INFINITY);

  return (
    <motion.div
      className={`dev-dock${className ? ` ${className}` : ""}`}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      onMouseMove={(event) => mouseX.set(event.clientX)}
    >
      {items.map((item) => (
        <DockItem item={item} key={item.label} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
