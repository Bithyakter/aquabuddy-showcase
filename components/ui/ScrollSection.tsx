"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollSection({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.92", "start 0.55"]
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

    if (reduced) {
        return <div>{children}</div>;
    }

    return (
        <motion.div ref={ref} style={{ opacity, y }}>
            {children}
        </motion.div>
    );
}
