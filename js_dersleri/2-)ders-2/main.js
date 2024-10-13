const metin =
  "    Javascript dersinden selamlar.Dünyanın en popüler yazılım dilini piyasanın en iyi yazılım akademisinde öğreniyoruz.Udemigin kaliteli eğitimleri sayesinde çok iyi seviyeye geleceğiz.    ";

document.write("Metin:", metin, "<br/>", "<br/>");

document.write("Metin uzunluğu:", metin.length, "<br/>", "<br/>");

// ! toLocaleUpperCase ==> String ifadenin tüm harflerini büyük harf olarak yapar.

document.write(
  "Metinin tüm harflerini büyük harf:",
  metin.toLocaleUpperCase(),
  "<br/>",
  "<br/>"
);

// ! toLocaleLowerCase ==> String ifadenin tüm harflerini küçük harf olarak yapar.

document.write(
  "Metinin tüm harflerini küçük harf:",
  metin.toLocaleLowerCase(),
  "<br/>"
);

// ! trim ==> String ifadenin başında ve sonunda bulunan boşlukları kaldırır.

document.write(
  "Metinin içerisindeki boşlukları kaldır:",
  metin.trim().length,
  "<br/>"
);

document.write("----------------------------------------------------", "<br/>");

// * Number Metotları

let sayı = 123.65765;

document.write("Sayı:", sayı, "<br/>");

// ! toFixed ==> Ondalıklı sayıyı . dan sonra belirli bir sayı adetine sabitler.

document.write("Sayı:", sayı.toFixed(2), "<br/>");

// ! Math.round ==> Ondalıklı bir sayıyı en yakın tam sayıya yuvarlar.

document.write(
  "Sayının en yakın tamsayıya yuvarlanmış hali:",
  Math.round(sayı),
  "<br/>"
);

// ! Math.floor ==> Ondalıklı bir sayıyı en yakın bir alt tamsayıya yuvarlar.

document.write(
  "Sayının en yakın bir alt yuvarlanmış hali:",
  Math.floor(sayı),
  "<br/>"
);

// ! Math.ceil ==> Ondalıklı bir sayıyı en yakın bir üst tamsayıya yuvarlar.

document.write(
  "Sayının en yakın bir üst yuvarlanmış hali:",
  Math.ceil(134.12),
  "<br/>"
);

// ! Math.random ==> Bu metot sayesinde javascript bize 0-1 arasında rastgele sayılar oluşturur.

document.write("Rastgele Sayı:", Math.round(Math.random() * 100), "<br/>");

// Math.random metodu 0 ile 1 arasında rastgele sayılar oluşturur.Biz bu metodu 10 ile çarparsak 0-10; 100 ile çarparsak 0-100 aralığında rastgele sayılar elde ederiz.Bu elde edilen sayıları math.round metoduyla tam sayıya yuvarlayım rastgele tam sayılar elde edebiliriz.

// * Javascript Templates  Literal(Backtick):

// Javascript de şimdiye kadar değişkenleri direkt metin ifadeleri '' içerisinde yazdık.Bu durum değişken ve metin ifadeleri bir arada kullanıdığımızda aralarında ',' kullanmamızı gerektiriyor.Değişken yada metin ifade sayısı arttıkça bu yazım bizim için zorlayıcı oluyor.İşte bu noktada ES6(Javascriptin en güncel sürümü) ile birlikte gelen 'backtick' kullanımyla değişken ve metin ifadeler daha kolay bir şekilde yazılır.

// Backtick mac lerde (option + ,) windowslarda (altgr +,) tuş kombinasyonuyla oluşturulur.Bu backtickler arasında ${} içerisinde değişken yazılır.Metin ifadeler backtick içerisinde direkt olarak yazılır.

const courseName = "Frontend";

const lesson = "Javascript";

document.write(
  courseName,
  " kursunda ",
  lesson,
  " dersinde selamlar !!",
  "<br/>"
);

document.write(`${courseName} kursunda ${lesson} dersinde selamlar !! <br/> `);

