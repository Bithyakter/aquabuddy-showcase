import {
    Activity,
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
    activity: Activity,
    clock: Clock,
    moon: Moon,
    smile: Smile,
    handWave: Hand,
    messageSquare: MessageSquare,
    mousePointerClick: MousePointerClick,
    move: Move,
    save: Save
};

// A coral accent every fourth card keeps the grid from feeling monochrome
// without diluting aqua as the primary brand color.
function isAccentCard(index: number): boolean {
    return index % 4 === 3;
}

export default function Features() {
    return (
        <section id="features" className="bg-canvas-alt py-24 sm:py-32">
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
                        const accent = isAccentCard(i);
                        return (
                            <Reveal key={feature.title} delay={(i % 4) * 0.06}>
                                <div
                                    className={`group relative h-full overflow-hidden rounded-2xl border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl ${
                                        accent
                                            ? "border-coral-500/20 hover:border-coral-400/50 hover:shadow-coral-500/10"
                                            : "border-line hover:border-aqua-400/50 hover:shadow-aqua-500/10"
                                    }`}
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                                            accent
                                                ? "bg-gradient-to-br from-coral-400/25 to-coral-600/10 text-coral-400"
                                                : "bg-gradient-to-br from-aqua-400/25 to-aqua-600/10 text-aqua-400"
                                        }`}
                                    >
                                        <Icon size={21} />
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