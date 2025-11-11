
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "monte suas pulseiras!",
        price: 69.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDowqsWr6d3Xdpmu6uu75FE-ZQYWLQAN7Vg&s"
    },
    {
        id: 2,
        name: "mochilas hello kitty",
        price: 200.99,
        image: "https://a-static.mlcdn.com.br/1500x1500/bolsa-de-brinquedo-hello-kitty-real-littles-candide/magazineluiza/238399800/34e6af188e288daee03588c5c79f855b.jpg"
    },
    {
        id: 3,
        name: "cidade rosa, mundo hello kitty",
        price: 100.99,
        image: "https://www1.folha.uol.com.br/folha/especial/2005/guiadobrinquedo/images/316008-470.jpg"
    },
    {
        id: 4,
        name: "hello kitty e seus amigos",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/51P7mdLx-PL._AC_SL1025_.jpg"
    },
    {
        id: 5,
        name: "kit ursinhos da hello kitty",
        price: 45.99,
        image: "https://cf.shopee.com.br/file/sg-11134201-22120-02g5zabl5elvb6"
    },
    {
        id: 6,
        name: "casa da hello kitty",
        price: 220.99,
        image: "https://rihappy.vtexassets.com/arquivos/ids/7061463-800-auto?v=638682686807630000&width=800&height=auto&aspect=true"
    },
    {
        id: 7,
        name: "pelucia hello kitty",
        price:30.99,
        image: "data:image/jpeg;base64,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"
    },
]
    


// Estado do carrinho
let cart = [];

// Elementos DOM
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
});

// Renderizar produtos
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Verificar se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Atualizar carrinho
function updateCart() {
    // Atualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar lista de itens
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Seu carrinho está vazio</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                <button class="cart-item-remove" data-id="${item.id}">Remover</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Atualizar total
    cartTotal.textContent = total.toFixed(2);
    
    // Adicionar event listeners aos botões de remover
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Mostrar notificação
function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        transition: transform 0.3s, opacity 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateY(20px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Abrir/fechar carrinho
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});
