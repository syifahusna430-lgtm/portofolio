import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ProfilProfesional = () => {
  const profils = [
    {
      label: "Jabatan",
      isi: "Siswa Rekayasa Perangkat Lunak (RPL)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "Instansi",
      isi: "SMK Negeri 1 Jenangan Ponorogo",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M3 21H21M5 21V7L12 3L19 7V21M9 9H9.01M9 12H9.01M9 15H9.01M15 9H15.01M15 12H15.01M15 15H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "Bidang yang Ditekuni",
      isi: "Mempelajari dan mengembangkan perangkat lunak melalui pemrograman, pembuatan website, aplikasi, serta pengelolaan dan perancangan basis data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="profil" className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-4">
        <SectionTitle
          title="Profil Profesional" 
          subtitle="Jabatan, instansi, dan bidang yang sedang saya tekuni saat ini."
          align="center"
        />

        <div className="row g-4 mt-4 justify-content-center">
          {profils.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="profil-card h-100">
                
                <div className="profil-icon">
                  {item.icon}
                </div>

                <h6 className="profil-label">
                  {item.label}
                </h6>

                <p className="profil-isi mb-0">
                  {item.isi}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .profil-card {
          position: relative;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 32px 28px;
          overflow: hidden;
        }

        .profil-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: #3b82f6;
          border-radius: 0 0 4px 0;
        }

        .profil-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .profil-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .profil-isi {
          font-size: 1rem;
          color: #f1f5f9;
          font-weight: 500;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default ProfilProfesional;