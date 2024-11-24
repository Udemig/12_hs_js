export class UI {
  // Kurucu metot
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector("form");
    this.title = document.getElementById("title");
    this.player = document.querySelector(".player");
  }

  // Ekrana müzik cartı render eden fonksiyon
  renderCards(songs) {
    // Öncesinde list kısmındaki Html'i temizle
    this.list.innerHTML = "";

    // Her müzik verisi için ekrana bir Html oluştur
    songs.forEach((song) => {
      // Card oluştur
      const card = document.createElement("div");
      // Cardın classını belirle
      card.className = "card";

      // Card elemanına şarkı verilerini aktar
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Cardın İçeriğini belirle
      card.innerHTML = `
             <figure>
                <img
                  src="${song.images.coverarthq} "
                  alt=""
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure> 


           
              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${song.subtitle}</h4>
              </div>
      `;
      // Card ı Html içerisine yerleştir
      this.list.appendChild(card);
    });
  }
  // Ekrana loader render eden fonksiyon
  renderLoader() {
    this.list.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>
              `;
  }

  // Arama işlemi sonucununda başlık kısmını güncelleyen fonksiyon

  updateTitle(text) {
    this.title.textContent = text;
  }

  sliceText(text) {
    if (text.length > 16) {
      return text.slice(0, 16) + "...";
    }
    return text;
  }

  // Oynatma alanını güncelleyen fonksiyon

  renderPlayer(song) {
    console.log(song);

    this.player.innerHTML = `
      <div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>
 
      <audio autoplay
        src="${song.mp3}"
        controls
      ></audio>
      <!-- Icons -->
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    
    `;
    const audio = this.player.querySelector("audio");
    // Audio elemanın oynat-durdur durumunu konrol et
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }

  // resim animasyonunu dinamik şekilde ekle-çıkar yapan fonksiyon
  toggleAnimation() {
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
  }
}
