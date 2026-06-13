import { Link } from "react-router-dom";
export default function CTA() {
    return (
      <section style={{ backgroundColor: "#f9f9f9", textAlign: "center" }}>
        <div className="container">
  
          <h2
            style={{
              color: "#7A3E5C",
              fontSize: "clamp(1.55rem, 5vw, 2rem)",
              fontWeight: 600,
            }}
          >
            Start Your Creative Journey
          </h2>
  
          <p style={{ marginTop: "10px", color: "#555" }}>
            Join our classes or explore our artwork
          </p>
  
          <div
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/academy">
  <button style={primaryBtn}>View Courses</button>
</Link>

<Link to="/gallery">
  <button style={secondaryBtn}>Explore Gallery</button>
</Link>
          </div>
  
        </div>
      </section>
    );
  }
  
  /* BUTTON STYLES */
  
  const primaryBtn = {
    padding: "12px 22px",
    backgroundColor: "#5CBCC3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
  };
  
  const secondaryBtn = {
    padding: "12px 22px",
    backgroundColor: "#fff",
    color: "#7A3E5C",
    border: "1px solid #7A3E5C",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
  };
