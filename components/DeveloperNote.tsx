import Image from "next/image";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { site } from "@/lib/site";

export default function DeveloperNote() {
    return (
        <section className="py-24">
            <Container className="max-w-3xl">
                <Reveal>
                    <div className="border-t border-line pt-12">
                        <p className="font-data text-[11px] font-medium tracking-[0.2em] text-aqua-400 uppercase">
                            From the developer
                        </p>

                        <div className="mt-8 grid items-start gap-8 sm:grid-cols-[96px_1fr] sm:gap-10">
                            <Image
                                src="/images/character/standing.png"
                                alt=""
                                width={192}
                                height={240}
                                className="h-28 w-auto sm:h-32"
                            />

                            <div>
                                <p className="text-lg leading-relaxed text-text-secondary">
                                    AquaBuddy started as a straight port of an older plain-JavaScript prototype.
                                    Rewriting it in TypeScript turned into an excuse to actually fix the parts I
                                    wasn&apos;t happy with the first time — the Electron security model especially.
                                    This site follows the same rule the app does: nothing here is dressed up past
                                    what the code actually does.
                                </p>

                                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-line/80 pt-5">
                                    <div>
                                        <p className="font-display text-base font-semibold text-text-primary">
                                            {site.author.name}
                                        </p>
                                        <p className="mt-1 text-sm text-text-muted">Built AquaBuddy end to end</p>
                                    </div>
                                    <div className="flex gap-5 text-sm font-medium">
                                        <a
                                            href={site.githubUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-text-secondary underline decoration-line underline-offset-4 transition-colors hover:text-aqua-400"
                                        >
                                            Source
                                        </a>
                                        <a
                                            href={site.author.portfolioUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-text-secondary underline decoration-line underline-offset-4 transition-colors hover:text-aqua-400"
                                        >
                                            Portfolio
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
