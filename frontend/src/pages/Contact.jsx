import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const NOMOR_WA = "6285704634951";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.email || !formData.pesan) {
      alert("Mohon lengkapi semua field terlebih dahulu!");
      return;
    }
    const pesanWA = 
      `Halo Rania! 👋%0A%0A` +
      `*Nama:* ${formData.nama}%0A` +
      `*Email:* ${formData.email}%0A%0A` +
      `*Pesan:*%0A${formData.pesan}`;
    window.open(`https://wa.me/${NOMOR_WA}?text=${pesanWA}`, '_blank');
  };

  const EmailIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const WhatsAppIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382C17.202 14.247 15.787 13.554 15.539 13.462C15.291 13.37 15.111 13.323 14.931 13.592C14.751 13.862 14.204 14.506 14.046 14.686C13.888 14.866 13.73 14.889 13.46 14.754C13.19 14.619 12.263 14.315 11.165 13.336C10.31 12.573 9.733 11.63 9.575 11.36C9.417 11.09 9.558 10.944 9.693 10.809C9.814 10.688 9.963 10.494 10.098 10.336C10.233 10.178 10.278 10.064 10.37 9.884C10.462 9.704 10.416 9.546 10.348 9.411C10.281 9.276 9.709 7.859 9.483 7.319C9.263 6.794 9.039 6.864 8.872 6.856C8.713 6.849 8.531 6.847 8.35 6.847C8.169 6.847 7.875 6.915 7.626 7.185C7.377 7.455 6.612 8.169 6.612 9.63C6.612 11.091 7.658 12.504 7.797 12.691C7.936 12.879 9.718 15.625 12.446 16.804C13.095 17.084 13.602 17.252 13.997 17.378C14.649 17.586 15.242 17.556 15.711 17.487C16.234 17.409 17.388 16.779 17.614 16.089C17.84 15.399 17.84 14.809 17.772 14.687C17.705 14.565 17.524 14.498 17.255 14.362L17.472 14.382Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2C6.477 2 2 6.477 2 12C2 13.845 2.5 15.573 3.374 17.063L2 22L7.108 20.657C8.562 21.507 10.233 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SendIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section id="kontak" className="py-5" style={{ backgroundColor: '#0f172a' }}>
      <div className="container py-2">
        <div className="row">
          
          <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="fw-bold mb-4 position-relative pb-3" style={{ fontFamily: "Times New Roman, Serif", color: '#f1f5f9' }}>
              Hubungi Kami
              <span className="position-absolute bottom-0 start-0 rounded" style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6' }}></span>
            </h2>
            <p className="mb-5" style={{ color: '#94a3b8' }}>
              Punya ide proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya.
            </p>

            <div className="d-flex flex-column gap-4 mb-5">
              
              <a href="mailto:rania.asyifaul@smk.belajar.id" className="d-flex align-items-center gap-4 text-decoration-none">
                <div className="contact-icon">
                  <EmailIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#f1f5f9' }}>Email Saya</h6>
                  <p className="mb-0" style={{ color: '#94a3b8' }}>rania.asyifaul@smk.belajar.id</p>
                </div>
              </a>

              <a href={`https://wa.me/${NOMOR_WA}`} target="_blank" rel="noreferrer" className="d-flex align-items-center gap-4 text-decoration-none">
                <div className="contact-icon">
                  <WhatsAppIcon size={26} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#f1f5f9' }}>WhatsApp</h6>
                  <p className="mb-0" style={{ color: '#94a3b8' }}>085704634951</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-medium small" style={{ color: '#94a3b8' }}>Nama Lengkap</label>
                    <input 
                      type="text" 
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium small" style={{ color: '#94a3b8' }}>Alamat Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium small" style={{ color: '#94a3b8' }}>Pesan Anda</label>
                  <textarea 
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    className="form-control"
                    rows="5"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
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

      <style>{`
        .contact-icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-form-card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 32px;
        }

        .contact-form-card .form-control {
          background-color: #0f172a;
          border: 1px solid #334155;
          color: #f1f5f9;
          padding: 10px 14px;
        }

        .contact-form-card .form-control:focus {
          background-color: #0f172a;
          border-color: #3b82f6;
          box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.15);
          color: #f1f5f9;
        }

        .contact-form-card .form-control::placeholder {
          color: #64748b;
        }
      `}</style>
    </section>
  );
};

export default Contact;