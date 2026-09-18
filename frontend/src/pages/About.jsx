import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-5" style={{ backgroundColor: '#1e293b' }}>
      <div className="container py-1">
        <h2 
          className="fw-bold mb-4 position-relative pb-3" 
          style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}
        >
          Tentang Saya
          <span 
            className="position-absolute bottom-0 start-0 rounded" 
            style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6' }}
          ></span>
        </h2>
        
        <div className="row mt-5 align-items-center">
          
          {/* Kolom Kiri: FOTO */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="about-photo-wrapper">
              <div className="about-blob"></div>
              <div className="about-dots about-dots-top"></div>
              <div className="about-dots about-dots-bottom"></div>

              <div className="about-photo-frame">
                <img 
                  src="/aku2.jpeg" 
                  alt="Tentang Rania" 
                  className="about-photo"
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan: TEKS */}
          <div className="col-lg-7 ps-lg-5">
            <h3 
              className="fw-bold mb-4 fs-2" 
              style={{ lineHeight: '1.4', fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}
            >
              Semangat Belajar dan Berkarya di Dunia Teknologi
            </h3>
            <p className="mb-4" style={{ lineHeight: '1.9', color: '#94a3b8' }}>
              Saya Rania Asyifaul Husna siswa Rekayasa Perangkat Lunak SMK Negeri 1 Jenangan Ponorogo, yang memiliki ketertarikan pada dunia teknologi, khususnya dalam pengembangan website. Saya senang mempelajari hal-hal baru dan terus mengembangkan kemampuan dalam membuat website yang menarik, responsif, dan mudah digunakan.
            </p>
            <p className="mb-0" style={{ lineHeight: '1.9', color: '#94a3b8' }}>
              Bagi saya, setiap proyek merupakan kesempatan untuk belajar, mencoba hal baru, dan meningkatkan kemampuan. Saya percaya bahwa kemampuan tidak hanya dibangun dari teori, tetapi juga dari proses mencoba, menghadapi kesalahan, dan terus memperbaikinya.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .about-photo-wrapper {
          position: relative;
          max-width: 400px;
          margin: 0 auto;
          padding: 30px;
        }

        .about-blob {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          opacity: 0.2;
          z-index: 0;
        }

        .about-dots {
          position: absolute;
          width: 60px;
          height: 60px;
          background-image: radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px);
          background-size: 12px 12px;
          opacity: 0.4;
          z-index: 0;
        }

        .about-dots-top {
          top: 10px;
          right: 10px;
        }

        .about-dots-bottom {
          bottom: 10px;
          left: 10px;
        }

        .about-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          background: #1e293b;
          padding: 10px;
          border-radius: 24px;
          border: 1px solid #334155;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          z-index: 1;
          overflow: hidden;
        }

        .about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
      `}</style>
    </section>
  );
};

export default About;