import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { GitHubMark } from "./ui/icons";
import { site } from "@/lib/site";

export default function FinalCTA() {
    return (
        <section className="relative overflow-hidden border-t border-line/60 py-28">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-500/15 blur-[110px]" />
            </div>

            <Container className="flex flex-col items-center text-center">
                <Reveal>
                    <Image src="/images/logo.png" alt="" width={120} height={90} className="mx-auto" />
                </Reveal>

                <Reveal delay={0.08}>
                    <h2 className="mt-6 text-balance font-display text-4xl font-bold text-text-primary sm:text-5xl">
                        Stay hydrated. Build better habits.
                    </h2>
                </Reveal>

                <Reveal delay={0.14}>
                    <p className="mt-4 max-w-xl text-balance text-lg text-text-secondary">
                        Explore how AquaBuddy turns a habit that&apos;s easy to forget into something a little
                        harder to ignore.
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#top"
                        className="group flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-aqua-300"
                    >
                        Explore Project
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                        href={site.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-aqua-400/60 hover:text-aqua-300"
                    >
                        <GitHubMark size={16} />
                        View GitHub
                    </a>
                    {/* <a
                        href={site.author.portfolioUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 px-2 py-3 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
                    >
                        Back to Portfolio
                        <ArrowUpRight size={15} />
                    </a> */}
                </Reveal>
            </Container>
        </section>
    );
}