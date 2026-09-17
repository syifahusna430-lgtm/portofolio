import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Website Salsabrina Snack",
      description: "Platform toko online (E-Commerce) dengan fitur katalog produk snack box, sistem pemesanan custom, keranjang belanja, dan manajemen pesanan yang terintegrasi.",
      image: "/salna.png",
      link: "https://salna.my.id"
    },
    {
      title: "Website Koleksi Produk Rajut",
      description: "Platform digital untuk memperkenalkan koleksi produk rajut dengan tampilan yang menarik dan nyaman untuk dijelajahi.",
      image: "/raniaknit.png",
      link: "https://test.salna.my.id"
    },
    {
      title: "Personal Portfolio Website",
      description: "Website portfolio pribadi yang digunakan untuk menampilkan project, karya coding, dan berbagai hasil pengembangan website selama proses belajar dan PKL.",
      image: "/pkl.png",
      link: "https://porto.salna.my.id/"
    },
    {
      title: "Website Sistem Manajemen Tugas",
      description: "Kelola dan pantau seluruh tugas dalam satu platform. Atur deadline, perbarui status, dan pastikan setiap tugas selesai tepat waktu.",
      image: "/data tugas.png",
      link: null
    },
    {
      title: "Website Mading Online",
      description: "Platform majalah dinding digital (Content Management System) dengan fitur publikasi artikel, kategorisasi rubrik, manajemen berita sekolah, dan galeri prestasi siswa yang terintegrasi.",
      image: "/mading.png",
      link: null
    },
    {
      title: "Website Cakrawala News",
      description: "Portal berita online (News Portal) dengan fitur manajemen artikel, kategorisasi berita, pencarian konten, dan tampilan headline responsif yang terintegrasi.",
      image: "/news.png",
      link: null
    }
  ];

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-5">
        
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4 position-relative pb-3" style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}>
              Karya / Portofolio
              <span className="position-absolute bottom-0 start-0 rounded" style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6' }}></span>
            </h2>
            <p className="mb-0 pe-lg-5" style={{ color: '#94a3b8' }}>
              Kumpulan proyek terpilih yang menunjukkan kemampuan saya dalam menyelesaikan masalah teknis yang kompleks.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card h-100">
                
                <div className="p-3 pb-0">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3 overflow-hidden"
                    style={{ aspectRatio: '16 / 10', width: '100%', backgroundColor: '#0f172a' }} 
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                </div>

                <div className="p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-3" style={{ color: '#f1f5f9', fontFamily: "Times New Roman, Serif" }}>
                    {project.title}
                  </h4>
                  
                  <p className="mb-4 small flex-grow-1" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                  
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-decoration-none d-flex align-items-center gap-2 mt-auto fw-bold"
                      style={{ fontSize: '0.85rem', letterSpacing: '0.5px', color: '#3b82f6' }}
                    >
                      Lihat Proyek <i className="bi bi-arrow-right"></i>
                    </a>
                  ) : (
                    <span 
                      className="d-flex align-items-center gap-2 mt-auto fw-bold"
                      style={{ fontSize: '0.85rem', letterSpacing: '0.5px', color: '#64748b' }}
                    >
                      Project Lokal <i className="bi bi-lock"></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .project-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 20px;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;