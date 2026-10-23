# Değişiklik Günlüğü

Biçim: [Keep a Changelog](https://keepachangelog.com/tr/) · Sürümleme: [SemVer](https://semver.org/lang/tr/)

## [1.2.1] — 2026-10-23

### Düzeltildi
- **Can't find stylesheet to import Hatası:** Discourse tema mimarisinde tema dosyaları arasında `@import` desteklenmediğinden (veritabanı alanları olarak tutulduğundan), `topic-list` ve `topic-post` stilleri doğrudan `common/common.scss` içine birleştirildi. Ayrı import dosyaları kaldırılarak derleme hatası kesin olarak çözüldü.

## [1.2.0] — 2026-10-23

### Düzeltildi
- **Sass get-setting Hatası:** Geçersiz `@if get-setting(...)` çağrıları standart Discourse Sass değişkenlerine (`@if $sk_grid_acik`) dönüştürüldü.
- **Tablo ve tbody Seçici Uyumsuzluğu:** Modern Discourse 3.2+ sürümlerine tam uyum için `.topic-list tbody, .topic-list .topic-list-body` ikili seçicisi tanımlandı.
- **Ders Renk Şeritleri:** Canlı sitede `tr` üzerinde olmayan kategori sınıfları yerine modern `:has(a[href*="/c/..."])::before` ve `var(--category-badge-color)` dinamik fallback'i eklendi.
- **iOS Emoji ve İkon Güvencesi:** `font-family` yığınına `"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` eklenerek iPhone/iPad'de `?` görünmesi engellendi.
- **Google AdSense Güvencesi:** Reklam kapsayıcılarında `overflow: visible !important;` ve `contain: none !important;` zorunlu kılındı; mobil alt çapa reklam için güvenli alan rezerve edilerek 0.499 CLS kayması sıfırlandı.

### Eklendi
- **Soru Sayfası Saf Beyaz Zemin:** Soru sayfalarında (`body.archetype-regular`) saf beyaz zemin (`#FFFFFF`) ve 1240px ferah okuma alanı sağlandı.
- **8px Görsel Ayırıcı Bant:** Soru alanı ile çözümler akışı arasına modern 8px görsel ayırıcı bant yerleştirildi.
- **Doğrulanmış Çözüm Rozeti:** En iyi cevap için 4px zümrüt yeşili sol kenarlık (`#157A45`), hafif yeşil zemin tonu ve `✓ Doğrulanmış Çözüm` hap rozeti eklendi.
- **Test ve Mockup:** Güncellenen etkileşimli tasarım [`sorumatik-mockup.html`](test/sorumatik-mockup.html) test klasörüne eklendi.

## [1.1.0] — 2026-10-23

### Düzeltildi
- Kart alt meta satırı tek satırda toplandı: cevap sayısı solda, avatarlar ve zaman sağda, ayraç çizgisi kesintisiz (T1).
- Koyu renk şeması desteği: tüm yüzey ve metin tokenları Discourse renk şeması değişkenlerine bağlandı (T2).
- İç içe numaralı listeler artık klasik numara görünümünde (K3).

## [1.0.0] — 2026-10-23

### Eklendi
- İlk sürüm: ana sayfa kart ızgarası (3/2/1 kolon), ders renk şeritleri, adım adım çözüm görünümü, En İyi Cevap vurgusu, formül blokları.
