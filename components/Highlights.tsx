import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { highlights } from "@/data/highlights";

export default function Highlights() {
    return (
        <section className="py-20">
            <Container>
                <div className="grid overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item, index) => (
                        <Reveal key={item.text} delay={(index % 3) * 0.06} className="h-full">
                            <article className="group flex h-full flex-col bg-surface px-6 py-7 transition-colors hover:bg-canvas">
                                <span className="font-data text-[11px] font-medium tracking-[0.18em] text-aqua-400 uppercase">
                                    {item.mark}
                                </span>
                                <p className="mt-3 font-display text-lg font-semibold leading-snug text-text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                                    {item.text}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}