import { writable } from "svelte/store";

export const sortKey = writable("semimajorAxis");
export const sortDirection = writable("asc");