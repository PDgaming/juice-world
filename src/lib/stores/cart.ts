import { writable } from 'svelte/store';

// Define the type for cart items
export interface CartItem {
    id: string;
    quantity: number;
    title: string;
    price: number;
    image: string;
}

// Create a writable store for the cart
export const cart = writable<CartItem[]>([]);

cart.subscribe(value => {
    console.log("Store value changed:", value)
})