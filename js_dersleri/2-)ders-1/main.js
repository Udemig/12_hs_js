// * Javascript Çıktı Metotları (Javascript Output Methods):

// Javascript de kullanıcıya çıktı vermek için 3 adet yönetm kullanılır.Bunları sırasıyla inceleyelim:

// 1-)document.write() ==> document Html kısımındaki body e karşılık gelir.write ise yazdır demektir.Yani tarayıcıdaki beyaz alana yazı yazdırmak için kullanılır.Buradaki () içersinde yazılan içeriği tarayıcıya aktarır.

// document.write("Selamlar Js !!!" + "<br/>");
// document.write("Javascript dersinden selamlar :)" + "<br/>");

// ! Javascript de '+' sembolü iki işlem için kullanılır. 1-) Toplama 2-) Birleştirme Eğer '+' sembolünün sağında solunda sayı değerleri varsa bunları toplar ama metin ifadeler varsa bunları birleştirir.

// 2-) console.log() ==> Tarayıcıda sağ tık --> incele menüsünde bir console sekmesi bulunur.Bu sekme gerek console.log() ile yazdırdığımız çıktıları aldığımız gerekse programdaki hataları incelediğimiz kısımdır.console.log() ile bu kısıma çıktı veririz.

// console.log("Javascript ders-1 den selamlar ");

// 3-) alert() ==> Tarayıcıda açılır bir popup ile kullanıcıya uyarı vermek için kullanılır.

// alert("Şifrenizi yanlış girdiniz.Şifrenizi kontrol ediniz.");

// * Javascript Değişkenler (Javascript Variables):

// Değişken bir program içerisinde bellekte yer açarak verilerimizi yönetmek için kullanılan yapılardır.Değişkenler ile  verilerimizi yönetirken 3 aşamada kullanım sağlarız.İlk olarak değişkeni tanımlarız.Sonrasında bu değişkene değer ataması yaparız.Son olarak program içerisinde bu değişkeni kullanırız.

// ! Değişken Tanımlaması

// Bir değişkeni tanımlarken 'var,let ve const' anahtar kelimelerinden biri seçilir.Sonrasında oluşturulmak istenen değişkene bir isim atanır.Bu isimlendirmede sayı değeri ile başlanmaz,Javascriptde bulunan bazı özel isimler tercih edilemez,değişken adı  birden fazla kelimeden oluşuyorsa isimlendirme için genellikle camelCase kullanılır.bu metot birden fazla kelimeden oluşan değişken isimleri için ilk kelimenin tüm harfleri küçük birinci kelime haricindeki diğer kelimelerin sadece ilk harfi büyük olacak şeklinde bir kural sunar.

// ! Değişkene Değer Atanması

// Bir değişkene değer atarken '=' operatörü (atama operatörü) kullanılır.Bu operatör sağında bulunan ifadeyi solunda bulunan ifadenin değeri olarak belirler.Bu operatörün sağındaki değer alfanümerik ise '' içerisinde yazılır.Ama bir sayı değeri varsa bunu direkt yazarız.

// ! Değişkenin Kullanılması

// Tanımlanan ve değeri atanan değişken program içerisinde uygun yerde kullanılır.

var isim = "Yusuf";

document.write("İsim: " + isim + "<br/>");

let ülke = "Türkiye";

const yıl = 2024;

document.write("Ülke Adı: " + ülke + "<br/>");

document.write("Yıl: " + yıl + "<br/>");

// ? Peki neden 'var,let ve const' şeklinde 3 adet değişken tanımlama yöntemi mevcut ?

// var anahtar kelimesiyle değişken tanımla güncel projelerde tercih edilmez.Bunun sebebi var ile tanımlanan bir değişkenin tekrardan tanımlanabilmesidir.Bu yeniden tanımlanma program içerisinde sıkıntılara sebep olur.

var şehir = "Malatya";

var şehir = "İstanbul";

document.write("Şehir: " + şehir + "<br/>");

let kişi = "Fatih";

// let kişi = "Merve"; Bu kullanımda kişi değişkeni öncesinde tanımlandığından hata verir.

const kurum = "Emaartech";

// const kurum = "Udemig"; Bu kullanımda kurum değişkeni öncesinde tanımlandığından hata verir.

