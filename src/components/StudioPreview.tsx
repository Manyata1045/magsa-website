import { Link } from "react-router-dom";

export default function StudioPreview() {
  return (
    <section style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">

        {/* HEADING */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={titleStyle}>Studio</h2>

          <p style={subtitleStyle}>
            Workshops, collaborations, creative events & immersive artistic experiences.
          </p>
        </div>

        {/* IMAGES */}
        <div style={grid}>
          {images.map((img, i) => (
            <div key={i} className="gallery-card" style={card}>
              <img
                src={img}
                alt="Studio Event"
                className="gallery-img"
                style={imageStyle}
              />
            </div>
          ))}
        </div>

        {/* TEXT */}
        <div style={textBox}>
          <p style={textStyle}>
            MAGSA Studio is a vibrant creative environment where workshops,
            collaborations, café events, and immersive art experiences come to life.
          </p>
        </div>

        {/* BUTTON */}
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <Link to="/studio">
            <button style={btnStyle}>
              Explore Studio
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* DATA */

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
];

/* STYLES */

const titleStyle = {
  color: "#5CBCC3",
  fontSize: "clamp(1.75rem, 5.8vw, 2.2rem)",
  fontWeight: 700,
};

const subtitleStyle = {
  color: "#666",
  marginTop: "10px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "clamp(16px, 4vw, 22px)",
};

const card = {
  borderRadius: "14px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "clamp(230px, 42vw, 320px)",
  objectFit: "cover" as const,
};

const textBox = {
  marginTop: "35px",
  backgroundColor: "#fff",
  padding: "clamp(22px, 5vw, 30px)",
  borderRadius: "12px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
};

const textStyle = {
  color: "#555",
  lineHeight: "1.8",
  textAlign: "center" as const,
};

const btnStyle = {
  padding: "12px 24px",
  backgroundColor: "#C77AA3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 500,
};
