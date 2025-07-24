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

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function initStore() {
  loadCart();
  const category = getParameterByName('category');
  if (category) {
    let filteredProducts = products.filter(function(product) {
      return product.foodType === category;
    });
    renderFilteredProducts(filteredProducts);
  } else {
    renderProducts();
    // You might also want to reset the cart UI to its initial state
    selectors.cart.classList.remove("show");
    selectors.cartOverlay.classList.remove("show");
  }
  renderCart();
}
function filterProducts(category) {
  let filteredProducts = products.filter(function(product) {
    return product.foodType === category;
  });

  renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
  selectors.products.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price, description } = product;
      const inCart = cart.find((x) => x.id === id);
      const disabled = inCart ? "plus" : "";       
      const text = inCart ? "" : "";
      return `
        <div class="product" id="food${id}">
          <img src="${image}" alt="${title}" />
          <h3>${title}</h3>
          <h5>${price.format()}</h5>
          <div class="details">${description}</div>
          <button ${disabled} data-id=${id}>${text}</button>
        </div>
      `;
    })
    .join("");
}
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
      inCart.qty++;
    } else {
      cart.push({ id, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast('Item added to cart!');
  }
};

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

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
const deliveryBtn = document.getElementById('delivery-btn');
const pickupBtn = document.getElementById('pickup-btn');
let deliveryFee = 5.00;
let isDelivery = false;

deliveryBtn.addEventListener('click', () => {
  deliveryBtn.classList.add('active');
  pickupBtn.classList.remove('active');
  isDelivery = true;
  renderCart();
});

pickupBtn.addEventListener('click', () => {
  pickupBtn.classList.add('active');
  deliveryBtn.classList.remove('active');
  isDelivery = false;
  renderCart();
});

function calculateTotal() {
  let total = cart
    .map(({ id, qty }) => {
      const { price } = products.find((x) => x.id === id);
      return qty * price;
    })
    .reduce((sum, number) => {
      return sum + number;
    }, 0);

  if (isDelivery) {
    total += deliveryFee;
  }

  return total;
}

setupListeners();
function checkOut(id) {
  const total = calculateTotal();
  localStorage.setItem('total', total);
  window.open(`check.html?total=${total}`, "_self");
 
    clearCart();
  clearCart();
    saveCart();

}


  
function myFunction(){
  window.location.href = "index.html";
}

function searchFoods() {
  let query = document.getElementById('searchInput').value.toLowerCase();
  
  // Filter the products based on the query in the title or description
  let filteredFoods = products.filter(function(food) {
    return food.title.toLowerCase().includes(query) || 
           food.description.toLowerCase().includes(query);
  });

  let originalProducts = [...products]; // Make a copy of the original products array
  products = filteredFoods; // Temporarily replace the products array with the filtered results
  renderProducts(); // Render the filtered products
  products = originalProducts; // Restore the original products array after rendering
}
