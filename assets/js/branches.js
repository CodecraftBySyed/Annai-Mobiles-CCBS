document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/branches.json');
        const branches = await response.json();
        const grid = document.getElementById('branches-grid');
        grid.innerHTML = branches.map((branch, index) => `
            <div class="bg-white p-8 rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="${index * 100}">
                <h3 class="font-playfair text-xl font-bold mb-4">${branch.name}</h3>
                <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt text-primary mr-2"></i>${branch.address}</p>
                <p class="text-gray-600 mb-6"><i class="fas fa-phone text-primary mr-2"></i>${branch.phone}</p>
                <a href="${branch.map}" target="_blank" class="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                    <i class="fas fa-directions mr-2"></i> Open in Maps
                </a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading branches:', error);
    }
});
