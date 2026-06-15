import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import img1 from "../assets/steps-folder/1.jpg";
import img2 from "../assets/steps-folder/2.jpg";
import img3 from "../assets/steps-folder/3.jpg";
import img4 from "../assets/steps-folder/4.jpg";
import img5 from "../assets/steps-folder/5.jpg";
import img6 from "../assets/steps-folder/6.jpg";
import img7 from "../assets/steps-folder/7.jpg";
export default function Studio() {
  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % bookingImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (
    <>
<Hero activePage="studio" />  
      <section style={{ backgroundColor: "#fff",
                  marginTop: "-60px"

       }}>
      <div className="container">

        {/* EVENT PHOTOS */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>Creative Event Highlights</h3>

          <div style={photoGrid}>
            {eventPhotos.map((photo, i) => (
              <div key={i} className="gallery-card" style={photoCard}>
                <img
                  src={photo}
                  alt="Studio Event"
                  className="gallery-img"
                  style={photoStyle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* STUDIO TEXT */}
        <div style={aboutBox}>
          <h3 style={aboutHeading}>
            A Space Where Creativity Comes Alive
          </h3>

          <p style={aboutText}>
            MAGSA Studio is a vibrant creative space designed for workshops,
            collaborations, immersive artistic experiences, and community-driven
            events.
          </p>

          <p style={aboutText}>
            From interactive art sessions and café collaborations to premium
            event experiences, the studio brings together artists, brands,
            learners, and art lovers in a dynamic and expressive environment.
          </p>

          <p style={aboutText}>
            We have collaborated with creative spaces and brands through curated
            experiences like <strong>Shift</strong>, café art sessions, and
            customized workshop events.
          </p>
        </div>

        {/* BOOK US */}
        <div style={{ marginTop: "clamp(54px, 9vw, 90px)", marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>
            Book MAGSA For Your Next Event
          </h3>

          <div style={slideshowContainer}>
  <img
    src={bookingImages[currentSlide]}
    alt="Workshop Event"
    style={slideshowImage}
  />
</div>

          <div style={stepsBox}>
            <h4 style={stepsTitle}>
              How To Book
            </h4>

            <ol style={stepsList}>
              <li>Choose your workshop or event type</li>
              <li>Connect with MAGSA on WhatsApp or call</li>
              <li>Discuss customization & collaboration ideas</li>
              <li>Finalize date, venue & experience details</li>
            </ol>
          </div>
        </div>

        {/* WORKSHOPS */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>Workshop Experiences</h3>

          <div style={workshopGrid}>
            {workshops.map((workshop, i) => (
              <div key={i} style={workshopCard} className="card">
                <h4 style={workshopTitle}>{workshop}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={ctaBox}>
          <h3 style={ctaTitle}>
            Let’s Create Something Meaningful Together
          </h3>

          <p style={ctaText}>
            Workshops • Collaborations • Art Events • Creative Experiences
          </p>

          <a href="tel:+919571230003" style={ctaPhone}>
            📞 +91 9571230003
          </a>
        </div>

      </div>
      </section>
  </>
  );
}

/* ---------------- DATA ---------------- */

const eventPhotos = [
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
];

const bookingImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const workshops = [
  "Decoupage Workshop",
  "Fabric Art Workshop",
  "Fluid Art Workshop",
  "Block Printing Workshop",
  "Tie & Dye Workshop",
  "Alcohol Ink Activity",
  "3D Paper Cut Illustration",
  "Lippan Art Workshop",
];

/* ---------------- STYLES ---------------- */

// const titleStyle = {
//   color: "#5CBCC3",
//   fontSize: "clamp(2rem, 6vw, 2.7rem)",
//   fontWeight: 600,
//   lineHeight: 1.08,
//   letterSpacing: "0.02em",
// };

// const subtitleStyle = {
//   color: "#666",
//   marginTop: "12px",
//   fontSize: "clamp(1rem, 2.8vw, 1.12rem)",
//   lineHeight: 1.65,
// };

const sectionHeading = {
  color: "#7A3E5C",
  marginBottom: "25px",
  fontSize: "clamp(1.42rem, 5vw, 1.95rem)",
  fontWeight: 600,
  lineHeight: 1.12,
  letterSpacing: "0.02em",
};

const photoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
  gap: "clamp(16px, 4vw, 20px)",
};

const photoCard = {
  borderRadius: "14px",
  overflow: "hidden",
};

const photoStyle = {
  width: "100%",
  height: "clamp(230px, 40vw, 300px)",
  objectFit: "cover" as const,
};

const aboutBox = {
  backgroundColor: "#f9f9f9",
  padding: "clamp(26px, 6vw, 45px)",
  borderRadius: "14px",
};

const aboutHeading = {
  color: "#C77AA3",
  marginBottom: "20px",
  fontSize: "clamp(1.45rem, 5vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.15,
  letterSpacing: "0.01em",
};

const aboutText = {
  color: "#555",
  lineHeight: "1.88",
  marginBottom: "18px",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
};


const stepsBox = {
  marginTop: "35px",
  padding: "clamp(22px, 5vw, 30px)",
  backgroundColor: "#7A3E5C",
  color: "#fff",
  borderRadius: "12px",
};

const stepsTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(1.18rem, 3.5vw, 1.45rem)",
  fontWeight: 600,
  lineHeight: 1.15,
  letterSpacing: "0.02em",
};

const stepsList = {
  margin: 0,
  paddingLeft: "22px",
  color: "rgba(255,255,255,0.9)",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
  lineHeight: "1.9",
};

const workshopGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
  gap: "clamp(16px, 4vw, 20px)",
};

const workshopCard = {
  padding: "clamp(22px, 5vw, 28px)",
  borderRadius: "12px",
  backgroundColor: "#fff",
  border: "1px solid #eee",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
};

const workshopTitle = {
  color: "#C77AA3",
  fontSize: "clamp(1.08rem, 3vw, 1.22rem)",
  fontWeight: 600,
  lineHeight: 1.2,
  margin: 0,
};

const ctaBox = {
  marginTop: "40px",
  padding: "clamp(26px, 6vw, 40px)",
  backgroundColor: "#5CBCC3",
  color: "#fff",
  borderRadius: "14px",
  textAlign: "center" as const,
};

const ctaTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(1.35rem, 4vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.16,
  letterSpacing: "0.01em",
};

const ctaText = {
  margin: "0 0 10px",
  color: "rgba(255,255,255,0.9)",
  fontSize: "clamp(0.98rem, 2.4vw, 1.08rem)",
  lineHeight: 1.6,
};

const ctaPhone = {
  margin: 0,
  color: "inherit",
  display: "inline-block",
  fontSize: "clamp(1rem, 2.6vw, 1.12rem)",
  fontWeight: 600,
  lineHeight: 1.4,
  textDecoration: "none",
};
const slideshowContainer = {
  width: "75%",
  maxWidth: "800px",
  margin: "0 auto",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
};

const slideshowImage = {
  width: "100%",
  aspectRatio: "10.18 / 8.18",
  objectFit: "contain" as const,
  display: "block",
};