// * Javascript Arrow Functions

// ES6 ile gelen yeniliklerden bir diğeri 'Arrow Functions' dır.Bu metot sayesinde daha modern bir şekilde fonksiyonlar oluşturacağız.Arrow functions oluştururken değişken tanımlarken kullanılan var,let ve const anahtar kelimeleri yazılır devamında fonksiyona bir isim verilir.Bu isimin devamında sırasıyla =()=>{} oluşurulur.{} içerisinde fonksiyonun işlevi belirtilir.Fonksiyonun alacağı parametrelerse () içerisinde fonksiyona verilir.

// function selamla() {
//   document.write(`Selamlar Javascript !!! <br/>`);
// }

const selamla = () => {
  document.write(`Selamlar Javascript !!! <br/>`);
};

selamla();

let toplama = () => {
  let a = 12;
  let b = 87;

  let toplam = a + b;

  document.write(`Sonuç: ${toplam} <br/>`);
};

toplama();

let parametereliToplama = (x, y) => {
  let toplam = x + y;

  document.write(`Sonuç: ${toplam} <br/>`);
};

parametereliToplama(12, 65);

// let toplamaİşlemi = (a, b) => {
//   let toplam = a + b;

//   return a + b;
// };

let toplamaİşlemi = (a, b) => a + b;

document.write(`Sonuç-1: ${toplamaİşlemi(13, 54)} <br/>`);

// todo: Kullanıcıdan alınan 3 adet sayının ortalamasını hesaplayan ve fonksiyon çağırıldığında bu değeri geri döndüren arrow function code-script ini yazınız.

const ortalamaHesapla = (a, b, c) => {
  let toplam = a + b + c;

  let ortalama = toplam / 3;

  return ortalama;
};

const ortalama = ortalamaHesapla(12, 13, 14);

document.write(`Ortalama Sonuç: ${ortalama} <br/>`);
document.write("----------------------------------------------------", "<br/>");

// * Javascript Diziler (Array)

// Javascript dizileri birden fazla veriyi yönetmek ve depolamak için kullanılır.Diziler tanımlanırken var,let ve const anahtar kelimelerinden biri seçilir devamında bu diziye bir isim verilir.Verilen bu isimin devamında sırasıyla = [] yapısı oluşturulur.Buradaki [] içerisinde dizinin sahip olacağı elemanlar yazılır.

// let sayı1 = 1;
// let sayı2 = 2;
// let sayı3 = 3;
// let sayı4 = 4;
// let sayı5 = 5;

let sayılar = [1, 2, 3, 4, 5];

// Bir dizinin tüm elemanlarına erişmek
document.write(`Sayılar Dizisi: ${sayılar} <br/>`);

document.write(`Sayılar Dizisinin 1. Elemanı: ${sayılar[0]} <br/>`);
document.write(`Sayılar Dizisinin 2. Elemanı: ${sayılar[1]} <br/>`);

// ! Diziler içerisindeki elemanlara erişmek için dizi adının devamında [] kullanılır.Buradaki [] içerisinde erişilmek istenen elemanın sırası yazılır.Fakat bu noktada ufak bir hata mevcuttur.Dizinin 1. elemanına erişmek istediğimizde bizi 2.elemana;2.elemana erişmek istediğimizde bizi 3.elemana yönlendirir.Kısacası erişilmek istenen elemanın bir sonrasına erişmiş oluruz.Bu dizilerdeki elemanların 1,2,3,... şeklinde değilde 0,1,2,... şeklinde sayılmasından kaynaklanır.Bu duruma dizilerde index kullanımı denir.Dizilerde istenilen elemana erişmek için [] içerisinde erişilmek istenen elemanın bir eksik sırası belirtilir.

// console.log(sayılar);
document.write("----------------------------------------------------", "<br/>");

// * Javascript Objeler(Object):

