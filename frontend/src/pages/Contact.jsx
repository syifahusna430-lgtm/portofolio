const Contact = () => {
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
              <div className="d-flex align-items-center gap-4">
                <div className="bg-primary-subtle text-primary rounded-3 p-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Saya</h6>
                  <p className="text-muted mb-0">hello@yourname.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <div className="bg-primary-subtle text-primary rounded-3 p-3 fs-4 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <i className="bi bi-building"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Lokasi</h6>
                  <p className="text-muted mb-0">Jakarta, Indonesia (Tersedia untuk Remote)</p>
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
                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-muted small">Alamat Email</label>
                    <input type="email" className="form-control bg-light border-0 py-2" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium text-muted small">Subjek</label>
                  <input type="text" className="form-control bg-light border-0 py-2" placeholder="Tanya tentang proyek..." />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium text-muted small">Pesan Anda</label>
                  <textarea className="form-control bg-light border-0 py-2" rows="5" placeholder="Halo, saya ingin mendiskusikan..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3 rounded-3 fw-medium d-flex align-items-center justify-content-center gap-2">
                  Kirim Pesan <i className="bi bi-send"></i>
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