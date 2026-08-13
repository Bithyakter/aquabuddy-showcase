export interface WorkflowStep {
    step: string;
    title: string;
    description: string;
}

export const workflow: WorkflowStep[] = [
    {
        step: "01",
        title: "Waits quietly",
        description:
            "AquaBuddy stays off-screen in the corner of your display, doing nothing until it's actually time for a reminder."
    },
    {
        step: "02",
        title: "Walks in",
        description:
            "When the interval is up (and Do Not Disturb isn't active), it walks on screen and shows a message chosen for the current time of day."
    },
    {
        step: "03",
        title: "You respond — or don't",
        description:
            "Click \"I Drank\" and it celebrates. Click \"Snooze\" and it waits patiently. Ignore it, and it gently checks in before walking off on its own."
    },
    {
        step: "04",
        title: "Walks out, timer resets",
        description: "AquaBuddy heads back off screen and the countdown to the next reminder starts again."
    }
];
