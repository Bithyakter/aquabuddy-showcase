// Qualitative highlights only — no invented numbers/metrics for a project
// with no analytics or install-count data behind it.
export const highlights: string[] = [
    "Packaged Windows desktop application",
    "Interval + Do Not Disturb reminder scheduling",
    "Opt-in stress-relief breaks — stretch, eyes, and breathing",
    "Layered character animation with an isolated hand-wave overlay",
    "Zero-trust renderer — no direct Node access from the UI",
    "Local-only preferences — nothing leaves the machine"
];

export interface WhyPoint {
    title: string;
    description: string;
}

export const whyForUsers: WhyPoint[] = [
    {
        title: "Hard to tune out",
        description:
            "A character walking onto your screen doesn't blend into a notification stack the way a toast does — you have to actually look at it."
    },
    {
        title: "Fits how you work",
        description:
         "Pause it for a meeting, drag it out of the way, set the exact interval you want. It adapts to your schedule, not the other way around."
            // "Pause it for a meeting, drag it out of the way, and choose how often it checks in — for water, or for a stretch, an eye break, or a few breaths."
    },
    {
        title: "Nothing to set up",
        description: "No account, no sign-in, no cloud sync. Install it and it works."
    }
];

export const whyForDevelopers: WhyPoint[] = [
    {
        title: "A real security model",
        description:
            "Full contextIsolation with a contextBridge preload API, not the nodeIntegration: true shortcut most Electron tutorials reach for."
    },
    {
        title: "Deliberately decoupled systems",
        description:
            "The state machine, the reminder engine, and the character rendering don't know about each other's internals — each can change without the others breaking."
    },
    {
        title: "A rebuild used as a forcing function",
        description:
            "AquaBuddy is a from-scratch TypeScript rebuild of an earlier plain-JavaScript prototype — the rewrite was the opportunity to fix the architecture, not just translate syntax."
    }
];