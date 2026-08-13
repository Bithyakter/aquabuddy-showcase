export interface Feature {
    icon: "clock" | "moon" | "smile" | "handWave" | "messageSquare" | "mousePointerClick" | "move" | "save";
    title: string;
    description: string;
}

// Every entry here maps to something actually implemented in the app —
// see AquaBuddy/src/renderer/reminderEngine.ts, character.ts, main.ts.
export const features: Feature[] = [
    {
        icon: "clock",
        title: "Reminders on your schedule",
        description:
            "Pick a 15, 30, 45, 60, or 90-minute check-in, or set an exact custom interval. AquaBuddy reschedules itself the moment you change it — no restart needed."
    },
    {
        icon: "moon",
        title: "Do Not Disturb",
        description:
            "Pause reminders for 30 minutes, 1 hour, 2 hours, or until tomorrow morning. DND expires on its own and reminders quietly resume — nothing to remember to turn back on."
    },
    {
        icon: "handWave",
        title: "A character with reactions",
        description:
            "AquaBuddy walks in from off-screen, waves hello, and reacts differently depending on what you tell it — a small celebration when you drink, patient waiting if you snooze."
    },
    {
        icon: "smile",
        title: "\"Still there?\" nudge",
        description:
            "Ignore a reminder and AquaBuddy waves again, then looks a little sad, before walking off on its own — a gentle escalation, not a repeating alarm."
    },
    {
        icon: "messageSquare",
        title: "Time-of-day aware messages",
        description:
            "Reminder text is pulled from separate morning, afternoon, evening, and night message pools, so what AquaBuddy says actually matches when you're reading it."
    },
    {
        icon: "mousePointerClick",
        title: "Click-through overlay",
        description:
            "AquaBuddy floats above every other window without ever blocking your clicks. Only the character and its speech bubble catch the mouse — everywhere else, clicks pass straight through."
    },
    {
        icon: "move",
        title: "Drag to reposition",
        description:
            "Pick AquaBuddy up and drop it anywhere on screen. Its position is clamped to your display so it can never end up somewhere you can't reach."
    },
    {
        icon: "save",
        title: "Remembers everything",
        description:
            "DND state, reminder interval, and window position are saved to disk automatically and restored the instant the app reopens."
    }
];
