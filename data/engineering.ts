export interface EngineeringChallenge {
    title: string;
    detail: string;
}

// Each of these maps to a real, specific decision in the codebase — not a
// generic "we handled state management" claim.
export const engineeringChallenges: EngineeringChallenge[] = [
    {
        title: "A zero-trust renderer",
        detail:
            "Most Electron tutorials reach for nodeIntegration: true and call it a day — it's faster to build. AquaBuddy doesn't do that. contextIsolation stays on everywhere, including the secondary custom-interval dialog window, and the renderer never touches Node or the filesystem directly. Every capability it needs — dragging the window, reading preferences, toggling click-through — has to cross a narrow contextBridge API in a dedicated preload script first."
    },
    {
        title: "One settings change, one path",
        detail:
            "Change a setting from the tray menu, the custom-interval dialog, or by dragging the window, and it all lands in the same place: a single updatePreferences() function. It persists to disk, reschedules the DND timer, rebuilds the tray menu, and pushes the update live to the UI — every time, in that order. One function to get right, instead of three separate ones that could quietly drift out of sync."
    },
    {
        title: "A reminder engine that has no idea the character exists",
        detail:
            "It only knows three things: whether Do Not Disturb is on, what the current interval is, and whether the character is busy mid-interaction. No reference to sprites, no reference to the state machine. Keeping it that dumb is exactly what makes DND, custom intervals, and \"don't interrupt a response in progress\" each a small, separate rule instead of a wall of tangled conditionals."
    },
    {
        title: "An escalation you can always walk back",
        detail:
            "The \"still there?\" sequence — wave again, then look a little sad, then walk off — is built from nested timers that check their own assumptions before firing. Respond at any point, or the character changes state for any other reason, and the whole chain cancels itself. A stray timer can never fire a sad pose onto a character that's already walked away."
    },
    {
        title: "Clicks pass through, except where they shouldn't",
        detail:
            "The overlay window is transparent and always on top, which would normally mean it swallows every click meant for whatever's behind it. Instead it calls setIgnoreMouseEvents on the fly based on what's actually under the cursor — so the character and its buttons catch clicks, and everything else on screen behaves like AquaBuddy isn't even there."
    },
    {
        title: "Background removal that respects the art",
        detail:
            "A flat color-distance threshold would've been the easy route — and it would've punched holes through dark hair outlines and light-colored clothing that happens to match the background. So the sprite pipeline flood-fills inward from the image's outer edge instead: only pixels actually connected to the border get cleared, and anything enclosed is left alone no matter what color it is."
    }
];
