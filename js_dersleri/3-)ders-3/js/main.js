"use strict";

// alert("Javascriptden selamlar");

// todo-ödev: 1'den 500'e kadar olan çift sayıları ekrana yazdıran code-script i oluşturunuz.

// for (let sayı = 2; sayı < 500; sayı += 2) {
//   document.write(sayı + "<br/>");
// }

// * While Döngüsü

// While döngüsü bir şarta bağlı olarak çalışır.while('şart'){} yapısı () içerisindeki şart sağlandıkça {} içerisindeki kodu çalıştırır.

// todo: 1'den 10'a kadar sayıları while döngüsü kullanarak ekrana yazdırınız.

let sayı = 1;

while (sayı <= 10) {
  document.write(sayı + "<br/>");
  sayı++;
}

// While döngüsü () içerisindeki şarta bağlı olarak çalıştığından eğer bu şart içerisindeki değer güncellenmezse sonsuz döngüye girer.Bu durumda uygulama patlar.Bu durumun önüne geçmek için şartın bağlı olduğu değeri güncellemeliyiz.

document.write(`----------------------------------- <br/>`);

// * Do-While Döngüsü:

let i = 1;

do {
  document.write(`Değer: ${i} <br/>`);
  i++;
} while (i <= 10);

// Do-While döngüsü while gibi bir şarta bağlı olarak çalışır.Fakat Do-While While 'dan farklı olarak şarta bakmadan çalışır ve sonrasında değeri kontrol eder.Bu durumda en az bir defa çalışmış olur.

document.write(`----------------------------------- <br/>`);

// * Dizilerde Döngü Kullanımı

const kişiler = [
  "Şükran",
  "Çağrı",
  "Zeynel",
  "Zehra",
  "Yıldız",
  "Yasin",
  "Yaren",
  "Volkan",
  "Sungur",
  "Sarp",
  "Aysun",
];
document.write(`Kişiler Dizisi: ${kişiler}<br/> `);

// document.write(`Kişiler: ${kişiler[0]}<br/> `);
// document.write(`Kişiler: ${kişiler[1]}<br/> `);
// document.write(`Kişiler: ${kişiler[2]}<br/> `);
// document.write(`Kişiler: ${kişiler[3]}<br/> `);
// document.write(`Kişiler: ${kişiler[4]}<br/> `);
// document.write(`Kişiler: ${kişiler[5]}<br/> `);

// Dizilerde yukarıdaki gibi bir işlemi kolay yoldan yapmak için döngü kullanılır.

// ! forEach ==> Bir dizinin elemanlarını dönmek için kullanılır.

kişiler.forEach((kişi) => {
  document.write(`Kişiler: ${kişi}<br/> `);
});

document.write(`----------------------------------- <br/>`);
// forEach dizinin her bir elemanını dönerek belirlenen işlevi gerçkeleştirir.

// ! map ==> Bir dizideki elemanları dönerek geriye yeni bir dizi oluşturur.

const sayılar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const yeniSayılar = sayılar.map((sayı) => {
  return sayı * 2;
});
document.write(`Sayılar:${sayılar} <br/>`);

document.write(`Yeni Sayılar:${yeniSayılar} <br/>`);

// ? forEach ve map arasındaki fark nedir?

// forEach bir dizinin elemanlarını sadece döner.map ise bir dizinin elemanlarını dönerken geriye yeni bir dizi oluşturur.

// ! Bir dizinin elemanları sadece dönülecekse forEach elemanlara bir müdahelede bulunulacaksa map kullanılır.
document.write(`----------------------------------- <br/>`);

// todo: Bir kişi dizisinin her elemanı için 1. kullanıcı ev kullanıcı adı şeklinde bir içeriği ekrana bastıran code-script i oluşturunuz.

const kullanıcılar = ["Ali", "Veli", "Ayşe", "Fatma", "Buse", "Kaan", "Hakan"];

kullanıcılar.forEach((user, index) => {
  document.write(`${index + 1}. kullanıcı: ${user} <br/>`);
});

