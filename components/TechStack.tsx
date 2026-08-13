import { Code2, MonitorSmartphone, LayoutTemplate, Package, ImageIcon, FileJson, type LucideIcon } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { techStack, type TechGroup } from "@/data/techStack";

const iconMap: Record<TechGroup["icon"], LucideIcon> = {
    code: Code2,
    monitor: MonitorSmartphone,
    layout: LayoutTemplate,
    package: Package,
    image: ImageIcon,
    file: FileJson
};

export default function TechStack() {
    return (
        <section id="tech-stack" className="bg-canvas-alt py-24 sm:py-32">
            <Container>
                <SectionHeading
                    eyebrow="Technology Stack"
                    title="What's actually running under the hood"
                    description="The real dependency list, not an idealized one — including the deliberate absence of a bundler and a database."
                    align="center"
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {techStack.map((group, i) => {
                        const Icon = iconMap[group.icon];
                        return (
                            <Reveal key={group.label} delay={(i % 3) * 0.08}>
                                <div className="group h-full rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-400/40 hover:shadow-lg hover:shadow-aqua-500/10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400/25 to-aqua-600/10 text-aqua-400 transition-transform group-hover:scale-110">
                                            <Icon size={18} />
                                        </div>
                                        <p className="font-display text-sm font-semibold text-text-primary">
                                            {group.label}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-lg border border-line bg-canvas px-2.5 py-1 font-data text-xs text-text-primary"
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
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
