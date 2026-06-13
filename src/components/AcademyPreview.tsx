import { Link } from "react-router-dom";

export default function AcademyPreview() {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="container">

        {/* HEADING */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={titleStyle}>Academy</h2>

          <p style={subtitleStyle}>
            Structured art learning programs designed for creativity,
            confidence, and artistic growth.
          </p>
        </div>

        {/* COURSE PREVIEW */}
        <div style={grid}>
          {courses.map((course, i) => (
            <div key={i} style={card} className="card">

              <h3 style={cardTitle}>
                {course.title}
              </h3>

              <p style={cardText}>
                {course.description}
              </p>

            </div>
          ))}
        </div>

        {/* SMALL INFO STRIP */}
        <div style={infoBox}>
          <p style={infoText}>
            ✨ Summer Camps • Certifications • Internships • Workshops
          </p>
        </div>

        {/* BUTTON */}
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <Link to="/academy">
            <button style={btnStyle}>
              View Academy Programs
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

/* DATA */

const courses = [
  {
    title: "Beginner Learning",
    description:
      "Creative foundational programs designed for children and beginners exploring art.",
  },
  {
    title: "Advanced Programs",
    description:
      "Structured art learning with deeper techniques, artistic practice, and creative growth.",
  },
  {
    title: "Creative Workshops",
    description:
      "Interactive artistic sessions encouraging exploration, expression, and hands-on learning.",
  },
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
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
  gap: "clamp(16px, 4vw, 22px)",
};

const card = {
  backgroundColor: "#f9f9f9",
  padding: "clamp(22px, 5vw, 30px)",
  borderRadius: "14px",
  border: "1px solid #eee",
};

const cardTitle = {
  color: "#C77AA3",
  marginBottom: "15px",
  fontSize: "clamp(1.1rem, 4vw, 1.3rem)",
};

const cardText = {
  color: "#555",
  lineHeight: "1.8",
};

const infoBox = {
  marginTop: "35px",
  backgroundColor: "#7A3E5C",
  padding: "22px",
  borderRadius: "12px",
  textAlign: "center" as const,
};

const infoText = {
  color: "#fff",
  fontSize: "1rem",
};

const btnStyle = {
  padding: "12px 24px",
  backgroundColor: "#5CBCC3",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 500,
};
