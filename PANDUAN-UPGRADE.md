# MathMaster AI — PRD Upgrade v2

## Isi paket
- `index.html`: aplikasi MathMaster AI yang sudah ada; tab dan materi lama dipertahankan.
- `mm-prd.js`: lapisan tambahan untuk ruang belajar terpisah, penyimpanan riwayat chat per ruang, tes penempatan awal yang disimpan, pilihan aksi belajar, pengaturan bahasa/suara/persona, mode fokus, status offline, dan cadangan terenkripsi.
- `sw.js` + `manifest.webmanifest`: cache dasar aplikasi/PWA. Ini tidak membuat AI berjalan offline.
- `api/chat.js`, `functions/api/chat.js`, `vercel.json`: proxy AI yang sudah ada, dipertahankan.

## Instalasi di GitHub dari HP
1. Unduh ZIP ini dan ekstrak dengan aplikasi file/ZIP.
2. Buka repo GitHub `sydmuhammadasgf/Mathmaster`.
3. Unggah/replace file yang ada dengan file dalam ZIP, termasuk folder `api/` dan `functions/`; tambahkan `mm-prd.js`, `sw.js`, dan `manifest.webmanifest` di root.
4. Jangan unggah `ORIGINAL-BACKUP.zip` ke root situs. Simpan ZIP asli di tempat aman sebagai cadangan terpisah.
5. Pastikan variabel `NVIDIA_API_KEY` hanya berada di Vercel Project Settings → Environment Variables. Jangan menaruh API key di HTML/JavaScript.
6. Tunggu deployment Vercel selesai, lalu buka situs dan muat ulang. Jika perubahan tidak muncul, hapus cache situs untuk domain tersebut dan buka lagi.

## Batasan penting — baca sebelum dipakai
- Akun lokal tidak memverifikasi identitas di server. Username/password lokal tidak otomatis membuat akun dapat masuk di perangkat lain; pindahkan data melalui file `.mmbak`.
- Ekspor penuh mengenkripsi snapshot localStorage MathMaster dan semua store IndexedDB database `mm` menggunakan AES-GCM/PBKDF2. Import mengganti data di store yang cocok, jadi buat cadangan keadaan sekarang dulu. Data media yang besar dapat membuat file cadangan besar.
- Sinkronisasi cloud otomatis lintas perangkat belum termasuk. Penyimpanan online gratis selalu punya batas kuota/kebijakan; jangan menganggap gratis tanpa batas atau selamanya.
- AI Mentor memerlukan internet dan layanan/model API yang tersedia. Paket tidak menjanjikan AI online tanpa batas atau bebas biaya dari penyedia pihak ketiga.
- Offline/PWA hanya cache aset yang berhasil dimuat. Konten dinamis yang belum pernah dimuat dan AI Mentor online tidak dijamin bekerja offline. Service worker membutuhkan HTTPS (Vercel sudah memakai HTTPS).
- Tes penempatan adalah tes awal ringkas/rekomendasi, bukan evaluasi akademik resmi. Hasilnya tidak otomatis menandai materi lain sebagai dikuasai.
- Daftar persona adalah arahan gaya. Suara dan speech recognition bergantung pada dukungan browser/perangkat dan izin pengguna.
- Paket ini adalah upgrade fungsional awal, bukan bukti semua butir PRD sudah selesai. Gunakan checklist uji; fitur yang belum lulus uji jangan dianggap selesai.

## Pemulihan dan keamanan
- Jangan hapus data browser sebelum file cadangan terunduh dan diuji impor.
- Password cadangan tidak dapat dipulihkan jika hilang.
- Jangan membagikan file cadangan atau password kepada orang lain.
- Rotasi `NVIDIA_API_KEY` jika pernah terlihat di screenshot, log, atau percakapan publik.
