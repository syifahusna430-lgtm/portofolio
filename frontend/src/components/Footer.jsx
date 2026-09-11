const Footer = () => {
  return (
    <footer className="border-top py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-muted small text-center text-md-start mb-3 mb-md-0">
          <p className="mb-1">© 2026 Rania asyifa. All rights reserved.</p>
        </div>
        <div className="d-flex gap-4 fs-5 text-muted">
          <a href="#" className="text-muted"><i className="bi bi-github"></i></a>
          <a href="#" className="text-muted"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-muted"><i className="bi bi-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;