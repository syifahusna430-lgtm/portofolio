import React from 'react';

const Contact = () => {
  // --- SVG ICON EMAIL (Amplop) ---
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

  // --- SVG ICON LOKASI (Map Pin) ---
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

  // --- SVG ICON SEND (Pesawat Kertas) ---
  const SendIcon = ({ size = 20, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row">
          {/* Kolom Kiri: Info Kontak */}
          <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="fw-bold mb-4 position-relative pb-3">
              Let's Work Together
              <span className="position-absolute bottom-0 start-0 bg-primary rounded" style={{ width: '60px', height: '4px' }}></span>
            </h2>
            <p className="text-muted mb-5">
              Punya ide proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
            </p>

            <div className="d-flex flex-column gap-4 mb-5">
              {/* Email */}
              <div className="d-flex align-items-center gap-4">
                <div 
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px', minWidth: '60px' }}
                >
                  <EmailIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Saya</h6>
                  <p className="text-muted mb-0">rania.asyifaul@smk.belajar.id</p>
                </div>
              </div>

              {/* Lokasi */}
              <div className="d-flex align-items-center gap-4">
                <div 
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px', minWidth: '60px' }}
                >
                  <LocationIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Lokasi</h6>
                  <p className="text-muted mb-0">Jl. Raya Ngebel, Kemiri, Kec. Jenangan, Kabupaten Ponorogo, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <form>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-muted small">Nama Lengkap</label>
                    <input type="text" className="form-control bg-light border-0 py-2" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-muted small">Alamat Email</label>
                    <input type="email" className="form-control bg-light border-0 py-2" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium text-muted small">Subjek</label>
                  <input type="text" className="form-control bg-light border-0 py-2" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium text-muted small">Pesan Anda</label>
                  <textarea className="form-control bg-light border-0 py-2" rows="5"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-3 rounded-3 fw-medium d-flex align-items-center justify-content-center gap-2"
                >
                  Kirim Pesan <SendIcon size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;