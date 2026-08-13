import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { highlights } from "@/data/highlights";

export default function Highlights() {
    return (
        <section className="py-20">
            <Container>
                <Reveal className="flex flex-wrap items-center justify-center gap-3">
                    {highlights.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-text-secondary"
                        >
                            {item}
                        </span>
                    ))}
                </Reveal>
            </Container>
        </section>
    );
}
