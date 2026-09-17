import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Kegiatan = () => {
  const kegiatan = [
    {
      judul: "Seminar RPL Connect",
      deskripsi: "Mengikuti kegiatan Seminar RPL Connect untuk mendapatkan pengetahuan baru seputar perkembangan teknologi, industri digital, serta gambaran mengenai peluang kerja di bidang RPL.",
      image: "/rplcconnect.jpeg"
    },
    {
      judul: "Kunjugan industri ke GameLab Salatiga",
      deskripsi: "Berkesempatan mengunjungi Game Lab Salatiga untuk mengenal lebih dekat lingkungan industri digital serta mempelajari tahapan pengembangan game dan teknologi yang digunakan.",
      image: "/gmelb.jpeg"
    },
    {
      judul: "Pelaksanaan Praktik Kerja Lapangan (PKL) di Degeweb Ponorogo",
      deskripsi: "Kegiatan PKL dilaksanakan di Degeweb Ponorogo sebagai sarana untuk memperoleh pengalaman kerja secara langsung serta menerapkan pengetahuan dan keterampilan yang telah dipelajari di sekolah ke dalam dunia kerja.",
      image: "/dg.jpeg"
    },
    {
      judul: "Persiapan Uji Kompetensi / Serkom",
      deskripsi: "Mengembangkan proyek dan menyelesaikan latihan sebagai bekal menghadapi uji kompetensi Junior Web Developer, mencakup frontend, backend, database, dan API.",
      image: "/rajut.jpeg"
    }
  ];

  return (
    <section id="kegiatan" className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-4">
        <SectionTitle title="Kegiatan" />

        <div className="row g-4">
          {kegiatan.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="kegiatan-card h-100">
                
                <div className="position-relative">
                  <img 
                    src={item.image} 
                    alt={item.judul} 
                    style={{ width: '100%', height: '240px', objectFit: 'cover' }} 
                  />
                </div>

                <div className="p-4 d-flex flex-column">
                  <h5 
                    className="fw-bold mb-3" 
                    style={{ color: '#f1f5f9', fontFamily: "Times New Roman, Serif", lineHeight: '1.4' }}
                  >
                    {item.judul}
                  </h5>
                  
                  <p className="mb-0 small" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .kegiatan-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 20px;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Kegiatan;