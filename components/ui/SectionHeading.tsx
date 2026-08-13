import { type ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left"
}: {
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
}) {
    const isCenter = align === "center";

    return (
        <Reveal className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
            <div
                className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-aqua-400 ${
                    isCenter ? "justify-center" : ""
                }`}
            >
                <span className="h-px w-8 rule-aqua" />
                {eyebrow}
            </div>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-text-primary sm:text-4xl">
                {title}
            </h2>
            {description ? (
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{description}</p>
            ) : null}
        </Reveal>
    );
}
