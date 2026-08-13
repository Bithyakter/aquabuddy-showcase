"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "./ui/Container";
import { GitHubMark } from "./ui/icons";
import { site } from "@/lib/site";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
            {/* signature glow — the one place this page spends its color budget */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-aqua-500/20 blur-[120px] animate-drift" />
                <div className="absolute right-[8%] top-[30%] h-[320px] w-[320px] rounded-full bg-coral-500/10 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
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
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-medium text-aqua-300"
                    >
                        <Sparkles size={13} />
                        Desktop wellness companion for Windows
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] text-text-primary sm:text-6xl"
                    >
                        {site.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16 }}
                        className="mt-4 max-w-lg text-balance font-display text-2xl font-semibold text-aqua-300 sm:text-3xl"
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
                            href="#features"
                            className="group flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-aqua-300"
                        >
                            Explore Features
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#showcase"
                            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-aqua-400/60 hover:text-aqua-300"
                        >
                            View Project
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
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none"
                >
                    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-aqua-500/15 to-transparent blur-2xl" />

                    <div className="relative animate-float">
                        <Image
                            src="/images/character/waving.png"
                            alt="AquaBuddy character waving hello"
                            width={340}
                            height={425}
                            priority
                            className="relative z-10 h-auto w-[260px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:w-[320px]"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="absolute -top-16 right-0 z-20 w-52 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:-top-20 sm:-right-4 sm:w-56"
                        >
                            <p className="text-sm font-medium leading-snug text-text-primary">
                                💧 Stay refreshed and keep your energy up.
                            </p>
                            <div className="mt-3 flex gap-2">
                                <span className="rounded-lg bg-aqua-400 px-2.5 py-1 text-[11px] font-semibold text-ink">
                                    I Drank
                                </span>
                                <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-text-secondary">
                                    Snooze
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
