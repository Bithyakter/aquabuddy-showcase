"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    href: string;
    target?: string;
    rel?: string;
}

// Nudges the button a few pixels toward the cursor on hover, then springs
// back on leave - a small tactile detail, not a gimmick (moves at most ~10px).
export default function MagneticButton({ children, className, ...anchorProps }: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

    function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * 0.25);
        y.set(relY * 0.4);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            ref={ref}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.97 }}
            {...anchorProps}
        >
            {children}
        </motion.a>
    );
}
