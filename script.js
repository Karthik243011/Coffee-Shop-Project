// CART LOGIC
let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  cartCount++;
  cartTotal += price;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = cartTotal;

  const li = document.createElement("li");
  li.textContent = `${itemName} - ₹${price}`;
  document.getElementById("cart-items").appendChild(li);
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
