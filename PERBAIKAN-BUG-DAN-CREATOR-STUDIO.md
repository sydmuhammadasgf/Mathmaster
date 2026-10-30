# MathMaster AI — perbaikan bug & Creator Studio

## Perbaikan bug lintas akun

Lapisan PRD sebelumnya membaca satu localStorage key global (`mm_prd_v2`) untuk semua akun, walaupun juga menulis salinan per akun. Ini memungkinkan state global lama terbaca ketika akun berganti.

Versi perbaikan menggunakan key `mm_prd_v2_<account>` untuk seluruh load/save. Data lama pada key global hanya dimigrasikan sekali ke ruang `guest` ketika tidak ada akun aktif. Event `mm-account-changed` memuat ulang state sesuai akun aktif dan memulihkan chat ruang yang sesuai.

Catatan: ini memperbaiki isolasi pada lapisan PRD. Ini bukan autentikasi server dan bukan sinkronisasi antarperangkat. Akun lokal tetap hanya berlaku pada browser/perangkat itu sampai cadangan dipindahkan.

## Creator Studio (offline)

Buka `CreatorStudio.html` di Chrome modern. Tidak perlu akun, API key, server, atau biaya layanan.

- Membuat draft naskah podcast/template dialog berdasarkan topik.
- Membacakan naskah melalui Web Speech API (suara tergantung Chrome/perangkat).
- Membuat storyboard dan merekam video slide `.webm` dengan MediaRecorder.
- Mengekspor naskah `.txt`.

Batasan yang disengaja dan transparan:
- Naskah dibangun dari template lokal, bukan LLM.
- TTS browser hanya diputar; tidak diekspor sebagai MP3/WAV.
- Video adalah slide berteks, bukan generative text-to-video dan tidak memiliki track audio.
- Tidak ada model besar yang dibundel. Generative video lokal berkualitas tinggi memerlukan model, storage, RAM/VRAM dan waktu render yang jauh melampaui perangkat Android low-end.

## Instalasi tanpa coding

1. Ekstrak ZIP.
2. Untuk Creator Studio, buka `CreatorStudio.html` dengan Chrome.
3. Untuk MathMaster, unggah isi folder ZIP ke repository GitHub yang terhubung ke Vercel. Jangan hapus file lama atau env var `NVIDIA_API_KEY`.
4. Setelah deployment, periksa halaman, login lokal, ganti akun, ganti ruang, ekspor/impor cadangan dan AI Mentor.

## Biaya

Creator Studio tidak memakai API atau langganan. Penggunaan suara mengikuti fitur bawaan browser/perangkat. AI Mentor MathMaster tetap memakai endpoint yang telah ada dan mungkin memiliki kuota/biaya penyedia; jangan anggap AI cloud tanpa batas gratis.
