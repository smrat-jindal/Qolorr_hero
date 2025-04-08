document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // In a real application, you would add the product to the user's cart.
            // This is a simplified example, so we'll just display a message.
            alert('Product added to cart!');
        });
    });
});
