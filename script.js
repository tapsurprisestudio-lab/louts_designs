/* ========================================
   LOUT'S DESIGNS - SCRIPT.JS
   Cute Feminine Custom Design Studio
   ======================================== */

// ========================================
// PRODUCTS DATA
// ========================================
const products = [
    {
        id: 1,
        name: "Sac à bonbons enfants",
        images: ["https://i.imgur.com/9OohU5K.png", "https://i.imgur.com/BLjF76s.png"],
        description: "Sac à bonbons coloré et mignon pour les enfants. Parfait pour les fêtes d'anniversaire et les événements spéciaux.",
        category: "children"
    },
    {
        id: 2,
        name: "Porte-carte",
        images: ["https://i.imgur.com/EQN2OcL.png", "https://i.imgur.com/Dfw4YoC.png"],
        description: "Porte-carte élégant et personnalisable. Idéal pour ranger vos cartes de visite et cartes de fidélité.",
        category: "accessories"
    },
    {
        id: 3,
        name: "Carte islamique (Kaaba)",
        images: ["https://i.imgur.com/C2E5Xzv.png"],
        description: "Carte spirituelle avec dessin de la Kaaba. Parfait pour les occasions religieuses et les Cadeaux religieux.",
        category: "islamic"
    },
    {
        id: 4,
        name: "Boîtecadeau",
        images: ["https://i.imgur.com/Po7WuO6.png"],
        description: "Boîtecadeau personnalisée et élégante. Parfaite pour offrir des cadeaux spéciaux à vos proches.",
        category: "gift"
    },
    {
        id: 5,
        name: "Cadre personnalisée",
        images: ["https://i.imgur.com/DTgnY01.png"],
        description: "Cadre photo personnalisé pour sublimer vos souvenirs. Disponible en plusieurs tailles et couleurs.",
        category: "decor"
    },
    {
        id: 6,
        name: "Carte bébé",
        images: ["https://i.imgur.com/jQZSYuC.png"],
        description: "Carte de naissance mignonne pour annoncer l'arrivée de votre bébé. Personnalisable avec le nom et la date.",
        category: "baby"
    },
    {
        id: 7,
        name: "Carte de chocolat",
        images: ["https://i.imgur.com/9MOI1sK.png", "https://i.imgur.com/4wqgyDe.png"],
        description: "Carte élégant pour accompagner vos盒子 de chocolat. Parfait pour les occasions spéciales et les regalos.",
        category: "gift"
    },
    {
        id: 8,
        name: "Carte de visite",
        images: ["https://i.imgur.com/ekszfQi.png"],
        description: "Carte de visite élégante et professionnelle. Personnalisable avec votre nom et coordonnées.",
        category: "business"
    },
    {
        id: 9,
        name: "Cartes éducatives",
        images: ["https://i.imgur.com/vmtAkXq.png", "https://i.imgur.com/xbQjjHp.jpeg", "https://i.imgur.com/GOoeUAv.jpeg"],
        description: "Cartes éducatives ludiques pour les enfants. Apprentissage amusant avec des designs colorés.",
        category: "educational"
    },
    {
        id: 10,
        name: "Carte d'invitation",
        images: ["https://i.imgur.com/K2MIBei.png"],
        description: "Carte d'invitation élégante pour vos événements spéciaux. Mariage, anniversaire, baptême... Personnalisable.",
        category: "invitation"
    },
    {
        id: 11,
        name: "Bébé custom",
        images: ["https://i.imgur.com/FIR3whG.jpeg", "https://i.imgur.com/PTXqK6G.jpeg"],
        description: "Design de naissance personnalisé. Parfait pour les faire-part et les Cadeaux de naissance.",
        category: "baby"
    },
    {
        id: 12,
        name: "Cake topper",
        images: ["https://i.imgur.com/0Deb1mx.png"],
        description: "Cake topper personnalisé pour votre gâteau d'anniversaire. Ajoutez une touche festive à votre celebration.",
        category: "party"
    }
];

// ========================================
// CART DATA
// ========================================
let cart = [];

