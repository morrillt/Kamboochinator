// cartpinia.js - Pinia store for managing shopping cart
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        total: 0,
        count: 0
    }),

    getters: {
        cartItems: (state) => state.items,
        cartTotal: (state) => state.total,
        cartCount: (state) => state.count,
        isInCart: (state) => (productId) => state.items.some(item => item.productId === productId)
    },

    actions: {
        addToCart({ product, quantity, containerType }) {
            const existingItem = this.items.find(
                item => item.productId === product.id && item.containerType === containerType
            );

            if (existingItem) {
                // Update existing item
                existingItem.quantity += quantity;
            } else {
                // Add new item
                this.items.push({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    containerType,
                    quantity,
                    image: product.image
                });
            }

            // Recalculate cart totals
            this.recalculateCart();
        },

        updateCartItem({ productId, containerType, quantity }) {
            const item = this.items.find(
                item => item.productId === productId && item.containerType === containerType
            );

            if (item) {
                item.quantity = quantity;
                this.recalculateCart();
            }
        },

        removeFromCart({ productId, containerType }) {
            this.items = this.items.filter(
                item => !(item.productId === productId && item.containerType === containerType)
            );

            this.recalculateCart();
        },

        clearCart() {
            this.items = [];
            this.total = 0;
            this.count = 0;
        },

        // Helper method to avoid code duplication
        recalculateCart() {
            this.count = this.items.reduce((total, item) => total + item.quantity, 0);
            this.total = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }
}); 