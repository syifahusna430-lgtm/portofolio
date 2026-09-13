const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 sticky-top">
      <div className="container"> 
        {/* Brand: Teks biasa, tanpa Link */}
        <span 
          className="navbar-brand fw-bold text-primary d-flex align-items-center" 
          style={{ fontFamily: "Times New Roman, Serif", cursor: "default" }}
        >
          <i className="bi bi-code-slash fs-2 me-2"></i> Rania A.
        </span>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"><a className="nav-link" href="#beranda">Beranda</a></li>
            <li className="nav-item"><a className="nav-link" href="#tentang">Tentang</a></li>
            <li className="nav-item"><a className="nav-link" href="#keahlian">Keahlian</a></li>
            <li className="nav-item"><a className="nav-link" href="#proyek">Proyek</a></li>
            <li className="nav-item"><a className="nav-link" href="#kontak">Kontak</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;