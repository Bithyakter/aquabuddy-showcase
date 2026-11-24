"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import WavingCharacter, { type CharacterSkin } from "./WavingCharacter";

type SceneKey = "idle" | "reminder" | "celebration" | "sad" | "stretch" | "eyeBreak" | "breathe";

interface SceneConfig {
    label: string;
    file?: string;
    alt: string;
    bubble: { text: string; actions?: [string, string] } | null;
}

const scenes: Record<SceneKey, SceneConfig> = {
    idle: {
        label: "Idle",
        file: "standing.png",
        alt: "AquaBuddy standing quietly off to the side",
        bubble: null
    },
    reminder: {
        label: "Reminder",
        alt: "AquaBuddy waving with a reminder message",
        bubble: {
            text: "🥤 Afternoon check! Have you had enough water today?",
            actions: ["💧 I Drank", "😴 Snooze"]
        }
    },
    celebration: {
        label: "Celebration",
        file: "drinking.png",
        alt: "AquaBuddy celebrating after a reminder is answered",
        bubble: { text: "Yayyy!! 💖 Good job staying hydrated!" }
    },
    sad: {
        label: "Snoozed",
        file: "sad.png",
        alt: "AquaBuddy waiting patiently after a snooze",
        bubble: { text: "Okkayy 🥺 I'll remind you again soon." }
    },
    stretch: {
        label: "Stretching",
        file: "stretching.png",
        alt: "AquaBuddy stretching with hands on the lower back",
        bubble: {
            text: "Stretch time! 🧘\nReach up, roll those shoulders.",
            actions: ["🧘 Take a Break", "⏰ Later"]
        }
    },
    eyeBreak: {
        label: "Eye Break",
        file: "eye-break.png",
        alt: "AquaBuddy resting both hands over closed eyes",
        bubble: {
            text: "Eye break! 👀\nLook far away for 20 seconds.",
            actions: ["🧘 Take a Break", "⏰ Later"]
        }
    },
    breathe: {
        label: "Breathing",
        file: "breathing.png",
        alt: "AquaBuddy standing calmly with both hands on the chest",
        bubble: {
            text: "Quick breather 🌬️\nTake 3 slow, deep breaths.",
            actions: ["🧘 Take a Break", "⏰ Later"]
        }
    }
};

const sceneOrder: SceneKey[] = ["idle", "reminder", "celebration", "sad", "stretch", "eyeBreak", "breathe"];

const skinOptions: { id: CharacterSkin; label: string; icon: string }[] = [
    { id: "default", label: "Classic Skin", icon: "💧" },
    { id: "character-2", label: "Character 2 (Male)", icon: "👦" }
];

export default function AppShowcase() {
    const [active, setActive] = useState<SceneKey>("reminder");
    const [skin, setSkin] = useState<CharacterSkin>("default");
    const scene = scenes[active];

    const spritePath = scene.file
        ? `/images/${skin === "character-2" ? "character-2" : "character"}/${scene.file}`
        : null;

    return (
        <section id="showcase" className="bg-canvas-alt py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Application Showcase"
                    title="The actual interface, rebuilt here in the browser"
                    description="This isn't a screenshot — it's the real character art and the real interaction copy, laid out with the same colors AquaBuddy's speech bubble and buttons actually use. Toggle between the classic buddy and Character 2 (the male companion skin), and preview water reminders and stress-relief poses."
                    align="center"
                />

                {/* Character skin switcher */}
                <Reveal className="mx-auto mt-12 flex max-w-sm justify-center gap-2 rounded-full border border-line bg-surface/90 p-1.5 shadow-sm">
                    {skinOptions.map((opt) => (
                        <button
                            key={opt.id}
                            type="button"
                            onClick={() => setSkin(opt.id)}
                            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${skin === opt.id
                                    ? "bg-aqua-400 text-on-accent shadow-sm"
                                    : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            <span>{opt.icon}</span>
                            <span>{opt.label}</span>
                        </button>
                    ))}
                </Reveal>

                {/* Scene buttons */}
                <Reveal delay={0.05} className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2 rounded-3xl border border-line bg-surface/70 p-1.5">
                    {sceneOrder.map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setActive(key)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === key
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
                            <span className="ml-3 font-data text-[11px] text-text-muted">
                                desktop — always on top • {skin === "character-2" ? "Character 2" : "Classic"}
                            </span>
                        </div>

                        <div className="relative flex h-[460px] items-end justify-center overflow-hidden bg-gradient-to-b from-[#0f1c30] to-[#0a1220] px-6 pb-10">
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
                                            <p className="whitespace-pre-line text-[13px] font-semibold leading-snug text-[#5C4A4A]">
                                                {scene.bubble.text}
                                            </p>
                                            {scene.bubble.actions ? (
                                                <div className="mt-3 flex justify-center gap-2">
                                                    <span className="rounded-[10px] bg-[#57d86b] px-3 py-1.5 text-[11px] font-bold text-white">
                                                        {scene.bubble.actions[0]}
                                                    </span>
                                                    <span className="rounded-[10px] bg-[#ececec] px-3 py-1.5 text-[11px] font-bold text-[#333]">
                                                        {scene.bubble.actions[1]}
                                                    </span>
                                                </div>
                                            ) : null}
                                            <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-[10px] border-x-transparent border-t-[#FFF8FC]" />
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>

                                <motion.div
                                    key={active + "-" + skin}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {active === "reminder" ? (
                                        <WavingCharacter skin={skin} className="h-55 w-auto" />
                                    ) : spritePath ? (
                                        <Image
                                            src={spritePath}
                                            alt={scene.alt}
                                            width={220}
                                            height={280}
                                            className="h-55 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                                        />
                                    ) : null}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {["stretch", "eyeBreak", "breathe"].includes(active) && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mx-auto mt-5 max-w-xl rounded-2xl border border-line bg-surface/80 p-3 text-center text-xs text-text-secondary"
                    >
                        <span className="font-semibold text-aqua-400">⚡ Smart Work Detection:</span> Stress-relief breaks rely on continuous keyboard and mouse movement. If you step away from your desk, go to lunch, or put your laptop to sleep, the timer resets automatically so you are only prompted after uninterrupted desk work.
                    </motion.div>
                )}
            </Container>
        </section>
    );
}
