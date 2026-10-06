import { MonitorSmartphone, Sparkle, MousePointerClick, SlidersHorizontal, EyeOff, Zap } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const points = [
    {
        icon: MonitorSmartphone,
        title: "Desktop-first, not a background service",
        detail: "AquaBuddy lives on your screen as a visible, always-on-top character — not a menu-bar icon you forget exists."
    },
    {
        icon: Sparkle,
        title: "A character, deliberately not a toast",
        detail:
            "AquaBuddy doesn't use the OS notification tray at all. It draws its own transparent, click-through overlay window instead — a reminder that has to be looked at, not one that queues up and gets swiped away with everything else."
    },
    {
        icon: MousePointerClick,
        title: "Two-click interaction",
        detail: "\"I Drank\" or \"Snooze\" for water. \"Take a Break\" or \"Later\" for a stretch, an eye rest, or a few breaths. No forms, no app to switch into."
    },
    {
        icon: SlidersHorizontal,
        title: "Customizable schedules",
        detail: "Water check-ins from 15 to 90 minutes, or an exact custom value. Stress-relief breaks after 30, 45, 60, or 90 minutes at your desk, inside the work hours you pick. Do Not Disturb expires on its own."
    },
    {
        icon: EyeOff,
        title: "Minimal distraction",
        detail: "Click-through everywhere except the character itself, so it never blocks a click meant for something behind it."
    },
    {
        icon: Zap,
        title: "Instant, local, no setup",
        detail: "No account, no server round-trip. Preferences save to disk and the reminder engine reschedules itself immediately."
    }
];

export default function Solution() {
    return (
        <section className="py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="The Solution"
                    title="Put the reminder somewhere it can't blend into the noise."
                    description="AquaBuddy's core idea: skip the notification tray entirely and bring the reminder onto the desktop itself, as something you can see and react to in two clicks."
                    align="center"
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {points.map((point, i) => (
                        <Reveal key={point.title} delay={(i % 3) * 0.08}>
                            <article className="group relative h-full overflow-hidden rounded-[24px] border border-line bg-surface px-6 pt-7 pb-6">
                                <span
                                    aria-hidden
                                    className={`absolute inset-x-0 top-0 h-1 ${i % 2 === 0 ? "bg-aqua-400" : "bg-coral-400"}`}
                                />
                                <div className="flex items-start justify-between gap-4">
                                    <span className="flex h-9 w-9 items-center justify-center text-text-muted transition-colors group-hover:text-aqua-400">
                                        <point.icon size={20} strokeWidth={1.75} />
                                    </span>
                                    <span className="font-display text-4xl font-bold leading-none text-aqua-200 transition-colors group-hover:text-aqua-300">
                                        0{i + 1}
                                    </span>
                                </div>
                                <h3 className="mt-6 font-display text-lg font-semibold text-text-primary">
                                    {point.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{point.detail}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
