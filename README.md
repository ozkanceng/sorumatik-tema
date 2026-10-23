# Sorumatik Tema (Discourse)

sorumatik.co için geliştirilmiş, eğitim platformuna uygun Discourse teması.
Yalnızca CSS/SCSS içerir; **JavaScript yüklemez**, çekirdek yazılıma dokunmaz.

Tasarım kararları `Sorumatik Tasarım Geliştirme Planı` belgesine dayanır:
okunabilirlik (16–17 px gövde, kısa satır), kolay kullanım (kart ızgarası,
net durum renkleri) ve modern, sakin bir görsel kimlik (marka mavisi +
ders renk kodlaması).

## Özellikler

- **Ana sayfa kart ızgarası** — konu listesi tablosu karta dönüşür:
  masaüstünde 3, tablette 2, telefonda 1 kolon
  (`repeat(auto-fill, minmax(300px, 1fr))` sayesinde otomatik).
- **Ders renk şeritleri** — her kartın sol kenarı, kategorinin slug'ına göre
  tanımlı ders rengini alır.
- **Okunabilirlik** — gövde metni 17 px / 1.68 satır yüksekliği; başlık
  hiyerarşisi ve kısa satır uzunluğu.
- **Adım adım çözüm görünümü** — cevaplardaki sıralı listeler, numaralı
  adım rozetlerine dönüşür.
- **En İyi Cevap vurgusu** — discourse-solved ile işaretlenen cevap yeşil
  şerit ve beyaz kartla öne çıkar.
- **Formül blokları** — discourse-math çıktıları açık gri zeminli bloklarda.
- **Erişilebilirlik** — WCAG AA kontrast hedefi, görünür klavye odak
  halkası, `prefers-reduced-motion` desteği, 44 px dokunma alanı uyumu.

## Kurulum

1. Discourse yönetim paneli → **Görünüm → Temalar → Kur**.
2. **Git deposundan** seçeneğine şu adresi girin:
   `https://github.com/ozkanceng/sorumatik-tema`
3. Temayı kurduktan sonra **önizleme** ile siteyi kontrol edin,
   beğenince **varsayılan** yapın.

Alternatif: depoyu ZIP olarak indirip **Temalar → Kur → Diskten** ile yükleyin.

### Yönetim paneli ayarları

Tema kurulduktan sonra **Görünüm → Temalar → Sorumatik Tema → Ayarlar** bölümünden kod
değişikliği olmadan şu davranışları değiştirebilirsiniz:

| Ayar | Öntanımlı | İşlev |
|---|---|---|
| `sk_grid_acik` | açık | Kart ızgarası; kapatırsanız klasik tablo listesine döner |
| `sk_kart_animasyon` | açık | Kart hover yükselme animasyonu |
| `sk_adim_stili` | açık | Cevaplardaki numaralı listeler adım rozetlerine dönüşür |
| `sk_mobil_ozet` | kapalı | Telefonda soru özeti gösterilir |

### Gereksinimler

| Eklenti | Zorunlu mu | Amaç |
|---|---|---|
| discourse-solved | Önerilir | Çözüldü işaretleme, En İyi Cevap vurgusu |
| discourse-math | Önerilir | Matematik formüllerinin doğru görünümü |

Ayrıca şu site ayarları önerilir: `topic list excerpt` **açık**
(kartlarda soru özeti için), `category style` = *bar* veya *square*.

## Kategori renk eşlemesi

Kart şeritleri, kategori **slug**'ına bağlıdır. Tema şu slug'ları tanır:
`matematik, fizik, kimya, biyoloji, turkce, tarih, cografya, ingilizce`.
Farklı slug kullanıyorsanız `common/topic-list.scss` dosyasının altındaki
eşleme bloğunu kendi slug'larınıza göre çoğaltın; renk değerleri
`common/common.scss` içindeki `--sk-d-*` değişkenlerindedir.

## Özelleştirme

Tüm tasarım değerleri `common/common.scss` dosyasının en üstündeki
`:root` bloğundaki CSS değişkenlerinde toplanmıştır (`--sk-*`).
Marka rengini, zemin rengini veya yarıçapları tek yerden
değiştirebilirsiniz.

## Eşlik eden bileşen (Faz D)

Başlıktaki "Soru Sor" düğmesi, cevapsız kartlarda kehribar "Cevap bekliyor"
rozeti ve yönetim panelinden kategori renk eşlemesi, JavaScript gerektirdiği
için ayrı bir tema bileşenindedir: **sorumatik-tema-bilesen**. Bileşenin
kendi deposu/ZIP'i ile kurulum yapılır, ana temaya eklenir; istenirse tek
tıkla devre dışı bırakılabilir. Ana tema JS'siz taahhüdünü korur.

## Bilinen sınırlar

- Karşılama (hero) alanı hâlâ markup ister; yalnızca bileşen sürümüyle
  değil, özel bir connector bileşeniyle de eklenebilir (Plan 5.1).
- Konu listesi tablo→grid dönüşümü, Discourse listeyi div tabanlı
  işaretlemeye taşırsa gözden geçirilmeli; seçiciler sınıf tabanlı
  yazıldığı için etki sınırlıdır (K2). Canlıya almadan önce kurulumunuzun
  Discourse sürümünde test sayfası ve gerçek liste üzerinde bir kez
  doğrulayın.

## Erişilebilirlik notları (E1, E2)

Kart ızgarası, konu listesinin tablo yapısını görsel olarak karta çevirir;
bu, yardımcı teknolojilerin listeyi artık tablo olarak okumadığı anlamına
gelir — kart tasarımının bilinen bedelidir. Bedeli hafifletmek için kolon
başlıkları DOM'da tutulur (görsel gizleme deseni) ve ekran okuyucu kolon
bağlamını yine duyar; her kart kendi içinde eksiksiz bilgi taşır (ders adı,
cevap sayısı, göreli zaman). Öncelikli gezinme yolu kart başlığındaki konu
bağlantısıdır ve başlık metni eksiksiz okunur.

## Sürüm akışı

Değişiklikler [CHANGELOG.md](CHANGELOG.md) içinde tutulur; her yayın
`v<ana><ikincil><yama>` biçiminde git etiketiyle işaretlenir (ör. `v1.1.0`).
Yayın adımları: değişikliği yap → `about.json` sürümünü yükselt →
CHANGELOG'a madde düş → commit + etiket → push → CI yeşilse Discourse'ta
güncelle.

## Test

- Her push'ta GitHub Actions üç iş çalıştırır: tüm SCSS'lerin gerçek
  **dart-sass** ile derlenmesi + 30 KB çıktı bütçesi, **stylelint**
  denetimi ve 1440/834/390 pikselde **otomatik ekran görüntüleri**
  (artifact olarak yüklenir). Ayrıntı: `.github/workflows/scss.yml`.
- `test/` klasöründe, Discourse'un gerçek işaretlemesi taklit edilerek
  hazırlanmış duyarlı görsel test sayfası bulunur; pencereyi daraltarak
  3 → 2 → 1 kolon geçişini canlı görebilirsiniz.

## Lisans

MIT — ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
