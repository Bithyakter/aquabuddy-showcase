"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import WavingCharacter from "./WavingCharacter";

type SceneKey = "idle" | "reminder" | "celebration" | "sad";

const scenes: Record<
    SceneKey,
    {
        label: string;
        sprite?: string;
        alt: string;
        bubble: { text: string; buttons: boolean } | null;
    }
> = {
    idle: {
        label: "Idle",
        sprite: "/images/character/standing.png",
        alt: "AquaBuddy standing quietly off to the side",
        bubble: null
    },
    reminder: {
        label: "Reminder",
        alt: "AquaBuddy waving with a reminder message",
        bubble: { text: "🥤 Afternoon check! Have you had enough water today?", buttons: true }
    },
    celebration: {
        label: "Celebration",
        sprite: "/images/character/drinking.png",
        alt: "AquaBuddy celebrating after a reminder is answered",
        bubble: { text: "Yayyy!! 💖 Good job staying hydrated!", buttons: false }
    },
    sad: {
        label: "Snoozed",
        sprite: "/images/character/sad.png",
        alt: "AquaBuddy waiting patiently after a snooze",
        bubble: { text: "Okkayy 🥺 I'll remind you again soon.", buttons: false }
    }
};

const sceneOrder: SceneKey[] = ["idle", "reminder", "celebration", "sad"];

export default function AppShowcase() {
    const [active, setActive] = useState<SceneKey>("reminder");
    const scene = scenes[active];

    return (
        <section id="showcase" className="border-t border-line/60 bg-canvas-alt py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Application Showcase"
                    title="The actual interface, rebuilt here in the browser"
                    description="This isn't a screenshot — it's the real character art and the real interaction copy, laid out with the same colors AquaBuddy's speech bubble and buttons actually use. The Reminder pose even uses the app's real split hand-and-body layers, so it genuinely waves instead of just sitting there."
                    align="center"
                />

                <Reveal className="mx-auto mt-14 flex max-w-lg justify-center gap-2 rounded-full border border-line bg-surface/70 p-1.5">
                    {sceneOrder.map((key) => (
                        <button
                            key={key}
                            onClick={() => setActive(key)}
                            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                active === key
                                    ? "bg-aqua-400 text-on-accent"
                                    : "text-text-secondary hover:text-text-primary"
                            }`}
                        >
                            {scenes[key].label}
                        </button>
                    ))}
                </Reveal>

                <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
                    <div className="overflow-hidden rounded-3xl border border-line bg-[#0c1424] shadow-2xl shadow-black/50">
                        <div className="flex items-center gap-1.5 border-b border-line/70 bg-surface/60 px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                            <span className="ml-3 font-data text-[11px] text-text-muted">desktop — always on top</span>
                        </div>

                        <div className="relative flex h-[380px] items-end justify-center overflow-hidden bg-gradient-to-b from-[#0f1c30] to-[#0a1220] px-6 pb-10">
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                                    backgroundSize: "40px 40px"
                                }}
                            />

                            <div className="relative">
                                <AnimatePresence>
                                    {scene.bubble ? (
                                        <motion.div
                                            key={active + "-bubble"}
                                            initial={{ opacity: 0, y: 8, scale: 0.92 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.92 }}
                                            transition={{ duration: 0.25 }}
                                            className="absolute -top-6 left-1/2 z-10 w-56 -translate-x-1/2 -translate-y-full rounded-[22px] border-2 border-[#FFD7E7] bg-[#FFF8FC] p-4 text-center shadow-xl"
                                        >
                                            <p className="text-[13px] font-semibold leading-snug text-[#5C4A4A]">
                                                {scene.bubble.text}
                                            </p>
                                            {scene.bubble.buttons ? (
                                                <div className="mt-3 flex justify-center gap-2">
                                                    <span className="rounded-[10px] bg-[#57d86b] px-3 py-1.5 text-[11px] font-bold text-white">
                                                        💧 I Drank
                                                    </span>
                                                    <span className="rounded-[10px] bg-[#ececec] px-3 py-1.5 text-[11px] font-bold text-[#333]">
                                                        😴 Snooze
                                                    </span>
                                                </div>
                                            ) : null}
                                            <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-[10px] border-x-transparent border-t-[#FFF8FC]" />
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>

                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {active === "reminder" ? (
                                        <WavingCharacter heightPx={220} />
                                    ) : (
                                        <Image
                                            src={scene.sprite as string}
                                            alt={scene.alt}
                                            width={220}
                                            height={280}
                                            className="h-55 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                                        />
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
