import { atom } from 'nanostores';

export const menuVisible = atom(false); // Store to track menu visibility, initially hidden
export function toggleMenu() {
    // Retrieve the current value of `menuVisible` using `get()`
    const currentVisibility = menuVisible.get();
    // Toggle the visibility by setting `menuVisible` to the opposite of its current value
    menuVisible.set(!currentVisibility);
}
