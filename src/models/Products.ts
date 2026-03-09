import { Category } from "./Category.js";
import { WarehouseStock } from "./WarehouseStock.js";
import { Supplier } from "./Suppliers.js";

export interface Product {
    id: number; // Unikaalne tunnus
    name: string; // Toote nimi
    description: string; // Toote kirjeldus (kohustuslik väli)
    price: number; // Hind numbrina
    category: Category; // Viide kategooria objektile
    stock: WarehouseStock[]; // Massiiv ladude ja kogustega
    supplier: Supplier; // Viide tarnija objektile
    specifications?: Record<string, string | number>; // Valikulised lisaandmed
}