document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/brands.json');
        const brands = await response.json();
        const container = document.getElementById('brands-carousel');
        
        // Duplicate brands for seamless looping
        const allBrands = [...brands, ...brands];
        
        container.innerHTML = allBrands.map((brand, index) => `
            <div class="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 px-4">
                <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center">
                    <img src="${brand.image}" alt="${brand.name} Logo" class="h-12 sm:h-16 md:h-20 w-auto object-contain" loading="lazy">
                </div>
            </div>
        `).join('');
        
        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error('Error loading brands:', error);
    }
});