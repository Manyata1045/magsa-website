import founderImage from "../assets/founder/vasudha-sharma-founder.jpg";

const journeyItems = [
  {
    year: "2017 - Present",
    title: "Founder, MAGSA",
    text: "Leads Mandala Art Gallery • Studio • Academy as a space for exhibitions, workshops, commissioned artworks, and structured art learning.",
  },
  {
    year: "3 Years",
    title: "Visiting Faculty, JECRC School of Design",
    text: "Guides students through drawing, painting, creative practice, and design-oriented expression as visiting faculty.",
  },
  {
    year: "Exhibitions",
    title: "Parwaz & Navkriti",
    text: "Presented Parwaz, her first solo exhibition at Jawahar Kala Kendra, and continues to lead MAGSA's Navkriti annual exhibition series.",
  },
  {
    year: "Institutions",
    title: "Teaching, Workshops & Judging",
    text: "Has conducted workshops and judged art events at Maharani Girls College, Kanoria P.G. Girls College, St. Xavier's College, SMS, MGD, and Maheshwari Girls Public School.",
  },
];

const heroHighlights = [
  "Founder since 2017",
  "Fine art educator",
  "Exhibitions & workshops",
];

const educationItems = [
  "B.A. with Drawing & Painting, English Literature, and Sociology from Kanoria P.G. Girls College, Jaipur.",
  "M.A. in Drawing & Painting from Kanoria P.G. Girls College, Jaipur.",
  "Post Graduate Diploma in Counselling and Guidance from ICTRC.",
  "Pursuing PhD.(Doctor of Philosophy) at JECRC University, School of Design.",
];

const workshopItems = [
  "Navkriti annual exhibition series",
  "Decoupage workshop",
  "Fabric art workshop",
  "Fluid art workshop",
  "Block printing workshop",
  "Tie and dye workshop",
  "Alcohol ink activity with The Social Lit",
  "Craft & Lifestyle Exhibition 2023",
  "3D paper cut illustration",
  "Lippan art workshop",
];

