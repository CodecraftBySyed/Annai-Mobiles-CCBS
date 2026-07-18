document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/gallery.json');
        const galleryItems = await response.json();
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = galleryItems.map((item, index) => `
            <div class="group relative aspect-square overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${item.image}" alt="${item.caption}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p class="text-white p-6 font-medium">${item.caption}</p>
                </div>
            </div>
        `).join('');

        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
});
