# React Uygulamasını Kurulumu

- Bir react uygulaması `npx create-react-app [proje ismi]` komutuyla oluşturulur.

# React Uygulamasında Bulunan Dosya Ve Klasör Yapısı

1. `node-modules`: Projenin bağımlılıklarını tutan dosyadır.İndirilen paketlere bağlı olarak gerekli bağımlılıkar bu dosya içerisinde tutulur.Bu dosya içerisinde kesinlikle elle düzenleme yapmayacağız.ilgili komutlar kullanılarak silme işlemleri yapacağız.

2. `public`: Projenin herkes tarafından erişilmesi istenen dosyalarını içerisinde bulundurur.Resimler,iconlar,Html

3. `.gitignore`: Git tarafından takip edilmemesi istenen githuba gönderilmeyecek dosya isimlerinin yazılı olduğu bir dosyadır.

4. `package.json`: Projede kullanılan kütüphaneleri ve sürümlerini,projeyi için gerekli bazı komutları içeren bir json dosyasıdır.Projenin kimliğidir.

5. `package-lock.json`: Bağımlılıkların spesifik sürümleriyle yazılı olduğu dosyadır.

6. src: Bu klasör uygulamamızın kaynak kodunu içerir.Projeyi bu dosya içerisinde geliştireceğiz.

- - App.css / index.css ==> Stillendirme

- - App.js: Varsayılan olarak oluşturulmuş uygulamanın temel bileşenidir.Bu dosya içerisinde yazılı olan kodlamalar ekrana render edilir.

- - index.js: React uygulamasının temelidir.Bu dosya app.js içerisinde oluşturulan yapıları ekrana render eder.

# React Uygulaması Nasıl Ayağa Kaldırılır ?

- `npm start` komutuyla ilgili proje ayağa kaldırılır.

# React Component Yapısı:

- React uygulaması içerisinde kodlarımızı daha kolay bir şekilde yönetebilmek için her kısımı ayrı ayrı componentler şeklinde yönetiriz.Bu sayede hem karmaşık dosyaların önüne geçmiş olup hemde kodun bakım onarım kısmını daha kolay şekilde hallederiz.

- Componentler javascript'de yazmış olduğumuz fonksiyonlara benzerlik gösterir.Tıpkı fonksiyon tanımlar gibi yazmış olduğumuz componentler içerisinde bulunan return() içerisinde ekrana render edilecek kısmı bulundurur. Sonrasında ilgili component export edilir.Bu component kullanlıcağı noktada import edilir.Componentler birden fazla olacağı için bunları genelde components adında bir klasör altında toplarız.

# Jsx Nedir ?

- Jsx dosya içerisinde hem Html hem Js kodu yazamaya olanak sağlayan bir yapıdır.

- Jsx dosyası içerisinde ilgili javascript kodları {} içerisinde yazılır.

# Html Jsx Farkı ?

- Jsx dosyası içerisinde htmldeki tüm elemanlara erişebiliriz.Ama bazı farklar mevcut

- - Farklar:

- class yerine className kullanımı
- label-input larda kullanılan for yerine HtmlFor kullanımı
- img,a,... etiketlerde kapanış kısmında bulunan '/' işaretini konulmazsa çalışmaz.Bu işaretin eklenmesi gerekmektedir.

- Jsx dosyası içerisinde bir kapsam eleman bulunmak zorundadır.Eğer birden fazla eleman bir arada kullanılacaksa bunun için boşbir html fragment'ı kullanılabilir.

# Stillendirme

- Still özelliklerini inline olarak verebiliriz.Ama bu noktada style={} yazdıktan sonra gerekli stilleri {} şeklinde bir obje ile vermemiz gerekir.

- Harici css dosyasıyla stillendirme yapmak için ise css dosyası oluşturup bu dosya import edilir.

# React Projesine Nasıl Paket Dahil Edilir ?

- React projesine bir paket dahil edilirken `npm i paket_ismi` veya `npm install paket_ismi` komutuyla ilgili paket projemize dahil edilir.

- React projesine bir paketin spesifik bir sürümünü indirmek için `npm install paket_ismi@ilgili_sürüm` komutuyla indirme işlemi yapılır.Eğer sürüm indirilimezse en son sürüm projeye dahil edilir.

- Eğer hatalı bir işlem yapılıp yanlış bir kütüphane indirilidyse bunu `npm unisntall paket_ismi` komutuyla projemizden kaldırırız.
