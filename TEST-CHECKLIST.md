# Checklist pengujian sebelum rilis

- [x] JSON bank materi dapat diparse dan jumlah entri memenuhi baseline.
- [x] JSON direktori kompetisi dapat diparse dan semua entri memiliki tautan HTTPS.
- [x] `node --check` untuk modul JS, Vercel API, dan Cloudflare Pages Function.
- [x] Inline JavaScript di `index.html` diekstrak dan diperiksa sintaksnya.
- [x] File media, PDF, manifest, service worker, dan file backend ada di paket.
- [ ] Uji klik semua tombol di Chrome Android dan desktop setelah deploy.
- [ ] Uji login/guest, penyimpanan, impor/ekspor backup, dan pemulihan akun pada browser nyata.
- [ ] Uji API AI dengan secret yang benar pada environment Vercel Preview dan Production.
- [ ] Uji seluruh halaman pada koneksi lambat/offline dan cek cache PWA.
- [ ] Periksa console browser, network 404/500, dan respons API setelah deployment.

## Batas klaim
Pemeriksaan statis bukan bukti bebas bug. Belum dilakukan deployment ke akun Vercel pengguna, pengujian NVIDIA API dengan secret pengguna, atau pengujian langsung di perangkat Android pengguna. Karena itu, tidak ada klaim “100% bebas error”.
