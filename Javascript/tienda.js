document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
    let customerPhoneNumber = prompt('Por favor, ingrese su número de WhatsApp:');

    function addToCart(productId, productName, productPrice) {
        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);
        renderCart();
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            renderCart();
        }
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => removeFromCart(product.id));
            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += product.price;
        });
        cartTotal.textContent = total;
    }

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productId = productElement.id;
            const productName = productElement.querySelector('h3').textContent;
            let productPrice;
            switch (productId) {
                case 'producto1':
                    productPrice = 50000;
                    break;
                case 'producto2':
                    productPrice = 80000;
                    break;
                case 'producto3':
                    productPrice = 28000;
                    break;
                default:
                    productPrice = 0;
            }
            addToCart(productId, productName, productPrice);
        });
    });
});
