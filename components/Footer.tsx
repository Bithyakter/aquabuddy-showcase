import Image from "next/image";
import Container from "./ui/Container";
import { GitHubMark } from "./ui/icons";
import { site } from "@/lib/site";

export default function Footer() {
    return (
        <footer className="border-t border-line/70 bg-ink-2">
            <Container className="flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex max-w-sm flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                        <Image src="/images/logo.png" alt="AquaBuddy" width={30} height={30} />
                        <span className="font-display text-base font-bold text-text-primary">
                            {site.name}
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed text-text-muted">{site.description}</p>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                    <a
                        href={site.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1.5 text-text-secondary transition-colors hover:text-aqua-300"
                    >
                        <GitHubMark size={15} /> Source on GitHub
                    </a>
                    {/* <a
                        href={site.author.portfolioUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-1.5 text-text-secondary transition-colors hover:text-aqua-300"
                    >
                        Back to Portfolio <ArrowUpRight size={15} />
                    </a> */}
                </div>
            </Container>

            <Container className="flex flex-col gap-2 border-t border-line/60 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
                <p>Built by {site.author.name} · MIT Licensed</p>
                <p>A case study, not a marketing page — every claim on this site maps to real code.</p>
            </Container>
        </footer>
    );
}