// ========================================
// DOM ELEMENTS
// ========================================
const productsGrid = document.getElementById('products-grid');
const cartBtn = document.querySelector('.cart-btn');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const cartClose = document.querySelector('.cart-close');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const btnCopyOrder = document.querySelector('.btn-copy-order');
const btnInstagram = document.querySelector('.btn-instagram');
const productModal = document.getElementById('product-modal');
const modalClose = document.querySelector('.modal-close');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductName = document.getElementById('modal-product-name');
const modalProductDescription = document.getElementById('modal-product-description');
const productForm = document.getElementById('product-form');
const customOrderForm = document.getElementById('custom-order-form');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotOptions = document.getElementById('chatbot-options');
const chatbotActions = document.getElementById('chatbot-actions');
const btnStartOrder = document.getElementById('btn-start-order');
const btnViewCart = document.getElementById('btn-view-cart');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// ========================================
// RENDER PRODUCTS
// ========================================
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="custom-label">مصنوع خصيصاً لك</span>
                <div class="product-actions">
                    <button class="btn-quick-view" data-id="${product.id}">Quick View</button>
                    <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Products Grid - Event Delegation
    productsGrid.addEventListener('click', (e) => {
        const quickViewBtn = e.target.closest('.btn-quick-view');
        const addCartBtn = e.target.closest('.btn-add-cart');

        if (quickViewBtn) {
            const productId = parseInt(quickViewBtn.dataset.id);
            openProductModal(productId);
        } else if (addCartBtn) {
            const productId = parseInt(addCartBtn.dataset.id);
            quickAddToCart(productId);
        }
    });

    // Cart
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    btnCopyOrder.addEventListener('click', copyOrderToClipboard);
    btnInstagram.addEventListener('click', openInstagramDM);

    // Modal
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });
    productForm.addEventListener('submit', handleProductFormSubmit);

    // Custom Order Form
    customOrderForm.addEventListener('submit', handleCustomOrderSubmit);

    // Chatbot
    chatbotToggle.addEventListener('click', toggleChatbot);
    chatbotClose.addEventListener('click', closeChatbot);
    setupChatbotOptions();

    // Chatbot Actions
    btnStartOrder.addEventListener('click', () => {
        closeChatbot();
        openCart();
    });
    btnViewCart.addEventListener('click', () => {
        closeChatbot();
        openCart();
    });

    // Navigation
    navToggle.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeChatbot();
            closeCart();
        }
    });
}

// ========================================
// CART FUNCTIONS
// ========================================
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        ...product,
        cartId: Date.now(),
        nameToPrint: '',
        eventType: '',
        colors: '',
        quantity: 1,
        notes: ''
    };

    cart.push(cartItem);
    updateCartUI();
    showToast('تمت الإضافة للسلة! 💗');
}

function addToCartFromModal(productData) {
    const cartItem = {
        ...productData,
        cartId: Date.now()
    };

    cart.push(cartItem);
    updateCartUI();
    showToast('تمت الإضافة للسلة! 💗');
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty">سلتك فارغة</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-info">${item.nameToPrint ? `الاسم: ${item.nameToPrint}` : ''}</p>
                <p class="cart-item-info">${item.eventType ? `الحدث: ${item.eventType}` : ''}</p>
                <p class="cart-item-qty">الكمية: ${item.quantity}</p>
            </div>
            <button class="cart-item-remove" data-cart-id="${item.cartId}">&times;</button>
        </div>
    `).join('');

    // Add remove event listeners
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromCart(parseInt(btn.dataset.cartId));
        });
    });
}

function generateOrderMessage() {
    const arabicMessage = `مرحباً Lout's Designs 🌸
أرغب في طلب تصميم:

• المنتج: ${cart.map(item => item.name).join(', ')}
${cart.map(item => `• الاسم المطلوب: ${item.nameToPrint || '-'}
• المناسبة: ${item.eventType || '-'}
• الألوان: ${item.colors || '-'}
• الكمية: ${item.quantity}
• ملاحظات: ${item.notes || '-'}`).join('\n\n')}`;

    const frenchMessage = `Bonjour Lout's Designs 🌸
Je souhaite commander:

• Produit: ${cart.map(item => item.name).join(', ')}
${cart.map(item => `• Nom personnalisé: ${item.nameToPrint || '-'}
• Occasion: ${item.eventType || '-'}
• Couleurs: ${item.colors || '-'}
• Quantité: ${item.quantity}
• Notes: ${item.notes || '-'}`).join('\n\n')}`;

    return `${arabicMessage}\n\n---\n\n${frenchMessage}`;
}

function copyOrderToClipboard() {
    if (cart.length === 0) {
        showToast('سلتك فارغة!');
        return;
    }

    const message = generateOrderMessage();
    navigator.clipboard.writeText(message).then(() => {
        showToast('تم نسخ الطلب! 📋');
    }).catch(() => {
        showToast('فشل النسخ، يرجى المحاولة مرة أخرى');
    });
}

function openInstagramDM() {
    if (cart.length === 0) {
        showToast('سلتك فارغة!');
        return;
    }

    const message = generateOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    const instagramUrl = `https://www.instagram.com/direct/new/?text=${encodedMessage}`;
    window.open(instagramUrl, '_blank');
}

