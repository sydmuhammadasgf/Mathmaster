# Math Master — Paket V9

Platform web matematika berbasis HTML/CSS/JavaScript, dengan endpoint AI terpisah untuk deployment Vercel atau Cloudflare Pages.

## Isi utama
- `index.html`: aplikasi utama dan navigasi.
- `bank-engine.js`: pencarian konteks bank materi untuk AI Mentor.
- `data/math-curriculum-bank.json`: bank materi lokal (22 jalur, 355 materi, 712 soal formatif pada build dasar).
- `data/osn-question-bank.json`: bank soal OSN yang sudah ada.
- `competition-hub.js`: halaman direktori kompetisi dan learning paths.
- `data/competition-directory.json`: daftar kompetisi dan tautan resmi.
- `assets/visual/sigma-penjumlahan.mp4`: video edukasi yang disertakan dari unggahan pengguna.
- `docs/`: panduan ringkas belajar matematika.
- `api/chat.js`: adapter Vercel.
- `functions/api/chat.js`: adapter Cloudflare Pages. Pilih salah satu sesuai hosting.

## Jalankan lokal
Untuk menghindari batasan `file://`, jalankan server statis lokal dari folder proyek. Contoh dengan Python: `python -m http.server 8000`, lalu buka `http://localhost:8000`.

## Deploy Vercel
1. Import repository GitHub di Vercel atau hubungkan repository yang sudah ada.
2. Framework Preset: Other; Root Directory: `./`; Build Command kosong; Output Directory `.` (static root).
3. Gunakan hanya `api/chat.js` untuk endpoint `/api/chat`.
4. Tambahkan `NVIDIA_API_KEY` di Project Settings → Environment Variables; jangan pernah commit secret.
5. Redeploy setelah mengubah environment variable.

## Catatan
- AI Mentor memerlukan internet dan secret API di server. Bank lokal dapat dibaca offline setelah tersimpan/cache, tetapi bukan AI lokal.
- Akun lokal tersimpan di browser/perangkat. Cadangan terenkripsi tidak mencakup blob media IndexedDB pada versi ini.
- Konten bank tidak boleh dianggap silabus resmi lengkap. Baca `SOURCE-REGISTER.md`.
- Tidak ada klaim bahwa semua fungsi sudah diuji di seluruh browser/perangkat. Lihat `TEST-RESULTS.md`.

## Validasi data lokal
Dari folder proyek jalankan `node tests/validate-data.js`. Ini memvalidasi struktur JSON dan jumlah entri, bukan menggantikan tes browser.
