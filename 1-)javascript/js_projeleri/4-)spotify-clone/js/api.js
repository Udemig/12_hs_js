// Api URL
const url = "https://shazam.p.rapidapi.com/search?term=adele&locale=en-US";
// Headers ==> Api'ın bizi tanıyıp verileri iletmesi için gerekli obje
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// Apı Clası
export class API {
  // Popüler müzikleri api'dan alan fonksiyon
  async getPopular() {
    //     // Fetch ile api'dan verileri aldık
    //     const res = await fetch(url, options);
    //     // Veriyi js nesnesine çevirdik
    //     const data = await res.json();
    //     // Verinin içerisinde bulunan katmanlı yapıyı düzenledik ve şarkı verisine eriştik
    //     const formatted = data.tracks.hits.map((item) => item.track);

    //     return formatted;

    const data = await this.searchMusics("neffex");
    const data1 = await this.searchMusics("eminem");

    return [...data, ...data1];
  }

  // Aratılan kelimeye göre şarkı verilerini alan fonksiyon
  async searchMusics(query) {
    // Url'i dinamik hale getirdik
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;
    // Api'a istek at
    const res = await fetch(url, options);
    // Gelen cevabı js nesnesine çevir
    const data = await res.json();
    // Verinin içerisinde bulunan katmanlı yapıyı düzenledik ve şarkı verisine eriştik
    const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
  }
}
