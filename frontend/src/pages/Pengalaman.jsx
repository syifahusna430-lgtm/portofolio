import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Pengalaman = () => {
  const pengalaman = [
    {
      posisi: "Praktik Kerja Lapangan Degeweb",
      tahun: "2026",
      deskripsi: "Selama melaksanakan PKL di Degeweb, saya mendapatkan pengalaman dalam memahami lingkungan kerja di bidang teknologi dan pengembangan website. Saya belajar mengenai alur kerja dalam sebuah tim, memahami proses pengembangan proyek, serta menerapkan pengetahuan yang telah dipelajari selama pendidikan ke dalam pekerjaan secara langsung.",
    },
    {
      posisi: "Belajar dan Mengembangkan Skill Coding",
      tahun: "2025",
      deskripsi: "Saya mempelajari dasar-dasar web development, mulai dari memahami struktur dan tampilan website hingga proses pengembangan fitur. Saya juga terus mengembangkan kemampuan dalam coding, debugging, dan memahami cara kerja sebuah website agar dapat membuat aplikasi atau website yang lebih terstruktur dan fungsional.",
    }
  ];

  const CalendarIcon = ({ size = 14 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="pengalaman" className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-5">
        <SectionTitle title="Pengalaman" />

        <div className="row">
          <div className="col-lg-10 mx-auto">
            {pengalaman.map((item, index) => (
              <div className="experience-card" key={index}>
                <h5 className="fw-bold mb-3" style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}>
                  {item.posisi}
                </h5>
                
                <div className="d-flex flex-wrap gap-3 mb-3 small" style={{ color: '#94a3b8' }}>
                  <span className="d-flex align-items-center gap-2">
                    <CalendarIcon size={14} /> {item.tahun}
                  </span>
                </div>
                
                <p className="small mb-0" style={{ color: '#94a3b8', lineHeight: '1.7' }}>{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .experience-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-left: 4px solid #3b82f6;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  );
};

export default Pengalaman;