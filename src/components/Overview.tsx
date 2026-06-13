import { Link } from "react-router-dom";
import event1 from "../assets/overview strip/event1.jpeg";
import event2 from "../assets/overview strip/event2.jpg";
import event3 from "../assets/overview strip/event3.jpeg";
import event4 from "../assets/overview strip/event4.jpg";
import event5 from "../assets/overview strip/event5.jpeg";
import event6 from "../assets/overview strip/event6.jpg";
import galleryPreview from "../assets/previews/gallery-preview.jpeg";
import studioPreview from "../assets/previews/studio-preview.jpeg";
import academyPreview from "../assets/previews/academy-preview.jpeg";
export default function Overview() {
  return (
    <section style={sectionStyle}>
      <style>
        {`
          @media (max-width: 1024px) {
            .magsa-event-strip {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 768px) {
            .magsa-overview-event {
              margin-top: 38px !important;
              padding: 26px 14px !important;
              border-radius: 10px !important;
            }

            .magsa-event-header {
              margin-bottom: 20px !important;
            }

            .magsa-event-title {
              font-size: clamp(1.45rem, 7vw, 1.9rem) !important;
            }

            .magsa-event-strip {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 12px !important;
            }

            .magsa-event-image {
              height: clamp(145px, 39vw, 205px) !important;
            }

            .magsa-home-about-title {
              font-size: clamp(1.55rem, 7.5vw, 2.1rem) !important;
            }

            .magsa-home-about-text {
              margin-top: 16px !important;
              font-size: clamp(0.98rem, 4vw, 1.06rem) !important;
              line-height: 1.72 !important;
            }

            .magsa-preview-image {
              height: clamp(185px, 52vw, 240px) !important;
            }
          }

          @media (max-width: 640px) {
            .magsa-event-strip {
              grid-template-columns: 1fr !important;
            }

            .magsa-event-image {
              height: clamp(185px, 56vw, 230px) !important;
            }
          }
        `}
      </style>
      <div className="container">        

        {/* PREVIEW CARDS SECTION - Visual emphasis */}
        <div style={previewSection}>
        <div style={homeAboutSection}>
  <h2 style={homeAboutHeading} className="magsa-home-about-title">A Universe of Creativity</h2>

  <p style={homeAboutText} className="magsa-home-about-text">
    <strong>Mandala Art Gallery • Studio • Academy (MAGSA)</strong> is a
    creative space where art is experienced, created, and studied. Established
    in Jaipur, MAGSA brings together exhibitions, workshops, curated artworks,
    and artistic learning experiences rooted in creativity and connection.
  </p>

  <div style={homeDivider} />

  <h3 style={whatWeDoHeading}>What We Do</h3>
</div>
          <div style={previewGrid}>
            {previews.map((preview) => (
              <article key={preview.title} style={previewCard} className="card">
                <div style={previewImageWrapper}>
                  <img src={preview.image} alt={preview.title} style={previewImage} className="magsa-preview-image" />
                </div>
                <div style={previewContent}>
                  <h2 style={{ ...previewTitle, color: preview.color }}>
                    {preview.title}
                  </h2>
                  <p style={{ ...previewText, color: preview.softText }}>
                    {preview.text}
                  </p>
                  <Link to={preview.path} style={{ textDecoration: "none" }}>
                    <button 
                      style={{ ...previewButton, backgroundColor: preview.color }}
                      aria-label={`${preview.button} - ${preview.title}`}
                    >
                      {preview.button}
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* EVENT SECTION - Gallery showcase */}
        <div style={eventSection} className="magsa-overview-event">
          <div style={eventHeader} className="magsa-event-header">
            <div style={eventCopy}>
              <span style={eventEyebrow}>Exhibitions • Workshops • Art Events</span>
              <h2 style={eventTitle} className="magsa-event-title">A living space for art in Jaipur</h2>
            </div>
          </div>

          <div style={eventStrip} className="magsa-event-strip">
  {eventImages.map((image, index) => (
    <figure key={image} style={eventImageFigure}>
      <img
        src={image}
        alt={`MAGSA event preview ${index + 1}`}
        style={{
          ...eventImage,
          objectPosition:
            index === 5
              ? "center top"
            : "center",
        }}
        className="magsa-event-image"
      />
    </figure>
  ))}

          </div>
        </div>
      </div>
    </section>
  );
}

/* DATA */

const previews = [
  {
    title: "Gallery",
    text: "Original artworks and exhibitions curated for thoughtful spaces.",
    button: "View Gallery",
    path: "/gallery",
    image: galleryPreview,
    color: "#7A3E5C",
    softText: "#6b4a58",
  },
  {
    title: "Studio",
    text: "Hands-on workshops, art events, and creative collaborations.",
    button: "Explore Studio",
    path: "/studio",
    image: studioPreview,
    color: "#5CBCC3",
    softText: "#4d8f95",
  },
  {
    title: "Academy",
    text: "Guided learning pathways for beginners and advanced learners.",
    button: "See Academy",
    path: "/academy",
    image: academyPreview,
    color: "#C77AA3",
    softText: "#9a617d",
  },
];

const eventImages = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
];

/* STYLES */

const sectionStyle = {
  backgroundColor: "#fefefe",
  paddingTop: "clamp(32px, 5vw, 52px)",
  paddingBottom: "clamp(48px, 8vw, 80px)",
};



// PREVIEW SECTION - Generous breathing room
const previewSection = {
  marginTop: "clamp(8px, 2vw, 16px)",
  paddingTop: "clamp(8px, 2vw, 18px)",
  paddingBottom: "clamp(28px, 5vw, 42px)",
};

const previewGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
  gap: "clamp(20px, 4.5vw, 32px)",
};

