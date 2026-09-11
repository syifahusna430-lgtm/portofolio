import React from 'react';

const Projects = () => {
    const projects = [
   {
    title: "Salsabrina Snack",
    description: "Platform toko online (E-Commerce) dengan fitur katalog produk snack box, sistem pemesanan custom, keranjang belanja, dan manajemen pesanan yang terintegrasi.",
    image: "/salna.png",
    link: "https://salna.my.id"
  },
  {
    title: "Sistem Tugas",
    description: "Platform manajemen tugas akademik (Task Management System) dengan fitur pelacakan deadline, pengaturan prioritas tugas, monitoring progres pengerjaan, dan notifikasi pengingat yang terintegrasi.",
    image: "/data tugas.png",
    link: "#"
  },
  {
    title: "Mading Online",
    description: "Platform majalah dinding digital (Content Management System) dengan fitur publikasi artikel, kategorisasi rubrik, manajemen berita sekolah, dan galeri prestasi siswa yang terintegrasi.",
    image: "/mading.png",
    link: "#"
  },
  {
    title: "Cakrawala News",
    description: "Portal berita online (News Portal) dengan fitur manajemen artikel, kategorisasi berita, pencarian konten, dan tampilan headline responsif yang terintegrasi.",
    image: "/news.png",
    link: "#"
  }
];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        
        {/* HEADER */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4 position-relative pb-3">
              Featured Projects
              <span className="position-absolute bottom-0 start-0 bg-primary rounded" style={{ width: '60px', height: '4px' }}></span>
            </h2>
            <p className="text-muted mb-0 pe-lg-5">
              Kumpulan proyek terpilih yang menunjukkan kemampuan saya dalam menyelesaikan masalah teknis yang kompleks.
            </p>
          </div>
        </div>

        {/* GRID PROJECTS */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border rounded-4 overflow-hidden bg-white">
                
                {/* ============================================= */}
                {/* REVISI: Bagian Gambar agar tidak terpotong */}
                {/* ============================================= */}
                <div className="p-3 pb-0">
                  <div 
                    className="d-flex align-items-center justify-content-center bg-light rounded-3 overflow-hidden"
                    style={{ aspectRatio: '16 / 10', width: '100%' }} 
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                </div>
                {/* ============================================= */}

                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>
                    {project.title}
                  </h4>
                  
                  <p className="mb-4 small flex-grow-1" style={{ color: '#64748b' }}>
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-dark text-decoration-none d-flex align-items-center gap-2 mt-auto fw-bold"
                    style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}
                  >
                    VIEW PROJECT <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;