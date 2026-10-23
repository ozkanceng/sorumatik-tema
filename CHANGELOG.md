# Değişiklik Günlüğü

Biçim: [Keep a Changelog](https://keepachangelog.com/tr/) · Sürümleme: [SemVer](https://semver.org/lang/tr/)

## [1.1.0] — 2026-10-23

### Düzeltildi
- Kart alt meta satırı tek satırda toplandı: cevap sayısı solda, avatarlar ve zaman sağda, ayraç çizgisi kesintisiz (T1).
- Koyu renk şeması desteği: tüm yüzey ve metin tokenları Discourse renk şeması değişkenlerine bağlandı; koyu temada kartlar, paneller ve başlık otomatik uyum sağlar (T2).
- İç içe numaralı listeler artık klasik numara görünümünde; adım rozetleri yalnızca dış listede (K3).

### Eklendi
- Yönetim paneli ayarları: kart ızgarası aç/kapa, kart animasyonu, adım stili, mobil özet (settings.yml, K1).
- Çözüm özeti kutusu ve başlıktaki çözüldü rozeti stilleri (discourse-solved, K4).
- Kategori rozetlerinde kontrast güvencesi (color-mix, T4).
- Kolon başlıkları için görsel gizleme deseni; ekran okuyucu bağlamı korunur (E1).
- stylelint denetimi ve derleme çıktı boyut bütçesi (CI, S1).
- CI'da 1440/834/390 piksel otomatik ekran görüntüleri (S2).

### Değişti
- Konu listesi seçicileri sınıf tabanlı hale getirildi; sürüm dayanıklılığı arttı (K2).
- Test sayfası zoom yerine duyarlı düzen kullanır (S4).
- Hover kenarlığı token'a alındı (--sk-brand-line, T3).

## [1.0.0] — 2026-10-23

### Eklendi
- İlk sürüm: ana sayfa kart ızgarası (3/2/1 kolon), ders renk şeritleri, adım adım çözüm görünümü, En İyi Cevap vurgusu, formül blokları, erişilebilirlik temelleri, CI derleme kontrolü ve görsel test sayfası.
