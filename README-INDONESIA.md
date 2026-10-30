# MathMaster AI — Paket Matematika + Math Studio

## Cara memasang ke GitHub/Vercel
1. Unduh dan ekstrak ZIP ini.
2. Buka repository GitHub MathMaster.
3. Unggah/ganti file dan folder dari ZIP ke root repository. Jangan menaruh semuanya di dalam folder tambahan.
4. Pastikan `index.html`, `mm-prd.js`, `math-studio.js`, `sw.js`, `manifest.webmanifest`, `vercel.json`, `api/`, dan `functions/` berada di root sesuai struktur ZIP.
5. Commit perubahan. Vercel akan menjalankan deployment dari repository.
6. Pertahankan environment variable `NVIDIA_API_KEY` di Vercel. Jangan menaruh API key di HTML atau JavaScript.

## Fitur baru: Studio Matematika
- Impor teks `.txt`, `.md`, `.csv`; pilih PDF/foto sebagai bahan (ekstraksi PDF dan OCR otomatis belum disediakan pada build ini).
- Simpan catatan matematika lokal dan ekspor sebagai TXT.
- Buat naskah podcast matematika, dengarkan dengan suara TTS perangkat, dan unduh naskah.
- Animasi video konsep matematika bertahap, dengan sorotan rumus dan penjelasan. Dapat direkam sebagai WebM bila browser mendukung MediaRecorder.
- Flashcards, kuis pilihan ganda, latihan benar/salah, pengulangan topik yang sering salah, analisis progres, dan simulasi ujian 10 soal.
- Ruang belajar non-matematika OSN IPA/IPS dihapus dari pilihan ruang belajar.

## Batasan yang perlu diketahui
- Naskah podcast dan soal dalam Studio saat ini dibuat dari template/kumpulan materi lokal; bukan model AI generatif penuh.
- Suara podcast memakai text-to-speech browser. File audio MP3 tidak diekspor.
- Video adalah animasi matematika yang dirender di canvas dan direkam sebagai WebM, bukan video sinematik text-to-video. Narasi suara tergantung dukungan browser.
- PDF dipilih sebagai file, tetapi teks PDF belum diekstrak otomatis. Foto belum menjalani OCR di Studio. Untuk analisis AI, gunakan alur foto PR/AI Mentor yang sudah tersedia di aplikasi.
- Kuis dan bank soal awal adalah contoh terbatas untuk demonstrasi fitur, bukan bank soal lengkap semua kelas/kurikulum.
- Data Studio tersimpan di localStorage browser perangkat. Ekspor catatan sebelum membersihkan data browser.
- AI Mentor tetap memerlukan API/server aktif dan internet.

## Pengujian
Lihat `TEST-RESULTS.md`. Pengujian UI menggunakan Chromium melalui konten halaman yang dimuat di lingkungan uji; ini bukan pengujian deployment Vercel atau perangkat Android fisik.
