// Global variables for modal
let productModal, closeModalBtn, modalImage, modalCategory, modalTitle, modalDescription;

// Initialize modal when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    productModal = document.getElementById('product-modal');
    closeModalBtn = document.getElementById('close-modal');
    modalImage = document.getElementById('modal-image');
    modalCategory = document.getElementById('modal-category');
    modalTitle = document.getElementById('modal-title');
    modalDescription = document.getElementById('modal-description');

    // Close modal handlers
    closeModalBtn.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

// Open modal with product details
window.openModal = function(product) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalCategory.textContent = product.category || 'Latest Arrival';
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.fullDescription;

    // Update WhatsApp enquiry link with pre-filled message
    const whatsappBtn = document.querySelector('#product-modal a');
    const phoneNumber = '919514141311';
    const message = `Hello! I'm interested in:\n\nProduct: ${product.name}\nDescription: ${product.description}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = whatsappUrl;

    productModal.classList.remove('hidden');
    productModal.classList.add('flex');
}

// Close modal
window.closeModal = function() {
    productModal.classList.add('hidden');
    productModal.classList.remove('flex');
}
