import { products as initialProducts, categories, suppliers } from "../data/storeData.js";
import { Product } from "../models/Products.js";
import { StoreAnalyticsService } from "../services/StoreAnalyticsService.js";
import { renderProductCard } from "./productList.js";
import { initAddProductForm } from "./productAdd.js";

const STORAGE_KEY = 'store_data_v1';
let allProducts: Product[] = [];


// Andmete laadimine ja salvestamine
const loadData = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    allProducts = saved ? JSON.parse(saved) : initialProducts;
};

const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProducts));
};

const renderAll = (data: Product[]) => {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    
    container.innerHTML = "";
    
    // Konsooli päis koos veergude nimedega
    console.log("%c--- FULL INVENTORY REPORT ---", "color: green; font-weight: bold;");
    console.log(
        "Name".padEnd(15) + " | " + 
        "Category".padEnd(12) + " | " + 
        "Price".padStart(8) + " | " + 
        "Total Stock".padStart(12) + " | " + 
        "Supplier".padEnd(15) + " | " + 
        "Status"
    );
    console.log("-".repeat(85));

    data.forEach(p => {
        // Arvutame andmed teenuse abil
        const available = StoreAnalyticsService.getAvailable(p);
        const status = StoreAnalyticsService.getStockStatus(available);
        
        // Loome detailse raporti rea
        const reportLine = 
            `${p.name.padEnd(15)} | ` + 
            `${p.category.name.padEnd(12)} | ` + 
            `${p.price.toFixed(2).padStart(7)}€ | ` + 
            `${String(available).padStart(11)} pcs | ` + 
            `${p.supplier.name.padEnd(15)} | ` + 
            `${status}`;
        
        console.log(reportLine);

        // Kuvame toote ka veebilehel kaardina
        container.appendChild(renderProductCard(p, available, status));
    });

    console.log("-".repeat(85) + "\n");
};

// Filtreerimine
const setupSearch = () => {
    const input = document.getElementById('search-input') as HTMLInputElement;
    input?.addEventListener('input', () => {
        const filtered = allProducts.filter(p => p.name.toLowerCase().includes(input.value.toLowerCase()));
        renderAll(filtered);
    });
};

// Funktsioon, mida kutsutakse productAdd.ts-ist
export const addNewProduct = (product: Product) => {
    allProducts.push(product);
    saveData();
    renderAll(allProducts);
};

window.onload = () => {
    loadData();
    renderAll(allProducts);
    setupSearch();
    initAddProductForm(categories, suppliers);
};