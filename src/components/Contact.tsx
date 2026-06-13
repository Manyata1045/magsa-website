const contactCards = [
  {
    label: "Call",
    value: "+91 9571230003",
    note: "For classes, artworks, workshops, and collaborations.",
    accent: "#5CBCC3",
  },
  {
    label: "Visit",
    value: "Jaipur, Rajasthan",
    note: "Gallery, studio, and academy experiences by appointment.",
    accent: "#7A3E5C",
  },
  {
    label: "Email",
    value: "magsabyvasudhasharma@gmail.com",
    note: "For detailed enquiries, institutional work, and proposals.",
    accent: "#C77AA3",
  },
  {
    label: "Timings",
    value: "11:00 AM - 7:00 PM",
    note: "Monday to Saturday. Timings can be updated for events.",
    accent: "#5CBCC3",
  },
];

const trustItems = [
  "Established in Jaipur",
  "Gallery exhibitions",
  "Studio workshops",
  "Structured art education",
];

export default function Contact() {
  return (
    <section style={pageStyle}>
      <div className="container">
        <div style={heroStyle}>
          <span style={eyebrow}>Contact MAGSA</span>
          <h1 style={titleStyle}>Begin a conversation with art.</h1>
          <p style={subtitleStyle}>
            Reach out for artworks, workshops, academy admissions, exhibitions,
            collaborations, or custom creative experiences in Jaipur.
          </p>
        </div>

        <div style={contactGrid}>
        {contactCards.map((card) => (
  <article key={card.label} style={cardStyle} className="card">
    <div style={{ ...cardAccent, backgroundColor: card.accent }} />

    <p
      style={{
        ...cardLabel,
        color: card.accent,
      }}
    >
      {card.label}
    </p>

    <h2
      style={{
        ...cardValue,
        color: card.accent,
      }}
    >
      {card.label === "Email" ? (
        <a href={`mailto:${card.value}`} style={contactLink}>
          {card.value}
        </a>
      ) : card.label === "Call" ? (
        <a href="tel:+919571230003" style={contactLink}>
          {card.value}
        </a>
      ) : (
        card.value
      )}
    </h2>

    <p
      style={{
        ...cardNote,
        color: card.accent,
        opacity: 0.85,
      }}
    >
      {card.note}
    </p>
  </article>
))}
        </div>

        <div style={whatsAppPanel}>
          <div>
            <span style={panelEyebrow}>Fastest response</span>
            <h2 style={panelTitle}>Planning a workshop, class, or art collaboration?</h2>
            <p style={panelText}>
              Share a small note on WhatsApp and the MAGSA team will help you
              choose the right next step.
            </p>
          </div>

          <a
            href="https://wa.me/919571230003"
            target="_blank"
            rel="noopener noreferrer"
            style={linkReset}
          >
            <button style={whatsAppButton}>Contact on WhatsApp</button>
          </a>
        </div>

        <div style={trustStrip}>
          {trustItems.map((item) => (
            <span key={item} style={trustItem}>
              {item}
            </span>
          ))}
        </div>

        <div style={socialSection}>
          <div>
            <span style={socialEyebrow}>Social Gallery</span>
            <h2 style={socialTitle}>Follow the evolving studio story.</h2>
          </div>

          <div style={instagramBox}>
            <span style={instagramHandle}>Instagram placeholder</span>
            <p style={instagramText}>
              Add MAGSA Instagram updates, exhibition highlights, workshop
              moments, and student work here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const pageStyle = {
  backgroundColor: "#fbfbfb",
  paddingTop: "clamp(44px, 7vw, 76px)",
  paddingBottom: "clamp(46px, 8vw, 82px)",
};

const heroStyle = {
  maxWidth: "780px",
  margin: "0 auto clamp(30px, 6vw, 52px)",
  textAlign: "center" as const,
};
const eyebrow = {
  color: "#C77AA3",
  fontSize: "clamp(1rem, 2.2vw, 1.55rem)",
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
};

const titleStyle = {
  margin: "12px 0 0",
  color: "#7A3E5C",
  fontSize: "clamp(2rem, 6.5vw, 2.75rem)",
  fontWeight: 600,
  lineHeight: 1.07,
  letterSpacing: "0.01em",
};

const subtitleStyle = {
  maxWidth: "660px",
  margin: "16px auto 0",
  color: "#555",
  fontSize: "clamp(1rem, 2.4vw, 1.12rem)",
  lineHeight: 1.78,
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
  gap: "clamp(16px, 3vw, 22px)",
};

const cardStyle = {
  position: "relative" as const,
  overflow: "hidden",
  minHeight: "190px",
  padding: "clamp(24px, 4vw, 30px)",
  backgroundColor: "#fff",
  border: "1px solid rgba(122, 62, 92, 0.12)",
  borderRadius: "8px",
  boxShadow: "0 14px 34px rgba(122, 62, 92, 0.07)",
};

const cardAccent = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  height: "3px",
};

const cardLabel = {
  margin: 0,
  color: "#C77AA3",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const cardValue = {
  margin: "15px 0 0",
  color: "#7A3E5C",
  fontSize: "clamp(1.18rem, 3vw, 1.48rem)",
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: "0.01em",
};

const contactLink = {
  color: "inherit",
  textDecoration: "none",
  overflowWrap: "anywhere" as const,
};

const cardNote = {
  margin: "12px 0 0",
  color: "#666",
  fontSize: "clamp(0.95rem, 2.3vw, 1rem)",
  lineHeight: 1.7,
};

const whatsAppPanel = {
  marginTop: "clamp(26px, 5vw, 44px)",
  padding: "clamp(24px, 5vw, 34px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
  flexWrap: "wrap" as const,
  backgroundColor: "#7A3E5C",
  color: "#fff",
  borderRadius: "8px",
  boxShadow: "0 18px 40px rgba(122, 62, 92, 0.16)",
};

const panelEyebrow = {
  color: "#addfe2",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const panelTitle = {
  maxWidth: "620px",
  margin: "11px 0 0",
  fontSize: "clamp(1.4rem, 4vw, 2.08rem)",
  fontWeight: 600,
  lineHeight: 1.16,
  letterSpacing: "0.01em",
};

const panelText = {
  maxWidth: "640px",
  margin: "12px 0 0",
  color: "rgba(255, 255, 255, 0.86)",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
  lineHeight: 1.72,
};

const linkReset = {
  textDecoration: "none",
};

const whatsAppButton = {
  padding: "12px 24px",
  backgroundColor: "#5CBCC3",
  color: "#fff",
  border: "1px solid rgba(255, 255, 255, 0.28)",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.96rem",
  letterSpacing: "0.01em",
  whiteSpace: "nowrap" as const,
};

const trustStrip = {
  marginTop: "clamp(24px, 5vw, 40px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
  borderTop: "1px solid rgba(122, 62, 92, 0.16)",
  borderBottom: "1px solid rgba(122, 62, 92, 0.16)",
  backgroundColor: "#fff",
};

const trustItem = {
  padding: "17px 14px",
  color: "#7A3E5C",
  fontSize: "clamp(0.9rem, 2.2vw, 0.98rem)",
  fontWeight: 600,
  letterSpacing: "0.04em",
  lineHeight: 1.35,
  textAlign: "center" as const,
  borderRight: "1px solid rgba(122, 62, 92, 0.1)",
};

const socialSection = {
  marginTop: "clamp(28px, 6vw, 52px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
  gap: "clamp(18px, 4vw, 30px)",
  alignItems: "stretch",
};

const socialEyebrow = {
  color: "#5CBCC3",
  fontSize: "0.78rem",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
};

const socialTitle = {
  margin: "10px 0 0",
  color: "#7A3E5C",
  fontSize: "clamp(1.5rem, 4.4vw, 2.35rem)",
  fontWeight: 600,
  lineHeight: 1.14,
  letterSpacing: "0.01em",
};

const instagramBox = {
  padding: "clamp(22px, 5vw, 32px)",
  minHeight: "170px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  backgroundColor: "#fff",
  border: "1px dashed rgba(199, 122, 163, 0.48)",
  borderRadius: "8px",
};

const instagramHandle = {
  color: "#C77AA3",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontSize: "0.84rem",
};

const instagramText = {
  margin: "12px 0 0",
  color: "#666",
  lineHeight: 1.72,
  fontSize: "clamp(0.96rem, 2.4vw, 1rem)",
};
