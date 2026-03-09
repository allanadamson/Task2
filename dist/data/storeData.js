export const categories = [
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Books", description: "Printed and digital books" },
    { id: 3, name: "Clothing", description: "Apparel for men, women, and children" }
];
export const suppliers = [
    { id: 1, name: "Tech Distributors Inc.", contactEmail: "contact@techdistributors.com" },
    { id: 2, name: "Book Publishers Ltd.", contactEmail: "info@bookpublishers.com" },
    { id: 3, name: "Fashion Retailers Co.", contactEmail: "support@fashionretailers.com" }
];
export const reviews = [
    { productId: 1, rating: 5 },
    { productId: 1, rating: 4 },
    { productId: 2, rating: 3 },
    { productId: 2, rating: 4 },
    { productId: 3, rating: 5 },
    { productId: 3, rating: 4 }
];
export const discountRules = [
    { categoryId: 1, percent: 10, minRating: 4.5 }, // Electronics
    { categoryId: 2, percent: 5 } // Books
];
export const products = [
    {
        id: 1,
        name: "Smartphone",
        description: "Latest model smartphone with advanced features",
        price: 699.99,
        category: categories[0],
        stock: [
            { warehouseId: 1, quantity: 50 },
            { warehouseId: 2, quantity: 30 }
        ],
        supplier: suppliers[0],
        specifications: {
            "Screen size": "6.5 inches",
            "Processor": "Octa-core",
            "RAM": "8GB", "Storage": "128GB",
            "Battery": "4000mAh"
        }
    },
    {
        id: 2,
        name: "Laptop",
        description: "High-performance laptop for work and gaming",
        price: 1299.99,
        category: categories[0],
        stock: [
            { warehouseId: 1, quantity: 20 },
            { warehouseId: 2, quantity: 15 }
        ],
        supplier: suppliers[0],
        specifications: {
            "Screen size": "15.6 inches",
            "Processor": "Intel Core i7",
            "RAM": "16GB",
            "Storage": "512GB SSD",
        }
    },
    {
        id: 3,
        name: "Novel",
        description: "Bestselling fiction novel",
        price: 14.99,
        category: categories[1],
        stock: [
            { warehouseId: 1, quantity: 100 },
            { warehouseId: 2, quantity: 200 }
        ],
        supplier: suppliers[1],
        specifications: {
            "Pages": "320",
            "Format": "Paperback",
            "Language": "English"
        }
    }
];
