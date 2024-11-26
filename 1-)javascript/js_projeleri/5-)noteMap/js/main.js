import { personIcon } from "./constants.js";
import { getIcon, getStatus } from "./helpers.js";
import { ui } from "./ui.js";

/*
Kullanıcının konum bilgisine erişmek için izin isteyeceğiz.Eğer izin verirse bu konum bilgisine erişip ilgili konumu başlangıç noktası yapacağız.Eğer vermezse varsayılan bir konum belirle.

*/

// Global Değişkenler
var map;
let clickedCords;
let layer;
// ! Localstorage'dan gelen verileri javascript nesnesine çevir ama eğer localstorage boşsa boş bir dizi render et
let notes = JSON.parse(localStorage.getItem("notes")) || [];

window.navigator.geolocation.getCurrentPosition(
  (e) => {
    loadMap([e.coords.latitude, e.coords.longitude], "Mevcut Konum");
  },
  (e) => {
    loadMap([39.921132, 32.861194], "Varsayılan Konum");
  }
);

function loadMap(currentPosition, msg) {
  // Harita Kurulumu
  map = L.map("map", {
    zoomControl: false,
  }).setView(currentPosition, 10);

  // Haritanın ekrandan render edilmesini sağlar
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Ekrana basılacak işaretlerin listelebeceği bir katman oluştur
  layer = L.layerGroup().addTo(map);

  // Zoom butonlarını ekranın sağ aşağısına taşı
  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(map);

  // İmleç ekle
  L.marker(currentPosition, { icon: personIcon }).addTo(map).bindPopup(msg);

  // Haritaya tıklanma olayı gerçekleşince
  map.on("click", onMapClick);

  // Haritaya notları render et
  renderMakers();
  renderNotes();
}

// ! Harita tıklanma olayını izle ve tıklanılan noktanın kordinatlarına eriş
function onMapClick(e) {
  // Tıklanılma olayı
  clickedCords = [e.latlng.lat, e.latlng.lng];

  ui.aside.classList.add("add");
}

// İptal butonuna tıklayınca aside'ı tekrar eski haline çeviren fonksiyon

ui.cancelBtn.addEventListener("click", () => {
  // Aside a eklenen 'add' clasını kaldır
  ui.aside.classList.remove("add");
});

// ! Formun gönderilme olayını izle ve  bir fonksiyon tetikle
ui.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();
  // Formun içerisindeki verilere eriştik
  const title = e.target[0].value;
  const date = e.target[1].value;
  const status = e.target[2].value;

  // Bir not objesi oluşturmak

  const newNote = {
    // 1970'den itibaren geçen zamanın milisaniye cinsinden değerini aldık
    id: new Date().getTime(),
    title,
    date,
    status,
    coords: clickedCords,
  };

  // Notlar dizisini yeni notu ekle
  notes.unshift(newNote);
  // Localstorage'ı güncelle
  localStorage.setItem("notes", JSON.stringify(notes));

  // Aside'ı eski haline çevir
  ui.aside.classList.remove("add");

  // Formun içeriğini temizle
  e.target.reset();

  // Notları render et
  renderNotes();
  renderMakers();
});

function renderMakers() {
  // Haritadak markerları temizle
  layer.clearLayers();
  // Notlar içindeki her bir öğe için bir işaretçi ekle
  notes.map((note) => {
    const icon = getIcon(note.status);
    // Her not için bir marker oluştur
    L.marker(note.coords, { icon }).addTo(layer).bindPopup(note.title);
  });
}

// ! Notları render eden fonksiyon

function renderNotes() {
  const noteCards = notes
    .map((note) => {
      // Tarih verisi istenilen formatta düzenlendi
      const date = new Date(note.date).toLocaleString("tr", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      const status = getStatus(note.status);

      return `<li>
          <div>
            <p>${note.title}</p>
            <p>${date}</p>
          
            <p>${status}</p>
          </div>
          <div class="icons">
            <i data-id="${note.id}" class="bi bi-airplane-fill" id="fly"></i>
            <i data-id="${note.id}" class="bi bi-trash-fill" id="delete"></i>
          </div>
        </li>`;
    })
    .join("");

  // Oluşturulan kart elemanlarını HTML kısmına ekle
  ui.ul.innerHTML = noteCards;

  // Delete Iconlarına tıklanınca silme işlemini gerçekleştir
  document.querySelectorAll("li #delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;

      deleteNote(id);
    });
  });

  // Fly iconlarına tıklayınca o nota focusla
  document.querySelectorAll("li #fly").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      flyToLocation(id);
    });
  });
}
// ! Not silme fonksiyonu
function deleteNote(id) {
  // Kullanıcıdan silme işlemi için onay al
  const res = confirm("Not silme işlemini onaylıyor musunuz ?");

  if (res) {
    // `id`'si bilinen elemanı notes dizisinden kaldır
    notes = notes.filter((note) => note.id !== parseInt(id));

    // LocalStorage'ı güncelle
    localStorage.setItem("notes", JSON.stringify(notes));

    // Notları render et
    renderNotes();

    // Markerları render et
    renderMakers();
  }
}
// ! Haritadaki ilgili nota hareket etmeyi sağlayan fonksiyon

function flyToLocation(id) {
  // id'si bilinen elemanı notes dizisi içerisinden bul
  const note = notes.find((note) => note.id === parseInt(id));

  console.log(note);

  // Bulunan notun kordinatlarına uç
  map.flyTo(note.coords, 12);
}

// ! arrow iconuna tıklanınca çalışacak fonksiyon

ui.arrow.addEventListener("click", () => {
  ui.aside.classList.toggle("hide");
});