// ? let ve const arasındaki fark nedir ?

// let ve const arasındaki fark let ile tanımlanan bir değişkenin içeriği güncellenebilir.Fakat const ile tanımlanan değişkenin içeriği doğrudan güncellenemez.

let öğrenciAdı = "Sarp";

document.write("Öğrenci: " + öğrenciAdı + "<br/>");

öğrenciAdı = "Evrim";

document.write("Öğrenci: " + öğrenciAdı + "<br/>");

const yaş = 22;

document.write("Yaş: " + yaş + "<br/>");

// yaş = 30; Const sabit değişkenler için kullanılır.Bu anahtar kelimeyle oluşturulan değişkenleri içeriği doğrudan güncellenemez.

// ! Not: const ile tanımlan bir ifadenin referansı değiştirilemez.Fakat eğer bu ifade nesne veya diziyse içeriği doğrudan olmasada güncellenebilir.

// ! Özetle güncel projelerde var yerini let ve const a bırakmıştır.Eğer oluşturulacak değişken sabit bir değer sahip olacaksa bunu const değilse let ile oluşturacağız.

document.write("----------------------------------------", "<br/>");

// * Javascript Veri Tipleri (Javascript Data Types):

// typeof ==> Javascript de verilerin veri tipini belirlemek için kullanılır.

/*
* String:

-- String veri tipi javascriptde metin veya karakter dizilerini temsil eder.

*/

let person = "Mustafa";

// console.log(typeof person);

/*
* Number:

-- Number veri tipi javascript de sayısal değerleri temsil eder.

*/

let id = 12345432;

// console.log(typeof id);

/*
* Boolean

-- Boolean mantıksal veri tipidir ve sadece iki değer alır: true ve false

*/

let öğrenciMi = true;

// console.log(typeof öğrenciMi);

// * Javascript Operatörler

// i-) Aritmetik Operatörler:

/*
-- Toplama:
  İki sayıyı toplar. Eğer operandlardan biri string ise, birleştirme (concatenation) işlemi yapar.

*/
let sayı1 = 10;
let sayı2 = 45;

document.write("Toplama: ", sayı1 + sayı2, "<br/>");

let sayı3 = 78;
let sayı4 = "23";

document.write("Birleştirme: ", sayı3 + sayı4, "<br/>");

/*
-- Çıkarma:
 Bir sayıyı diğerinden çıkarır.

*/
document.write("Çıkarma: ", sayı2 - sayı1, "<br/>");

/*
-- Çarpma:
 İki sayıyı çarpar.

*/
document.write("Çarpma: ", sayı1 * sayı2, "<br/>");

/*
-- Bölme:
 Bir sayıyı diğerine böler.

*/
let sayı5 = 45;
let sayı6 = 9;

document.write("Bölüm: ", sayı5 / sayı6, "<br/>");

/*
-- Mod:
Bir sayının diğerine bölümünden kalan değeri döner.

*/
let sayı7 = 6;
document.write("Mod: ", sayı5 % sayı7, "<br/>");

// ! Bonus:
document.write("---------------------", "<br/>");

let sayı8 = 50;

document.write("Sayı: ", sayı8, "<br/>");

// Sayı değişkenin değerini 1 arttır.

// sayı8 = sayı8 + 1;

sayı8++;

document.write("Sayı-1: ", sayı8, "<br/>");
// Sayı değişkenin değerini 3 arttır.

// sayı8 = sayı8 + 3;

sayı8 += 3;

document.write("Sayı-2: ", sayı8, "<br/>");

// Sayı değişkenin değerini 5 azalt.

// sayı8 = sayı8 - 5;

sayı8 -= 5;

document.write("Sayı-3: ", sayı8, "<br/>");

// Sayı değişkenin değerinin 10 katını al.

// sayı8 = sayı8 * 10;

sayı8 *= 10;

document.write("Sayı-4: ", sayı8, "<br/>");

document.write("----------------------------------------", "<br/>");

// ii-) Karşılaştırma Operatörleri

/*
* Eşitlik(==)
 İki değerin eşit olup olmadığını kontrol eder. Türleri kontrol etmez.

*/
let sayı9 = 100;
let sayı10 = "100";

