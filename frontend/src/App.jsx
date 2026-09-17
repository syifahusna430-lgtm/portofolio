import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import semua section
import Hero from './pages/Hero';
import About from './pages/About';
import ProfilProfesional from './pages/ProfilProfesional';
import Pendidikan from './pages/Pendidikan';
import Pengalaman from './pages/Pengalaman';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Sertifikat from './pages/Sertifikat';
import Kegiatan from './pages/Kegiatan';
import Artikel from './pages/Artikel';
import ArtikelDetail from './pages/ArtikelDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* Halaman Utama */}
      <Route element={<MainLayout />}>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <ProfilProfesional />
              <Pendidikan />
              <Pengalaman />
              <Skills />
              <Projects />
              <Sertifikat />
              <Kegiatan />
              <Artikel />
              <Contact />
            </>
          } 
        />

        {/* Halaman Detail Artikel */}
        <Route path="/artikel/:id" element={<ArtikelDetail />} />
      </Route>
    </Routes>
  );
}

export default App;