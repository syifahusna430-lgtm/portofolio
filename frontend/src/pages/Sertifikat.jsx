import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const Sertifikat = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const sertifikat = [
    {
      nama: "Peserta Kunjungan Industri",
      penerbit: "Salatiga",
      tahun: "05 Januari 2026",
      image: "ser1.jpeg"
    },
    {
      nama: "Praktik Kerja Lapangan (PKL)",
      penerbit: "Degeweb",
      tahun: "belum terbit",
      image: ".jpeg"
    }
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="sertifikat" className="py-5" style={{ backgroundColor: '#1e293b' }}>
      <div className="container py-4">
        <SectionTitle 
          title="Sertifikat & Prestasi"
          subtitle="Sertifikasi, pelatihan, dan penghargaan yang pernah saya raih."
          align="center"
        />

        <div className="row g-4 mt-4">
          {sertifikat.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="sertifikat-card h-100">
                
                {/* GAMBAR */}
                <div 
                  className="sertifikat-image-wrapper"
                  onClick={() => openModal(item.image)}
                >
                  <img 
                    src={item.image} 
                    alt={item.nama} 
                    className="sertifikat-image"
                  />
                </div>

                {/* BODY */}
                <div className="sertifikat-body">
                  <h5 className="sertifikat-title">
                    {item.nama}
                  </h5>
                  
                  <p className="sertifikat-meta">
                    <strong>{item.penerbit}</strong> · {item.tahun}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="sertifikat-modal" onClick={closeModal}>
          <button className="sertifikat-modal-close" onClick={closeModal} aria-label="Tutup">✕</button>
          <img 
            src={selectedImage} 
            alt="Sertifikat" 
            className="sertifikat-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ============================================
          CSS KHUSUS SERTIFIKAT
          ============================================ */}
      <style>{`
        /* Card */
        .sertifikat-card {
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .sertifikat-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
          transform: translateY(-5px);
        }

        /* ==========================================
           GAMBAR FULL TANPA JARAK
           ========================================== */
        .sertifikat-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          padding: 0;
          background: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid #334155;
        }

        .sertifikat-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }

        .sertifikat-card:hover .sertifikat-image {
          transform: scale(1.03);
        }

        /* Body */
        .sertifikat-body {
          padding: 18px 22px;
        }

        .sertifikat-title {
          font-family: "Times New Roman", Serif;
          color: #f1f5f9;
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .sertifikat-meta {
          color: #94a3b8;
          font-size: 0.85rem;
          margin: 0;
        }

        .sertifikat-meta strong {
          color: #f1f5f9;
        }

        /* Modal */
        .sertifikat-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          cursor: zoom-out;
        }

        .sertifikat-modal-image {
          max-width: 92%;
          max-height: 90vh;
          border-radius: 12px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          cursor: default;
        }

        .sertifikat-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #334155;
          background: #1e293b;
          color: #f1f5f9;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .sertifikat-modal-close:hover {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */
        @media (max-width: 991px) {
          .sertifikat-image-wrapper {
            height: 200px;
          }
          .sertifikat-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 767px) {
          .sertifikat-image-wrapper {
            height: 180px;
          }
          .sertifikat-body {
            padding: 16px 18px;
          }
        }

        @media (max-width: 576px) {
          .sertifikat-image-wrapper {
            height: 160px;
          }
          .sertifikat-modal-close {
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Sertifikat;