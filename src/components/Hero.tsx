import { Link } from "react-router-dom";

export default function Hero({
  activePage,
}: {
  activePage?: "gallery" | "studio" | "academy";
}) {  return (
    <section style={heroSection}>
      <style>
        {`
          .hero-mandala-link {
            transition:
              transform 0.28s ease,
              box-shadow 0.28s ease,
              filter 0.28s ease;
          }

          .hero-mandala-link:hover {
            transform: translateY(-2px) scale(1.055);
            box-shadow: 0 16px 34px rgba(122, 62, 92, 0.14);
            filter: saturate(1.04);
          }

          .hero-mandala-link:focus-visible {
            outline: 2px solid #5CBCC3;
            outline-offset: 8px;
          }

          @media (max-width: 520px) {
            .hero-mandala-link:hover {
              transform: none;
            }
          }
        `}
      </style>
      <div style={brandLockup}>
        <h1 style={brandTitle}>Mandala Art</h1>

        <h2 style={brandSubtitle}>
  <span
    style={
      activePage === "gallery"
        ? activeWordStyle
        : {}
    }
  >
    Gallery
  </span>

  {" • "}

  <span
    style={
      activePage === "studio"
        ? activeWordStyle
        : {}
    }
  >
    Studio
  </span>

  {" • "}

  <span
    style={
      activePage === "academy"
        ? activeWordStyle
        : {}
    }
  >
    Academy
  </span>
</h2>
        <p style={byline}>by Vasudha Sharma</p>

        <div style={mandalaRow}>
          {mandalaVisuals.map((visual) => (
            <Link
              key={visual.label}
              to={visual.path}
              aria-label={visual.ariaLabel}
              title={visual.title}
              className="hero-mandala-link"
              style={{
                ...mandalaMark,
                color: visual.color,
                backgroundColor: visual.color,
              }}
            >
              <span style={mandalaCenter} />
            </Link>
          ))}
        </div>
      </div>

      <div style={signatureLines} aria-hidden="true">
        <div style={{ ...signatureLine, backgroundColor: "#7A3E5C" }} />
        <div style={{ ...signatureLine, backgroundColor: "#5CBCC3" }} />
        <div style={{ ...signatureLine, backgroundColor: "#C77AA3" }} />
      </div>
    </section>
  );
}

const mandalaVisuals = [
  {
    label: "Gallery mandala mark",
    ariaLabel: "Go to Gallery",
    title: "Gallery",
    color: "#7A3E5C",
    path: "/gallery",
  },
  {
    label: "Studio mandala mark",
    ariaLabel: "Go to Studio",
    title: "Studio",
    color: "#5CBCC3",
    path: "/studio",
  },
  {
    label: "Academy mandala mark",
    ariaLabel: "Go to Academy",
    title: "Academy",
    color: "#C77AA3",
    path: "/academy",
  },
];

const heroSection = {
  position: "relative" as const,
  overflow: "hidden",
  textAlign: "center" as const,
  paddingTop: "clamp(16px, 3vw, 32px)",
  paddingBottom: "clamp(12px, 3vw, 24px)",
  backgroundColor: "#fff",
};

const brandLockup = {
  maxWidth: "860px",
  margin: "0 auto",
  width: "100%",
  padding: "0 12px",
};

const brandTitle = {
  margin: 0,
  color: "#5CBCC3",
  fontSize: "clamp(2rem, 7.2vw, 3.2rem)",
  fontWeight: 400,
  lineHeight: 1.05,
  letterSpacing: "0.02em",
};

const brandSubtitle = {
  margin: "6px 0 0",
  color: "#5CBCC3",
  fontWeight: 400,
  fontSize: "clamp(1.12rem, 4.8vw, 2.2rem)",
  lineHeight: 1.12,
  letterSpacing: "0.02em",
};

const byline = {
  margin: "5px 0 0",
  color: "#5CBCC3",
  fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
  lineHeight: 1.4,
  opacity: 0.88,
};

const mandalaRow = {
  marginTop: "clamp(22px, 5vw, 44px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "clamp(24px, 7vw, 80px)",
  flexWrap: "wrap" as const,
};

const mandalaMark = {
  position: "relative" as const,
  width: "clamp(52px, 12vw, 76px)",
  aspectRatio: "1",
  borderRadius: "50%",
  border: "clamp(5px, 1vw, 7px) solid rgba(255, 255, 255, 0.92)",
  outline: "1px dotted currentColor",
  outlineOffset: "clamp(4px, 0.8vw, 5px)",
  boxShadow: "0 12px 28px rgba(122, 62, 92, 0.1)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  textDecoration: "none",
  flex: "0 0 auto",
  transformOrigin: "center",
};

const mandalaCenter = {
  display: "block",
  width: "34%",
  aspectRatio: "1",
  borderRadius: "50%",
  backgroundColor: "#fff",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)",
};

const signatureLines = {
  margin: "clamp(22px, 5vw, 42px) auto 0",
  width: "94%",
  maxWidth: "1320px",
  display: "grid",
  gap: "clamp(4px, 0.7vw, 6px)",
};

const signatureLine = {
  height: "clamp(3px, 0.38vw, 4px)",
};

const activeWordStyle = {
  color: "#C77AA3",
  fontSize: "1.15em",
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: "8px",
  textDecorationThickness: "3px",
};