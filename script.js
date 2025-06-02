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



