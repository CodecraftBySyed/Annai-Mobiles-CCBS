document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/services.json');
        const services = await response.json();
        const grid = document.getElementById('services-grid');
        grid.innerHTML = services.map((service, index) => `
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i class="fas ${service.icon} text-3xl text-primary"></i>
                </div>
                <h3 class="font-semibold text-xl text-center mb-2">${service.title}</h3>
                <p class="text-gray-600 text-center">${service.description}</p>
            </div>
        `).join('');

        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error('Error loading services:', error);
    }
});
