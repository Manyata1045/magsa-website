import GalleryPreview from "./components/GalleryPreview";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Founder from "./components/Founder";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Studio from "./components/Studio";
import Academy from "./components/Academy";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
  
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <GalleryPreview />
              <Overview />
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
      <Footer />
    </>
  );
}

export default App;