// Objeler içerisinde değerleri key-value(anahtar-değer) çiftleri halinde tutan yapılardır.Bir obje tanımlanırken var,let ve const anahtar kelimelerinden biri seçilir.Bu anahtar kelimelerin devamında objeye bir isim verilir.Verilen bu isimin devamında sırasıyla ={} oluşturulur.Buradaki {} içerisinde objenin sahip olacağı değerler key-value çiftleri halinde yazılır.

const person = {
  name: "Yusuf",
  surname: "YAMAN",
  age: 22,
  hobbies: ["Yazılım", "Spor", "Müzik", "Yüzme"],
  selamlar: () => {
    document.write(`Obje örneğinden selamlar <br/>`);
  },
  kişiTanıtım: function () {
    document.write(`${this.name} ${this.surname} adlı kişiden selamlar <br/>`);
  },
};

// console.log(person);
// console.log("Kişi Ad:", person.name);
// console.log("Kişi Soyad:", person.surname);
// console.log("Kişi Yaş:", person.age);
// console.log("Kişi Hobiler:", person.hobbies);
// console.log("Kişi Hobiler-1:", person.hobbies[0]);

person.selamlar();

person.kişiTanıtım();

// todo: Bir hayvan için obje oluşturunuz.Bu obje içerisinde değerler,dizi birde fonksiyon oluşturunuz.

const kedi = {
  isim: "Tekir",
  yaş: 3,
  renk: ["siyah", "gri", "beyaz"],
  selamla: () => {
    document.write(`Kedi objesinden selamlar <br/>`);
  },
};

// console.log(kedi);
// console.log(kedi.isim);
// console.log(kedi.yaş);

kedi.selamla();

document.write("----------------------------------------------------", "<br/>");

const arabalar = ["Bmw", "Mercedes", "Audi", "Volkswagen", "Opel", "Audi"];

document.write(`Araba Dizisi: ${arabalar} <br/>`);

// * Dizi Metotları:

// ! length ==> Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write(`Araba Dizisi: ${arabalar.length} <br/>`);

// ! indexOf ==> Bir dizi içerisinde () arasında yazılı olan elemanın kaçıncı sırada olduğunu bulur.

document.write(`Araba Dizisi: ${arabalar.indexOf("Audi")} <br/>`);

// ! lastIndexOf ==> Bir dizi içerisinde birden fazla bulunan elemanlardan sonuncusunu bulmak için kullanılır.

document.write(`Araba Dizisi: ${arabalar.lastIndexOf("Audi")} <br/>`);

// ! push ==> Bir dizinin sonuna eleman eklemek için kullanılır.Bu metod () içerisinde diziye eklenecek elemanın yazılmasını ister.

arabalar.push("Renault");

document.write(`Araba Dizisi-1: ${arabalar} <br/>`);

// ! pop ==> Bir dizinin son elemanını diziden kaldırmak için kullanılır.

arabalar.pop();

document.write(`Araba Dizisi-2: ${arabalar} <br/>`);

// ! unshift ==> Bir dizinin başına eleman eklemek için kullanılır.Bu metod () içerisinde diziye eklenecek elemanın yazılmasını ister.

arabalar.unshift("Tesla");
arabalar.unshift("Nissan");

document.write(`Araba Dizisi-3: ${arabalar} <br/>`);

// ! shift ==> Bir dizinin başındaki elemanı diziden kaldırmak için kullanılır.

arabalar.shift();

document.write(`Araba Dizisi-4: ${arabalar} <br/>`);

// ! Bir dizinin belirli elemanı diziAdı[düzenlenecek elemanın indexi] = 'Yeni Değer' şeklinde güncellenir.

arabalar[5] = "Citroen";

document.write(`Araba Dizisi-5: ${arabalar} <br/>`);

// ! slice ==> Bir dizinin belirli aralığını almak için kullanılır.Bu metot belirlenen aralığı kesip yeni bir dizi oluşturur.Başlangıç ve bitiş değeri alan bu metod bitiş değerine kadar olan elemanları alır.Bitiş sırasındaki elemanı almaz.

const newArabalar = arabalar.slice(1, 4);