document.write(`----------------------------------- <br/>`);

// * Javascript Switch-Case Yapısı

// Switch-Case yapısı bir ifadenin belirli değer aldığı durumları yönetmek için kullanılır.

// todo: 1'den 7'ye kadar olan her sayı için haftanın günlerini ekrana yazdıran code-script'i oluşturunuz.

let gün = 2;

switch (gün) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;
  case 3:
    document.write(`Çarşamba <br/>`);
    break;
  case 4:
    document.write(`Perşembe <br/>`);
    break;
  case 5:
    document.write(`Cuma <br/>`);
    break;
  case 6:
    document.write(`Cumartesi <br/>`);
    break;
  case 7:
    document.write(`Pazar <br/>`);
    break;
  default:
    document.write(`Tanımsız Gün <br/>`);
    break;
}

// Switch-case switch(){} şeklinde bir şablon ile oluşturulur.Buradaki() içerisinde hangi ifadeye göre kontrol sağlanacaksa bu yazılır.{} içerisinde ise bu ifadenin alacağı değerlere bağlı olarak nasıl bir çıktı verileceği belirtilir.

// todo: Kullanıcıdan alınan sayı 1 ise 'Frontend Kursu' 2 ise 'Backend Kursu' 3 ise 'React Native Kursu' 4 ise 'Swift-İos Kursu' 5 ise 'İngilizce Kursu' bu değerler haricinde ise 'Tanımsız Kurs' yazdıran code-script'i oluşturunuz.

// const kursNumara = parseInt(prompt("Bir sayı giriniz:"));

const kursNumara = 3;
switch (kursNumara) {
  case 1:
    document.write(`Frontend Kursu <br/>`);
    break;
  case 2:
    document.write(`Backend Kursu <br/>`);
    break;
  case 3:
    document.write(`React Native Kursu <br/>`);
    break;
  case 4:
    document.write(`Swift-İos Kursu <br/>`);
    break;
  case 5:
    document.write(`İngilizce Kursu <br/>`);
    break;
  default:
    document.write(`Tanımsız Kurs <br/>`);
    break;
}

document.write(`----------------------------------- <br/>`);

// * Javascript Try-catch yapısı

// Javascript'de try-catch yapısı programın belirli bir bölümünde hata oluştuğunda bu hatayı yakalayarak programın çökmesini önler.try bloğunda bir işlev gerçekleştirilir catch bloğundaysa try kısımında yapılan işlemde bir hata alınırsa bu yakalanır.Ayrıca programın yapısına bağlı olarak finally de kullanılabilir.Bu kısım en son çalışacak kısımı belirler.

try {
  throw new Error("İşlem gerçekleşirken hata oldu");
  document.write(`İşlem gerçekleştiriliyor <br/>`);
} catch (error) {
  document.write(`Hataaaaa ${error} <br/>`);
} finally {
  document.write(`İşlem bitti. <br/>`);
}

// todo: Kullanıcının 3 hak dahilinde pc tarafından oluşturulan bir 0-100 arasında random sayıyı tahmin etmesini isteyen code-script'i oluşturunuz.

// let hak = 0;

// let randomSayı = Math.round(Math.random() * 100);

// console.log(`Random Sayı: ${randomSayı} `);

// while (hak < 3) {
//   let tahmin = parseInt(prompt("0-100 arasında rastgele bir sayı giriniz:"));
//   if (!tahmin) {
//     alert("Lütfen tahmin giriniz:");
//   } else if (tahmin == randomSayı) {
//     alert("Tebrikler doğru bildiniz");
//     hak = 3;
//   } else if (tahmin > randomSayı) {
//     alert("Daha küçük sayı giriniz:");
//   } else {
//     alert("Daha büyük sayı giriniz:");
//   }
//   hak++;

//   if (hak == 3) {
//     alert(`Hakkınız bitti sayı: ${randomSayı}`);
//   }
// }

document.write(`----------------------------------- <br/>`);

