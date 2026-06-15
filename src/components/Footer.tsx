import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#68324D",
        color: "#fff",
        padding: "clamp(22px, 4.5vw, 30px) clamp(16px, 4vw, 20px)",
      }}
    >
      <style>
        {`
          @media (max-width: 560px) {
            .magsa-footer-row {
              flex-direction: column;
              align-items: center;
              gap: 7px !important;
            }

            .magsa-footer-row span {
              max-width: 100%;
              overflow-wrap: anywhere;
            }

            .magsa-footer-social {
              gap: 12px !important;
              margin-top: 14px !important;
            }
          }
        `}
      </style>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* BRAND */}
        <h3
  style={{
    margin: 0,
    fontWeight: 500,
    fontSize: "clamp(1.05rem, 3vw, 1.25rem)",
    letterSpacing: "0.04em",
  }}
>
  Mandala Art
</h3>

<h3
  style={{
    margin: "3px 0 0",
    fontWeight: 400,
    fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
    opacity: 0.92,
  }}
>
  Gallery • Studio • Academy
</h3>


        <p style={{ margin: "6px 0 0", fontSize: "0.84rem", opacity: 0.82 }}>
          by Vasudha Sharma
        </p>
        

        {/* CONTACT ROW */}
        <div
          className="magsa-footer-row"
          style={{
            marginTop: "14px",
            display: "flex",
            justifyContent: "center",
            gap: "8px 24px",
            flexWrap: "wrap",
            fontSize: "clamp(0.82rem, 2.6vw, 0.92rem)",
            lineHeight: 1.45,
          }}
        >
          <span>
            📞{" "}
            <a href="tel:+919571230003" style={footerContactLink}>
              +91 9571230003
            </a>
          </span>
          <span>📍 Jaipur, Rajasthan</span>
          <span>
            ✉️{" "}
            <a href="mailto:magsabyvasudhasharma@gmail.com" style={footerContactLink}>
              magsabyvasudhasharma@gmail.com
            </a>
          </span>
        </div>

        {/* TIMINGS */}
        <div
          className="magsa-footer-row"
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "6px 20px",
            flexWrap: "wrap",
            fontSize: "clamp(0.8rem, 2.4vw, 0.88rem)",
            opacity: 0.84,
            lineHeight: 1.45,
          }}
        >
          <span>🕒 11:00 AM – 7:00 PM</span>
          <span>📅 Monday – Saturday</span>
        </div>

        <div style={socialRow} className="magsa-footer-social">
        <a
  href="https://www.instagram.com/mandala_art_gallery_studio_acd"
  target="_blank"
  rel="noopener noreferrer"
  style={socialLink}
>
  Instagram
</a>

  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    style={socialLink}
  >
    Facebook
  </a>

  <a
  href="https://www.linkedin.com/company/mandala-art-gallery-studio-academy/"
  target="_blank"
  rel="noopener noreferrer"
  style={socialLink}
>
  LinkedIn
</a>
</div>
        {/* BUTTON */}
        <div style={{ marginTop: "14px" }}>
          <WhatsAppButton />
        </div>

        {/* DIVIDER */}
        <div
          style={{
            marginTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        />

        {/* COPYRIGHT */}
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "0.78rem",
            opacity: 0.72,
          }}
        >
          © {new Date().getFullYear()} Mandala Art. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
const socialRow = {
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  marginTop: "18px",
  flexWrap: "wrap" as const,
};

const socialLink = {
  color: "#f5f5f5",
  fontSize: "0.95rem",
  textDecoration: "none",
  opacity: 0.9,
  transition: "0.2s ease",
};

const footerContactLink = {
  color: "inherit",
  textDecoration: "none",
  overflowWrap: "anywhere" as const,
};
