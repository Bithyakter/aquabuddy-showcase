"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, MonitorSmartphone, Code2, Scale } from "lucide-react";
import Container from "./ui/Container";
import { GitHubMark } from "./ui/icons";
import { site } from "@/lib/site";

const trustPoints = [
    { icon: MonitorSmartphone, label: "Windows desktop app" },
    { icon: Code2, label: "TypeScript, strict mode" },
    { icon: Scale, label: "MIT licensed" }
];

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-40">
            {/* signature glow — the one place this page spends its color budget */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-12%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-aqua-500/25 blur-[130px] animate-drift" />
                <div className="absolute right-[6%] top-[26%] h-[360px] w-[360px] rounded-full bg-coral-500/12 blur-[110px]" />
                <div
                    className="absolute inset-0 opacity-[0.06] dark:opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, var(--color-text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-primary) 1px, transparent 1px)",
                        backgroundSize: "56px 56px"
                    }}
                />
            </div>

            <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium text-aqua-300 shadow-sm"
                    >
                        <Sparkles size={13} />
                        Desktop wellness companion for Windows
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="mt-6 text-balance font-display text-6xl font-bold leading-[1.02] tracking-tight text-text-primary sm:text-7xl"
                    >
                        {site.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16 }}
                        className="mt-4 max-w-lg text-balance font-display text-2xl font-semibold bg-gradient-to-r from-aqua-300 to-aqua-500 bg-clip-text text-transparent sm:text-3xl"
                    >
                        {site.tagline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.24 }}
                        className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-secondary"
                    >
                        Instead of another toast notification you dismiss on reflex, AquaBuddy actually
                        walks onto your screen, says hi, and waits for you to tell it whether you drank
                        some water or need a little more time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.32 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={site.downloadUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group flex items-center gap-2 rounded-full bg-aqua-400 px-7 py-3.5 text-sm font-semibold text-on-accent shadow-lg shadow-aqua-500/40 ring-2 ring-aqua-400/30 ring-offset-2 ring-offset-canvas transition-transform hover:scale-[1.03] hover:bg-aqua-300"
                        >
                            <Download size={16} />
                            Download for Windows
                        </a>
                        <a
                            href="#features"
                            className="group flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-aqua-400/60 hover:text-aqua-300"
                        >
                            Explore Features
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href={site.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-2 px-2 py-3 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                        >
                            <GitHubMark size={17} />
                            GitHub
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line/70 pt-6"
                    >
                        {trustPoints.map((point) => (
                            <div key={point.label} className="flex items-center gap-2 text-xs font-medium text-text-muted">
                                <point.icon size={14} className="text-aqua-400" />
                                {point.label}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none"
                >
                    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-aqua-500/20 to-transparent blur-2xl" />

                    <div className="relative animate-float">
                        <div className="absolute bottom-2 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-aqua-900/20 blur-xl dark:bg-black/40" />

                        <Image
                            src="/images/character/waving.png"
                            alt="AquaBuddy character waving hello"
                            width={380}
                            height={475}
                            priority
                            className="relative z-10 h-auto w-[280px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:w-[360px]"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute -top-16 right-0 z-20 w-52 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:-top-20 sm:-right-6 sm:w-56"
                        >
                            <p className="text-sm font-medium leading-snug text-text-primary">
                                💧 Stay refreshed and keep your energy up.
                            </p>
                            <div className="mt-3 flex gap-2">
                                <span className="rounded-lg bg-aqua-400 px-2.5 py-1 text-[11px] font-semibold text-on-accent">
                                    I Drank
                                </span>
                                <span className="rounded-lg bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-text-secondary">
                                    Snooze
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -16, y: 10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="absolute bottom-8 -left-4 z-20 flex items-center gap-2 rounded-full border border-line bg-surface/95 px-3.5 py-2 text-xs font-semibold text-text-primary shadow-xl shadow-black/30 backdrop-blur sm:-left-10"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-aqua-400" />
                            Checks in every 15–90 min
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
