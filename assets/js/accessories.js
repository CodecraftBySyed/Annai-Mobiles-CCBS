document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/accessories.json');
        const accessories = await response.json();
        const grid = document.getElementById('accessories-grid');
        grid.innerHTML = accessories.map((acc, index) => `
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-2" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="aspect-square overflow-hidden rounded-xl mb-4">
                    <img src="${acc.image}" alt="${acc.name}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="font-semibold text-lg">${acc.name}</h3>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading accessories:', error);
    }
});
