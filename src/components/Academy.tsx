import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import academy1 from "../assets/academy-img/1.jpeg";
import academy2 from "../assets/academy-img/2.jpeg";
import academy3 from "../assets/academy-img/3.jpeg";
import academy4 from "../assets/academy-img/4.jpeg";
import academy5 from "../assets/academy-img/5.jpeg";
import academy6 from "../assets/academy-img/6.jpeg";
import academy7 from "../assets/academy-img/7.jpeg";
import academy8 from "../assets/academy-img/8.jpeg";
import academy9 from "../assets/academy-img/9.jpeg";
import academy10 from "../assets/academy-img/10.jpeg";
import academy11 from "../assets/academy-img/11.jpeg";
import academy12 from "../assets/academy-img/12.jpeg";
import academy13 from "../assets/academy-img/13.jpeg";
import academy14 from "../assets/academy-img/14.jpeg";
import academy15 from "../assets/academy-img/15.jpeg";
import academy16 from "../assets/academy-img/16.jpeg";

export default function Academy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
<Hero activePage="academy" />
    <section style={{ backgroundColor: "#f9f9f9" }}>
      <style>
        {`
          .academy-lightbox {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 22px;
            background: rgba(0, 0, 0, 0.85);
            animation: academyFadeIn 0.22s ease both;
          }

          .academy-lightbox-image {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
            object-fit: contain;
            box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
            animation: academyScaleIn 0.24s ease both;
          }

          .academy-lightbox-close {
            position: absolute;
            top: 20px;
            right: 30px;
            width: 48px;
            height: 48px;
            min-height: 48px;
            display: grid;
            place-items: center;
            padding: 0 !important;
            color: #fff;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.22);
            border-radius: 50%;
            font-size: 2.2rem;
            line-height: 1;
            cursor: pointer;
          }

          @keyframes academyFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes academyScaleIn {
            from {
              opacity: 0;
              transform: scale(0.96);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (max-width: 1024px) {
            .magsa-academy-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }

            .magsa-academy-img {
              height: clamp(245px, 36vw, 300px) !important;
            }
          }

          @media (max-width: 640px) {
            .magsa-academy-grid {
              grid-template-columns: 1fr !important;
            }

            .magsa-academy-img {
              height: clamp(235px, 62vw, 290px) !important;
            }

            .academy-lightbox-close {
              top: 14px;
              right: 14px;
              width: 44px;
              height: 44px;
              min-height: 44px;
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div className="container">

        {/* ---------------- HERO / PHOTOS ---------------- */}
        <div style={{ textAlign: "center", marginBottom: "clamp(44px, 8vw, 70px)" }}>
          {/* <h2 style={titleStyle}>Academy</h2>

          <p style={subtitle}>
            Structured art learning, creative exploration, and artistic growth
            for all age groups.
          </p> */}

          <div style={galleryIntro}>
            <h3 style={galleryTitle}>Inside MAGSA </h3>
          </div>

          <div style={heroGrid} className="magsa-academy-grid">
          {topImages.map((img, i) => (
              <div key={i} className="gallery-card" style={heroCard}>
                <img
                  src={img}
                  alt={`MAGSA Academy class moment ${i + 1}`}
                  className="gallery-img magsa-academy-img"
                  style={heroImage}
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- ABOUT STRIP ---------------- */}
        <div style={aboutBox}>
  <h3 style={aboutHeading}>
    The Academy
  </h3>

  <p style={aboutTagline}>
    Learn Art With Depth & Creativity
  </p>

  <p style={aboutText}>
    MAGSA Academy offers structured learning programmes designed for beginners,
    advancing students, and serious practitioners alike. Every programme is
    built around four foundational pillars:
    <strong> OBSERVE, CREATE, CURATE & SELL.</strong>
  </p>

  <p style={aboutText}>
    From different art styles, forms and techniques to immersive creative
    explorations, the Academy nurtures each student in a supportive,
    professionally guided, and genuinely inspiring environment.
  </p>

  <p style={aboutText}>
    We also prepare students for what comes next, offering focused guidance
    for creative entrance examinations, certification programmes, exhibition
    participation, and portfolio development.
  </p>

  <p style={aboutText}>
    For our youngest learners, the Academy runs a dedicated Education Through
    Art programme using artistic practice as a tool for cognitive, analytical,
    and creative development in children up to 12 years of age.
  </p>

  <p style={aboutText}>
    Whether you are here to discover, to grow, or to master, the MAGSA Academy
    meets you where you are and takes you further.
  </p>
</div>

        {/* ---------------- FEE STRUCTURE ---------------- */}
{/* ---------------- FEE STRUCTURE ---------------- */}
<div style={{ marginTop: "clamp(54px, 9vw, 90px)" }}>

  <h2 style={feeHeading}>
    Basic Fee Structure
  </h2>
          {/* AGE 10+ */}
          <h3 style={sectionHeading}>10 Years & Above</h3>

          <div style={grid}>
            {adultCourses.map((course, i) => (
              <div key={i} style={card} className="card">
                <h4 style={cardTitle}>{course.duration}</h4>

                <p style={price}>₹{course.price}</p>

                {course.discount && (
                  <p style={discount}>{course.discount}</p>
                )}
              </div>
            ))}
          </div>

          {/* AGE BELOW 9 */}
          <h3 style={sectionHeading}>Below 10 years</h3>

          <div style={grid}>
            {kidsCourses.map((course, i) => (
              <div key={i} style={card} className="card">
                <h4 style={cardTitle}>{course.duration}</h4>

                <p style={price}>₹{course.price}</p>

                {course.discount && (
                  <p style={discount}>{course.discount}</p>
                )}
              </div>
            ))}
          </div>

          {/* IMPORTANT INFO */}
          <div style={noteBox}>
            <h4 style={noteTitle}>
              Important Information
            </h4>

            <ul style={noteList}>
              <li>1 hour per class</li>
              <li>Registration fee: ₹100</li>
              <li>Classes must be completed within duration</li>
              <li>Sunday- OFF</li>
    
            </ul>
          </div>
        </div>

        {/* ---------------- SPECIAL PROGRAMS ---------------- */}
        <div style={{ marginTop: "clamp(54px, 9vw, 90px)" }}>
          <h3 style={sectionHeading}>
            Special Programs
          </h3>

          <div style={programGrid}>
            {programs.map((program, i) => (
              <div key={i} style={programCard} className="card">
                <h4 style={programTitle}>{program.title}</h4>

                {program.description && (
                  <p style={programText}>
                    {program.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "clamp(60px, 8vw, 90px)" }}>
  <h3 style={sectionHeading}>
    More Moments From MAGSA Academy
  </h3>

  <div style={heroGrid} className="magsa-academy-grid">
    {bottomImages.map((img, i) => (
      <div key={i} className="gallery-card" style={heroCard}>
        <img
          src={img}
          alt={`MAGSA Academy ${i + 9}`}
          className="gallery-img magsa-academy-img"
          style={heroImage}
          onClick={() => setSelectedImage(img)}
        />
      </div>
    ))}
  </div>
</div>
      </div>

      {selectedImage && (
        <div
          className="academy-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged academy image"
        >
          <button
            className="academy-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close enlarged image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="MAGSA Academy enlarged view"
            className="academy-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
    </>
  );
}

/* ---------------- DATA ---------------- */

const topImages = [
  academy1,
  academy2,
  academy3,
  academy4,
  academy5,
  academy6,
  academy7,
  academy8,
];

const bottomImages = [
  academy9,
  academy10,
  academy11,
  academy12,
  academy13,
  academy14,
  academy15,
  academy16,
];

const adultCourses = [
  { duration: "8 Days", price: "1500" },
  { duration: "12 Days", price: "1800" },
  { duration: "20 Days", price: "2600" },
  { duration: "1 Month", price: "3000" },
  { duration: "3 Months", price: "8000", discount: "Save ₹1000" },
  { duration: "6 Months", price: "14000", discount: "Save ₹4000" },
  { duration: "1 Year", price: "26000", discount: "Save ₹10000" },
];

const kidsCourses = [
  { duration: "8 Days", price: "1200" },
  { duration: "12 Days", price: "1500" },
  { duration: "20 Days", price: "2200" },
  { duration: "1 Month", price: "2600" },
  { duration: "3 Months", price: "7000", discount: "Save ₹800" },
  { duration: "6 Months", price: "12600", discount: "Save ₹3000" },
  { duration: "1 Year", price: "24000", discount: "Save ₹7200" },
];

const programs = [
  {
    title: "Summer Camp",
    description:
      "Creative seasonal workshops designed for exploration, expression, and artistic fun.",
  },
  {
    title: "Winter Camp",
    description:
      "Interactive winter art sessions with guided projects and collaborative learning.",
  },
  {
    title: "Internships",
    description:
      "Hands-on creative opportunities to gain artistic experience and practical exposure.",
  },
  {
    title: "Certifications",
    description:
      "Structured learning programs with certificates recognizing artistic achievement.",
  },
  {
    title: "Diploma",
    description: "Diploma courses coming soon"
  },
];

/* ---------------- STYLES ---------------- */

// const titleStyle = {
//   color: "#C77AA3",
//   fontSize: "clamp(2rem, 6vw, 2.7rem)",
//   fontWeight: 600,
//   lineHeight: 1.08,
//   letterSpacing: "0.02em",
// };

// const subtitle = {
//   color: "#666",
//   marginTop: "12px",
//   fontSize: "clamp(1rem, 2.8vw, 1.1rem)",
//   lineHeight: 1.65,
// };

const galleryIntro = {
  marginBottom: "24px",
  textAlign: "left" as const,
};

const galleryTitle = {
  margin: 0,
  color: "#7A3E5C",
  fontSize: "clamp(1.45rem, 4.8vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.12,
  letterSpacing: "0.01em",
};

const heroGrid = {
  marginTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "clamp(14px, 2.4vw, 20px)",
};

const heroCard = {
  borderRadius: "14px",
  overflow: "hidden",
  aspectRatio: "4 / 3",
};

const heroImage = {
  width: "100%",
  height: "clamp(260px, 20vw, 305px)",
  objectFit: "cover" as const,
  borderRadius: "14px",
  cursor: "zoom-in",
};

const aboutBox = {
  backgroundColor: "#fff",
  padding: "clamp(26px, 6vw, 45px)",
  borderRadius: "14px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
};

const aboutHeading = {
  color: "#C77AA3",
  marginBottom: "20px",
  fontSize: "clamp(1.45rem, 5vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.15,
  letterSpacing: "0.01em",
};

const aboutText = {
  color: "#555",
  lineHeight: "1.88",
  marginBottom: "18px",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
};

const sectionHeading = {
  marginTop: "50px",
  marginBottom: "20px",
  color: "#7A3E5C",
  fontSize: "clamp(1.38rem, 4.8vw, 1.7rem)",
  fontWeight: 600,
  lineHeight: 1.12,
  letterSpacing: "0.02em",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "clamp(16px, 4vw, 22px)",
};

const card = {
  padding: "clamp(20px, 5vw, 22px)",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e6e6e6",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
};

const cardTitle = {
  fontSize: "clamp(1.05rem, 2.8vw, 1.18rem)",
  color: "#b96590",
  fontWeight: 600,
  margin: "0 0 6px",
  lineHeight: 1.18,
};

const price = {
  margin: "10px 0 0",
  fontWeight: "700",
  color: "#5CBCC3",
  fontSize: "clamp(1.12rem, 3vw, 1.28rem)",
  lineHeight: 1.15,
};

const discount = {
  margin: "7px 0 0",
  fontSize: "0.92rem",
  color: "#7A3E5C",
  fontWeight: 600,
  lineHeight: 1.35,
};

const noteBox = {
  marginTop: "50px",
  padding: "clamp(24px, 5vw, 34px)",
  backgroundColor: "#C77AA3",
  border: "1px solid rgba(255,255,255,0.24)",
  borderRadius: "10px",
  boxShadow: "0 16px 34px rgba(122, 62, 92, 0.14)",
};

const noteTitle = {
  margin: "0 0 16px",
  color: "#fff",
  fontSize: "clamp(1.25rem, 4vw, 1.65rem)",
  fontWeight: 600,
  lineHeight: 1.15,
  letterSpacing: "0.02em",
};

const noteList = {
  margin: 0,
  paddingLeft: "20px",
  color: "rgba(255,255,255,0.9)",
  fontSize: "clamp(0.98rem, 2.6vw, 1.08rem)",
  lineHeight: "1.85",
  fontWeight: 500,
};

const programGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
  gap: "clamp(16px, 4vw, 22px)",
};

const programCard = {
  padding: "clamp(22px, 5vw, 28px)",
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #eee",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
};

const programTitle = {
  color: "#C77AA3",
  fontSize: "clamp(1.12rem, 3vw, 1.28rem)",
  fontWeight: 600,
  margin: "0 0 12px",
  lineHeight: 1.18,
};

const programText = {
  color: "#555",
  lineHeight: "1.72",
  fontSize: "clamp(0.95rem, 2.4vw, 1rem)",
  margin: 0,
};
const feeHeading = {
  textAlign: "center" as const,
  color: "#5CBCC3",
  fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
  fontWeight: 700,
  marginBottom: "40px",
  letterSpacing: "0.02em",
};
const aboutTagline = {
  color: "#7A3E5C",
  fontSize: "clamp(1.05rem, 2.8vw, 1.2rem)",
  fontWeight: 600,
  margin: "0 0 18px",
  lineHeight: 1.4,
};