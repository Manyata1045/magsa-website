import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import ps1 from "../assets/PS/PS1.jpeg";
import ps2 from "../assets/PS/PS2.jpeg";
import ps3 from "../assets/PS/PS3.jpeg";
import ps4 from "../assets/PS/PS4.jpeg";
import ps5 from "../assets/PS/PS5.jpeg";
import ps6 from "../assets/PS/PS6.jpeg";
import ps7 from "../assets/PS/PS7.jpeg";
import ps8 from "../assets/PS/PS8.jpeg";
import ps9 from "../assets/PS/PS9.jpeg";
import ps10 from "../assets/PS/PS10.jpeg";
import ps11 from "../assets/PS/PS11.jpeg";
import ps12 from "../assets/PS/PS12.jpeg";
import ps13 from "../assets/PS/PS13.jpeg";
import ps14 from "../assets/PS/PS14.jpeg";
import ps15 from "../assets/PS/PS15.jpeg";
import ps16 from "../assets/PS/PS16.jpeg";
import ps17 from "../assets/PS/PS17.jpeg";
import ps18 from "../assets/PS/PS18.jpeg";
import navkriti11 from "../assets/exhibitions/navkriti-1/1.jpeg";
import navkriti12 from "../assets/exhibitions/navkriti-1/2.jpeg";
import navkriti13 from "../assets/exhibitions/navkriti-1/3.jpeg";
import navkriti14 from "../assets/exhibitions/navkriti-1/4.jpeg";
import navkriti15 from "../assets/exhibitions/navkriti-1/5.jpeg";
import navkriti16 from "../assets/exhibitions/navkriti-1/6.jpeg";
import navkriti17 from "../assets/exhibitions/navkriti-1/7.jpeg";
import navkriti18 from "../assets/exhibitions/navkriti-1/8.jpeg";
import navkriti19 from "../assets/exhibitions/navkriti-1/9.jpeg";
import navkriti110 from "../assets/exhibitions/navkriti-1/10.jpeg";
import navkriti111 from "../assets/exhibitions/navkriti-1/11.jpeg";
import navkriti112 from "../assets/exhibitions/navkriti-1/12.jpeg";
import navkriti113 from "../assets/exhibitions/navkriti-1/13.jpeg";
import navkriti21 from "../assets/exhibitions/navkriti-2/1.jpeg";
import navkriti22 from "../assets/exhibitions/navkriti-2/2.jpeg";
import navkriti23 from "../assets/exhibitions/navkriti-2/3.jpeg";
import navkriti24 from "../assets/exhibitions/navkriti-2/4.jpeg";
import navkriti25 from "../assets/exhibitions/navkriti-2/5.jpeg";
import navkriti26 from "../assets/exhibitions/navkriti-2/6.jpeg";
import navkriti27 from "../assets/exhibitions/navkriti-2/7.jpeg";
import navkriti28 from "../assets/exhibitions/navkriti-2/8.jpeg";
import navkriti29 from "../assets/exhibitions/navkriti-2/9.jpeg";
import navkriti210 from "../assets/exhibitions/navkriti-2/10.jpeg";
import navkriti211 from "../assets/exhibitions/navkriti-2/11.jpeg";
import navkriti212 from "../assets/exhibitions/navkriti-2/12.jpeg";
import navkriti213 from "../assets/exhibitions/navkriti-2/13.jpeg";
import navkriti214 from "../assets/exhibitions/navkriti-2/14.jpeg";
import navkriti31 from "../assets/exhibitions/navkriti-3/1.jpeg";
import navkriti32 from "../assets/exhibitions/navkriti-3/2.jpeg";
import navkriti33 from "../assets/exhibitions/navkriti-3/3.jpeg";
import navkriti34 from "../assets/exhibitions/navkriti-3/4.jpeg";
import navkriti35 from "../assets/exhibitions/navkriti-3/5.jpeg";
import navkriti36 from "../assets/exhibitions/navkriti-3/6.jpeg";
import navkriti37 from "../assets/exhibitions/navkriti-3/7.jpeg";
import navkriti38 from "../assets/exhibitions/navkriti-3/8.jpeg";
import navkriti39 from "../assets/exhibitions/navkriti-3/9.jpeg";
import navkriti310 from "../assets/exhibitions/navkriti-3/10.jpeg";
import navkriti311 from "../assets/exhibitions/navkriti-3/11.jpeg";
import navkriti312 from "../assets/exhibitions/navkriti-3/12.jpeg";
import navkriti313 from "../assets/exhibitions/navkriti-3/13.jpeg";
import navkritiJr1 from "../assets/exhibitions/navkriti-jr/1.jpg";
import navkritiJr2 from "../assets/exhibitions/navkriti-jr/2.jpg";
import navkritiJr3 from "../assets/exhibitions/navkriti-jr/3.jpg";
import navkritiJr4 from "../assets/exhibitions/navkriti-jr/4.jpg";
import navkritiJr5 from "../assets/exhibitions/navkriti-jr/5.jpg";
const navkritiJrImages = [
  navkritiJr1,
  navkritiJr2,
  navkritiJr3,
  navkritiJr4,
  navkritiJr5,
];
const navkriti1Images = [
  navkriti11,
  navkriti12,
  navkriti13,
  navkriti14,
  navkriti15,
  navkriti16,
  navkriti17,
  navkriti18,
  navkriti19,
  navkriti110,
  navkriti111,
  navkriti112,
  navkriti113,
];
const navkriti2Images = [
  navkriti21,
  navkriti22,
  navkriti23,
  navkriti24,
  navkriti25,
  navkriti26,
  navkriti27,
  navkriti28,
  navkriti29,
  navkriti210,
  navkriti211,
  navkriti212,
  navkriti213,
  navkriti214,
];
const navkriti3Images = [
  navkriti31,
  navkriti32,
  navkriti33,
  navkriti34,
  navkriti35,
  navkriti36,
  navkriti37,
  navkriti38,
  navkriti39,
  navkriti310,
  navkriti311,
  navkriti312,
  navkriti313,
];
import navkriti41 from "../assets/exhibitions/navkriti-4/1.jpg";
import navkriti42 from "../assets/exhibitions/navkriti-4/2.jpg";
import navkriti43 from "../assets/exhibitions/navkriti-4/3.jpg";
import navkriti44 from "../assets/exhibitions/navkriti-4/4.jpg";
import navkriti45 from "../assets/exhibitions/navkriti-4/5.jpg";
import navkriti46 from "../assets/exhibitions/navkriti-4/6.jpg";
import navkriti47 from "../assets/exhibitions/navkriti-4/7.jpg";
import navkriti48 from "../assets/exhibitions/navkriti-4/8.jpg";
import parwaz1 from "../assets/exhibitions/parwaz/1.jpeg";
import parwaz2 from "../assets/exhibitions/parwaz/2.jpeg";
import parwaz3 from "../assets/exhibitions/parwaz/3.jpeg";
import parwaz4 from "../assets/exhibitions/parwaz/4.jpeg";
import parwaz5 from "../assets/exhibitions/parwaz/5.jpeg";
import parwaz6 from "../assets/exhibitions/parwaz/6.jpeg";
import parwaz7 from "../assets/exhibitions/parwaz/7.jpeg";
import parwaz8 from "../assets/exhibitions/parwaz/8.jpeg";
import parwaz9 from "../assets/exhibitions/parwaz/9.jpeg";
import parwaz10 from "../assets/exhibitions/parwaz/10.jpeg";
import parwaz11 from "../assets/exhibitions/parwaz/11.jpeg";
import parwaz12 from "../assets/exhibitions/parwaz/12.jpeg";
import parwaz13 from "../assets/exhibitions/parwaz/13.jpeg";
import parwaz14 from "../assets/exhibitions/parwaz/14.jpeg";
import parwaz15 from "../assets/exhibitions/parwaz/15.jpeg";
import artLifestyle1 from "../assets/exhibitions/lifestyle/1.jpeg";
import artLifestyle2 from "../assets/exhibitions/lifestyle/2.jpeg";
import artLifestyle3 from "../assets/exhibitions/lifestyle/3.jpeg";
import artLifestyle4 from "../assets/exhibitions/lifestyle/4.jpeg";
import artLifestyle5 from "../assets/exhibitions/lifestyle/5.jpeg";
import artLifestyle6 from "../assets/exhibitions/lifestyle/6.jpeg";
import artLifestyle7 from "../assets/exhibitions/lifestyle/7.jpeg";
import artLifestyle8 from "../assets/exhibitions/lifestyle/8.jpeg";
const navkriti4Images = [
  navkriti41,
  navkriti42,
  navkriti43,
  navkriti44,
  navkriti45,
  navkriti46,
  navkriti47,
  navkriti48,
];
const parwazImages = [
  parwaz1,
  parwaz2,
  parwaz3,
  parwaz4,
  parwaz5,
  parwaz6,
  parwaz7,
  parwaz8,
  parwaz9,
  parwaz10,
  parwaz11,
  parwaz12,
  parwaz13,
  parwaz14,
  parwaz15,
];
const artLifestyleImages = [
  artLifestyle1,
  artLifestyle2,
  artLifestyle3,
  artLifestyle4,
  artLifestyle5,
  artLifestyle6,
  artLifestyle7,
  artLifestyle8,
];
export default function Gallery() {
  const [isFading, setIsFading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    exhibitions.map(() => 0)
  );
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
  
      setTimeout(() => {
        setCurrentIndexes((prev) =>
          exhibitions.map((exhibit, index) => {
            if (!exhibit.images) return 0;
  
            const current = prev[index] ?? 0;
  
            return (current + 1) % exhibit.images.length;
          })
        );
  
        setIsFading(false);
      }, 150);
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    [...artLifestyleImages, ...navkriti3Images].forEach((image) => {
      const preloadImage = new Image();
      preloadImage.src = image;
    });
  }, []);

  return (
    <>
<Hero activePage="gallery" />  
      <section
        style={{
          backgroundColor: "#fff",
          marginTop: "-60px"
        }}
      >
      <style>
        {`
          @media (max-width: 1024px) {
            .magsa-exhibition-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 640px) {
            .magsa-exhibition-grid {
              grid-template-columns: 1fr !important;
            }
          }
            .exhibit-image {
  animation: kenburns 3s ease forwards;
}

@keyframes kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.08);
  }
}
        `}
      </style>
      <div className="container">
{/* GALLERY INTRO */}
<div style={galleryIntro}>
  <h2 style={galleryTitle}>The Gallery</h2>

  <p style={galleryText}>
    A space where art is given room to breathe.
  </p>

  <p style={galleryText}>
    The MAGSA Gallery is a refined exhibition space in the heart of Jaipur —
    home to a permanent collection and a thoughtfully rotating programme of exhibitions
    celebrating the works of our faculty, students, and invited artists. Every work
    here has been selected with care. Every wall, a considered choice.
  </p>
</div>
        {/* FEATURED ARTWORKS */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>Featured Artworks</h3>

          <div style={artGrid}>
            {artworks.map((art, i) => (
              <div key={i} style={artCard} className="gallery-card">
               <img
  src={art.image}
  alt={art.title}
  className="gallery-img"
  style={{
    ...artImage,
    cursor: "zoom-in",  }}
  onClick={() => setSelectedImage(art.image)}
/>

                <div style={{ padding: "18px" }}>
                  <h4 style={artTitle}>{art.title}</h4>

                  <p style={artDesc}>
                    {art.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXHIBITIONS */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>Exhibitions</h3>

          <div style={exhibitionGrid} className="magsa-exhibition-grid">
            {exhibitions.map((exhibit, i) => {
              const currentImageIndex = currentIndexes[i] ?? 0;
              const currentImage = exhibit.images
                ? exhibit.images[currentImageIndex % exhibit.images.length]
                : exhibit.image;

              return (
                <div key={exhibit.name} style={exhibitCard} className="card">
                  <img
  className="exhibit-image"
  src={currentImage}
  alt={exhibit.name}
  style={{
    ...exhibitImage,
    opacity: isFading ? 0 : 1,
    objectPosition:
      exhibit.name === "Art & Lifestyle"
        ? "center center"
        : exhibitImage.objectPosition,
  }}
/>

                  <div style={{ padding: "18px" }}>
                    <h4 style={exhibitTitle}>{exhibit.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLIENT WORK */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>
            Commissioned Work & Client Reviews
          </h3>

          <div style={reviewSection}>
            <div style={reviewCard}>
              <p style={reviewText}>
                “The artwork transformed our space beautifully and added warmth
                to the entire environment.”
              </p>

              <p style={reviewClient}>
                — Jaipur Client
              </p>
            </div>

            <div style={reviewCard}>
              <p style={reviewText}>
                “MAGSA’s work feels deeply personal and artistically rich. The
                detailing was incredible.”
              </p>

              <p style={reviewClient}>
                — Exhibition Visitor
              </p>
            </div>
          </div>
        </div>

        {/* PARTICIPATION CTA */}
        <div style={ctaBox}>
          <div>
            <span style={ctaEyebrow}>For artists, collectors, and collaborators</span>
            <h3 style={ctaTitle}>
              Interested in exhibiting, commissioning, or collaborating with MAGSA?
            </h3>

            <p style={ctaText}>
              Share your work, enquiry, or exhibition idea with us. We welcome
              thoughtful conversations around artworks, curated spaces, and
              creative partnerships.
            </p>
          </div>

          <div style={ctaActions}>
            <a
              href="https://wa.me/919571230003"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button style={ctaButton}>Connect on WhatsApp</button>
            </a>

            <a href="tel:+919571230003" style={ctaPhone}>
              Call +91 9571230003
            </a>
          </div>
        </div>

      </div>
      {selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      padding: "20px",
      cursor: "pointer",
    }}
  >
    <img
      src={selectedImage}
      alt="Artwork"
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        objectFit: "contain",
        borderRadius: "12px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        cursor: "zoom-out",
      }}
    />

    <button
      onClick={() => setSelectedImage(null)}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "transparent",
        color: "#fff",
        border: "none",
        fontSize: "36px",
        cursor: "pointer",
      }}
    >
      ×
    </button>
  </div>
)}
      </section>
  </>
  );
}

/* ---------------- DATA ---------------- */

const artworks = [
  {
    title: "Painting Study 01",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps1,
  },
  {
    title: "Painting Study 02",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps2,
  },
  {
    title: "Painting Study 03",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps3,
  },
  {
    title: "Painting Study 04",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps4,
  },
  {
    title: "Painting Study 05",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps5,
  },
  {
    title: "Painting Study 06",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps6,
  },
  {
    title: "Painting Study 07",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps7,
  },
  {
    title: "Painting Study 08",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps8,
  },
  {
    title: "Painting Study 09",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps9,
  },
  {
    title: "Painting Study 10",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps10,
  },
  {
    title: "Painting Study 11",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps11,
  },
  {
    title: "Painting Study 12",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps12,
  },
  {
    title: "Painting Study 13",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps13,
  },
  {
    title: "Painting Study 14",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps14,
  },
  {
    title: "Painting Study 15",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps15,
  },
  {
    title: "Painting Study 16",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps16,
  },
  {
    title: "Painting Study 17",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps17,
  },
  {
    title: "Painting Study 18",
    description: "Original MAGSA painting study exploring color, form, and expression.",
    image: ps18,
  },
];

/* EXHIBITIONS */

type Exhibition = {
  name: string;
  images?: string[];
  image?: string;
};

const exhibitions: Exhibition[] = [
  {
    name: "Navkriti Art Exhibition- 1",
    images: navkriti1Images,
  },
  {
    name: "Navkriti Art Exhibition- 2",
    images: navkriti2Images,
  },
  {
    name: "Navkriti Art Exhibition- 3",
    images: navkriti3Images,
  },
  {
    name: "Navkriti Art Exhibition- 4",
    images: navkriti4Images,
  },
  {
    name: "Navkriti Art Exhibition- Junior",
    images: navkritiJrImages,
  },
  {
    name: "Parwaz Art Exhibition",
    images: parwazImages,
  },
  {
    name: "Art & Lifestyle Exhibition",
    images: artLifestyleImages,
  },
];


const sectionHeading = {
  color: "#7A3E5C",
  marginBottom: "25px",
  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
  fontWeight: 700,
  lineHeight: 1.12,
  letterSpacing: "0.02em",
};

const artGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "clamp(16px, 4vw, 25px)",
};

const artCard = {
  backgroundColor: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const artImage = {
  width: "100%",
  height: "clamp(230px, 38vw, 280px)",
  objectFit: "cover" as const,
};

const artTitle = {
  color: "#C77AA3",
  margin: "0 0 10px",
  fontSize: "clamp(1.12rem, 3vw, 1.28rem)",
  fontWeight: 600,
  lineHeight: 1.18,
};

const artDesc = {
  color: "#555",
  lineHeight: "1.72",
  fontSize: "clamp(0.94rem, 2.4vw, 1rem)",
  margin: 0,
};

const exhibitionGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "clamp(14px, 3vw, 20px)",
};

const exhibitCard = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
};

