// products.js - Vuex module for managing kombucha products
import productService from '@/services/productService';

const state = {
    items: [],
    loading: false,
    error: null
};

const getters = {
    allProducts: state => state.items,
    getProductById: state => id => state.items.find(product => product.id === id),
    isProductsLoading: state => state.loading,
    getFeaturedProducts: state => state.items.filter(product => product.featured),
    getNewProducts: state => state.items.filter(product => product.new)
};

const mutations = {
    SET_PRODUCTS(state, products) {
        state.items = products;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    }
};

const actions = {
    // Load products from local data
    async fetchProductsLocal({ commit }) {
        commit('SET_LOADING', true);
        try {
            const products = await productService.getProductsLocal();
            commit('SET_PRODUCTS', products);
            console.log('Product data loaded from local source');
        } catch (error) {
            commit('SET_ERROR', error.message);
            console.error('Error fetching local products:', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    // Load products from API
    async fetchProductsFromApi({ commit }) {
        commit('SET_LOADING', true);
        try {
            const products = await productService.getProductsFromApi();
            commit('SET_PRODUCTS', products);
            console.log('Product data loaded from API');
        } catch (error) {
            commit('SET_ERROR', error.message);
            console.error('Error fetching products from API:', error);
        } finally {
            commit('SET_LOADING', false);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}; 