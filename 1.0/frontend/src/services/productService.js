/**
 * productService.js - Service for loading product data
 * 
 * This code is a JavaScript service module for handling product data in a web application.
 * At a high level, it's doing the following:
 * 
 * - Importing product data from a local JSON file
 * - Providing three main functions for accessing product data:
 *   - getProductsLocal(): Returns all products from the local JSON data
 *   - getProductsFromApi(): Fetches products from an API endpoint, with a fallback to local data if the API call fails
 *   - getProductById(id): Finds and returns a specific product by its ID from the local data
 * 
 * The service is designed with a clean separation of concerns, allowing the application to retrieve
 * product information either from a local source or from a remote API. This pattern provides
 * flexibility and resilience, as the application can still function with local data even if the API
 * is unavailable.
 */

import productData from '@/data/products.json';

/**
 * Product service for fetching product data
 */
export default {
    /**
     * Get all products from local data
     * @returns {Promise} Promise that resolves to product data
     */
    getProductsLocal() {
        return Promise.resolve(productData);
    },

    /**
     * Get all products from API
     * @returns {Promise} Promise that resolves to product data
     */
    async getProductsFromApi() {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products from API:', error);
            // Fallback to local data if API fails
            return this.getProductsLocal();
        }
    },

    /**
     * Get a single product by ID
     * @param {number} id - Product ID
     * @returns {Object|null} Product object or null if not found
     */
    getProductById(id) {
        return productData.find(product => product.id === id) || null;
    }
}; 