// Görsel test sayfasını üç kırılımda ekran görüntüsüne çevirir (S2).
// Kullanım: node tools/screenshot.mjs  → screenshots/ klasörüne yazar.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const hedef = resolve("test/gorsel-test-sayfasi.html");
const genislikler = [1440, 834, 390];
mkdirSync("screenshots", { recursive: true });

const tarayici = await chromium.launch();
for (const g of genislikler) {
  const sekme = await tarayici.newPage({ viewport: { width: g, height: 900 } });
  await sekme.goto(pathToFileURL(hedef).href);
  await sekme.waitForTimeout(300);
  await sekme.screenshot({ path: `screenshots/genislik-${g}.png`, fullPage: true });
  console.log(`screenshots/genislik-${g}.png`);
  await sekme.close();
}
await tarayici.close();
