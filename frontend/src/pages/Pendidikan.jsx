import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Pendidikan = () => {
  const pendidikan = [
    {
      jenjang: "SMK Negeri 1 Jenangan",
      jurusan: "Rekayasa Perangkat Lunak (RPL)",
      tahun: "2023 - Sekarang",
      deskripsi: "Mempelajari pemrograman web, mobile, basis data, dan rekayasa perangkat lunak.",
    },
    {
      jenjang: "Mts Muhammadiyah 1 Jenangan",
      tahun: "2020 - 2023",
      deskripsi: "Menyelesaikan pendidikan menengah pertama dengan fokus pada dasar-dasar ilmu pengetahuan.",
    },
    {
      jenjang: "SD Negeri 1 Kemiri",
      tahun: "2014 - 2020",
      deskripsi: "Menyelesaikan pendidikan dasar dengan prestasi akademik yang baik.",
    }
  ];

  const GraduationIcon = ({ size = 22 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="pendidikan" className="py-5" style={{ backgroundColor: '#1e293b' }}>
      <div className="container py-4">
        <SectionTitle 
          title="Pendidikan"
          subtitle="Riwayat pendidikan dari yang terbaru hingga terlama."
        />

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">

            <div className="pendidikan-timeline">
              {pendidikan.map((item, index) => (
                <div className="pendidikan-item" key={index}>
                  {index !== pendidikan.length - 1 && (
                    <div className="pendidikan-line"></div>
                  )}

                  <div className="pendidikan-dot">
                    <GraduationIcon size={22} />
                  </div>

                  <div className="pendidikan-card">
                    <span className="pendidikan-year">{item.tahun}</span>
                    <h5 className="pendidikan-jenjang">{item.jenjang}</h5>
                    {item.jurusan && (
                      <p className="pendidikan-jurusan">{item.jurusan}</p>
                    )}
                    <p className="pendidikan-deskripsi mb-0">{item.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .pendidikan-timeline {
          position: relative;
        }

        .pendidikan-item {
          position: relative;
          padding-left: 90px;
          padding-bottom: 32px;
        }

        .pendidikan-line {
          position: absolute;
          left: 31px;
          top: 64px;
          bottom: 0;
          width: 2px;
          background: #334155;
        }

        .pendidikan-dot {
          position: absolute;
          left: 0;
          top: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #3b82f6;
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .pendidikan-card {
          background: #0f172a;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 24px 28px;
          position: relative;
          overflow: hidden;
        }

        .pendidikan-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #3b82f6;
        }

        .pendidikan-year {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.15);
          padding: 6px 16px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .pendidikan-jenjang {
          font-size: 1.15rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 6px;
          font-family: "Times New Roman", Serif;
        }

        .pendidikan-jurusan {
          font-size: 0.85rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 8px;
        }

        .pendidikan-deskripsi {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .pendidikan-item { padding-left: 70px; }
          .pendidikan-dot { width: 50px; height: 50px; }
          .pendidikan-line { left: 24px; top: 50px; }
          .pendidikan-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Pendidikan;