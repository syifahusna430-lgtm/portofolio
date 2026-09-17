import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArtikelDetail = () => {
  const { id } = useParams();

  const artikelData = {
    1: {
      judul: "Mengenal Web Development",
      konten: `Di era digital seperti sekarang, website menjadi salah satu bagian penting dalam kehidupan sehari-hari. Hampir semua bidang, mulai dari pendidikan, bisnis, pemerintahan, hingga hiburan, memanfaatkan website untuk menyampaikan informasi dan menyediakan berbagai layanan. Di balik sebuah website yang dapat digunakan dengan baik, terdapat proses yang disebut web development.

Web development adalah proses membuat dan mengembangkan sebuah website agar dapat digunakan oleh pengguna melalui internet. Proses ini tidak hanya berkaitan dengan tampilan website, tetapi juga mencakup fungsi, keamanan, database, hingga bagaimana website dapat bekerja dengan baik.

Secara umum, web development dapat dibagi menjadi dua bagian utama, yaitu front-end dan back-end. Front-end merupakan bagian website yang langsung dilihat dan digunakan oleh pengguna. Teknologi yang sering digunakan dalam front-end antara lain HTML, CSS, dan JavaScript. HTML digunakan untuk membuat struktur halaman, CSS digunakan untuk mengatur tampilan, sedangkan JavaScript digunakan untuk membuat website menjadi lebih interaktif.

Sementara itu, back-end merupakan bagian yang bekerja di belakang layar. Back-end bertugas mengatur proses dan data yang dibutuhkan oleh website. Beberapa bahasa dan teknologi yang dapat digunakan dalam pengembangan back-end antara lain PHP, Python, JavaScript dengan Node.js, serta berbagai sistem database seperti MySQL dan PostgreSQL.

Selain kemampuan teknis, seorang web developer juga perlu memiliki kemampuan memecahkan masalah. Dalam proses pengembangan website, sering kali muncul berbagai kendala seperti error pada kode, tampilan yang tidak sesuai, atau masalah ketika menghubungkan website dengan database.

Belajar web development memang membutuhkan waktu dan latihan. Namun, proses tersebut dapat dimulai dari hal-hal sederhana. Pemula dapat mempelajari HTML terlebih dahulu, kemudian melanjutkan ke CSS dan JavaScript. Setelah memahami dasar-dasarnya, pembelajaran dapat dilanjutkan ke framework, database, API, dan teknologi lainnya.

Web development bukan hanya tentang membuat website terlihat menarik. Lebih dari itu, web development adalah proses menggabungkan teknologi, logika, desain, dan pemecahan masalah untuk menciptakan sebuah website yang bermanfaat bagi pengguna.

Dengan semakin berkembangnya teknologi digital, kemampuan di bidang web development menjadi salah satu keterampilan yang menarik untuk dipelajari. Siapa pun yang memiliki minat terhadap teknologi dapat mulai belajar dari sekarang, sedikit demi sedikit, hingga mampu membuat website sendiri.`
    },
    2: {
      judul: "Tutorial HTML & CSS",
      konten: `Bagi seseorang yang baru mulai belajar web development, HTML dan CSS merupakan dua teknologi dasar yang penting untuk dipahami. HTML digunakan untuk membuat struktur halaman website, sedangkan CSS digunakan untuk mengatur tampilan agar website menjadi lebih menarik dan nyaman dilihat.

Pada artikel ini, kita akan membuat sebuah halaman website sederhana yang memiliki judul, deskripsi, tombol, serta tampilan yang lebih rapi. Proses pembuatannya dapat dilakukan secara bertahap sehingga cocok bagi pemula yang baru mengenal web development.

1. Menyiapkan Text Editor

Pertama, siapkan text editor untuk menulis kode. Kamu dapat menggunakan berbagai text editor yang tersedia, seperti Visual Studio Code atau text editor lainnya.

Buat sebuah folder dengan nama:

website-sederhana

Kemudian buat dua file di dalam folder tersebut:

index.html
style.css

File "index.html" akan digunakan untuk membuat struktur website, sedangkan "style.css" digunakan untuk mengatur tampilan website.

2. Membuat Struktur HTML

Buka file "index.html", kemudian masukkan kode berikut:

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Website sederhana menggunakan HTML dan CSS">
    <meta name="keywords" content="HTML, CSS, website sederhana">
    <meta name="author" content="kamu">

    <title>Website Sederhana</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <h1>Selamat Datang di Website Saya</h1>

        <p>
            Ini adalah website sederhana yang dibuat
            menggunakan HTML dan CSS.
        </p>

        <button>Pelajari Lebih Lanjut</button>
    </div>

</body>
</html>


Kode tersebut berfungsi sebagai struktur dasar halaman website. Elemen "<h1>" digunakan untuk membuat judul utama, "<p>" digunakan untuk membuat paragraf, sedangkan "<button>" digunakan untuk membuat tombol.

Pada bagian "<link rel="stylesheet" href="style.css">", file HTML dihubungkan dengan file CSS sehingga tampilan website dapat diatur menggunakan CSS.

3. Menambahkan CSS

Setelah struktur HTML selesai dibuat, buka file "style.css" dan masukkan kode berikut:

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
}

.container {
    width: 80%;
    max-width: 700px;
    margin: 100px auto;
    padding: 40px;
    text-align: center;
    background: white;
    border-radius: 10px;
}

h1 {
    font-size: 36px;
}

p {
    font-size: 18px;
    line-height: 1.6;
}

button {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

CSS tersebut digunakan untuk mengatur berbagai bagian tampilan website. Contohnya, "font-family" digunakan untuk menentukan jenis huruf, "margin" dan "padding" digunakan untuk mengatur jarak, sedangkan "background" digunakan untuk menentukan warna latar belakang.

Properti "border-radius" digunakan untuk membuat sudut elemen menjadi lebih membulat sehingga tampilan website terlihat lebih modern.

4. Menjalankan Website

Setelah kedua file selesai dibuat, simpan semua perubahan yang telah dilakukan.

Kemudian buka file "index.html" menggunakan browser. Jika tidak terdapat kesalahan pada kode, halaman website sederhana yang telah dibuat akan muncul di browser.

Pada tahap ini, website sudah dapat menampilkan judul, paragraf, dan tombol dengan tampilan yang telah diatur menggunakan CSS.

5. Mengembangkan Website

Website yang dibuat masih sangat sederhana. Setelah memahami dasar HTML dan CSS, kamu dapat mengembangkan website tersebut dengan menambahkan berbagai komponen dan fitur.

Beberapa fitur yang dapat ditambahkan antara lain:

- Navigation bar
- Foto atau gambar
- Card
- Form login
- Footer
- Animasi
- Responsive design
- JavaScript untuk interaksi

Dengan menambahkan fitur-fitur tersebut, website akan menjadi lebih lengkap dan interaktif.

Kesimpulan

Membuat website tidak harus langsung dimulai dengan teknologi yang kompleks. HTML dan CSS sudah cukup untuk menjadi langkah awal dalam mempelajari web development.

HTML membantu membangun struktur halaman, sedangkan CSS membuat tampilan website menjadi lebih menarik. Setelah memahami kedua teknologi tersebut, pembelajaran dapat dilanjutkan ke JavaScript, database, back-end, framework, hingga deployment.

Hal yang paling penting dalam belajar web development adalah terus berlatih. Dengan membuat berbagai proyek kecil, kemampuan dalam menulis kode dan memahami cara kerja website akan berkembang secara bertahap.




`
    },
    3: {
      judul: "Pengalaman PKL",
      konten: `Selama menjalani Praktik Kerja Lapangan (PKL), saya mendapatkan kesempatan untuk belajar dan terlibat langsung dalam dunia Web Development. Sebagai Junior Web Developer, saya mempelajari berbagai teknologi yang digunakan dalam pengembangan website, baik dari sisi frontend maupun backend.

Pada bagian frontend, saya menggunakan HTML, CSS, Bootstrap, JavaScript, React, dan Vite. Saya belajar membuat tampilan website, menggunakan component pada React, serta membuat halaman yang lebih responsif dan interaktif.

Selain frontend, saya juga mengenal backend dan API. Saya belajar bagaimana frontend berkomunikasi dengan backend untuk mengambil dan mengirim data melalui API. Pengalaman ini membuat saya lebih memahami bagaimana sebuah website dapat bekerja secara keseluruhan.

Selama mengerjakan project, saya juga sering menemukan error. Dari situ saya belajar melakukan debugging, mencari penyebab masalah, dan memperbaiki kode yang bermasalah. Saya juga belajar bekerja sama dengan tim dan menyelesaikan tugas sesuai kebutuhan project.

PKL memberikan saya pengalaman baru yang tidak hanya meningkatkan kemampuan coding, tetapi juga membuat saya lebih memahami bagaimana proses pengembangan website dilakukan di dunia kerja. Pengalaman ini menjadi salah satu langkah penting bagi saya untuk terus belajar dan berkembang sebagai Web Developer.`
    }
  };

  const artikel = artikelData[id];

  if (!artikel) {
    return (
      <section className="py-5" style={{ backgroundColor: '#1e293b' }}>
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-3" style={{ color: '#f1f5f9' }}>Artikel Tidak Ditemukan</h2>
          <p className="mb-4" style={{ color: '#94a3b8' }}>Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link to="/" className="btn btn-primary rounded-pill px-4">
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="mb-4">
              <Link 
                to="/" 
                className="text-decoration-none small fw-medium"
                style={{ color: '#94a3b8' }}
              >
                ← Kembali ke Beranda
              </Link>
            </div>

            <div>
              {artikel.konten.split('\n\n').map((paragraf, i) => (
                <p 
                  key={i} 
                  className="mb-4" 
                  style={{ lineHeight: '1.9', fontSize: '1rem', color: '#cbd5e1' }}
                >
                  {paragraf}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtikelDetail;