document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/latest-products.json');
        const products = await response.json();
        const grid = document.getElementById('latest-grid');
        grid.innerHTML = products.map((product, index) => `
            <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden relative" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <span class="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">${product.tag}</span>
                <div class="aspect-square overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <div class="p-6">
                    <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-500 text-sm mb-4">${product.description}</p>
                    <button class="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition-colors" onclick='openModal(${JSON.stringify(product)})'>
                        More Details
                    </button>
                </div>
            </div>
        `).join('');

        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error('Error loading latest products:', error);
    }
});
