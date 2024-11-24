import { addToCart, displayCartTotal, renderCartItems } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";
import { getFromLocalStorage, updateCartIcon } from "./utils.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

// Ürünleri ana sayfadayken api'dan almalıyız.Bunun için window.location ile tarayıcı path 'ini izleyip karar veririz.
document.addEventListener("DOMContentLoaded", async () => {
  // Sepet verisine eriş
  let cart = getFromLocalStorage();

  // Tarayıcıda hangi sayfadayız bunu kontrol et
  if (window.location.pathname.includes("cart.html")) {
    // Cart Sayfası
    console.log(`Cart Sayfası`);

    renderCartItems();
    displayCartTotal();
  } else {
    // Ana sayfa
    console.log(`Ana Sayfa`);
    const product = await fetchProducts();
    //Api'dan gelen veriye bağlı olarak ekrana cart render ettik
    renderProducts(product, (event) => {
      addToCart(event, product);
    });
  }

  // Sepet Iconunu güncelle
  updateCartIcon(cart);
});

// Eğer  anasayfadaysak bize ürünleri getirsin
