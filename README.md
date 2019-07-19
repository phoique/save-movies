## Save Movies

### Install client (React)

[https://github.com/Phoique/save-movies/blob/master/client/README.md](https://github.com/Phoique/save-movies/blob/master/client/README.md)

### Install server (Node.js + JWT)

[https://github.com/Phoique/save-movies/blob/master/server/README.md](https://github.com/Phoique/save-movies/blob/master/server/README.md)

## Hatalar ve Sonradan eklenecekler listesi.
- Tasarım değiştirilecek.
- React kısmında state yönetimi kullanılmadı. State yönetimi olarak hooks ayarlanacak.
- Film detay kısmı sayfası yok modal olarak açılır şeklinde bir component yazılacak.
- Kullanıcı resim ekleme client kısmında yorum satırı şeklinde. Api ise çalışmıyor o sorun çözülecek.
- Yönetici sayfasındaki filmleri kontrol sayfasında admin rolüne sahip kullanıcının filmleri orada görünmesin.
- Resim ekleme sorunu çözüldükten sonra resim isimleri md5 ile şifrelenip veritabanına kayıt edilmeli.
- Resim yükleme alanında resim olup olmadığını kontrol eden bir fonksiyon yazılması.
- Film eklendikten sonra detay sayfası veya modal açılması.
- Filmlere güncelleme ve silme işlemleri getirilmesi.
- Client kısmında cache temizleyipte login olma sorunun çözülmesi. 
-  Client kısmında logout route yönlendiğinde anasayfaya yönlendiği halde sayfayı yenilemezsen giriş yapmışsın gibi görünme sorunun çözülmesi.