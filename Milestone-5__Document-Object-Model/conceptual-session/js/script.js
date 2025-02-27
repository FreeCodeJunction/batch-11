const bandColorContainer = document.getElementById("band-color-container");
const productImage = document.getElementById("product-image");
const bands = Array.from(bandColorContainer.children);
const quantity = document.getElementById("quantity");
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
const checkoutContainer = document.getElementById("checkout-container");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutAndOrderBtn = document.getElementById("checkout-and-order-btn");
const product = {
  name: document.getElementById("product-name").innerText,
  color: "purple",
  size: "S",
  price: 69,
  imageUrl: "./../assets/watch-purple.jpg",
  quantity: 0,
};

function saveToLocalstorage() {
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  return;
}

bands.forEach((element) => {
  element.addEventListener("click", function () {
    bands.forEach((el) => el.classList.remove("border-purple-600", "border-3"));
    this.classList.add("border-purple-600", "border-3");
    const imageName = this.id.split("-")[0];
    product.color = imageName;
    productImage.src = product.imageUrl =
      "./../assets/watch-" + imageName + ".jpg";
  });
});

Array.from(document.getElementById("wrist-size-container").children).forEach(
  (element) => {
    element.addEventListener("click", (e) =>
      selectWristSize(e.target.id.split("-")[1])
    );
  }
);

function selectWristSize(size) {
  const wristSizes = ["S", "M", "L", "XL"];
  wristSizes.forEach((singleSize) => {
    const element = document.getElementById(`size-${singleSize}`);
    if (singleSize === size) {
      element.classList.remove("border-gray-300");
      element.classList.add("border-purple-600");
      product.size = singleSize;
      product.price = Number(element.innerText.trim().split(" ")[1].slice(1));
    } else {
      element.classList.add("border-gray-300");
      element.classList.remove("border-purple-600");
    }
  });
}

document
  .getElementById("js-quantity-container")
  .addEventListener("click", function (event) {
    const element = event.target;
    switch (element.id) {
      case "quantity-plus-one":
        quantity.innerText = Math.min(3, Number(quantity.innerText) + 1);
        break;
      case "quantity-minus-one":
        quantity.innerText = Math.max(0, Number(quantity.innerText) - 1);
        break;
    }
  });

document.getElementById("add-to-cart").addEventListener("click", function () {
  if (Number(quantity.innerText) > 0) {
    const isProductInTheCart = cartProducts.findIndex(
      (cartProduct) =>
        cartProduct.size === product.size && cartProduct.color === product.color
    );
    if (isProductInTheCart !== -1) {
      cartProducts[isProductInTheCart].quantity = Number(quantity.innerText);
    } else {
      cartProducts.push({ ...product, quantity: Number(quantity.innerText) });
    }
    checkoutContainer.classList.remove("hidden");
    checkoutContainer.classList.add("flex");
    cartCount.innerText = cartProducts.reduce(
      (total, cartProduct) => (total += cartProduct.quantity),
      0
    );
    saveToLocalstorage();
  } else {
    alert("Quantity must be greater than 0");
  }
});

function addAndRemove(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

checkoutContainer.addEventListener("click", function () {
  const cartItems = document.getElementById("cart-items");
  const { totalQuantity, totalPrice } = cartProducts.reduce(
    (total, cartProduct) => ({
      totalQuantity: total.totalQuantity + cartProduct.quantity,
      totalPrice: total.totalPrice + cartProduct.quantity * cartProduct.price,
    }),
    {
      totalQuantity: 0,
      totalPrice: 0,
    }
  );
  console.log(totalPrice, totalQuantity);
  const html =
    cartProducts
      .map(({ name, color, size, price, imageUrl, quantity }) => {
        return `<tr class="border-b">
    <td class="py-2 px-4">
    <div class="flex items-center space-x-2">
    <img src="${imageUrl}" class="w-12 h-12 object-cover rounded-sm" alt="${name}">
    <span class="font-semibold">${name}</span>
    </div>
    </td>
    <td class="py-2 px-4">${color}</td>
    <td class="py-2 px-4">${size}</td>
    <td class="py-2 px-4">${quantity}</td>
    <td class="py-2 px-4">$${(quantity * price).toFixed(2)}</td>
    </tr>`;
      })
      .join("") +
    `<tr class="border-t font-bold">
    <td class="py-2 px-4" colspan="3">Total</td>
    <td class="py-2 px-4">${totalQuantity}</td>
    <td class="py-2 px-4">$${totalPrice.toFixed(2)}</td>
    </tr>`;

  cartItems.innerHTML = html;

  addAndRemove(cartModal, "flex", "hidden");
});

continueShoppingBtn.addEventListener("click", function () {
  addAndRemove(cartModal, "hidden", "flex");
});

checkoutAndOrderBtn.addEventListener("click", function () {
  addAndRemove(cartModal, "hidden", "flex");
  addAndRemove(checkoutContainer, "hidden", "flex");
  cartProducts = [];
  alert(
    "Order Placed. Delivery will take up to 4 to 5 days. Please be patient!"
  );
});
