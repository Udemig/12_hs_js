// * setTimeOut() ==>Bu yapı javascript'de belirli bir süre geçtikten sonra bir kez bir işlemin gerçekleştirilmesini sağlar.

// setTimeout(() => {
//   document.write(`Javascript'den selamlar <br/>`);
// }, 2000);

// Bu metod içerisinde bir fonksiyon birde ne kadar süre sonra bu fonksiyonu gerçekleştireceğini söylememizi ister.

// * setInterval() ==> Bu yapı javascript'de belirli zaman aralıklarıyla işlemler gerçekleştirmek için kullanılır.

// setInterval(() => {
//   document.write(`Javascript'den selamlar setInterval çalıştı <br/>`);
// }, 1000);

// ! setTimeout belirli bir gecikmeyle işlem yaparken setInterval belirli zaman aralığıyla işlem gerçekleştirir.

// * DOM (DOCUMENT OBJECT MODAL)

// Javascript çıktı metotlarında kullanılan document.write() metoduyla document'e yazılar yazdırdık.Html kısımındaki 'body' etiketinin javascript'deki karşılığı 'document' objesidir.

// document sayesinde bizler Html kısımında bulunan elemanlara erişebilir ve bu elemanlara müdahelelerde bulunabiliriz.

// * Html de bulunan elemanlara müdahaleler yapabilmemiz için önce bunlara javascript'de erişmeliyiz.Javascript'de Html'de bulunan elemanlara erişmek için 4 yöntem vardır.

// * 1-)document.getElementsByTagName() ==> Bu metod Html kısımında bulunan bir elemana tag(etiket) adına göre erişmek için kullanılır.() içerisinde hangi elemana erişeceksek bunun tag adını yazmamız gerekir.Bu metod erişilen elemanları collection şeklinde geri döndürür.

const title1 = document.getElementsByTagName("h1");

// console.log(title1);

// * 2-)document.getElementsByClassName() ==> Bu metod Html kısımında bulunan bir elemana class adına göre erişmek için kullanılır.() içerisinde Htmlden erişilmek istenen elemanın class adını yazmamız gerekir.Bu metod erişilen elemanları collection şeklinde geri döndürür.

const title2 = document.getElementsByClassName("title-2");

// console.log(title2);

// * 3-)document.getElementById() ==> Bu metot Html kısımında bulunan bir elemana id sine göre erişmek için kullanılır.() içerisinde Htmlden erişilmek istenen elemanın id sini yazmamız gerekir.

const title3 = document.getElementById("title-3");

// console.log(title3);

// * 4-)document.querySelector() ==> Bu metot şimdiye kadar gördüğümüz tüm metotların işlevini tek başına üstlenir.Yalnız önceki metotlarda class adına göre eriş,id ye göre eriş veya tag adına göre eriş diyerek metot seçtiğimizden ötürü class ve id olduğunu spesifik şekilde belirtmemize gerek kalmamıştı.Bu metod ise bize class ve id adını '. classAdı' veya '#id' şeklinde belirtmemizi ister.

const title4 = document.querySelector(".title-4");

// console.log(title4);

const title5 = document.querySelector("#title-5");

// console.log(title5);

const image = document.querySelector("img");

// console.log(image);

// title5.style.backgroundColor = "red";
// title5.style.padding = "20px 30px";
// title5.style.fontSize = "40px";
// title5.style.color = "white";
// title5.style.borderRadius = "30px";

// Bu şekilde elemana style özelliği aktarmak hem yazım zorluğu hemde css dosyasında yazılırken çıkan otamatik tamamla özelliklerinin burada olmaması sebebiyle tercih etmeyeceğimiz bir yöntem olacaktır.

// Elemanlarda class değişikliği yapmak için classList kullanılır.

// * class ekleme
title5.classList.add("still");

// * class çıkarma
// title5.classList.remove("still");

// * classı ekle-çıkar

const changeButton = document.querySelector(".change-class");

// ! toggle yapısı mevcut elemana eğer belirlene class yoksa bunu ekler eğer class varsa bunu kaldırır.
changeButton.addEventListener("click", () => {
  title5.classList.toggle("still");
});
// todo: Html kısımında dilediğini bir tag oluşturunuz.Sonrasında bu elemana css dosyasında stiller yazınız ve bu stilleri js dosyasında ilgili elemana aktarınız.

// 1-) Html'den elemanı çekme
const paragrah = document.querySelector(".text");

// console.log(paragrah);

// 2-) Css de bir class oluştur.

// 3-) Elemana css de oluşturulan classı ekleme

paragrah.classList.add("paragraf");

// * Elemanın İçeriğini güncelleme

