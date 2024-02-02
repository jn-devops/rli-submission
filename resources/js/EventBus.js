import { createApp, inject } from "vue";

const app = createApp({});
const eventBus = createApp({});

export const useEventBus = () => {
    const bus = inject("eventBus");
    if (!bus) {
        console.error("Error: Event bus is not available.");
    }
    return bus;
};

app.provide("eventBus", eventBus);

export default app;