document.write("Eşit mi : ", sayı9 == sayı10, "<br/>");

/*
* Denklik(===)
Hem değerin hem de türün eşit olup olmadığını kontrol eder. Sıkı eşitlik kullanır.

*/

let sayı11 = 100;
let sayı12 = "100";

document.write("Eşit mi : ", sayı11 === sayı12, "<br/>");

/*
* Büyüktür(>)
Bir değerin diğerinden büyük olup olmadığını kontrol eder.

*/
let sayı13 = 44;
let sayı14 = 78;
let sayı15 = 30;

document.write("Büyük Mü : ", sayı13 > sayı14, "<br/>");
document.write("Büyük Mü : ", sayı13 > sayı15, "<br/>");

/*
* Küçüktür(<)
 Bir değerin diğerinden küçük olup olmadığını kontrol eder.

*/
document.write("Küçük Mü : ", sayı13 < sayı14, "<br/>");
document.write("Küçük Mü : ", sayı13 < sayı15, "<br/>");

/*
* Büyük Eşittir(>=)
Bir değerin diğerinden büyük ya da eşit olup olmadığını kontrol eder.

*/
let sayı16 = 45;
let sayı17 = 45;
document.write("Büyük Eşit Mi : ", sayı16 >= sayı17, "<br/>");

/*
* Küçük Eşittir (<=)
    Bir değerin diğerinden küçük ya da eşit olup olmadığını kontrol eder.


*/
let sayı18 = 34;
let sayı19 = 44;
document.write("Küçük Eşit Mi : ", sayı18 <= sayı19, "<br/>");

/*
* Eşit Değil(!=) 
Bir değerin diğer bir değere eşit olmadığını konrol eder

*/
document.write("Eşit Değil Mi : ", sayı19 != 33, "<br/>");

document.write(!true, "<br/>");
document.write("---------------------", "<br/>");
// iii-) Mantıksal Operatörler

/*
* Ve(&&)
İki ifadenin de doğru (true) olması durumunda true döner. Aksi halde false döner.
*/
document.write("Ve Bağlacı : ", true && true, "<br/>");
document.write("Ve Bağlacı-1 : ", false && true, "<br/>");
document.write("Ve Bağlacı-2 : ", false && false, "<br/>");

/*
* Veya(||)
İki ifadeden biri bile doğru (true) ise true döner. Her iki ifade yanlışsa false döner.
*/

document.write("Veya Bağlacı : ", true || true, "<br/>");
document.write("Veya Bağlacı-1 : ", false || true, "<br/>");
document.write("Veya Bağlacı-2 : ", false || false, "<br/>");

document.write("---------------------", "<br/>");

// * Javascript Fonksiyonlar (Javascript Functions):

// Fonksiyonlar bir işlevi gerçekleştirmek için özelleştirilmiş kod parçacıklarıdır.Bir fonksiyonu kullanmak için önce bunu tanımlamalıyız.Tanımladıktan sonra bu fonksiyonu çağırmalıyız.

// ? Bir fonksiyon nasıl tanımlanır ?

// Fonksiyonlar 'function' anahtar kelimesiyle tanımlanır.Bu anahtar kelimeden sonra fonksiyona bir isim verilir.Verilen bu isimin yanında sırasıyla (){} oluşturulur.{} içerisinde bu fonksiyonun işlevi belirtilir.

// ! Fonksiyonu tanımladık
function selamla() {
  document.write("Selamlar dünya !! ", "<br/>");
}

// ! Fonksiyonu çağırdık

selamla();

// Bir fonksiyonun tanımlanması çalışması için yeterli değildir.Fonksiyonun işlevini yerine getirmesi için fonksiyon adının yanında () ile çağırılması gerekir.

// İki adet sayıyı toplayan fonksiyonu oluşturunuz

function toplama() {
  let sayı1 = 10;
  let sayı2 = 19;

  let toplam = sayı1 + sayı2;
  document.write("Toplam:", toplam, "<br/>");
}

toplama();
// toplama();
// toplama();
// toplama();

// ! Buradaki fonksiyon kaç defa çağırılırsa o sayıda belirlenen işlevi gerçekleştirir.Fakat bu fonksiyon dinamik değerler döndürmüyor.

