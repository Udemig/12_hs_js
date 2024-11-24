// * Date Objesi

// Date objesi javascriptde güncel tarih verilerini yönetmek için kullanılır.

let tarih = new Date();

document.write(`Tarih: ${tarih} <br/>`);

// ! Tarih Objesi içerisinden günü alma

let gün = tarih.getDate();

document.write(`Gün: ${gün} <br/>`);

// ! Tarih Objesi içerisinden haftanın kaçıncı günü olduğunu alma

let gün1 = tarih.getDay();

document.write(`Gün-1: ${gün1 + 1} <br/>`);

// ! Tarih Objesi içerisinden ayı alma

let ay = tarih.getMonth();

document.write(`Ay: ${ay + 1} <br/>`);

// ! Tarih Objesi içerisinden saati alma

let saat = tarih.getHours();

document.write(`Saat: ${saat} <br/>`);

// ! Tarih Objesi içerisinden dakika alma

let dakika = tarih.getMinutes();

document.write(`Dakika: ${dakika} <br/>`);

// ! Tarih Objesi içerisinden saniye alma

let saniye = tarih.getSeconds();

document.write(`Saniye: ${saniye} <br/>`);

document.write(`----------------------------- <br/>`);

// * Javascript Objelerde call,apply,bind Metotları

// Javascript'de call,apply,bind ile bir objeye ait özellikleri başka bir obje üzerinden çalıştırabiliriz.

// call:

// call metodu bir fonksyionu bağlam belirterek çalıştırmamızı sağlar.call metoduna istenilen sayıda argüman virgülle ayrılarak eklenir.

const kişi = {
  name: "Yusuf",
  surname: "YAMAN",
  writeToDocument: function (age, country) {
    document.write(
      `Ad: ${this.name} Soyad: ${this.surname} Yaş: ${age} Ülke:${country} <br/>`
    );
  },
};

kişi.writeToDocument(22, "Türkiye");

const kişi1 = {
  name: "Cihan",
  surname: "Hayta",
};

kişi.writeToDocument.call(kişi1, 40, "Türkiye");

// apply:

// apply metodu call ile aynı işi yapar.Ancak apply kendisine verilen argümanları bir dizi şeklinde ister.

kişi.writeToDocument.apply(kişi1, [40, "Türkiye"]);

const kişi2 = {
  name: "Evrim",
  surname: "Çay",
};

// bind:

// Bind tıpkı call gibi argümanlarını virgülle ayırır.Fakat call ve apply'dan farklı olarak bu metodu yeni bir fonksiyon olarak dçnderdiğinden bunu başka bir fonksiyona  atayıp bu atanan fonksiyonu çalıştırmamızı ister.

const yeniKişi = kişi.writeToDocument.bind(kişi2, 30, "Almanya");

yeniKişi();

document.write(`----------------------------- <br/>`);

//  * Javascript Class Yapısı

// JavaScript’te class (sınıf) yapısı, ES6  ile birlikte tanıtılan bir özellik olup, nesne yönelimli programlamayı  daha temiz ve anlaşılır hale getirmek için kullanılır. Sınıflar, JavaScript’te nesneler  oluşturmak için bir şablon görevi görür. Class yapısı, objeleri ve onların özelliklerini organize etmek için daha yapılandırılmış bir yol sağlar.

// Javascript'de class yapısı tanımlamak için 'class'  anahtar kelimesi kullanılır.Classların içerisinde 'constructor' adında kurucu bir metot yer alır.Bu metot class'ın örneği alınarak çağırıldığında arkaplanda çalışan yapıdır.

class Hayvan {
  constructor(ad, tür) {
    this.adi = ad;
    this.türü = tür;
  }

  sesÇıkar() {
    document.write(`Hayvan adı: ${this.adi} Hayvan türü:${this.türü} <br/>`);
  }
}
// Kuş classının örneği alındı
const aslan = new Hayvan("Aslan", "Memeli");

// console.log(aslan.adi);
// console.log(aslan.türü);

// console.log(aslan);

aslan.sesÇıkar();

// todo: Kişi adından bir class oluşturunuz.Bu class constructor kurucu metoduyla dışarından isim ve soyisim adında değerleri alıp class içerisinde kullanılacak şekilde atama yapsın.Bu class içerisinde birde kişiTanıt adından bir fonksiyon oluşturun.Bu fonksiyon çalışınca isim ve soyisimi ekrana yazdırsın.

// Class içerisinde miras alma

// extends Hayvan ile kuş classının hayvan classından miras alacağını belirttik
class Kuş extends Hayvan {
  constructor(ad, kanatUzunluğu) {
    // super ile Kuş classı içerisinde hayvan classının constructor çalıştırdık.constructor kısımında belirtilen kanatUzunluğu bu classın sahip olduğu diğer özellitir.
    super(ad, "Kuş");

    this.kanatUzunluğu = kanatUzunluğu;
  }
  uç() {
    document.write(`${this.adi} uçuyor <br/>`);
  }
}
// Kuş classının örneği alındı
const kuş = new Kuş("Papağan", 60);