// * Javascript Scope

// Scope kapsam demektir.Javascript'de değişkenlerin sahip olduğu 3 adet scope türü vardır.

// ! 1-) Global Scope:

// Global scope a sahip değişkenler programın içerisinde her yerden erişilebilir.

const kişiAdı = "Yusuf";

function isimYaz() {
  document.write(`Kişi adı: ${kişiAdı} <br/>`);
}

isimYaz();

// ! 2-) Function Scope:

const işimYaz1 = () => {
  let isim = "Sarp";
  document.write(`İsim: ${isim} <br/>`);
};
işimYaz1();
// document.write(`İsim: ${isim} <br/>`); Bu kullanımda isimi yazdırmaz.Çünkü bu değişken bir function scope a sahiptir.Bundan dolayı sadece o fonksiyon içerisinde kullanılabilir.

// Javascriptde bir fonksiyonun {} içerisinde tanımlanan değişkenler function scope a sahiptir.Bu değişkenlere {} dışarısından erişilemez.

// ! 3-) Block Scope:

// ES6 ile birlikte gelen let ve const anahtar kelimeleriyle bir kapsam içerisinde tanımlanan değişkenlere sadece o kapsam içerisinde erişilebilir.

if (true) {
  const userMesage = `İşlem şartı sağlanıyor`;
  document.write(userMesage, "<br/>");
} else {
  document.write(userMesage, "<br/>");
}

// * Javascript Set-Map Yapısı

// Set  yapısı benzersiz değerleri tutmak için kullanılır.

let mySet = new Set();

// add ==> Set yapısına eleman eklemek için kullanılır

mySet.add("Yusuf"); // Ekleme işlemi yapıldı
mySet.add("Cebrail"); // Ekleme işlemi yapıldı
mySet.add("Aslıhan"); // Ekleme işlemi yapıldı
mySet.add("Yaren"); // Ekleme işlemi yapıldı
mySet.add("Ayşe"); // Ekleme işlemi yapıldı
mySet.add("Elif"); // Ekleme işlemi yapıldı

console.log(mySet);

mySet.add("Yusuf"); // Ekleme işlemi yapılmadı.Çünkü bu değer mevcut
mySet.add("Aysun"); // Ekleme işlemi yapıldı

console.log(mySet);

// has ==> Set yapısı içerisinde bir değer var mı bunu kontrol eder.

console.log(mySet.has("Yusuf"));
console.log(mySet.has("Hakan"));

// delete ==> Set yapısı içerisindeki bir elemanı silmek için kullanılır

mySet.delete("Yusuf");

console.log(mySet);

// clear ==> Set yapısının içerisini temizlemek için kullanılır.

// mySet.clear();

console.log(mySet);

console.log(`---------------------`);

// Map key-value çiftleri halinde değerler tutan veri yapılarıdır.

// Map yapısının temel özellikleri

// -- Her key değerinin bir karşılığı bulunur

// -- Keyler string,number gibi veri tiplerinden oluşabilir

// -- Aynı key tekrar kullanılırsa önceki değeri günceller.

let myMap = new Map();

// set ==> Map yapısına key-value çiftleri eklemek için kullanılır

myMap.set("ad", "Yusuf");

myMap.set("soyad", "YAMAN");

myMap.set("yaş", 22);

myMap.set("ehliyetiVarMı", true);

console.log(myMap);

// get ==> Map yapısında bulunan key'in  value sunu  almak için kullanılır

console.log(`Ad: ${myMap.get("ad")}`);

// has ==> Map yapısında bir key varmı bunu kontrol eder.

console.log(`Ad: ${myMap.has("ülke")}`);

myMap.delete("yaş");

console.log(myMap);

myMap.set("ad", "Yasin");

console.log(myMap);

// ! Özetle:

// Set yapısı sadece benzersiz değerler saklar.Map ise key-value çiftleri saklar.

// * Javascript Hoisting

