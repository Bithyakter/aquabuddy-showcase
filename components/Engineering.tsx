import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { engineeringChallenges } from "@/data/engineering";

export default function Engineering() {
    return (
        <section id="engineering" className="py-24 sm:py-32">
            <Container className="max-w-4xl">
                <SectionHeading
                    eyebrow="Development & Engineering"
                    title="The decisions underneath the reminder"
                    description="A character walking across the screen is the easy part. These are the specific problems the architecture had to solve to make it feel simple."
                />

                <div className="mt-12 flex flex-col divide-y divide-line/60 border-t border-line/60">
                    {engineeringChallenges.map((item, i) => (
                        <Reveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
                            <div className="grid gap-3 py-8 sm:grid-cols-[220px_1fr] sm:gap-8">
                                <h3 className="font-display text-lg font-semibold text-text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
