"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import Container from "./ui/Container";
import { GitHubMark } from "./ui/icons";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/data/nav";
import { site } from "@/lib/site";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-line/70 bg-canvas/80 backdrop-blur-lg" : "border-b border-transparent"
                }`}
        >
            <Container className="flex h-18 items-center justify-between py-3">
                <a href="#top" className="flex items-center gap-2.5">
                    <Image src="/images/logo.png" alt="AquaBuddy" width={34} height={34} priority />
                    <span className="font-display text-lg font-bold text-text-primary">{site.name}</span>
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => {
                        const isExternal = item.href.endsWith(".pdf") || item.href.startsWith("http");
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer noopener" : undefined}
                                className="text-sm font-medium text-text-secondary transition-colors hover:text-aqua-300"
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href={site.userManualUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hidden sm:flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-aqua-400/60 hover:text-aqua-300"
                    >
                        <BookOpen size={15} className="text-aqua-400" />
                        <span>Manual</span>
                    </a>
                    <a
                        href={site.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-aqua-400/60 hover:text-aqua-300"
                    >
                        <GitHubMark size={16} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </div>
            </Container>
        </header>
    );
}
