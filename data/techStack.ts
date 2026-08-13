export interface TechGroup {
    label: string;
    icon: "code" | "monitor" | "layout" | "package" | "image" | "file";
    items: string[];
    note?: string;
}

// Reflects AquaBuddy/package.json and CLAUDE.md exactly — nothing here is
// aspirational or invented. Deliberately no "Notifications" /
// "Windows Native Notifications" entry: AquaBuddy does not use OS toast
// notifications at all — see the note on the Solution section for why.
export const techStack: TechGroup[] = [
    {
        label: "Language",
        icon: "code",
        items: ["TypeScript (strict mode)"],
        note: "Used across all three processes — main, preload, and renderer."
    },
    {
        label: "Desktop Runtime",
        icon: "monitor",
        items: ["Electron 43"]
    },
    {
        label: "Renderer UI",
        icon: "layout",
        items: ["Native ES Modules", "HTML5", "CSS3"],
        note: "No bundler — loaded directly via <script type=\"module\">."
    },
    {
        label: "Packaging",
        icon: "package",
        items: ["electron-builder", "NSIS installer"],
        note: "Windows installer + portable unpacked build."
    },
    {
        label: "Asset Pipeline",
        icon: "image",
        items: ["Jimp"],
        note: "Node-based image processing for sprite extraction & border-flood-fill background removal."
    },
    {
        label: "Persistence",
        icon: "file",
        items: ["Local JSON file"],
        note: "One preferences file in Electron's per-user userData directory — no account, no cloud, no server."
    }
];
