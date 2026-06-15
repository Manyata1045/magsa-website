import { Link } from "react-router-dom";
export default function About() {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "clamp(38px, 7vw, 60px) clamp(16px, 4vw, 20px)" }}>      
      
      <div className="container">
        
        <div
          style={{
            backgroundColor: "#fff",
            padding: "clamp(28px, 5vw, 50px) clamp(20px, 4vw, 40px)",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#5CBCC3",
              fontSize: "clamp(1.95rem, 6vw, 2.55rem)",
              fontWeight: 600,
              marginBottom: "30px",
              textAlign: "center",
              lineHeight: 1.08,
              letterSpacing: "0.02em",
            }}
          >
            About MAGSA
          </h2>

          <h3 style={subHeading}>A Universe of Creativity</h3>

          <p style={textStyle}>
            <strong>Mandala Art Gallery • Studio • Academy (MAGSA)</strong> is a
            creative space where art is experienced, created, and studied.
            Established in 2017 in Jaipur, MAGSA has grown into a respected
            destination for artists, learners, collectors, and art enthusiasts.
          </p>

          <p style={textStyle}>
            Founded by <strong>Vasudha Sharma</strong>, the institution was
            envisioned as more than an art space. It is a place where
            creativity finds expression, purpose, and connection.
          </p>

          <div style={divider} />

          {/* WHAT WE DO */}
          <h3 style={sectionHeading}>Three Pillars of MAGSA</h3>

          <div style={cardRow}>

  {/* GALLERY */}
  <div
  style={{
    ...miniCard,
    borderTop: "4px solid #7A3E5C",
  }}
  className="card"
>    <h4 style={{ ...miniTitle, color: "#7A3E5C" }}>
  Gallery
</h4>

<p style={{ ...miniText, color: "#6b4a58" }}>
      Original artworks, exhibitions, and commissioned pieces
      created for thoughtful, meaningful spaces.
    </p>

    <Link
  to="/gallery"
  style={{ ...linkStyle, color: "#7A3E5C" }}
>
      Know More →
    </Link>
  </div>

  {/* STUDIO */}
  <div
  style={{
    ...miniCard,
    borderTop: "4px solid #5CBCC3",
  }}
  className="card"
>    <h4 style={{ ...miniTitle, color: "#5CBCC3" }}>
  Studio
</h4>

<p style={{ ...miniText, color: "#4d8f95" }}>
      Workshops, collaborations, cafe events, and immersive
      art experiences shaped around creativity and community.
    </p>

    <Link
  to="/studio"
  style={{ ...linkStyle, color: "#5CBCC3" }}
>      Know More →
    </Link>
  </div>

  {/* ACADEMY */}
  <div
  style={{
    ...miniCard,
    borderTop: "4px solid #C77AA3",
  }}
  className="card"
>    <h4 style={{ ...miniTitle, color: "#C77AA3" }}>
  Academy
</h4>

<p style={{ ...miniText, color: "#9a617d" }}>
      Structured art learning for beginners and advanced
      learners, with a focus on creativity, confidence, and skill.
    </p>

    <Link
  to="/academy"
  style={{ ...linkStyle, color: "#C77AA3" }}
>      Know More →
    </Link>
  </div>

</div>

          <div style={divider} />

          {/* PHILOSOPHY */}
          <h3 style={sectionHeading}>Our Philosophy</h3>
          <p style={textStyle}>
            Every piece at MAGSA is intentional and personal. We believe art
            should do more than exist. It should connect with the space it
            lives in and the person it belongs to.
          </p>

          {/* VISION */}
          <h3 style={sectionHeading}>Our Vision</h3>
          <p style={textStyle}>
            Our goal is to nurture creativity and provide meaningful exposure
            to emerging artists. We help students become confident,
            independent, and self-reliant creators while sharing the joy of
            art.
          </p>

          <p style={textStyle}>
            We also guide students in preparing for{" "}
            <strong>NID and NIFT entrance exams</strong> and building strong
            portfolios for national and international art institutions.
          </p>
        </div>
      </div>
    </section>
  );
}

/* STYLES */

const textStyle = {
  marginTop: "14px",
  color: "#4f4f4f",
  lineHeight: "1.85",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
};

const subHeading = {
  color: "#7A3E5C",
  marginBottom: "10px",
  fontSize: "clamp(1.28rem, 4vw, 1.6rem)",
  fontWeight: 600,
  lineHeight: 1.18,
  letterSpacing: "0.02em",
};

const sectionHeading = {
  marginTop: "30px",
  color: "#5CBCC3",
  fontSize: "clamp(1.28rem, 3.8vw, 1.48rem)",
  fontWeight: 600,
  lineHeight: 1.16,
  letterSpacing: "0.02em",
};

const divider = {
  marginTop: "30px",
  marginBottom: "10px",
  height: "1px",
  backgroundColor: "#eee",
};

const cardRow = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: "clamp(16px, 4vw, 20px)",
  marginTop: "20px",
};

const miniCard = {
  backgroundColor: "#fafafa",
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #eee",
};

const miniTitle = {
  color: "#7A3E5C",
  marginBottom: "8px",
  fontSize: "clamp(1.08rem, 3vw, 1.22rem)",
  fontWeight: 600,
  lineHeight: 1.15,
};

const miniText = {
  fontSize: "clamp(0.94rem, 2.4vw, 1rem)",
  color: "#555",
  lineHeight: 1.65,
};
const linkStyle = {
  display: "inline-block",
  marginTop: "14px",
  color: "#5CBCC3",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "0.96rem",
  letterSpacing: "0.02em",
};

