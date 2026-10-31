# Tutorial mengganti file repository GitHub dan sinkron ke Vercel

## Sebelum mengganti
1. Buka repository `sydmuhammadasgf/Mathmaster` (pastikan repository yang benar).
2. Buat backup: buka **Code → Download ZIP** atau buat branch `backup-sebelum-v9`.
3. Jangan menghapus repository atau project Vercel. Cukup ganti isi file di branch yang terhubung ke Vercel.
4. Simpan nilai environment variable `NVIDIA_API_KEY` di Vercel; jangan taruh di file `.js` frontend atau commit ke GitHub.

## Cara paling aman lewat GitHub web
1. Ekstrak `MathMaster-V9-Full-Project.zip` di perangkat.
2. Buka repository GitHub, pastikan branch yang terhubung ke Vercel (biasanya `main`).
3. Untuk menghindari file lama tertinggal, hapus file lama yang memang tidak ada lagi di paket. Pada GitHub buka file → ikon tempat sampah **Delete this file** → tulis pesan commit → **Commit changes**. Ulangi untuk file yang dihapus/berganti nama.
4. Untuk mengganti file, buka file lama → ikon pensil → pilih seluruh isi → tempel isi file baru → **Commit changes**. Untuk file baru gunakan **Add file → Upload files**.
5. Unggah folder beserta struktur path yang sama, terutama `api/chat.js`, `data/`, `assets/visual/`, dan `docs/`. Browser GitHub tidak mengunggah folder kosong; folder di paket ini memiliki file.
6. Commit semua perubahan dengan pesan `Deploy Math Master V9`.
7. Buka Vercel → project MathMaster → **Deployments**. Tunggu deployment dari commit terbaru berstatus **Ready**.

## Cara yang lebih mudah lewat GitHub Desktop
1. Clone repository ke komputer, lalu checkout branch yang dipakai Vercel.
2. Salin seluruh isi folder hasil ekstrak V9 ke folder repository, pilih **Replace files** jika diminta.
3. Hapus file lama yang tidak ada dalam V9 (jangan menghapus file konfigurasi lain yang masih diperlukan tanpa memeriksa).
4. GitHub Desktop akan menampilkan daftar Changed/Deleted/Untracked. Periksa daftar itu sebelum commit.
5. Isi Summary `Deploy Math Master V9`, klik **Commit to main**, lalu **Push origin**.
6. Vercel akan otomatis membangun ulang jika Git integration aktif.

## Pengaturan Vercel
- Framework Preset: Other.
- Root Directory: `./`.
- Build Command: kosong.
- Output Directory: `.`.
- Backend Vercel yang digunakan adalah `api/chat.js` saja. Jangan memakai adapter `functions/api/chat.js` pada Vercel.
- Tambahkan `NVIDIA_API_KEY` melalui Settings → Environment Variables untuk Preview dan Production sesuai kebutuhan, lalu Redeploy.

## Verifikasi setelah deploy
1. Buka URL deployment Vercel dan lakukan hard refresh.
2. Buka DevTools → Console dan Network; pastikan tidak ada 404 untuk `competition-hub.js`, JSON, atau video.
3. Uji tab Belajar, Mentor, Latihan, Dukung, Kompetisi; uji pemilihan jalur, pencarian materi, dan pemutar video.
4. Uji AI Mentor. Jika 500/401, periksa Vercel Function Logs dan environment variable. Jangan mengirim API key ke chat atau commit GitHub.
5. Jika versi lama masih tampil, periksa commit deployment, lalu clear site data/cache service worker dan muat ulang.