// ? Peki bir fonksiyon nasıl dinamik değerler döndürür ?

// Fonksiyonlar parametre kullanımıyla dinamik işlemler yapar.Fonksiyonlarda parametre kullanımı için bu fonksiyonun çağırıldığı yerde () içerisinde fonksiyona parametre geçilmelidir.

function parametreliToplama(x, y, z) {
  let sonuç = x + y + z;
  document.write("Toplam:", sonuç, "<br/>");
}

// parametreliToplama(); Bu şekilde bir kullanımda Nan (Not a Number)bir sayı değil  diyor.Bunun sebebş sonuç değişkeni dışarıdan alacağı x ve y parametreleri ile bulacak olmasıdır.

parametreliToplama(12, 56, 12);
parametreliToplama(54, 56, 123);
parametreliToplama(78, 56, 123);

// Kişi adını ekrana yazdıran fonksiyon

function writeToDocument(name) {
  document.write("Kişi Adı:", name, "<br/>");
}

writeToDocument("Sarp");
writeToDocument("Yıldız");
writeToDocument("Yaren");
writeToDocument("Fatih");

// ? Şimdiye kadar fonksiyonların bir işlevi yapmasını istedik.Peki bir fonksiyon nasıl değer döndürür ?

// Bir fonksiyonun bir değeri döndermesi return satırıyla sağlanır.Bir fonksiyonun bir değeri dışarıya çıkarabilmesi için bu değeri return satırında yazmalıyız.

function ürünToplam(a, b, c, d) {
  let toplam = a + b + c + d;

  return toplam;
}

const toplamÜrün = ürünToplam(10, 23, 54, 65);

document.write("Toplam Ürün:", toplamÜrün, "<br/>");

// * Javascript Girdi Metotları:

// * prompt()  ==> Javascript de kullanıcıdan açılan  bir pencereyle değer almak için kullanılır.Bu metod () içerisinde kullanıcıya bir mesaj iletir ve sonucunda kullanıcıdan bir değer alır.Girilen bu değeri bellekte tutar.Bu tutulan değer bir değişkene atanarak kullanılabilir.

// const kullanıcıSayı = parseInt(prompt("Bir sayı giriniz:"));

// document.write("Kullanıcı Sayı:", kullanıcıSayı, "<br/>");

// console.log(kullanıcıSayı);
// console.log(123);

// ! prompt ile kullanıcıdan alınan değerler 'string' veri tipindedir.Bu değeri parseInt() metoduyla number a çevirebiliriz.

// * confirm() ==> Kullanıcıdan 'tamam' yada 'iptal' gibi temel düzeyde onay vermesini ister.Onay durumunda 'true' red durumunda 'false' değer döndürür.

// const result = confirm("Konum bilginizi payalaşırmısınız ?");

// console.log(result);

// todo: Kullanıcıdan alınan ve number veri tipine çevirilen 2 adet sayının toplamını,farkını,çarpımını ve bölümünü ekrana yazdırınız.

// const number1 = parseInt(prompt("Birinci Sayıyı Giriniz:"));
// const number2 = parseInt(prompt("İkinci Sayıyı Giriniz:"));

// const toplam = number1 + number2;
// const çıkarma = number1 - number2;
// const çarpım = number1 * number2;
// const bölüm = number1 / number2;

// document.write("Toplam:", toplam, "<br/>");
// document.write("Fark:", çıkarma, "<br/>");
// document.write("Çarpım:", çarpım, "<br/>");
// document.write("Bölüm:", bölüm, "<br/>");

document.write("---------------------", "<br/>");

// * Javascript Koşullu Yapılar (Javascript Conditional Statements) [if-else]:

// Koşullu ifadeler belirli bir şarta bağlı olarak gerçekleşecek durumlardır.Javascript de koşullu yapılar if-else ile oluşturulur.if bloğu içerisinde bir şart belirtilir ve eğer şart sağlanıyorsa true döner ve true ise bu bloğa bağlı kodlar çalışır.Fakat eğer bu if kısımı çalışmıyorsa else kısımı çalışır.

const personAge = 18;

// Eğer kişi yaşı 18 den büyük eşitse 'Ehliyet alabilir' değilse  'Ehliyet alamaz' yazdırınız.

