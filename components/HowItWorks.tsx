"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { workflow } from "@/data/workflow";

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
            </Container>
        </section>
    );
}
