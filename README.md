# LangsaGo

Website city guide statis untuk Kota Langsa.

## Jalankan lokal
Buka `index.html` di browser atau jalankan server statis lokal, misalnya `python -m http.server 8000`.

## Catatan produksi
- Data agenda, destinasi, dan direktori kuliner di dalam demo merupakan konten contoh/kurasi awal; verifikasi kepada pengelola sebelum dipublikasikan sebagai informasi faktual.
- Check-in badge disimpan lokal di browser dan bukan validasi GPS/QR atau sistem voucher.
- `vercel.json` mengatur response headers di Vercel. Hosting statis lain perlu konfigurasi header setara.
- CSP ketat sengaja tidak memakai Tailwind Browser CDN karena skrip CDN Tailwind menghasilkan style runtime yang umumnya memerlukan izin inline. Untuk produksi, gunakan CSS yang sudah dibangun/di-compile dan disajikan dari origin sendiri.
- Meta CSP di `index.html` hanya cadangan parsial. Browser tidak mengizinkan seluruh directive/header seperti `frame-ancestors`, HSTS, X-Frame-Options, atau CORP diberlakukan melalui meta; gunakan response headers.