// Javascript hoisting değişken ve fonksiyonların kod çalışmadan önce en yukarıya taşınmasıdır.Fakat bu taşıma işleminde sadece tanımlamalar yukarıya taşınır.Değer ataması aşağıda kalır.

var userId;

document.write(`Kullanıcı Id: ${userId} <br/>`);

userId = 12345432;

document.write(`Kullanıcı Id-1: ${userId} <br/>`);

// * Javascript useStrict Mode

// Javascript kodlama esnasında bizlere esneklikler sunar.Bu esnekliği azaltmak ve daha katı kurallarla kod yazmak için 'use strict' kullanılır.

let userName;

document.write(`Kullanıcı Adı: ${userName} <br/>`);

userName = "software_master_";

document.write(`Kullanıcı Adı: ${userName} <br/>`);

const calculate = (number) => {
  return number * number;
};

calculate(3);

// * Javascript Object Get-Set Yapısı

// Javascript'de bir değişkene dolaylı olarak değer atamak veya almak için get ve set metotları kullanılır.

// Javascript Object.defineProperty le tanımlanmış değişkenlere ayrıca get ve set metotları tanımlanabilir.Eğer değer atanacaksa 'set'; değer okunacaksa 'get' kullanılır.Set yapısı dışarından tek bir argüman kabul eder.

let personInfo = {
  name: "Yusuf",
  surname: "YAMAN",
};

Object.defineProperty(personInfo, "Name", {
  get: function () {
    return `Kişi adı: ${this.name}`;
  },
  set: function (value) {
    this.name = value;
  },
});

document.write(personInfo.Name, "<br/>");

personInfo.Name = "Yasin";

document.write(personInfo.Name, "<br/>");

let car = {
  brand: "BMW",
  _model: "M3", // İçeride kullanılan bir değişken bu şekilde dışarıdan kullanıma kapatılır
};

// document.write(car.model, "<br/>"); ==> undefined

Object.defineProperty(car, "info", {
  get: function () {
    return `Araç markası ${this.brand}\nAraç Model: ${this._model}`;
  },
  set: function (x) {
    this.brand = x;
  },
});

document.write(car.info, "<br/>");

car.info = "Mercedes";

document.write(car.info, "<br/>");

let person = {
  name: "Mehmet",
  surname: "Seyhan",
  _age: 30,
};

Object.defineProperty(person, "age", {
  get: function () {
    return this._age;
  },
  set: function (value) {
    if (value > 0) {
      this._age = value;
    } else {
      alert(`Yaş pozitif olmalıdır.`);
    }
  },
  configurable: true, // Değiştirilebilir
});

person.age = 40;

console.log(person);

// * Javascript Moduler Dosya Yönetimi

// Javascript de tıpkı Scss de olduğu gibi birden fazla dosya oluşturularak daha moduler bir proje yönetimi elde edilebilir.Bunu yaparken:

// 1-) Vscode dosya oluştur menüsünden '.js' uzantılı bir dosya oluşturulur.

// 2-) Oluşturulan bu harici javascript dosyasından gerekli kodlamalar yapılır.Kodlamalar yapıldıktan sonra export {'dışarı çıkarılacak elemanların ismi'} ile dışarı çıkarılır.

// 3-) Ana javascript dosyası belirlenir ve bu dosya Html e bağlanırken type'ı 'module' olarak belirtilir.

// 4-) export ile dışarı çıkarılan veri kullanılmak istenen Javascript dosyasında import {'import edilecek verini adı'} from 'bu verinini hangi dosyadan geldiği' şeklinde import edilir.

// Bu adımlar takip edilerek moduler dosyalar yönetilir.

import { studentInfo, cars } from "./second.js";

console.log(studentInfo);

console.log(cars);

// ! Not: Bir veriyi bir dosya dışarısına çıkarırken eğer o dosyadan sadece bir elemanı dışarıya çıkaracaksak bunun için export default kullanılır.Export default un exportan farkı dışarı eleman çıkarırken ve import ederken {} kullanılmamasıdır.

import writeToConsole from "./helper.js";

writeToConsole();
