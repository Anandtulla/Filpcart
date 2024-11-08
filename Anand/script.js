let cart = [];
const cartButton = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeModalButton = document.getElementById('close-modal');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Add product to cart
        const product = {
            name: productName,
            price: parseInt(productPrice.replace('₹', '').replace(',', ''))
        };
        cart.push(product);
        
        // Update cart display
        updateCartDisplay();
    });
});

cartButton.addEventListener('click', function() {
    cartModal.style.display = 'flex';
});

closeModalButton.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

checkoutButton.addEventListener('click', function() {
    alert("Proceeding to checkout!");
    cart = [];
    updateCartDisplay();
    cartModal.style.display = 'none';
});

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: ₹${totalPrice}`;

    // Update cart button text
    cartButton.textContent = `🛒 Cart (${cart.length})`;
}
