import { createStore } from 'vuex'

// Import modules
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
  state: {
    // Global state properties
    appName: 'Kamboochinator',
    isLoading: false,
    error: null
  },
  getters: {
    // Global getters
    getAppName: state => state.appName,
    isLoading: state => state.isLoading,
    hasError: state => !!state.error,
    getError: state => state.error
  },
  mutations: {
    // Global mutations
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  actions: {
    // Global actions
    setLoading({ commit }, isLoading) {
      commit('SET_LOADING', isLoading);
    },
    setError({ commit }, error) {
      commit('SET_ERROR', error);
    },
    clearError({ commit }) {
      commit('CLEAR_ERROR');
    }
  },
  modules: {
    // Register modules
    products,
    cart
  }
})
