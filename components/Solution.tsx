"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MonitorSmartphone, Sparkle, MousePointerClick, SlidersHorizontal, EyeOff, Zap } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const points = [
    {
        icon: MonitorSmartphone,
        title: "Desktop-first, not a background service",
        detail: "AquaBuddy lives on your screen as a visible, always-on-top character — not a menu-bar icon you forget exists."
    },
    {
        icon: Sparkle,
        title: "A character, deliberately not a toast",
        detail:
            "AquaBuddy doesn't use the OS notification tray at all. It draws its own transparent, click-through overlay window instead — a reminder that has to be looked at, not one that queues up and gets swiped away with everything else."
    },
    {
        icon: MousePointerClick,
        title: "Two-click interaction",
        detail: "\"I Drank\" or \"Snooze\" for water. \"Take a Break\" or \"Later\" for a stretch, an eye rest, or a few breaths. No forms, no app to switch into."
    },
    {
        icon: SlidersHorizontal,
        title: "Customizable schedules",
        detail: "Water check-ins from 15 to 90 minutes, or an exact custom value. Stress-relief breaks after 30, 45, 60, or 90 minutes at your desk, inside the work hours you pick. Do Not Disturb expires on its own."
    },
    {
        icon: EyeOff,
        title: "Minimal distraction",
        detail: "Click-through everywhere except the character itself, so it never blocks a click meant for something behind it."
    },
    {
        icon: Zap,
        title: "Instant, local, no setup",
        detail: "No account, no server round-trip. Preferences save to disk and the reminder engine reschedules itself immediately."
    }
];

const iconMotion = [
    { y: -3 },
    { rotate: 12, scale: 1.08 },
    { x: 4 },
    { x: 3, y: -2 },
    { scale: 1.12 },
    { y: -4, rotate: -8 }
];

export default function Solution() {
    const reduced = useReducedMotion();
    const [active, setActive] = useState<number | null>(null);

    function toggle(index: number) {
        setActive((current) => (current === index ? null : index));
    }

    return (
        <section className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="The Solution"
                    title="Put the reminder somewhere it can't blend into the noise."
                    description="AquaBuddy's core idea: skip the notification tray entirely and bring the reminder onto the desktop itself, as something you can see and react to in two clicks."
                    align="center"
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {points.map((point, i) => {
                        const selected = active === i;
                        const dimmed = active !== null && !selected;
                        const accent = i % 2 === 0;
                        return (
                            <motion.div
                                key={point.title}
                                className="h-full"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                            >
                            <motion.article
                                role="button"
                                tabIndex={0}
                                aria-pressed={selected}
                                onClick={() => toggle(i)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        toggle(i);
                                    }
                                }}
                                animate={{ opacity: dimmed ? 0.5 : 1 }}
                                whileHover={reduced ? undefined : { y: -8 }}
                                transition={{ duration: 0.25 }}
                                className={`group relative h-full cursor-pointer overflow-hidden rounded-[24px] border bg-surface px-6 pt-7 pb-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-aqua-400 ${
                                    selected
                                        ? "border-aqua-400 shadow-lg shadow-aqua-500/15"
                                        : "border-line hover:border-aqua-400/50"
                                }`}
                            >
                                <span
                                    aria-hidden
                                    className={`absolute inset-x-0 top-0 origin-left transition-all duration-300 ${
                                        selected ? "h-1.5" : "h-1 group-hover:h-1.5"
                                    } ${accent ? "bg-aqua-400" : "bg-coral-400"} ${
                                        selected ? "scale-x-100" : "scale-x-40 group-hover:scale-x-100"
                                    }`}
                                />
                                <div className="flex items-start justify-between gap-4">
                                    <motion.span
                                        className={`flex h-9 w-9 items-center justify-center transition-colors ${
                                            selected ? "text-aqua-400" : "text-text-muted group-hover:text-aqua-400"
                                        }`}
                                        whileHover={reduced ? undefined : iconMotion[i]}
                                        transition={{ type: "spring", stiffness: 320, damping: 16 }}
                                    >
                                        <point.icon size={20} strokeWidth={1.75} />
                                    </motion.span>
                                    <span
                                        className={`font-display text-4xl font-bold leading-none transition-all duration-300 ${
                                            selected
                                                ? "translate-y-0 text-aqua-400"
                                                : "text-aqua-200 group-hover:-translate-y-1 group-hover:text-aqua-300"
                                        }`}
                                    >
                                        0{i + 1}
                                    </span>
                                </div>
                                <h3 className="mt-6 font-display text-lg font-semibold text-text-primary">
                                    {point.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{point.detail}</p>
                            </motion.article>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
