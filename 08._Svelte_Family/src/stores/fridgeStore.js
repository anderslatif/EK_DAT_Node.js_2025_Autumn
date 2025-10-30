import { writable } from "svelte/store";

function fridgeMessagesCustomStore() {
    const { subscribe, update, set } = writable(["Write a fridge message"]);

    return {
        subscribe,
        update,
        set,
        wipe: () => set(["Write a fridge message"])
    }
}

export const fridgeMessages = fridgeMessagesCustomStore();

// export const fridgeMessages = writable(["Write a fridge message"]);