const exhibitImage = {
  width: "100%",
  height: "clamp(240px, 27vw, 300px)",
  objectFit: "cover" as const,
  objectPosition: "center top" as const,
  transition: "opacity 0.25s ease-in-out",
};

const exhibitTitle = {
  color: "#7A3E5C",
  fontSize: "clamp(1.05rem, 2.8vw, 1.18rem)",
  fontWeight: 600,
  lineHeight: 1.18,
  margin: 0,
};

const reviewSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "clamp(16px, 4vw, 25px)",
};

const reviewCard = {
  backgroundColor: "#fff",
  padding: "clamp(22px, 5vw, 28px)",
  borderRadius: "12px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
};

const reviewText = {
  color: "#555",
  lineHeight: "1.85",
  fontStyle: "italic",
  fontSize: "clamp(0.98rem, 2.4vw, 1.06rem)",
  margin: 0,
};

const reviewClient = {
  marginTop: "18px",
  color: "#C77AA3",
  fontWeight: 600,
  fontSize: "0.96rem",
  letterSpacing: "0.02em",
};

const ctaBox = {
  marginTop: "30px",
  padding: "clamp(26px, 6vw, 42px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "clamp(20px, 5vw, 34px)",
  flexWrap: "wrap" as const,
  backgroundColor: "#7A3E5C",
  borderRadius: "12px",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "0 18px 40px rgba(122, 62, 92, 0.16)",
};