// ========================================
// MODAL FUNCTIONS
// ========================================
let currentProductId = null;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductId = productId;
    modalProductImage.src = product.images[0];
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;

    // Reset form
    productForm.reset();

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    currentProductId = null;
}

function handleProductFormSubmit(e) {
    e.preventDefault();

    const product = products.find(p => p.id === currentProductId);
    if (!product) return;

    const formData = {
        ...product,
        nameToPrint: document.getElementById('print-name').value,
        eventType: document.getElementById('event-type').value,
        colors: document.getElementById('colors').value,
        quantity: parseInt(document.getElementById('product-quantity').value) || 1,
        notes: document.getElementById('product-notes').value
    };

    addToCartFromModal(formData);
    closeModal();
}

// ========================================
// CUSTOM ORDER FORM
// ========================================
function handleCustomOrderSubmit(e) {
    e.preventDefault();

    const formData = {
        id: Date.now(),
        name: 'طلب تصميم خاص',
        images: ['https://i.imgur.com/2cRuQZi.jpeg'],
        description: 'تصميم خاص حسب طلب العميل',
        nameToPrint: document.getElementById('design-type').value,
        eventType: document.getElementById('occasion').value,
        colors: document.getElementById('theme-colors').value,
        quantity: parseInt(document.getElementById('quantity').value) || 1,
        notes: document.getElementById('notes').value
    };

    // Add to cart
    cart.push({
        ...formData,
        cartId: Date.now()
    });

    updateCartUI();
    customOrderForm.reset();
    showToast('تم إرسال طلب التصميم الخاص! 💗');
    openCart();
}

// ========================================
// CHATBOT
// ========================================
const chatbotResponses = {
    invitation: {
        text: 'لاختيار بطاقة الدعوة المناسبة، إليك بعض الخيارات:',
        suggestions: [
            '🎀 بطاقة دعوة birthday',
            '💍 بطاقة دعوة زفاف',
            '👶 بطاقة دعوة مولود',
            '🎓 بطاقة دعوة تخرج'
        ]
    },
    cakepopper: {
        text: 'لاختيار كيك توبر، أخبريني عن المناسبة:',
        suggestions: [
            '🎂 كيك توبر birthday',
            '💍 كيك توبر زفاف',
            '👶 كيك توبر baby shower',
            '🎈 كيك توبر أطفال'
        ]
    },
    baby: {
        text: 'لتصميم المولود، لدينا:',
        suggestions: [
            '🍼 بطاقة مولود جديدة',
            '🎁 صندوق هدية مولود',
            '🖼️ إطار ذكرى مولود',
            '📋 بطاقة شكر للمتبرع'
        ]
    },
    chocolate: {
        text: 'لكرات الشوكولا،我们可以创建:',
        suggestions: [
            '🍫 بطاقة للشوكولا',
            '🎀 كيس حلوى',
            '🎁 صندوق شوكولا فاخر',
            '💝 بطاقة معايدة مع شوكولا'
        ]
    },
    help: {
        text: 'لا مشكلة! أخبريني عن:',
        suggestions: [
            '🎉 ما هي المناسبة؟',
            '👤 لمن هو الهدية؟',
            '🎨 ما الألوان المفضلة؟',
            '💰 ما الميزانية؟'
        ]
    }
};

function setupChatbotOptions() {
    document.querySelectorAll('.chatbot-option').forEach(option => {
        option.addEventListener('click', () => {
            const optionType = option.dataset.option;
            handleChatbotOption(optionType);
        });
    });
}

function handleChatbotOption(optionType) {
    const response = chatbotResponses[optionType];
    if (!response) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message user-message';
    userMessage.innerHTML = `<p>${option.innerText}</p>`;
    chatbotMessages.appendChild(userMessage);

    // Add bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chatbot-message bot-message';
        botMessage.innerHTML = `<p>${response.text}</p>`;
        response.suggestions.forEach(suggestion => {
            botMessage.innerHTML += `<p>${suggestion}</p>`;
        });
        chatbotMessages.appendChild(botMessage);

        // Show actions
        chatbotOptions.style.display = 'none';
        chatbotActions.style.display = 'flex';

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 500);
}

function toggleChatbot() {
    chatbot.classList.toggle('active');
}

function closeChatbot() {
    chatbot.classList.remove('active');
}

// ========================================
// MOBILE NAVIGATION
// ========================================
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
