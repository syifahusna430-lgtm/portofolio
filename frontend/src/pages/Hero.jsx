import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-5 hero-section">
      <div className="container py-4">
        <div className="row align-items-center">
          
          {/* Kolom Kiri: Teks */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span 
              className="badge badge-accent rounded-pill px-3 py-2 mb-3 fw-medium fs-3" 
              style={{ fontFamily: "Times New Roman, Serif" }}
            >
              HALO, SAYA
            </span>
            <h1 
              className="display-6 fw-bold mb-3" 
              style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}
            >
              RANIA ASYIFAUL HUSNA
            </h1>
            <h3 className="text-accent mb-4 fw-semibold" style={{ lineHeight: '1.5' }}>
              Junior Web Developer & Software<br />Engineering Student
            </h3>
            <p className="text-secondary-custom mb-5 pe-lg-5">
              Memiliki ketertarikan dalam pengembangan website dan teknologi perangkat lunak. Terus belajar dan mengembangkan kemampuan dalam membangun website yang responsif, fungsional, dan memiliki tampilan yang menarik dengan menerapkan teknologi web modern.
            </p>
            <div className="d-flex gap-3 mb-5">
              <a href="#projects" className="btn btn-primary px-4 py-2 fw-medium rounded-3">
                Lihat project
              </a>
            </div>
            <div className="d-flex align-items-center gap-4 text-secondary-custom">
              <div className="d-flex align-items-center gap-2 small fw-medium tracking-wide">
                <span>SCROLLING DOWN</span>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#334155' }}></div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* Kolom Kanan: FOTO MURNI */}
          {/* ============================================ */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <div className="hero-card">
                <img 
                  src="/aku.jpeg" 
                  alt="Profile" 
                  className="hero-card-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================
          CSS KHUSUS HERO
          ============================================ */}
      <style>{`
        .hero-section {
          background-color: #0f172a;
        }

        .badge-accent {
          background-color: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .text-accent {
          color: #3b82f6;
        }

        .text-secondary-custom {
          color: #94a3b8;
        }

        /* ==========================================
           KARTU FOTO MURNI
           ========================================== */
        .hero-card {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 4 / 5;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(59, 130, 246, 0.3);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.7),
            0 0 0 2px rgba(59, 130, 246, 0.6);
        }

        .hero-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-card:hover .hero-card-img {
          transform: scale(1.05);
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */
        @media (max-width: 991px) {
          .hero-card {
            max-width: 320px;
            border-radius: 24px;
          }
        }

        @media (max-width: 576px) {
          .hero-card {
            max-width: 280px;
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;