const ctaEyebrow = {
  display: "inline-block",
  color: "#addfe2",
  fontSize: "clamp(0.76rem, 2vw, 0.82rem)",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  marginBottom: "10px",
};

const ctaTitle = {
  maxWidth: "680px",
  margin: 0,
  fontSize: "clamp(1.38rem, 4vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.16,
  letterSpacing: "0.01em",
};

const ctaText = {
  maxWidth: "720px",
  margin: "12px 0 0",
  color: "rgba(255,255,255,0.86)",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
  lineHeight: 1.72,
};

const ctaActions = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  gap: "10px",
};

const ctaButton = {
  padding: "12px 22px",
  backgroundColor: "#5CBCC3",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.28)",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "clamp(0.98rem, 2.3vw, 1.02rem)",
  letterSpacing: "0.01em",
  whiteSpace: "nowrap" as const,
};

const ctaPhone = {
  margin: 0,
  color: "rgba(255,255,255,0.78)",
  fontSize: "0.95rem",
  lineHeight: 1.4,
  textDecoration: "none",
};
const galleryIntro = {
  textAlign: "center" as const,
  maxWidth: "1000px",
  margin: "0 auto 40px",
};

const galleryTitle = {
  margin: "0 0 16px",
  color: "#7A3E5C",
  fontSize: "clamp(1.7rem, 4vw, 2.3rem)",
  fontWeight: 600,
  lineHeight: 1.1,
};


const galleryText = {
  margin: "0 0 10px",
  color: "#555",
  fontSize: "clamp(1rem, 2.2vw, 1.12rem)",
  lineHeight: 1.75,
};