"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BellOff, MonitorX, TabletSmartphone } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const distractions = [
    {
        icon: MonitorX,
        title: "Hours pass without noticing",
        detail: "Deep focus at a desk makes it easy to lose track of time entirely — water included.",
        nudge: { y: -3 }
    },
    {
        icon: TabletSmartphone,
        title: "Buried under other notifications",
        detail: "A phone reminder is one more toast in a stack of a dozen others, dismissed on reflex.",
        nudge: { x: 4, rotate: -6 }
    },
    {
        icon: BellOff,
        title: "Tracking apps get closed and forgotten",
        detail: "A browser tab for a water-tracking site closes with the rest of the tabs and never comes back.",
        nudge: { rotate: -10 }
    }
];

export default function Problem() {
    const reduced = useReducedMotion();
    const [active, setActive] = useState<number | null>(null);

    function toggle(index: number) {
        setActive((current) => (current === index ? null : index));
    }

    return (
        <section className="bg-canvas-alt py-24 sm:py-32">
            <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <SectionHeading
                    eyebrow="The Problem"
                    title="Hydration reminders that are easy to ignore, aren't reminders at all."
                    description="Most desk work happens in long, heads-down stretches. The tools built to interrupt that — a phone buzz, a browser notification — are competing with everything else fighting for the same sliver of attention, and usually losing."
                />

                <div className="flex flex-col gap-4">
                    {distractions.map((item, index) => {
                        const selected = active === index;
                        const dimmed = active !== null && !selected;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            >
                            <motion.article
                                role="button"
                                tabIndex={0}
                                aria-pressed={selected}
                                onClick={() => toggle(index)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        toggle(index);
                                    }
                                }}
                                animate={{ opacity: dimmed ? 0.45 : 1 }}
                                whileHover={reduced ? undefined : { x: 6 }}
                                transition={{ duration: 0.25 }}
                                className={`group relative cursor-pointer overflow-hidden rounded-[24px] border bg-surface px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                                    selected ? "border-coral-400 shadow-lg shadow-coral-500/10" : "border-line"
                                }`}
                            >
                                <span
                                    aria-hidden
                                    className={`absolute inset-y-0 left-0 w-1 origin-top transition-transform duration-300 ${
                                        selected ? "scale-y-100 bg-coral-400" : "scale-y-0 bg-coral-400 group-hover:scale-y-100"
                                    }`}
                                />
                                <div className="flex items-start gap-4 pl-2">
                                    <span className="font-display text-2xl font-bold leading-none text-coral-400/70">
                                        0{index + 1}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                            <motion.span
                                                className={selected ? "text-coral-400" : "text-text-muted group-hover:text-coral-400"}
                                                whileHover={reduced ? undefined : item.nudge}
                                                transition={{ type: "spring", stiffness: 320, damping: 16 }}
                                            >
                                                <item.icon size={18} strokeWidth={1.75} />
                                            </motion.span>
                                            <h3 className="font-display text-lg font-semibold text-text-primary">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                                    </div>
                                </div>
                            </motion.article>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
