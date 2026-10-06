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
        //  detail: "\"I Drank\" or \"Snooze\" — the entire decision, no forms, no app to switch into."
        detail: "\"I Drank\" or \"Snooze\" for water. \"Take a Break\" or \"Later\" for a stretch, an eye rest, or a few breaths. No forms, no app to switch into."
    },
    {
        icon: SlidersHorizontal,
        title: "Customizable schedules",
        //  detail: "Preset intervals from 15 to 90 minutes, an exact custom value, and Do Not Disturb windows that expire on their own."
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
                            <div className="group h-full rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-400/40 hover:shadow-lg hover:shadow-aqua-500/10">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/25 to-aqua-600/10 text-aqua-400 transition-transform group-hover:scale-110">
                                    <point.icon size={19} />
                                </div>
                                <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                                    {point.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                    {point.detail}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}