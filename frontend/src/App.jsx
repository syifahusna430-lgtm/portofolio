import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import semua section langsung dari folder 'pages'
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } 
        />
      </Route>
    </Routes>
  );
}

export default App;