// innerText ==> Belirlenen elemanın içeriğini güncellemek için kullanılır.
paragrah.innerText = "Javascript dersinden selamlar";

// innerHTML ==> Belirlenen  elemanın Html'ini günceller.
title4.innerHTML = `<img src="https://picsum.photos/204" alt="" />`;

// * Olay İzleyicileri

// Olay izleyicileri sayesinde Html de bulunan elemanların belirli durumlar karşısında belirli işlemleri yapmasını isteyebiliriz.

const alertButton = document.getElementById("give-alert");

alertButton.addEventListener("click", () => {
  alert("Uyarı butonuna tıklandı");
});

// Olay izleyicileri bir elemanın belirli bir olay dahilinde işlem gerçekleştirmesini sağlar.Bu metot içerine bir dinleyici birde bu dinleme olayı olduğunda çalışacak bir fonksiyon ister.Dinlenen olay gerçekleşirse fonksiyonu çalıştırır.

const draggableElement = document.getElementById("draggable");

// Sürükleme başladığında
draggableElement.addEventListener("dragstart", (event) => {
  console.log("Sürükleme başladı");
});

// Sürükleme devam ederken
draggableElement.addEventListener("drag", (event) => {
  console.log("Sürükleniyor: X:", event.clientX, "Y:", event.clientY);
});

// Sürükleme bittiğinde
draggableElement.addEventListener("dragend", (event) => {
  console.log("Sürükleme bitti");
});

const focusToInput = () => {
  console.log(`Focuslandı`);
};

// todo: Bir container ve bir buton oluşturun.Bu container butona tıklanınca dark-light mode özelliğini sahip olsun.

// 1-) Htmlde container ve button oluştur.

// 2-) Bu elemanları stillendir ve dark mod oluştur

// 3-) Elemanları js e çek
const container = document.querySelector(".container");
const changeThemeButton = document.querySelector(".changeMod");

// console.log(container);
// console.log(changeThemeButton);

// 4-) Ve dark-light mode özelliğini çalıştır

// i) Butona tıklanma anını izle

changeThemeButton.addEventListener("click", () => {
  container.classList.toggle("darkMode");
});

// todo: Bir butona tıklayınca bir div içerisine yeni divler ekeleyen code-script'i yazınız.

// 1-) Htmlden elemanları çek

const addDivButton = document.querySelector(".add-button");

const deleteDivButton = document.querySelector(".delete-button");

const wrapper = document.querySelector(".wrapper");

// console.log(addDivButton);
// console.log(wrapper);

// 2-)  Eleman ekleyen fonksiyonu yaz

const addDiv = () => {
  // i-) Bir eleman oluştur.
  // document.createElement() ==> Htmlde eleman oluşturmak için kullanılır
  const newDiv = document.createElement("div");

  // ii-) Oluşturulan elemana class ekle
  newDiv.classList.add("eleman");

  // iii-) Oluşturulan elemanın içeriğini belirle
  newDiv.innerText = "Yeni Div";

  // iv-) Oluşturulan bu elemanı Htmldeki yapının içerisine ekle
  // elemanAdı.appendChild('Eklenecek elemanın adını') ==> Oluşturulan elemanı Html e eklemek için kullanılır
  wrapper.appendChild(newDiv);
  // console.log(newDiv);
};

// 3-) Ekle butonuna bir olay izleyicisi ekle

addDivButton.addEventListener("click", addDiv);

const deleteDiv = () => {
  if (wrapper.lastChild) {
    // elemanAdı.removeChild() ==> Kapsayıcı içerisinden eleman kaldırmak için kullanılır.
    wrapper.removeChild(wrapper.lastElementChild);
  }
};

deleteDivButton.addEventListener("click", deleteDiv);

// todo:  Bir formun gönderilmesi izleyip inputlarda yer alan değerlere erişiniz.

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  // Formlar gönderildiğinde sayfa yenileme özelliğine sahiptir.Bunu engellemek için e.preventDefault() kullanılır.
  event.preventDefault();
  const nameInput = event.target[0];
  const surnameInput = event.target[1];
  const emailInput = event.target[2];
  const passwordInput = event.target[3];
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (name && surname && email && password) {
    console.log(`İşlem yapıldı`);
  } else {
    console.log(`İşlem yapılamadı`);
  }
});

// todo: Bir form oluşturunuz.Bu formda isim ve şifre inputları olsun.Formun gönderilme olayı izleyip inputtaki değerlere erişiniz.

const form2 = document.querySelector(".form");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  const pass = e.target[1].value;
  console.log(`İsim: ${name}`);
  console.log(`Şifre: ${pass}`);
});
