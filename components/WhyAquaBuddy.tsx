import { User, Code2, Check } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { whyForUsers, whyForDevelopers } from "@/data/highlights";

export default function WhyAquaBuddy() {
    return (
        <section className="py-24 sm:py-32">
            <Container>
                <SectionHeading eyebrow="Why AquaBuddy" title="Built to be used. Built to be read." align="center" />

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-3xl border border-line bg-surface p-8 shadow-sm">
                            <div className="flex items-center gap-2.5 text-aqua-300">
                                <User size={18} />
                                <span className="text-sm font-semibold uppercase tracking-wide">
                                    For the person using it
                                </span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-5">
                                {whyForUsers.map((point) => (
                                    <li key={point.title} className="flex gap-3">
                                        <Check size={18} className="mt-0.5 shrink-0 text-aqua-400" />
                                        <div>
                                            <p className="font-display font-semibold text-text-primary">
                                                {point.title}
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                                                {point.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="h-full rounded-3xl border border-line bg-surface p-8 shadow-sm">
                            <div className="flex items-center gap-2.5 text-coral-400">
                                <Code2 size={18} />
                                <span className="text-sm font-semibold uppercase tracking-wide">
                                    For the person reading the code
                                </span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-5">
                                {whyForDevelopers.map((point) => (
                                    <li key={point.title} className="flex gap-3">
                                        <Check size={18} className="mt-0.5 shrink-0 text-coral-400" />
                                        <div>
                                            <p className="font-display font-semibold text-text-primary">
                                                {point.title}
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                                                {point.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