export default function Founder() {
  return (
    <section style={pageStyle}>
      <style>
        {`
          .founder-card {
            transition: transform 0.28s ease, box-shadow 0.28s ease;
          }

          .founder-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 42px rgba(122, 62, 92, 0.1);
          }

          @media (max-width: 820px) {
            .founder-hero {
              grid-template-columns: 1fr !important;
              text-align: center;
            }

            .founder-split {
              grid-template-columns: 1fr !important;
            }

            .founder-portrait-wrap {
              order: -1;
              margin: 0 auto;
            }

            .founder-highlight-row {
              justify-content: center !important;
            }

            .founder-contact-panel {
              align-items: flex-start !important;
            }
          }

          @media (max-width: 520px) {
            .founder-card:hover {
              transform: none;
            }

            .founder-highlight-row {
              gap: 8px !important;
            }
          }
        `}
      </style>

      <div className="container">
        <div style={heroGrid} className="founder-hero">
          <div style={heroCopy}>
            <span style={eyebrow}>Founder</span>
            <h1 style={heroTitle}>Chairman & Director — Vasudha Sharma</h1>
            <p style={heroSubtitle}>Artist • Educator • Curator</p>
            <p style={heroText}>
              Vasudha Sharma is an artist and educationist from Jaipur whose
              practice brings together teaching, exhibitions, workshops, and
              community-led creative learning through MAGSA.
            </p>

            <div style={heroHighlightRow} className="founder-highlight-row">
              {heroHighlights.map((item) => (
                <span key={item} style={heroHighlight}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={portraitWrap} className="founder-portrait-wrap">
            <div style={portraitFrame}>
              <img
                src={founderImage}
                alt="Vasudha Sharma leading a MAGSA creative workshop"
                style={portraitImage}
              />
            </div>
            <p style={portraitCaption}>Artist & Educationist</p>
          </div>
        </div>

        <div style={aboutSection}>
          <h2 style={sectionTitle}>About Vasudha Sharma</h2>
          <p style={bodyText}>
            Vasudha Sharma's journey is rooted in drawing, painting, and art
            education. She studied at Step by Step International School
            (Jaishree Periwal International School), completed her B.A. with
            Drawing & Painting, English Literature, and Sociology, and went on
            to pursue her M.A. in Drawing & Painting at Kanoria P.G. Girls
            College, Jaipur.
          </p>
          <p style={bodyText}>
            Alongside her studio practice, she continues to expand her academic
            and mentoring work through counselling, guidance, and doctoral
            research at JECRC University, School of Design. Her practice moves
            between fine art, education, exhibitions, workshops, and thoughtful
            spaces where people can experience art with confidence, patience,
            and curiosity.
          </p>
        </div>

        <div style={splitSection} className="founder-split">
          <div>
            <h2 style={sectionTitle}>Experience & Journey</h2>
            <div style={timeline}>
              {journeyItems.map((item) => (
                <article key={item.title} style={timelineCard} className="founder-card">
                  <span style={timelineYear}>{item.year}</span>
                  <h3 style={cardTitle}>{item.title}</h3>
                  <p style={cardText}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside style={educationPanel}>
            <h2 style={educationTitle}>Education</h2>
            <div style={educationList}>
              {educationItems.map((item) => (
                <p key={item} style={educationItem}>
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>

        <div style={workshopsSection}>
          <div style={sectionHeader}>
            <span style={eyebrow}>Workshops & Exhibitions</span>
            <h2 style={sectionTitle}>Creative experiences led through MAGSA</h2>
          </div>

          <div style={workshopGrid}>
            {workshopItems.map((item) => (
              <article key={item} style={workshopCard} className="founder-card">
                {item}
              </article>
            ))}
          </div>
        </div>

        <div style={philosophySection}>
  <span style={eyebrow}>Founder Note</span>

  <h2 style={philosophyTitle}>
    By Vasudha Sharma
  </h2>

  <p style={philosophyText}>
    MAGSA was built from a feeling that art deserves a home where it is
    taken seriously and experienced fully.
  </p>

  <p style={philosophyText}>
    Nine years on, watching this community grow into what it has become,
    that feeling has only deepened.
  </p>

  <p style={philosophyText}>
    We are just getting started.
  </p>

  <p
    style={{
      marginTop: "28px",
      color: "#7A3E5C",
      fontWeight: 600,
      fontSize: "1rem",
      letterSpacing: "0.03em",
    }}
  >
    — Vasudha Sharma
    <br />
    Founder & Director, MAGSA
  </p>
</div>

        <div style={contactPanel} className="founder-contact-panel">
          <div>
            <span style={eyebrow}>Connect</span>
            <h2 style={contactTitle}>For workshops, exhibitions, learning, and collaborations.</h2>
          </div>

          <div style={contactLinks}>
            <a href="mailto:magsabyvasudhasharma@gmail.com" style={contactLink}>
            magsabyvasudhasharma@gmail.com
            </a>
            <a href="tel:+919571230003" style={contactLink}>
              +91 9571230003
            </a>
            <a
              href="https://instagram.com/mandala_art_gallery_studio_acd"
              target="_blank"
              rel="noopener noreferrer"
              style={contactLink}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const pageStyle = {
  backgroundColor: "#fbfbfb",
  paddingTop: "clamp(26px, 5vw, 50px)",
  paddingBottom: "clamp(48px, 8vw, 86px)",
};

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, 0.95fr)",
  gap: "clamp(24px, 4.5vw, 54px)",
  alignItems: "center",
};

const heroCopy = {
  maxWidth: "760px",
};

const eyebrow = {
  color: "#C77AA3",
  fontSize: "clamp(0.78rem, 1.8vw, 0.9rem)",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const heroTitle = {
  margin: "10px 0 0",
  color: "#7A3E5C",
  fontSize: "clamp(2.05rem, 6.4vw, 3.85rem)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "0.01em",
};

const heroSubtitle = {
  margin: "10px 0 0",
  color: "#5CBCC3",
  fontSize: "clamp(1.08rem, 3vw, 1.35rem)",
  fontWeight: 500,
  lineHeight: 1.4,
};

const heroText = {
  margin: "14px 0 0",
  color: "#555",
  fontSize: "clamp(1rem, 2.4vw, 1.12rem)",
  lineHeight: 1.78,
};

const heroHighlightRow = {
  marginTop: "clamp(18px, 3vw, 24px)",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap" as const,
};

const heroHighlight = {
  padding: "9px 13px",
  color: "#7A3E5C",
  backgroundColor: "#fff",
  border: "1px solid rgba(122, 62, 92, 0.12)",
  borderRadius: "999px",
  boxShadow: "0 8px 22px rgba(122, 62, 92, 0.05)",
  fontSize: "clamp(0.78rem, 2vw, 0.9rem)",
  fontWeight: 600,
  lineHeight: 1.2,
};

const portraitWrap = {
  textAlign: "center" as const,
  width: "100%",
};

const portraitFrame = {
  width: "min(100%, 520px)",
  aspectRatio: "4 / 3",
  margin: "0 auto",
  overflow: "hidden",
  borderRadius: "10px",
  backgroundColor: "#fff",
  border: "10px solid #fff",
  outline: "1px solid rgba(122, 62, 92, 0.18)",
  boxShadow: "0 22px 48px rgba(122, 62, 92, 0.14)",
};

const portraitImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  objectPosition: "center center",
};

const portraitCaption = {
  margin: "12px 0 0",
  color: "#7A3E5C",
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

const aboutSection = {
  marginTop: "clamp(34px, 6vw, 58px)",
  padding: "clamp(26px, 5vw, 42px)",
  backgroundColor: "#fff",
  border: "1px solid rgba(122, 62, 92, 0.1)",
  borderRadius: "10px",
  boxShadow: "0 16px 38px rgba(122, 62, 92, 0.06)",
};

const sectionTitle = {
  margin: 0,
  color: "#7A3E5C",
  fontSize: "clamp(1.6rem, 4.8vw, 2.45rem)",
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: "0.01em",
};

const bodyText = {
  maxWidth: "900px",
  margin: "16px 0 0",
  color: "#555",
  fontSize: "clamp(0.98rem, 2.4vw, 1.06rem)",
  lineHeight: 1.82,
};

const splitSection = {
  marginTop: "clamp(40px, 7vw, 70px)",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.25fr) minmax(min(100%, 300px), 0.75fr)",
  gap: "clamp(22px, 4vw, 34px)",
};

const timeline = {
  marginTop: "22px",
  display: "grid",
  gap: "16px",
};

const timelineCard = {
  padding: "clamp(20px, 4vw, 26px)",
  backgroundColor: "#fff",
  border: "1px solid rgba(122, 62, 92, 0.1)",
  borderLeft: "4px solid #5CBCC3",
  borderRadius: "8px",
  boxShadow: "0 12px 28px rgba(122, 62, 92, 0.06)",
};

const timelineYear = {
  color: "#C77AA3",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const cardTitle = {
  margin: "9px 0 0",
  color: "#7A3E5C",
  fontSize: "clamp(1.12rem, 3vw, 1.3rem)",
  fontWeight: 600,
  lineHeight: 1.18,
};

const cardText = {
  margin: "10px 0 0",
  color: "#555",
  fontSize: "0.98rem",
  lineHeight: 1.72,
};

const educationPanel = {
  padding: "clamp(22px, 4vw, 30px)",
  alignSelf: "start",
  backgroundColor: "#7A3E5C",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "0 16px 34px rgba(122, 62, 92, 0.14)",
};

const educationTitle = {
  margin: 0,
  fontSize: "clamp(1.35rem, 4vw, 1.8rem)",
  fontWeight: 600,
};

const educationList = {
  marginTop: "18px",
  display: "grid",
  gap: "14px",
};

const educationItem = {
  margin: 0,
  color: "rgba(255,255,255,0.9)",
  lineHeight: 1.68,
  fontSize: "0.96rem",
};

const workshopsSection = {
  marginTop: "clamp(42px, 7vw, 72px)",
};

const sectionHeader = {
  marginBottom: "22px",
};

const workshopGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "clamp(14px, 3vw, 20px)",
};

const workshopCard = {
  padding: "clamp(18px, 4vw, 24px)",
  color: "#7A3E5C",
  backgroundColor: "#fff",
  borderTop: "3px solid #C77AA3",
  borderRadius: "8px",
  boxShadow: "0 10px 26px rgba(122, 62, 92, 0.06)",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
  fontWeight: 600,
  lineHeight: 1.45,
};

const philosophySection = {
  marginTop: "clamp(42px, 7vw, 72px)",
  padding: "clamp(28px, 5vw, 44px)",
  backgroundColor: "#fff",
  border: "1px solid rgba(92, 188, 195, 0.18)",
  borderRadius: "10px",
};

const philosophyTitle = {
  maxWidth: "760px",
  margin: "12px 0 0",
  color: "#5CBCC3",
  fontSize: "clamp(1.65rem, 4.8vw, 2.6rem)",
  fontWeight: 600,
  lineHeight: 1.1,
};

const philosophyText = {
  maxWidth: "920px",
  margin: "16px 0 0",
  color: "#555",
  fontSize: "clamp(1rem, 2.4vw, 1.08rem)",
  lineHeight: 1.82,
};



const contactPanel = {
  marginTop: "clamp(40px, 7vw, 70px)",
  padding: "clamp(24px, 5vw, 36px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",
  flexWrap: "wrap" as const,
  backgroundColor: "#C77AA3",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "0 18px 40px rgba(122, 62, 92, 0.14)",
};

const contactTitle = {
  maxWidth: "640px",
  margin: "10px 0 0",
  fontSize: "clamp(1.28rem, 4vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.16,
};

const contactLinks = {
  display: "grid",
  gap: "9px",
};

const contactLink = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  lineHeight: 1.4,
};
