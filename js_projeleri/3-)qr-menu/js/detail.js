/*
 * Javascript'deki url parametrelerini URLSearchParams classıyla daha kolay şekilde yönetebilriz.Bu class kendine urlin paramtere olarak girilmesini ister.Devamında get metoduyla ilgili parametre alınır. 

 */

import { renderDetailPage, renderNotFoundedPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

// Yukarıdaki classdan örnek alınarak url'deki parametreye ulaşıldı.
const id = parseInt(params.get("id"));

// Ürün detayının akatarılacağı Html elemanı

const outlet = document.getElementById("outlet");

// Sayfa yüklendiğinde çalışacak fonksiyon

document.addEventListener("DOMContentLoaded", async () => {
  // db.json dosyasına istek at
  const res = await fetch("../db.json");
  // Verileri js nesnesine çevir
  const data = await res.json();

  // id ye göre ilgili elemanı bul
  const product = data.menu.find((item) => item.id === id);
  // Eğer ürün yoksa ürün bulunamadı sayfasına git
  if (!product) {
    // Ürün bulunamadı içeriğini render et
    renderNotFoundedPage(outlet);
  } else {
    renderDetailPage(product, outlet);
  }
});
