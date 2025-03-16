// cart.js - Vuex module for managing shopping cart

const state = {
    items: [],
    total: 0,
    count: 0
};

const getters = {
    cartItems: state => state.items,
    cartTotal: state => state.total,
    cartCount: state => state.count,
    isInCart: state => productId => state.items.some(item => item.productId === productId)
};

const mutations = {
    ADD_TO_CART(state, { product, quantity, containerType }) {
        const existingItem = state.items.find(
            item => item.productId === product.id && item.containerType === containerType
        );

        if (existingItem) {
            // Update existing item
            existingItem.quantity += quantity;
        } else {
            // Add new item
            state.items.push({
                productId: product.id,
                name: product.name,
                price: product.price,
                containerType,
                quantity,
                image: product.image
            });
        }

        // Recalculate cart totals
        state.count = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    UPDATE_CART_ITEM(state, { productId, containerType, quantity }) {
        const item = state.items.find(
            item => item.productId === productId && item.containerType === containerType
        );

        if (item) {
            item.quantity = quantity;

            // Recalculate cart totals
            state.count = state.items.reduce((total, item) => total + item.quantity, 0);
            state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    },

    REMOVE_FROM_CART(state, { productId, containerType }) {
        state.items = state.items.filter(
            item => !(item.productId === productId && item.containerType === containerType)
        );

        // Recalculate cart totals
        state.count = state.items.reduce((total, item) => total + item.quantity, 0);
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    CLEAR_CART(state) {
        state.items = [];
        state.total = 0;
        state.count = 0;
    }
};

const actions = {
    addToCart({ commit }, { product, quantity, containerType }) {
        commit('ADD_TO_CART', { product, quantity, containerType });
    },

    updateCartItem({ commit }, { productId, containerType, quantity }) {
        commit('UPDATE_CART_ITEM', { productId, containerType, quantity });
    },

    removeFromCart({ commit }, { productId, containerType }) {
        commit('REMOVE_FROM_CART', { productId, containerType });
    },

    clearCart({ commit }) {
        commit('CLEAR_CART');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}; 