const previewCard = {
  overflow: "hidden",
  borderRadius: "12px",
  backgroundColor: "#fff",
  border: "1px solid rgba(122, 62, 92, 0.06)",
  boxShadow: "0 4px 12px rgba(122, 62, 92, 0.05)",
  transition: "all 0.3s ease",
};

const previewImageWrapper = {
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
};

const previewImage = {
  width: "100%",
  height: "clamp(220px, 32vw, 300px)",
  objectFit: "cover" as const,
  transition: "transform 0.4s ease",
};

const previewContent = {
  padding: "clamp(20px, 4.5vw, 28px)",
};

const previewTitle = {
  margin: 0,
  color: "#5CBCC3",
  fontSize: "clamp(1.55rem, 4.2vw, 1.95rem)",
  fontWeight: 600,
  letterSpacing: "0.015em",
  lineHeight: 1.12,
};

const previewText = {
  minHeight: "3.4em",
  margin: "14px 0 22px",
  color: "#555",
  fontSize: "clamp(0.98rem, 2vw, 1.05rem)",
  lineHeight: 1.65,
};

const previewButton = {
  padding: "10px 18px",
  backgroundColor: "#7A3E5C",
  color: "#fff",
  border: "none",
  borderRadius: "999px",
  cursor: "pointer",
  fontWeight: 500,
  letterSpacing: "0.02em",
  fontSize: "0.95rem",
  transition: "all 0.2s ease",
};

// EVENT SECTION - Full-width gallery feel
const eventSection = {
  marginTop: "clamp(48px, 8vw, 76px)",
  paddingTop: "clamp(32px, 6vw, 52px)",
  paddingBottom: "clamp(32px, 6vw, 52px)",
  backgroundColor: "#fafbfc",
  borderRadius: "14px",
  boxShadow: "inset 0 1px 2px rgba(92, 188, 195, 0.04)",
};

const eventHeader = {
  marginBottom: "clamp(28px, 5vw, 42px)",
};

const eventCopy = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
};

const eventEyebrow = {
  color: "#C77AA3",
  fontSize: "clamp(0.8rem, 1.6vw, 0.92rem)",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const eventTitle = {
  margin: 0,
  color: "#7A3E5C",
  fontSize: "clamp(1.85rem, 5.5vw, 2.55rem)",
  fontWeight: 600,
  letterSpacing: "0.01em",
  lineHeight: 1.1,
};

const eventStrip = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "clamp(12px, 2.5vw, 18px)",
};

const eventImageFigure = {
  margin: 0,
  overflow: "hidden",
  borderRadius: "10px",
};

const eventImage = {
  width: "100%",
  height: "clamp(240px, 22vw, 310px)",
  objectFit: "cover" as const,
  display: "block",
  border: "1px solid rgba(122, 62, 92, 0.05)",
  transition: "transform 0.4s ease",
};
const homeAboutSection = {
  width: "100%",
  margin: "0 auto clamp(28px, 5vw, 42px)",
};

const homeAboutHeading = {
  margin: 0,
  color: "#7A3E5C",
  fontSize: "clamp(2rem, 5vw, 2.7rem)",
  fontWeight: 600,
  lineHeight: 1.08,
  letterSpacing: "0.01em",
};

const homeAboutText = {
  margin: "22px 0 0",
  color: "#C77AA3",
  fontSize: "clamp(1.08rem, 2.3vw, 1.18rem)",
  lineHeight: 1.9,
  maxWidth: "920px",
};

const homeDivider = {
  margin: "34px 0 26px",
  height: "1px",
  backgroundColor: "rgba(122, 62, 92, 0.1)",
};

const whatWeDoHeading = {
  margin: 0,
  color: "#5CBCC3",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontWeight: 600,
  letterSpacing: "0.01em",
};
