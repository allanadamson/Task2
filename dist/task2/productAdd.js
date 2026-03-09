import { addNewProduct } from "./main.js";
export function initAddProductForm(categories, suppliers) {
    const container = document.getElementById('add-product-container');
    if (!container)
        return;
    container.innerHTML = `
        <h3>Add Product</h3>
        <form id="product-form">
            <div class="form-group"><label>Name *</label><input type="text" id="p-name" required></div>
            <div class="form-group">
                <label>Category *</label>
                <select id="p-category">${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select>
            </div>
            <div class="form-group"><label>Price *</label><input type="number" id="p-price" step="0.01" required></div>
            <div class="form-group"><label>Stock (comma-separated) *</label><input type="text" id="p-stock" required placeholder="5, 10"></div>
            <div class="form-group"><label>Specs (key=value, key=value)</label><input type="text" id="p-specs"></div>
            <button type="submit" class="btn-primary">Add Product</button>
        </form>
    `;
    const form = document.getElementById('product-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Andmete kogumine ja tüüpide parandamine
        const name = document.getElementById('p-name').value;
        const price = parseFloat(document.getElementById('p-price').value);
        const categoryId = parseInt(document.getElementById('p-category').value);
        const stockRaw = document.getElementById('p-stock').value;
        const specsRaw = document.getElementById('p-specs').value;
        // Kontrollime, et kategooria on olemas (!)
        const selectedCategory = categories.find(c => c.id === categoryId);
        // Stocki muutmine õigeks massiiviks
        const stock = stockRaw.split(',').map((q, i) => ({
            warehouseId: i + 1, // i + 1 on number (1, 2, 3...), nagu liides nõuab
            quantity: parseInt(q.trim()) || 0
        }));
        // Specside muutmine objektiks
        const specs = {};
        if (specsRaw.trim()) {
            specsRaw.split(',').forEach(pair => {
                const [k, v] = pair.split('=').map(s => s.trim());
                if (k && v)
                    specs[k] = v;
            });
        }
        // Uue toote loomine ilma vigadeta
        const newProduct = {
            id: Date.now(),
            name: name,
            description: "Manual Entry", // Kohustuslik väli
            price: price,
            category: selectedCategory,
            supplier: suppliers[0],
            stock: stock,
            specifications: Object.keys(specs).length > 0 ? specs : undefined
        };
        addNewProduct(newProduct);
        form.reset();
    });
}
