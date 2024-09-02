function renderProducts(){
    selectors.products.innerHTML = products
      .map((product) => {
        const { id, title, image,  price,description,  } = product;
        const inCart = cart.find((x) => x.id === id);
        const disabled = inCart ? "plus" : "";       
        const text = inCart ? "" : "";
    return `
      <div class="product" id="food${id}">
        <img src="${image}  " alt="${title}" />
        <h3>${title}</h3>
        <h5>${price.format()}</h5>
        <div class="details">${description}</div>
        <button ${disabled} data-id=${id}>${text}</button>
      </div>
      `;
      })
      .join("");
  };

  function renderCart(){
    const cartQty = cart.reduce((sum, item) => {
      return sum + item.qty;
    }, 0);
    selectors.cartQty.textContent = cartQty;
    selectors.cartQty.classList.toggle("visible", cartQty);
    selectors.cartTotal.textContent = calculateTotal().format();
    if (cart.length === 0) {
      selectors.cartBody.innerHTML =
        '<div class="cart-empty">Your cart is empty.</div>';
      return;
    }
    selectors.cartBody.innerHTML = cart
      .map(({ id, qty }) => {
        const product = products.find((x) => x.id === id);
        const { title, image, price } = product;
        const amount = price * qty;
        return `
        <div class="cart-item" data-id="${id}">
          <img src="${image}" alt="${title}" />
            <div class="cart-item-detail">
              <h3>${title}</h3>
              <h5>${price.format()}</h5>
              <div class="cart-item-amount">
                <i class="bi bi-dash-lg" data-btn="decr"></i>
                <span class="qty">${qty}</span>
                <i class="bi bi-plus-lg" data-btn="incr"></i>
                <span class="cart-item-price">
                  ${amount.format()}
                </span>
              </div>
           </div>
  
        </div>`;
      })
      .join("");
  };