import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

// Sayfanın yüklenmesi anını izle
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();
  //  db.json dosyasından alınan veriler ile ekrana menü elemanı redner eden fonksiyon
  renderCards(data.menu);
  // İnput elemalarına eriş
  const inputs = document.querySelectorAll("#buttons input");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      // Eğer hepsi  seçiliyse tüm ürünleri render et
      if (selected === "all") {
        renderCards(data.menu);
      } else {
        // İlgili categoryle alakalı ürünleri filtrele
        const filtered = data.menu.filter((item) => item.category == selected);
        // Hepsi seçili değilse ilgili categoryi render et
        renderCards(filtered);
      }
    });
  });
});
