let cart = [];

const selectors = {
   products: document.querySelector(".products"),
  cartBtn: document.querySelector(".cart-btn"),
  cartQty: document.querySelector(".cart-qty"),
  cartClose: document.querySelector(".cart-close"),
  cart: document.querySelector(".cart"),
  cartOverlay: document.querySelector(".cart-overlay"),
  cartClear: document.querySelector(".cart-clear"),
  cartBody: document.querySelector(".cart-body"),
  cartTotal: document.querySelector(".cart-total"),
};

const setupListeners = () => {
  document.addEventListener("DOMContentLoaded", initStore);

  selectors.products.addEventListener("click", addToCart);

  selectors.cartBtn.addEventListener("click", showCart);
  selectors.cartOverlay.addEventListener("click", hideCart);
  selectors.cartClose.addEventListener("click", hideCart);
  selectors.cartBody.addEventListener("click", updateCart);
  selectors.cartClear.addEventListener("click", clearCart);
};

function initStore() {
  loadCart();
  loadProducts('products').then(renderProducts);
  renderCart();
};

function showCart(){
  selectors.cart.classList.add("show");
  selectors.cartOverlay.classList.add("show");
};

function hideCart(){
  selectors.cart.classList.remove("show");
  selectors.cartOverlay.classList.remove("show");
};

function clearCart(){
  cart = [];
  saveCart();
  renderCart();
  renderProducts();
  setTimeout(hideCart, 500);
};
const addToCart = (e) => {
  if (e.target.hasAttribute("data-id")) {
    const id = parseInt(e.target.dataset.id);
    const inCart = cart.find((x) => x.id === id);

    if (inCart) {
    inCart.qty++; alert('Added to cart')
    } else {
      cart.push({ id, qty: 1 });
    }

    saveCart();
    renderCart();
    
  }
};

function removeFromCart(id){
  cart = cart.filter((x) => x.id !== id);

  cart.length === 0 && setTimeout(hideCart, 500);
renderProducts();
};

function increaseQty(id){
  const item = cart.find((x) => x.id === id);
  if (!item) return;
  item.qty++;
};

function decreaseQty(id){
  const item = cart.find((x) => x.id === id);
  if (!item) return;
  item.qty--;

  if (item.qty === 0) removeFromCart(id);
};

function updateCart(e){
  if (e.target.hasAttribute("data-btn")) {
    const cartItem = e.target.closest(".cart-item");
    const id = parseInt(cartItem.dataset.id);
    const btn = e.target.dataset.btn;
    btn === "incr" && increaseQty(id);
    btn === "decr" && decreaseQty(id);
    saveCart();
    renderCart();
  }
};

function saveCart(){
  localStorage.setItem("products", JSON.stringify(cart));
};

const loadCart = () => {
  cart = JSON.parse(localStorage.getItem("products")) || [];
};

const loadProducts = async (apiURL) => {
  };

function calculateTotal(){
  return cart
    .map(({ id, qty }) => {
      const { price } = products.find((x) => x.id === id);
   return qty * price;
    })
    .reduce((sum, number) => {
      return sum + number;
    }, 0);
};

Number.prototype.format = function () {
  return this.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

setupListeners();

function checkOut(id) {
  window.open("check.html",)

    clearCart();
  clearCart();
    saveCart();
  }
function closePopUp(){
  document.getElementById('emptyBasket').classList.add("d-none")
  saveCart();
}
  
function myFunction(){
  window.open("index.html");
}

