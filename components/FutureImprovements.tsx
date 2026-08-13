import { Lightbulb } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { futureIdeas } from "@/data/future";

export default function FutureImprovements() {
    return (
        <section className="border-t border-line/60 bg-canvas-alt py-24 sm:py-32">
            <Container className="max-w-3xl">
                <SectionHeading
                    eyebrow="Future Ideas"
                    title="Where this could go next"
                    description="None of this is built yet — listed here as direction, not a roadmap with dates."
                    align="center"
                />

                <Reveal delay={0.1} className="mt-10 flex flex-col gap-3">
                    {futureIdeas.map((idea) => (
                        <div
                            key={idea}
                            className="flex items-center gap-3 rounded-xl border border-dashed border-line bg-surface/40 px-5 py-4"
                        >
                            <Lightbulb size={16} className="shrink-0 text-coral-400" />
                            <span className="text-sm text-text-secondary">{idea}</span>
                        </div>
                    ))}
                </Reveal>
            </Container>
        </section>
    );
}
