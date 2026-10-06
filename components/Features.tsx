"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    Activity,
    Clock,
    Hand,
    MessageSquare,
    Moon,
    MousePointerClick,
    Move,
    Save,
    Smile,
    type LucideIcon
} from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { features, type Feature } from "@/data/features";

const iconMap: Record<Feature["icon"], LucideIcon> = {
    activity: Activity,
    clock: Clock,
    moon: Moon,
    smile: Smile,
    handWave: Hand,
    messageSquare: MessageSquare,
    mousePointerClick: MousePointerClick,
    move: Move,
    save: Save
};

const INTERVALS = ["15", "30", "45", "60", "90"];
const BREAKS = ["Stretch", "Eye break", "Breathe"];

const bubbles: { icon: Feature["icon"]; kicker: string; rotate: number }[] = [
    { icon: "handWave", kicker: "Walks in", rotate: -1.5 },
    { icon: "smile", kicker: "If you look away", rotate: 1.4 },
    { icon: "messageSquare", kicker: "Changes with the hour", rotate: -0.4 }
];

const quiet: { icon: Feature["icon"]; nudge: { x?: number[]; y?: number[]; rotate?: number[] } }[] = [
    { icon: "mousePointerClick", nudge: { x: [0, 7, 0] } },
    { icon: "move", nudge: { x: [0, 5, -3, 0], y: [0, -4, 2, 0] } },
    { icon: "save", nudge: { y: [0, -3, 0] } }
];

function featureByIcon(icon: Feature["icon"]): Feature {
    const match = features.find((feature) => feature.icon === icon);
    if (!match) {
        throw new Error(`Missing feature: ${icon}`);
    }
    return match;
}

export default function Features() {
    const reduced = useReducedMotion();
    const [intervalIndex, setIntervalIndex] = useState(3);
    const [breakIndex, setBreakIndex] = useState(0);

    useEffect(() => {
        if (reduced) return;
        const intervalTimer = window.setInterval(() => {
            setIntervalIndex((index) => (index + 1) % INTERVALS.length);
        }, 1400);
        const breakTimer = window.setInterval(() => {
            setBreakIndex((index) => (index + 1) % BREAKS.length);
        }, 1800);
        return () => {
            window.clearInterval(intervalTimer);
            window.clearInterval(breakTimer);
        };
    }, [reduced]);

    const reminders = featureByIcon("clock");
    const dnd = featureByIcon("moon");
    const relief = featureByIcon("activity");

    return (
        <section id="features" className="relative overflow-hidden bg-canvas-alt py-24 sm:py-32">
            <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-aqua-400/20 blur-3xl animate-drift" />
            <div className="pointer-events-none absolute right-[-4rem] bottom-10 h-64 w-64 rounded-full bg-coral-500/15 blur-3xl animate-float" />

            <Container className="relative">
                <SectionHeading
                    eyebrow="Core Features"
                    title="Everything AquaBuddy actually does"
                    description="No feature here is aspirational — each maps directly to a piece of the app's reminder engine, state machine, or preferences system."
                    align="center"
                />

                <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
                    {bubbles.map((item, index) => {
                        const feature = featureByIcon(item.icon);
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.article
                                key={feature.title}
                                initial={{ opacity: 0, y: 28, rotate: 0 }}
                                whileInView={{ opacity: 1, y: 0, rotate: reduced ? 0 : item.rotate }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20,
                                    delay: index * 0.08
                                }}
                                whileHover={reduced ? undefined : { y: -8, rotate: 0 }}
                                className="relative flex h-full flex-col rounded-[22px] border-2 border-[#FFD7E7] bg-[#FFF8FC] px-5 pt-5 pb-7 shadow-[0_16px_40px_rgba(255,182,193,0.28)]"
                            >
                                <div className="flex items-center gap-2 text-[#e2593c]">
                                    <Icon
                                        size={16}
                                        className={item.icon === "handWave" && !reduced ? "animate-hand-wave" : undefined}
                                    />
                                    <span className="font-data text-[11px] font-medium tracking-wide uppercase">
                                        {item.kicker}
                                    </span>
                                </div>
                                <h3 className="mt-3 font-display text-xl font-semibold text-[#5C4A4A]">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#5C4A4A]/80">
                                    {feature.description}
                                </p>
                                <span
                                    aria-hidden
                                    className="absolute -bottom-3 left-10 h-0 w-0 border-x-[11px] border-t-[12px] border-x-transparent border-t-[#FFF8FC]"
                                />
                                <span
                                    aria-hidden
                                    className="absolute -bottom-[15px] left-[38px] -z-10 h-0 w-0 border-x-[12px] border-t-[14px] border-x-transparent border-t-[#FFD7E7]"
                                />
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mt-14 overflow-hidden rounded-[32px] border border-line bg-surface shadow-sm"
                >
                    <div
                        className="pointer-events-none absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: "radial-gradient(circle, var(--color-aqua-200) 1.1px, transparent 1.1px)",
                            backgroundSize: "18px 18px"
                        }}
                    />
                    <div className="relative p-6 sm:p-8 lg:p-10">
                        <p className="font-data text-[11px] font-medium tracking-[0.18em] text-aqua-400 uppercase">
                            On your clock
                        </p>
                        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-xl">
                                <h3 className="font-display text-3xl font-bold text-text-primary">
                                    {reminders.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                                    {reminders.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                {INTERVALS.map((mark, index) => {
                                    const active = index === intervalIndex;
                                    return (
                                        <span
                                            key={mark}
                                            className="relative inline-flex h-9 min-w-12 items-center justify-center px-3 font-data text-xs font-medium"
                                        >
                                            {active ? (
                                                <motion.span
                                                    layoutId={reduced ? undefined : "interval-pill"}
                                                    className="absolute inset-0 rounded-full bg-[#57d86b]"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            ) : null}
                                            <span className={`relative ${active ? "text-white" : "text-text-secondary"}`}>
                                                {mark}m
                                            </span>
                                        </span>
                                    );
                                })}
                                <span className="rounded-full border border-dashed border-line px-3 py-2 font-data text-xs text-text-muted">
                                    or your own
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-line bg-canvas/80 p-5 backdrop-blur-sm">
                                <motion.div
                                    animate={reduced ? undefined : { rotate: [0, -14, 8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-aqua-400"
                                >
                                    <Moon size={18} />
                                </motion.div>
                                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">{dnd.title}</h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{dnd.description}</p>
                            </div>

                            <div className="rounded-2xl border border-line bg-canvas/80 p-5 backdrop-blur-sm">
                                <div className="flex flex-wrap gap-2">
                                    {BREAKS.map((label, index) => {
                                        const active = index === breakIndex;
                                        return (
                                            <span
                                                key={label}
                                                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                                    active
                                                        ? "bg-aqua-400 text-on-accent"
                                                        : "bg-surface-2 text-text-muted"
                                                }`}
                                            >
                                                {label}
                                            </span>
                                        );
                                    })}
                                </div>
                                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                                    {relief.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{relief.description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-5 grid gap-5 md:grid-cols-3">
                    {quiet.map((item, index) => {
                        const feature = featureByIcon(item.icon);
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.article
                                key={feature.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="group rounded-[24px] border border-line bg-surface/70 px-5 py-5"
                            >
                                <motion.div
                                    className="text-coral-400"
                                    animate={reduced ? undefined : item.nudge}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                                >
                                    <Icon size={20} />
                                </motion.div>
                                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                                    {feature.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                                    {feature.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
