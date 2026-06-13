import newsletter1 from "../assets/newsletters/Newsletter-1.pdf";
import newsletter2 from "../assets/newsletters/Newsletter-2.pdf";
import newsletter3 from "../assets/newsletters/Newsletter-3.pdf";
import newsletter4 from "../assets/newsletters/Newsletter-4.pdf";
import newsletter5 from "../assets/newsletters/Newsletter-5.pdf";

import cover1 from "../assets/newsletters/Newsletter-1-cover.jpeg";
import cover2 from "../assets/newsletters/Newsletter-2-cover.jpeg";
import cover3 from "../assets/newsletters/Newsletter-3-cover.jpeg";
import cover4 from "../assets/newsletters/Newsletter-4-cover.jpeg";
import cover5 from "../assets/newsletters/Newsletter-5-cover.jpeg";
const newsletters = [
  {
    title: "5th Edition",
    date: "31 May 2026",
    file: newsletter5,
    cover: cover5,
  },
  {
    title: "4th Edition",
    date: "24 May 2026",
    file: newsletter4,
    cover: cover4,
  },
  {
    title: "3rd Edition",
    date: "17 May 2026",
    file: newsletter3,
    cover: cover3,
  },
  {
    title: "2nd Edition",
    date: "10 May 2026",
    file: newsletter2,
    cover: cover2,
  },
  {
    title: "1st Edition",
    date: "03 May 2026",
    file: newsletter1,
    cover: cover1,
  },
];
export default function Newsletter() {
  return (
    
    <section style={{ backgroundColor: "#fff" }}>
      <style>
  {`
    @media (max-width: 1024px) {
      .newsletter-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    @media (max-width: 640px) {
      .newsletter-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}
</style>
      <div className="container">

        <div style={headerSection}>
          <h2 style={pageTitle}>Published Newsletters</h2>

          <p style={pageSubtitle}>
            Explore weekly updates, exhibitions, workshops, academy activities,
            and creative highlights from MAGSA.
          </p>
        </div>

        <div
  style={newsletterGrid}
  className="newsletter-grid"
>          {newsletters.map((newsletter, index) => (
            <a
              key={index}
              href={newsletter.file}
              target="_blank"
              rel="noopener noreferrer"
              style={newsletterCard}
            >
<img
  src={newsletter.cover}
  alt={newsletter.title}
  style={coverImage}
/>
<div style={newsletterContent}>
  <h3 style={newsletterTitle}>
    {newsletter.title}
  </h3>

  <p style={newsletterDate}>
    {newsletter.date}
  </p>

  <span style={viewButton}>
    View Newsletter →
  </span>
</div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
const headerSection = {
  textAlign: "center" as const,
  marginBottom: "60px",
};

const pageTitle = {
  color: "#7A3E5C",
  fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
  fontWeight: 700,
  marginBottom: "16px",
};

const pageSubtitle = {
  color: "#C77AA3",
  fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: 1.8,
};

const newsletterGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
};

const newsletterCard = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "20px",
  textDecoration: "none",
  border: "1px solid rgba(92, 188, 195, 0.35)",
  boxShadow: "0 8px 25px rgba(122, 62, 92, 0.06)",
  transition: "all 0.3s ease",
};

const newsletterTitle = {
  color: "#7A3E5C",
  fontSize: "1.4rem",
  fontWeight: 600,
  marginBottom: "10px",
};

const newsletterDate = {
  color: "#C77AA3",
  marginBottom: "18px",
  fontWeight: 500,
};

const viewButton = {
  color: "#5CBCC3",
  fontWeight: 600,
};
const coverImage = {
  width: "100%",
  height: "500px",
  objectFit: "cover" as const,
  display: "block",
};
const newsletterContent = {
  padding: "22px",
};