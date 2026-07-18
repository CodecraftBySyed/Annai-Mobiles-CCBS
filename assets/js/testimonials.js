let currentTestimonial = 0;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('assets/data/testimonials.json');
        const testimonials = await response.json();
        const container = document.getElementById('testimonials-container');
        container.innerHTML = testimonials.map((testimonial, index) => `
            <div class="testimonial-slide ${index === 0 ? 'active' : ''}" data-aos="fade-up">
                <div class="bg-white p-8 rounded-2xl shadow-xl text-center">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-24 h-24 rounded-full mx-auto mb-6 object-cover" loading="lazy">
                    <div class="flex justify-center gap-1 mb-4">
                        ${Array(testimonial.rating).fill('<i class="fas fa-star text-yellow-500"></i>').join('')}
                    </div>
                    <p class="text-gray-600 text-lg mb-6 italic">"${testimonial.text}"</p>
                    <h4 class="font-semibold text-xl">${testimonial.name}</h4>
                </div>
            </div>
        `).join('');

        // Auto slide
        setInterval(() => {
            const slides = document.querySelectorAll('.testimonial-slide');
            slides[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % slides.length;
            slides[currentTestimonial].classList.add('active');
        }, 5000);
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
});
