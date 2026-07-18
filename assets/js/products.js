let allProducts = [];
let visibleProducts = [];
let currentCategory = 'all';
const PRODUCTS_PER_PAGE = 8;

async function loadProducts() {
    try {
        const response = await fetch('assets/data/products.json');
        allProducts = await response.json();
        applyProductsFilter();
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    const visibleItems = products.slice(0, PRODUCTS_PER_PAGE);
    visibleProducts = visibleItems;

    grid.innerHTML = visibleItems.map(product => `
        <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="0">
            <div class="aspect-square overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
            </div>
            <div class="p-6">
                <span class="text-xs font-medium text-primary uppercase tracking-wider">${product.category}</span>
                <h3 class="font-semibold text-lg mt-2 mb-2">${product.name}</h3>
                <p class="text-gray-500 text-sm mb-4">${product.description}</p>
                <button class="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition-colors" onclick='openModal(${JSON.stringify(product)})'>
                    More Details
                </button>
            </div>
        </div>
    `).join('');

    if (typeof AOS !== 'undefined') AOS.refresh();

    updateLoadMoreButton(products);
}

function applyProductsFilter() {
    const filteredProducts = currentCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.category === currentCategory);

    renderProducts(filteredProducts);
}

function updateLoadMoreButton(products) {
    const existingButton = document.getElementById('load-more-products');
    if (existingButton) {
        existingButton.remove();
    }

    if (products.length > PRODUCTS_PER_PAGE) {
        const button = document.createElement('button');
        button.id = 'load-more-products';
        button.type = 'button';
        button.className = 'mt-8 mx-auto px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors';
        button.textContent = 'Load More';
        button.addEventListener('click', () => {
            const grid = document.getElementById('products-grid');
            const remainingProducts = products.slice(PRODUCTS_PER_PAGE);
            const currentVisible = visibleProducts.length;
            const nextBatch = remainingProducts.slice(0, PRODUCTS_PER_PAGE);

            if (nextBatch.length > 0) {
                visibleProducts = [...visibleProducts, ...nextBatch];
                grid.insertAdjacentHTML('beforeend', nextBatch.map(product => `
                    <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="0">
                        <div class="aspect-square overflow-hidden">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
                        </div>
                        <div class="p-6">
                            <span class="text-xs font-medium text-primary uppercase tracking-wider">${product.category}</span>
                            <h3 class="font-semibold text-lg mt-2 mb-2">${product.name}</h3>
                            <p class="text-gray-500 text-sm mb-4">${product.description}</p>
                            <button class="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition-colors" onclick='openModal(${JSON.stringify(product)})'>
                                More Details
                            </button>
                        </div>
                    </div>
                `).join(''));

                if (typeof AOS !== 'undefined') AOS.refresh();
            }

            if (visibleProducts.length >= products.length) {
                button.remove();
            }
        });

        const container = document.getElementById('products-grid').parentElement;
        container.appendChild(button);
    }
}

// Category filtering
document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            applyProductsFilter();
        });
    });

    loadProducts();
});
