import {
    Clock,
    Moon,
    Smile,
    Hand,
    MessageSquare,
    MousePointerClick,
    Move,
    Save,
    type LucideIcon
} from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { features, type Feature } from "@/data/features";

const iconMap: Record<Feature["icon"], LucideIcon> = {
    clock: Clock,
    moon: Moon,
    smile: Smile,
    handWave: Hand,
    messageSquare: MessageSquare,
    mousePointerClick: MousePointerClick,
    move: Move,
    save: Save
};

export default function Features() {
    return (
        <section id="features" className="border-t border-line/60 bg-ink-2 py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Core Features"
                    title="Everything AquaBuddy actually does"
                    description="No feature here is aspirational — each maps directly to a piece of the app's reminder engine, state machine, or preferences system."
                    align="center"
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <Reveal key={feature.title} delay={(i % 4) * 0.06}>
                                <div className="group h-full rounded-2xl border border-line bg-surface/70 p-6 transition-all hover:-translate-y-1 hover:border-aqua-400/50 hover:shadow-lg hover:shadow-aqua-500/5">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/20 to-aqua-600/10 text-aqua-300 transition-colors group-hover:text-aqua-200">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                        {feature.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
