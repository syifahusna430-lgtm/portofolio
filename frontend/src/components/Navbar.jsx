import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleItemClick = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="custom-navbar sticky-top">
      <div className="custom-container">
        
        {/* Brand */}
        <span className="custom-brand">
          <i className="bi bi-code-slash custom-brand-icon"></i>
          <span className="custom-brand-text">Rania A.</span>
        </span>

        {/* Hamburger (Mobile Only) */}
        <button 
          className="custom-toggler" 
          type="button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>

        {/* Menu Navigasi */}
        <div className={`custom-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="custom-menu-list">
            <li><a href="#home" className="custom-menu-link" onClick={handleItemClick}>Beranda</a></li>
            <li><a href="#tentang" className="custom-menu-link" onClick={handleItemClick}>Tentang</a></li>
            <li><a href="#pendidikan" className="custom-menu-link" onClick={handleItemClick}>Pendidikan</a></li>
            <li><a href="#pengalaman" className="custom-menu-link" onClick={handleItemClick}>Pengalaman</a></li>
            <li><a href="#keahlian" className="custom-menu-link" onClick={handleItemClick}>Keahlian</a></li>
            <li><a href="#projects" className="custom-menu-link" onClick={handleItemClick}>Karya</a></li>

            {/* Dropdown "Lainnya" */}
            <li className="custom-dropdown-wrapper" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleDropdown}
                className="custom-menu-link custom-dropdown-toggle"
              >
                Lainnya
                <span className={`custom-arrow ${dropdownOpen ? 'open' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {dropdownOpen && (
                <ul className="custom-dropdown">
                  <li><a className="custom-dropdown-item" href="#profil" onClick={handleItemClick}>Profil Profesional</a></li>
                  <li><a className="custom-dropdown-item" href="#sertifikat" onClick={handleItemClick}>Sertifikat & Prestasi</a></li>
                  <li><a className="custom-dropdown-item" href="#kegiatan" onClick={handleItemClick}>Kegiatan</a></li>
                  <li><a className="custom-dropdown-item" href="#artikel" onClick={handleItemClick}>Artikel & Blog</a></li>
                </ul>
              )}
            </li>

            <li><a href="#kontak" className="custom-menu-link" onClick={handleItemClick}>Kontak</a></li>
          </ul>
        </div>
      </div>

      {/* ============================================
          CSS KHUSUS NAVBAR
          ============================================ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap');

        /* ==========================================
           NAVBAR CONTAINER
           ========================================== */
        .custom-navbar {
          background-color: #0f172a;
          border-bottom: 1px solid #334155;
          padding: 1rem 0;
          z-index: 1000;
        }

        .custom-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ==========================================
           BRAND
           ========================================== */
        .custom-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .custom-brand-icon {
          font-size: 1.6rem;
          color: #3b82f6;
        }

        .custom-brand-text {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* ==========================================
           HAMBURGER BUTTON
           ========================================== */
        .custom-toggler {
          background: transparent;
          border: 1px solid #334155;
          border-radius: 8px;
          padding: 8px 10px;
          color: #94a3b8;
          cursor: pointer;
          display: none;            /* Default: hidden (desktop) */
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .custom-toggler:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        /* ==========================================
           MENU NAVIGASI (DESKTOP)
           ========================================== */
        .custom-menu {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .custom-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .custom-menu-link {
          display: inline-block;
          padding: 8px 14px;
          color: #94a3b8;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .custom-menu-link:hover {
          color: #f1f5f9;
        }

        .custom-menu-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #3b82f6;
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .custom-menu-link:hover::after {
          width: 60%;
        }

        /* Dropdown toggle */
        .custom-dropdown-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .custom-arrow {
          display: inline-flex;
          transition: transform 0.3s ease;
        }

        .custom-arrow.open {
          transform: rotate(180deg);
        }

        .custom-dropdown-wrapper {
          position: relative;
        }

        /* Dropdown menu */
        .custom-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 12px;
          min-width: 220px;
          background-color: #1e293b;
          border: 1px solid #334155;
          border-radius: 14px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          padding: 8px;
          list-style: none;
          z-index: 1000;
        }

        .custom-dropdown-item {
          display: block;
          padding: 10px 16px;
          border-radius: 10px;
          color: #94a3b8;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .custom-dropdown-item:hover {
          background-color: #263449;
          color: #f1f5f9;
        }

        /* ==========================================
           MOBILE (<= 991px)
           ========================================== */
        @media (max-width: 991px) {
          .custom-container {
            flex-wrap: wrap;       /* Agar menu bisa turun ke baris baru */
          }

          .custom-toggler {
            display: flex;         /* Tampilkan hamburger */
          }

          /* Menu tersembunyi secara default di mobile */
          .custom-menu {
            flex: 0 0 100%;        /* Full width di baris baru */
            display: none;
            width: 100%;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #334155;
          }

          .custom-menu.open {
            display: block;
          }

          .custom-menu-list {
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
          }

          .custom-menu-link {
            display: block;
            text-align: center;
            padding: 12px 16px;
            font-size: 0.95rem;
            border-radius: 10px;
          }

          .custom-menu-link:hover {
            background-color: #1e293b;
          }

          .custom-menu-link::after {
            display: none;
          }

          .custom-dropdown {
            position: static;
            margin-top: 4px;
            box-shadow: none;
            background-color: #0f172a;
            padding: 4px;
          }

          .custom-dropdown-item {
            text-align: center;
            padding: 10px 12px;
          }

          .custom-brand-text {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;