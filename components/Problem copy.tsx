import { BellOff, MonitorX, TabletSmartphone } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const distractions = [
    {
        icon: MonitorX,
        title: "Hours pass without noticing",
        detail: "Deep focus at a desk makes it easy to lose track of time entirely — water included."
    },
    {
        icon: TabletSmartphone,
        title: "Buried under other notifications",
        detail: "A phone reminder is one more toast in a stack of a dozen others, dismissed on reflex."
    },
    {
        icon: BellOff,
        title: "Tracking apps get closed and forgotten",
        detail: "A browser tab for a water-tracking site closes with the rest of the tabs and never comes back."
    }
];

export default function Problem() {
    return (
        <section className="bg-canvas-alt py-24 sm:py-32">
            <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <SectionHeading
                    eyebrow="The Problem"
                    title="Hydration reminders that are easy to ignore, aren't reminders at all."
                    description="Most desk work happens in long, heads-down stretches. The tools built to interrupt that — a phone buzz, a browser notification — are competing with everything else fighting for the same sliver of attention, and usually losing."
                />

                <div className="grid gap-4 sm:grid-cols-1">
                    {distractions.map((item, i) => (
                        <Reveal key={item.title} delay={i * 0.08}>
                            <div className="flex gap-4 rounded-2xl border border-line bg-surface/60 p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-500/10 text-coral-400">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-display text-base font-semibold text-text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
