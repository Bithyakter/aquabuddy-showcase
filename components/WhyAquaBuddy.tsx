import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { whyForDevelopers, whyForUsers, type WhyPoint } from "@/data/highlights";

function Audience({
    label,
    tone,
    points
}: {
    label: string;
    tone: "aqua" | "coral";
    points: WhyPoint[];
}) {
    const accent = tone === "aqua" ? "text-aqua-400" : "text-coral-400";
    const titleHover = tone === "aqua" ? "group-hover:text-aqua-400" : "group-hover:text-coral-400";

    return (
        <div>
            <p className={`font-data text-[11px] font-medium tracking-[0.18em] uppercase ${accent}`}>{label}</p>
            <ol className="mt-2">
                {points.map((point, index) => (
                    <li key={point.title} className="group border-b border-line/80 py-6">
                        <div className="flex gap-4">
                            <span className={`pt-1 font-display text-sm font-bold tabular-nums ${accent}`}>
                                0{index + 1}
                            </span>
                            <div>
                                <p className={`font-display text-lg font-semibold text-text-primary transition-colors ${titleHover}`}>
                                    {point.title}
                                </p>
                                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-text-secondary">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function WhyAquaBuddy() {
    return (
        <section className="py-24 sm:py-32">
            <Container>
                <SectionHeading eyebrow="Why AquaBuddy" title="Built to be used. Built to be read." align="center" />

                <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-0">
                    <Reveal className="lg:pr-12">
                        <Audience label="For the person using it" tone="aqua" points={whyForUsers} />
                    </Reveal>
                    <Reveal delay={0.08} className="lg:border-l lg:border-line lg:pl-12">
                        <Audience label="For the person reading the code" tone="coral" points={whyForDevelopers} />
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}