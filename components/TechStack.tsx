import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { techStack } from "@/data/techStack";

export default function TechStack() {
    return (
        <section id="tech-stack" className="border-t border-line/60 bg-ink-2 py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Technology Stack"
                    title="What's actually running under the hood"
                    description="The real dependency list, not an idealized one — including the deliberate absence of a bundler and a database."
                    align="center"
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {techStack.map((group, i) => (
                        <Reveal key={group.label} delay={(i % 3) * 0.08}>
                            <div className="h-full rounded-2xl border border-line bg-surface/70 p-6">
                                <p className="font-data text-xs font-medium uppercase tracking-widest text-aqua-400">
                                    {group.label}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-data text-xs text-text-primary"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                {group.note ? (
                                    <p className="mt-3 text-xs leading-relaxed text-text-muted">{group.note}</p>
                                ) : null}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
