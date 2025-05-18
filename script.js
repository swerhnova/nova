let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₽${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `₽${total}`;
}

function toggleCart() {
  document.getElementById("cart-modal").classList.toggle("hidden");
}

function clearCart() {
  cart = [];
  updateCartUI();
}
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');

function openModal(title, imgSrc, desc, price) {
  modalTitle.textContent = title;
  modalImg.src = imgSrc;
  modalDesc.textContent = desc;
  modalPrice.textContent = price;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

// Пример, как повесить на товар (в HTML):
// <div class="product-card" onclick="openModal('Товар 1', 'images/product1.jpg', 'Описание товара 1', 'Цена: €50')">
