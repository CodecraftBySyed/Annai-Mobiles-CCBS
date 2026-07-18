document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });
});