if (personAge >= 18) {
  document.write("Ehliyet Alabilir", "<br/>");
} else {
  document.write("Ehliyet Alamaz", "<br/>");
}

const başarılıMı = true;

if (başarılıMı) {
  document.write("Başarılı", "<br/>");
} else {
  document.write("Başarısız", "<br/>");
}

// Birden fazla koşul kontrol edilecekse ilk ve son koşul haricindeki koşulların else if  ile kontrol edilir.
const city = "Ankara";

if (city == "Malatya") {
  document.write("Malatya şehrindesiniz", "<br/>");
} else if (city == "Ankara") {
  document.write("Başkentdesiniz", "<br/>");
} else if (city == "İstanbul") {
  document.write("İstanbul şehrindesiniz", "<br/>");
} else {
  document.write("Diğer şehirler", "<br/>");
}

document.write("---------------------", "<br/>");

// todo: Kullanıcıdan 1 ile 5 arasında bir sayı girmesi istensin.Bu sayı 1 ise 'frontend kursu' 2 ise 'backend kursu' 3 ise 'react native kursu' 4 ise 'swift-ios kursu' 5 ise 'ingilizce kursu' diğer sayıların içinse 'Tanımsız Kurs' yazdıran code-script oluşturunuz.

// const courseNumber = parseInt(prompt("1 ile 5 arasında bir sayı giriniz:"));

// if (courseNumber == 1) {
//   document.write("Frontend Kursu", "<br/>");
// } else if (courseNumber == 2) {
//   document.write("Backend Kursu", "<br/>");
// } else if (courseNumber == 3) {
//   document.write("React Native Kursu", "<br/>");
// } else if (courseNumber == 4) {
//   document.write("Swift-İos Kursu", "<br/>");
// } else if (courseNumber == 5) {
//   document.write("İngilizce Kursu", "<br/>");
// } else {
//   document.write("Tanımsız Kurs", "<br/>");
// }

// * Javascript String Metotları (Javascript String Methods):

const metin =
  "Javascript dersinden selamlar.Dünyanın en popüler yazılım dilini piyasanın en iyi yazılım akademisinde öğreniyoruz.Udemigin kaliteli eğitimleri sayesinde çok iyi seviyeye geleceğiz.";

document.write("Metin: ", metin, "<br/>");

document.write("Metinin Tipi: ", typeof metin, "<br/>");

// ! length ==> String ifadenin uzunluğunu ölçmek için kullanılır.

document.write("Metinin Uzunluğu: ", metin.length, "<br/>");

// ! indexOf ==> String ifadenin içerisinde belirlenen kelimenin ilk harfinin kaçıncı sırada olduğunu belirler.Bu metot () içerisinde hangi kelimenin sırası isteniyorsa bunu belirtmemizi ister.

document.write(
  "Metinin İçerisinde akademisinde kelimesinin sırası : ",
  metin.indexOf("akademisinde"),
  "<br/>"
);

// ! includes ==> String bir ifadenin içerisinde bir değerin olup olmadığını kontrol eder.Bu metot () içerisinde hangi kelimenin varlığını kontrol edecekse bunun yazılmasını ister.Kontrol sonucunda eğer kelime varsa 'true' yoksa 'false' döndürür.

document.write(
  "Metinin içerisinde popüler kelimesi var mı ? : ",
  metin.includes("popüler"),
  "<br/>"
);

// ! slice ==> String ifade içerisinde belirli bir aralığı almak için kullanılır.Bu metot başlangıç ve bitiş değerleri alır.Bu değerlerden başlangıç değeri zorunludur.Bitiş değeri opsiyoneldir.Eğer bitiş değeri verilmezse bu string ifadenin sonuna kadar alır.

document.write(
  "Metinin içerisinde 23-65 arası : ",
  metin.slice(23, 65),
  "<br/>"
);

// ! replace ==>  String bir ifade içerisindeki bir değeri başka bir değer ile değiştirmek için kullanılır.Bu metot () içerisinde bir aranacak değer birde bu aranan değeri hangi değerle değiştiriceğini ister.

document.write(
  "Metinin içerisindeki yazılımı software ile değiştir : ",
  metin.replace("yazılımı", "software"),
  "<br/>"
);
