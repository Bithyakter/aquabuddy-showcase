"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { futureIdeas } from "@/data/future";

const tilts = [-1.4, 1.1, -0.5, 1.3];

export default function FutureImprovements() {
    const reduced = useReducedMotion();

    return (
        <section className="bg-canvas-alt py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Future Ideas"
                    title="Where this could go next"
                    description="None of this is built yet — listed here as direction, not a roadmap with dates."
                    align="center"
                />

                <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
                    {futureIdeas.map((idea, index) => (
                        <motion.article
                            key={idea}
                            initial={{ opacity: 0, y: 20, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0, rotate: reduced ? 0 : tilts[index] ?? 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={reduced ? undefined : { rotate: 0, y: -8 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.06 }}
                            className="rounded-[24px] border border-dashed border-coral-400/40 bg-surface px-6 py-6"
                        >
                            <p className="font-data text-[11px] font-medium tracking-[0.18em] text-coral-400 uppercase">
                                Not built yet
                            </p>
                            <p className="mt-3 font-display text-xl font-semibold leading-snug text-text-primary">
                                {idea}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
