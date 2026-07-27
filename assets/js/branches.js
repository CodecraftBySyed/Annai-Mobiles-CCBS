document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/branches.json');
        const branches = await response.json();
        const grid = document.getElementById('branches-grid');
        grid.innerHTML = branches.map((branch, index) => {
            const phoneLink = branch.phone.split(',')[0].trim();
            const phoneNumber = phoneLink.replace(/\D/g, '');
            const whatsappUrl = `https://wa.me/${phoneNumber}`;
            const telUrl = `tel:${phoneNumber}`;

            return `
            <div class="bg-white p-8 rounded-2xl shadow-xl" data-aos="fade-up" data-aos-delay="${index * 100}">
                <h3 class="font-playfair text-xl font-bold mb-4">${branch.name}</h3>
                <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt text-primary mr-2"></i>${branch.address}</p>
                <p class="text-gray-600 mb-6"><i class="fas fa-phone text-primary mr-2"></i>${branch.phone}</p>
                <div class="flex flex-wrap gap-3">
                    <a href="${branch.map}" target="_blank" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                        <i class="fas fa-directions mr-2"></i> Open in Maps
                    </a>
                    <a href="${telUrl}" class="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
                        <i class="fas fa-phone-alt mr-2"></i> Call
                    </a>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#1ebe5b] transition-colors">
                        <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                    </a>
                </div>
            </div>
        `;
        }).join('');

        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error('Error loading branches:', error);
    }
});
