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

  // --- SVG ICON WHATSAPP ---
  const WhatsAppIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.472 14.382C17.202 14.247 15.787 13.554 15.539 13.462C15.291 13.37 15.111 13.323 14.931 13.592C14.751 13.862 14.204 14.506 14.046 14.686C13.888 14.866 13.73 14.889 13.46 14.754C13.19 14.619 12.263 14.315 11.165 13.336C10.31 12.573 9.733 11.63 9.575 11.36C9.417 11.09 9.558 10.944 9.693 10.809C9.814 10.688 9.963 10.494 10.098 10.336C10.233 10.178 10.278 10.064 10.37 9.884C10.462 9.704 10.416 9.546 10.348 9.411C10.281 9.276 9.709 7.859 9.483 7.319C9.263 6.794 9.039 6.864 8.872 6.856C8.713 6.849 8.531 6.847 8.35 6.847C8.169 6.847 7.875 6.915 7.626 7.185C7.377 7.455 6.612 8.169 6.612 9.63C6.612 11.091 7.658 12.504 7.797 12.691C7.936 12.879 9.718 15.625 12.446 16.804C13.095 17.084 13.602 17.252 13.997 17.378C14.649 17.586 15.242 17.556 15.711 17.487C16.234 17.409 17.388 16.779 17.614 16.089C17.84 15.399 17.84 14.809 17.772 14.687C17.705 14.565 17.524 14.498 17.255 14.362L17.472 14.382Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C6.477 2 2 6.477 2 12C2 13.845 2.5 15.573 3.374 17.063L2 22L7.108 20.657C8.562 21.507 10.233 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
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
              {/* Email - BISA DIKLIK */}
              <a 
                href="mailto:rania.asyifaul@smk.belajar.id" 
                className="d-flex align-items-center gap-4 text-decoration-none"
              >
                <div 
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px', minWidth: '60px' }}
                >
                  <EmailIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Email Saya</h6>
                  <p className="text-muted mb-0">rania.asyifaul@smk.belajar.id</p>
                </div>
              </a>

              {/* WhatsApp - BISA DIKLIK */}
              <a 
                href="https://wa.me/6285704634951" 
                target="_blank" 
                rel="noreferrer"
                className="d-flex align-items-center gap-4 text-decoration-none"
              >
                <div 
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px', minWidth: '60px' }}
                >
                  <WhatsAppIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">WhatsApp</h6>
                  <p className="text-muted mb-0">085704634951</p>
                </div>
              </a>
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