# Checklist uji MathMaster AI PRD Upgrade v2

## Pemeriksaan statis yang sudah dilakukan pada paket
- [x] `mm-prd.js` lolos `node --check`.
- [x] `sw.js` lolos `node --check`.
- [x] Link ke `mm-prd.js` dan manifest ada di `index.html`.
- [x] Tab lama Belajar, Mentor, Latihan, dan Dukung masih ada di HTML.
- [x] File API proxy dan konfigurasi Vercel lama dipertahankan dalam ZIP.

## Wajib diuji setelah deployment di Chrome Android
- [ ] Halaman terbuka dan tidak blank; buka Console jika ada error.
- [ ] Tab Belajar, Mentor, Latihan, dan Dukung bekerja.
- [ ] Semua materi lama masih tersedia.
- [ ] Mentor online masih menjawab dengan API key tersimpan di Vercel.
- [ ] Buat akun lokal, keluar, lalu masuk lagi; salah password ditolak.
- [ ] Akun lokal tidak dianggap sebagai akun server; pindah perangkat melalui backup.
- [ ] Tes penempatan hanya tampil jika belum ada hasil untuk identitas lokal tersebut; hasil tetap ada setelah reload.
- [ ] Ganti ruang, kirim pesan, pindah ruang lain, lalu kembali; riwayat tidak tercampur.
- [ ] Pengaturan bahasa/persona/kecepatan suara tersimpan setelah reload.
- [ ] Mode fokus dapat dinyalakan dan dimatikan; chat dapat dipulihkan.
- [ ] Uji suara dan mikrofon; izin ditolak harus tetap aman dan aplikasi tidak crash.
- [ ] Ekspor `.mmbak`; pastikan file terunduh dan ukurannya masuk akal.
- [ ] Impor dengan password salah ditolak dan data lama tetap utuh.
- [ ] Impor dengan password benar dilakukan hanya setelah membuat cadangan kondisi sekarang.
- [ ] Buka sekali saat online, lalu uji reload offline; pahami bahwa AI online tidak akan tersedia.
- [ ] Uji layar portrait/landscape, keyboard Android, dan ukuran layar kecil.

## Belum dapat dinyatakan lulus tanpa uji browser/perangkat nyata
- Sinkronisasi otomatis cloud lintas perangkat (belum diimplementasikan).
- Penguasaan adaptif lengkap per subtopik dan validasi soal matematika menyeluruh.
- Verifikasi sumber resmi untuk setiap kurikulum.
- OTP/email auth server dan isolasi database multi-pengguna di server.
- Kinerja offline semua materi, semua model suara, dan seluruh browser.
