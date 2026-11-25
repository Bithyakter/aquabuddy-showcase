"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, FileText } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { workflow } from "@/data/workflow";
import { site } from "@/lib/site";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="How It Works"
                    title="One loop, repeating quietly all day"
                    align="center"
                />

                <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-aqua-400 via-aqua-300 to-coral-400 lg:block"
                    />

                    {workflow.map((item, i) => (
                        <Reveal key={item.step} delay={i * 0.1} className="relative">
                            <motion.div
                                initial={{ scale: 0.7 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-aqua-400/40 bg-canvas font-data text-sm font-semibold text-aqua-300 shadow-sm"
                            >
                                {item.step}
                            </motion.div>
                            <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                {item.description}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.35} className="mt-14">
                    <div className="relative overflow-hidden rounded-3xl border border-aqua-500/25 bg-gradient-to-r from-surface/90 via-surface to-aqua-500/10 p-6 sm:p-8 shadow-sm">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-aqua-400/30 bg-aqua-500/15 text-aqua-300">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <h4 className="font-display text-lg font-bold text-text-primary">
                                            AquaBuddy Illustrated User Manual
                                        </h4>
                                        <span className="rounded-full bg-aqua-400/15 border border-aqua-400/30 px-2.5 py-0.5 text-xs font-semibold text-aqua-300">
                                            10 Pages · PDF Guide
                                        </span>
                                    </div>
                                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-text-secondary">
                                        Step-by-step instructions with 10 high-resolution screenshots covering desktop placement, water reminders, 30s/60s/120s escalation, continuous work idle rules, custom intervals, and character skin switching.
                                    </p>
                                </div>
                            </div>
                            <div className="flex shrink-0 items-center">
                                <a
                                    href={site.userManualUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 text-sm font-semibold text-on-accent shadow-md shadow-aqua-500/30 transition-all hover:bg-aqua-300 hover:shadow-aqua-500/50"
                                >
                                    <BookOpen size={16} />
                                    Read User Manual
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