document.write(`Yeni Arabalar: ${newArabalar} <br/>`);

// ! reverse ==> Bir dizinin elemanlarını ters çevirir.

arabalar.reverse();

document.write(`Araba Dizisi-6: ${arabalar} <br/>`);

// ! concat ==> İki yada daha fazla diziyi birleştirir.

const birleşikDizi = arabalar.concat(sayılar, "Udemig", "Volkan", "Sungur", 44);

document.write(`Karma Dizi: ${birleşikDizi} <br/>`);

// ! join ==> Dizinin elemanlarını belirlenen ayıraç ile ayırarak tek bir string ifadeye dönüştürür.

const joinedDizi = birleşikDizi.join(",");

document.write(`Dizi: ${joinedDizi} <br/>`);

// ! splice ==> Dizinin belirli bir kısımını güncelleme,diziye eleman ekleme,diziden eleman çıkarma gibi işlemleri gerçekleştirmek için kullanılır.

// ? Eleman kaldırma

// Kaldırma işleminde bu metot birinci değer olarak kaçıncı indexten itibaren kaldırma işlemi yapılacağını ikinci değer olaraksa kaç eleman kaldırılacağını ister.Kaldırılan elemanları yeni diziye aktarır.

// Arabalar dizisinin 1. index inden itibaren 3 eleman kaldırdık.Kaldırılan elemanları deletedCars adında bir diziye aktardı
const deletedCars = arabalar.splice(1, 3);

// Silinen elemanlar
document.write(`Silinen Elemanlar: ${deletedCars} <br/>`);

// Arabalar dizisinin güncel hali
document.write(`Araba Dizisi-7: ${arabalar} <br/>`);

// ? Eleman Ekleme

// Bu metot diziye eleman eklerken 1. değer olarak hangi index'e eleman ekleneceğini 2. değer olarak 0 alır bu sayede bu index elemanı ekler.3. değer olarak eklenecek elemanı ister

arabalar.splice(2, 0, "Skoda");
arabalar.splice(4, 0, "Ford");

document.write(`Araba Dizisi-8: ${arabalar} <br/>`);

// ? Eleman Güncelleme

// Bu metot dizinin elemanlarını güncellerken 1. değer olarak hangi indexden itiibaren güncelleme yapacağını 2.değer olarak kaç elemanı güncelleyeceğini ister. 2. değerde kaç eleman güncellenecekse bu sayıda değer girilmedilidir.

arabalar.splice(3, 2, "Toyota", "Honda");

document.write(`Araba Dizisi-9: ${arabalar} <br/>`);

document.write("----------------------------------------------------", "<br/>");

// ! sort ==> Bir diziyi sıralamak için kullanılır.

arabalar.sort();

document.write(`Araba Dizisi-10: ${arabalar} <br/>`);

document.write("-------------------------------------------", "<br/>");

const sayıDizisi = [1, 456, 789, 345, 6789, 2345];

document.write(`Sayılar Dizisi: ${sayıDizisi} <br/>`);

sayıDizisi.sort();

document.write(`Sayılar Dizisi-1: ${sayıDizisi} <br/>`);

sayıDizisi.sort((a, b) => {
  return a - b;
});

document.write(`Sayılar Dizisi-2: ${sayıDizisi} <br/>`);

sayıDizisi.sort((a, b) => {
  return b - a;
});

document.write(`Sayılar Dizisi-3: ${sayıDizisi} <br/>`);

// sort metodu dizilerde sıralama yapar.Bu metot string ifadeleri sıralarken hatasız çalışır fakat number değerleri sıralarken ufak  hatalı şekilde sıralama yapar.Bunun sebebi sayıları ilk basamağa göre sıralamasıdır.Bunu düzeltmek için metot içerisinde bir arrow function yazılır.

// ! find ==> Bir dizi içerisinde bir elemanı bir şarta bağlı olarak bulmak için kullanılır.Bu metot () içerisinde bir elemanı hangi şarta bağlı olarak bulmak istiyorsak bunu yazmamızı ister.

