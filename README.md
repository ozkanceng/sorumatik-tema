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

## Bilinen sınırlar (yol haritası)

- Karşılama (hero) alanı ve başlığa "Soru Sor" düğmesi eklemek markup
  gerektirir; bu tema bilinçli olarak yalnızca CSS'tir (Plan Faz 2–3,
  JS'li bileşenler ayrı tema bileşeni olarak eklenebilir).
- "Cevap bekliyor" kehribar rozeti, cevapsız konuları tespit ettiği için
  küçük bir JS bileşeni ister (Plan 6.2'deki davet kutusu ile birlikte
  Faz 3'te eklenebilir).

## Test

- Her push'ta GitHub Actions tüm SCSS dosyalarını gerçek **dart-sass**
  ile derler (`.github/workflows/scss.yml`).
- `test/` klasöründe, Discourse'un gerçek işaretlemesi taklit edilerek
  hazırlanmış görsel test sayfası bulunur.

## Lisans

MIT — ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