//

kuş.uç();

// Classlar birbirinden miras alabilir.Bunu yaparken bir classın nereden miras aldığını 'extend' ile ifade ederiz.Miras alınan özelliklerin yönetimiyse constructor içerisindeki super ile sağlanır.

// ! for of Döngüsü

// Bir dizinin elemanları üzerinde gezinmek için kullanılır.

const kullanıcılar = ["Ali", "Ayşe", "Fatma", "Mehmet"];

for (const kullanıcı of kullanıcılar) {
  document.write(`Kişi: ${kullanıcı} <br/>`);
}

// ! for in Döngüsü

// Bir nesnenin üzerinde dolanmak için kullanılır.

const araba = {
  marka: "BMW",
  model: "M3",
  yıl: 2020,
  vitesTürü: "Manuel",
  renk: "Siyah",
};

for (let key in araba) {
  document.write(`${key} : ${araba[key]}  <br/>`);
}

// todo: Oluşturulan bir objenin elemanlarını for in döngüsüyle dönünüz.

// * Json Yapısı

// JSON , verileri yapılandırmak ve depolamak için kullanılan hafif bir veri formatıdır. JSON, veriyi insan tarafından okunabilir ve makine tarafından işlenebilir hale getirir. JavaScript'te, JSON genellikle veri alışverişi  veya verilerin depolanması amacıyla kullanılır.

// Json Temel Kuralları

// Nesne tabanlıdır
// Javascript nesnelerinden farklı olarak json içerisindeki keyler '' arasında yazılır.
// Javascript'deki array,boolean,object,number veri tiplerindeki içerisinde bulundurur.

// {
// 'ad':'Yusuf',
// 'soyad':'YAMAN',
// 'diller':['Js','Ts','C','C#','Java','Phyton']

// }

// Json yapısının bizim javascript kodumuzdan farklı olarak sahip olduğu yazım türü bizi veri dönüşümlerine mecbur bırakır.

// * 1-) Json Verisini Js Nesnesine Çevirme: [Json.parse()]

// Json verisini çevirmek için Json.parse metodu kullanılır.Bu metot bize js nesnesi döndürür.

const jsonVeri = '{"ad": "Yusuf", "yas": 22, "öğrenci": false}';

// console.log(jsonVeri);

const jsNesnesi = JSON.parse(jsonVeri);

// console.log(jsNesnesi);

// * 2-) Js Nesnesini Json a çevirme: [JSON.stringify()]

// Js nesnelerini api'nın kabul edeceği veri tipine çevirmek için JSON.stringify() kullanılır.

const nesne = { ad: "Yusuf", yas: 22, öğrenci: false };

// console.log(nesne);

const jsonVeri1 = JSON.stringify(nesne);

// console.log(jsonVeri1);

// * API:

// Apı server adındaki sunucularda tutulan verilere erişmemiz  için kullanılan yapılardır.Apı lar 2 ana kısmında oluşur.

// 1-) BaseUrl: Anpi ın ana kısımıdır.

// 2-) Endpoint: Herbir kategori için özelleştirilmiş uç noktalardır.

// Apı içerisinde tutulan veriler belirli endpoint ler ile yönetilir.Herbir endpoint belirli bir kategoriyi yönetmek için kullanılır.

// * Fetch: Javascript'de api'dan verileri almak için kullanılan kullanılan bir metotdur.Bu metot () içersinde hangi url'den veriler alınacaksa bunun kendisine verilmesini ister.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   // fetch ile api'dan veriler alındı
//   .then((a) => a.json());
// // api json veri tipinde datalar bulundurduğundan bunları js nesnesine çevirdi
// //    .then((ali) => console.log(a));
// // çevirilen nesneleri console'a yazdırdı.

// * Async/Await:

// Async/Await asekron yapıları yönetmek için kullanılır.

// Asekron yapılar birbiriyle aynı anda çalışan değilse biri bitip diğeri başlayan yapılardır.Javascript'de asekron yapılar yönetilirken işlemi yapması beklenecek yapının başına await yazılır.Fonksiyonun başınaysa 'async' yazılır.Bu sayede işlemler asekron şekilde yönetilir.

const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

// getData();

// todo: Api'dan verileri çeken bir fonksiyon oluşturunuz.Bu fonksiyon kendisine parametre olarak verilen endpoint'e istek atsın ve gelen verileri return etsin.

function getDataFromApı(endpoint) {
  fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// getDataFromApı("users");
// getDataFromApı("photos");