const users = [
  {
    id: 1,
    name: "Yusuf",
    surname: "YAMAN",
    email: "yusufyaman@gmail.com",
    point: 10000,
  },
  {
    id: 2,
    name: "Mehmet Can",
    surname: "Seyhan",
    email: "mehmetcanseyhan@gmail.com",
    point: 4000,
  },
  {
    id: 3,
    name: "Ayşe",
    surname: "Demir",
    email: "aysedemir@gmail.com",
    point: 2000,
  },
  {
    id: 4,
    name: "Ahmet",
    surname: "Kaya",
    email: "ahmetkaya@gmail.com",
    point: 3000,
  },
  {
    id: 5,
    name: "Fatma",
    surname: "Yıldız",
    email: "fatmayildiz@gmail.com",
    point: 5000,
  },
];

console.table(users);

// todo: User dizisi içerisinde id'si 3 olan elemanı bul.

const findedUser = users.find((user) => {
  return user.id == 3;
});

console.log(findedUser);

// todo: User dizisi içerisinde point'i 5000 olan elemanı bul.

const findedUser1 = users.find((user) => {
  return user.point == 5000;
});

console.log(findedUser1);

// ! filter ==> Bir dizinin elemanlarını filtrelemek için kullanılır.Bizden () içerisinde bu diziyi hangi şarta bağlı olarak filtreleyeceğini ister.

const filtredUsers = users.filter((user) => {
  return user.point > 3000;
});

console.table(filtredUsers);

//  !! Dizilerde kullanılan metotlardan map ve forEach döngüler işlendikten sonra işlenecek.

document.write("-------------------------------------------", "<br/>");

// * Javascript Döngüler

// Javascript de tekrar gerektiren durumlar için döngüler kullanılır.Döngüler tekrar gerektiren durumlarda bizlerin daha kolay bir şekilde durumu yönetmesini sağlar.

// Javascript'de Kullanılan Döngüler:

// 1-)For Döngüsü:

// Döngüler 'sayaç' mantığına dayalı çalışır.Bundan dolayı bu kısımı ufak bir tekrar edelim.

let sayaç = 100;

document.write(`Sayaç: ${sayaç} <br/>`);

// Sayaçın güncel değerini bir arttır.

// sayaç = sayaç + 1;

sayaç++;

// Değer bir yerine farklı bir sayıyla güncellenecekse bunu += 'yeni değer' şeklinde yapılır.

document.write(`Sayaç-1: ${sayaç} <br/>`);

// Sayaçın güncel değerini bir azalt.

// sayaç = sayaç - 1;

sayaç--;

document.write(`Sayaç-2: ${sayaç} <br/>`);

// Sayaçın güncel değerinin 5 katını al.

// sayaç = sayaç * 5;

sayaç *= 5;

document.write(`Sayaç-3: ${sayaç} <br/>`);

// For döngüsü bizden 3  değer ister.Bu değerlerden birincisi döngünün devam etmesi için sağlanacak kontrolün merkezindeki belirleyicidir.İkinci değer olarak bizden döngünü devam etmesi için  bir şart ister.Bu şart sağlandığı müddetçe döngü çalışır.Üçüncü değer olarak bizden döngü şartını nasıl güncelleyeceğini ister.Ve ikinci kısımda belirtilen şart sağlandıkça döngü çalışır.

for (let sayı = 0; sayı < 10; sayı++) {
  document.write(`Javascript Dersinden Selamlar. <br/>`);
}

// todo: Kullanıcının 20 ye kadar çektiği şınavlar için 1.şınav,2.şınav şeklinde ekrana çıktı veren code-script i oluşturunuz.

for (let sınavSayısı = 1; sınavSayısı <= 20; sınavSayısı++) {
  document.write(` ${sınavSayısı} . Şınav <br/>`);
}

// todo-ödev: 1'den 500'e kadar olan çift sayıları ekrana yazdıran code-script i oluşturunuz.
