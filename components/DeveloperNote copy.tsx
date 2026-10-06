import Image from "next/image";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { site } from "@/lib/site";

export default function DeveloperNote() {
    return (
        <section className="py-20">
            <Container className="max-w-2xl">
                <Reveal className="relative rounded-3xl border border-line bg-surface/60 p-8 sm:p-10">
                    <span className="font-display text-5xl leading-none text-aqua-400/30">&ldquo;</span>
                    <p className="-mt-4 text-lg leading-relaxed text-text-secondary">
                        AquaBuddy started as a straight port of an older plain-JavaScript prototype.
                        Rewriting it in TypeScript turned into an excuse to actually fix the parts I
                        wasn&apos;t happy with the first time — the Electron security model especially. This
                        site follows the same rule the app does: nothing here is dressed up past what the
                        code actually does.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <Image
                            src="/images/character/standing.png"
                            alt=""
                            width={32}
                            height={40}
                            className="h-8 w-auto"
                        />
                        <div>
                            <p className="font-display text-sm font-semibold text-text-primary">
                                {site.author.name}
                            </p>
                            <p className="text-xs text-text-muted">Built AquaBuddy end to end</p>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
