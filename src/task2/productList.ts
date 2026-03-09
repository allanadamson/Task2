import { Product } from "../models/Products.js";

export function renderProductCard(product: Product, available: number, status: string): HTMLElement {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p style="color: gray; font-size: 0.8em;">Category: ${product.category.name}</p>
        <p class="price-text">$${product.price.toFixed(2)}</p>
        <p>Available: ${available}</p>
        <span class="status-badge ${status.toLowerCase()}">Status: ${status}</span>
    `;
    return div;
}