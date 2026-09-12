import React from 'react';

const About = () => {
  // --- SVG ICON PENDIDIKAN (Toga / Graduation Cap) ---
  const GraduationIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 10L12 5L2 10L12 15L22 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // --- SVG ICON DOMISILI (Lokasi / Map Pin) ---
  const LocationIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 22C12 22 20 15.5 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.5 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // --- SVG ICON EMAIL (Amplop / Envelope) ---
  const EmailIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7L12 13L22 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <h2 className="fw-bold mb-4 position-relative pb-3"style={{ fontFamily: "Times New Roman, Serif" }}>
         Tentang
          <span className="position-absolute bottom-0 start-0 bg-primary rounded" style={{ width: '60px', height: '4px' }}></span>
        </h2>
        
        <div className="row mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <h3 className="fw-bold mb-4 text-dark" style={{ lineHeight: '1.4',fontFamily: "Times New Roman, Serif" }}>
              Semangat Belajar dan Berkarya di Dunia Teknologi
            </h3>
            <p className="text-muted mb-4">
              Saya Rania Asyifaul Husna siswa Rekayasa Perangkat Lunak SMK Negeri 1 Jenangan Ponorogo, yang memiliki ketertarikan pada dunia teknologi, khususnya dalam pengembangan website. Saya senang mempelajari hal-hal baru dan terus mengembangkan kemampuan dalam membuat website yang menarik, responsif, dan mudah digunakan.
            </p>
            <p className="text-muted mb-5">
              Bagi saya, setiap proyek merupakan kesempatan untuk belajar, mencoba hal baru, dan meningkatkan kemampuan. Saya percaya bahwa kemampuan tidak hanya dibangun dari teori, tetapi juga dari proses mencoba, menghadapi kesalahan, dan terus memperbaikinya. Karena itu, saya selalu berusaha memberikan hasil terbaik dalam setiap proyek yang saya kerjakan dan menjadikan setiap pengalaman sebagai langkah untuk berkembang, belajar lebih banyak, dan menghasilkan karya yang lebih baik.
            </p>
          </div>
          
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              
              {/* Card 1: Pendidikan */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-4">
                  <div 
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                    style={{ width: '60px', height: '60px', minWidth: '60px' }}
                  >
                    <GraduationIcon size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Pendidikan Terkini</h5>
                    <p className="text-muted mb-0 small">SMK Negeri 1 Jenangan / Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Domisili */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-4">
                  <div 
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                    style={{ width: '60px', height: '60px', minWidth: '60px' }}
                  >
                    <LocationIcon size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Domisili</h5>
                    <p className="text-muted mb-0 small">Jl. Raya Ngebel, Kemiri, Kec. Jenangan, Kabupaten Ponorogo, Jawa Timur</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-4">
                  <div 
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                    style={{ width: '60px', height: '60px', minWidth: '60px' }}
                  >
                    <EmailIcon size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Email</h5>
                    <p className="text-muted mb-0 small">rania.asyifaul@smk.belajar.id</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;