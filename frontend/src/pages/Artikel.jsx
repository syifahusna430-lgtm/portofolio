import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Artikel = () => {
  const artikel = [
    {
      id: 1,
      judul: "Mengenal Web Development dan Perannya di Era Digital",
      deskripsi: "Web development adalah proses merancang, membuat, dan mengembangkan website agar dapat berfungsi dengan baik, interaktif, aman, dan mudah digunakan.",
      tanggal: "September 2024",
      kategori: "Tulisan",
      image: "/artikel1.jpg"
    },
    {
      id: 2,
      judul: "Langkah Mudah Membuat Website Sederhana dengan HTML dan CSS",
      deskripsi: "Tutorial sederhana membuat website menggunakan HTML dan CSS untuk pemula, mulai dari menyiapkan file, membuat struktur halaman, mengatur tampilan dengan CSS.",
      tanggal: "25 Agustus 2024",
      kategori: "Tutorial",
      image: "/art2.jpg"
    },
    {
      id: 3,
      judul: "Pengalaman PKL sebagai Junior Web Developer",
      deskripsi: "Pengalaman PKL yang menjadi kesempatan untuk mengenal dunia Web Development, mempraktikkan berbagai teknologi, dan membangun kemampuan melalui project nyata.",
      tanggal: "September 2026",
      kategori: "Pengalaman",
      image: "/pglmn.jpg"
    }
  ];

  return (
    <section id="artikel" className="py-5" style={{ backgroundColor: '#1e293b' }}>
      <div className="container py-4">
        <SectionTitle 
          title="Artikel & Blog"
          subtitle="Tulisan, tutorial, dan pengalaman yang saya bagikan."
          align="center"
        />

        <div className="row g-4 mt-2">
          {artikel.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="artikel-card h-100">
                
                <div className="position-relative">
                  <img 
                    src={item.image} 
                    alt={item.judul} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                  />
                </div>

                <div className="p-4 d-flex flex-column">
                  
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-0 small" style={{ color: '#8b6f47' }}>
                      {item.tanggal}
                    </p>
                    <span className="artikel-badge ms-auto">
                      {item.kategori}
                    </span>
                  </div>

                  <h5 
                    className="fw-bold mb-3" 
                    style={{ color: '#f1f5f9', fontFamily: "Times New Roman, Serif", lineHeight: '1.4' }}
                  >
                    {item.judul}
                  </h5>
                  
                  <p className="mb-4 small" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                    {item.deskripsi}
                  </p>

                  <Link 
                    to={`/artikel/${item.id}`}
                    className="fw-bold text-decoration-none small mt-auto"
                    style={{ letterSpacing: '0.5px', color: '#3b82f6' }}
                  >
                    BACA SELENGKAPNYA →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .artikel-card {
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 20px;
          overflow: hidden;
        }

        .artikel-badge {
          background: rgba(139, 111, 71, 0.2);
          color: #c9a877;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Artikel;