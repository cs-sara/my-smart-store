const products = [
    { id: 1, name: "ساعات ذكية", price: 250 },
    { id: 2, name: "سماعات بلوتوث", price: 150 },
    { id: 3, name: "حقيبة ظهر أنيقة", price: 120 }
];

let cartCount = 0;

function displayProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} ريال</p>
            <button onclick="addToCart()">إضافة للسلة</button>
        `;
        productsList.appendChild(card);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("تمت إضافة المنتج إلى السلة بنجاح!");
}

displayProducts();
