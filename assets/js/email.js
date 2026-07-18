document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (typeof Swal !== 'undefined' && Swal.fire) {
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                icon: 'success',
                confirmButtonColor: '#0F4CFF'
            });
        } else {
            alert('Your message has been sent successfully!');
        }

        form.reset();
    });
});
