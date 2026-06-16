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
      {/* STUDIO INTRO */}
      <div style={aboutBox}>
  <h3 style={aboutHeading}>
    The Studio
  </h3>

  <p style={studioTagline}>
    A Space Where Creativity Comes Alive
  </p>

  <p style={aboutText}>
    MAGSA Studio is a vibrant, professionally equipped creative space designed
    for workshops, artistic collaborations, immersive experiences, and
    community-driven events.
  </p>

  <p style={aboutText}>
    From café art sessions with Nothing Before Coffee and retail activations
    with Shoppers Stop, to editorial collaborations with Vogue India for
    Benetton's summer collection launch and creative business events such as
    Shift and many more, MAGSA brings art into spaces where it is least
    expected and most remembered.
  </p>
</div>
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
    What The Studio Offers
  </h3>

  <p style={aboutText}>
    <strong>Art Workshops</strong>
    <br />
    Open and themed workshops for individuals of all skill levels—from complete beginners to practising artists. Hands-on, guided, and designed to be genuinely enjoyable experiences.
  </p>

  <p style={aboutText}>
    <strong>Creative Collaborations</strong>
    <br />
    The Studio regularly partners with cafés, brands, and cultural spaces to produce curated artistic experiences that go beyond the conventional, bringing art into everyday settings.
  </p>

  <p style={aboutText}>
    <strong>Community Events</strong>
    <br />
    Art sessions, showcase evenings, and creative gatherings that bring Jaipur's art community together in one expressive, welcoming space.
  </p>

  <p style={aboutText}>
    <strong>Corporate Events & Brand Experiences</strong>
    <br />
    MAGSA Studio is available for corporate team-building workshops, brand activations, client experiences, and private creative events. We design bespoke art experiences tailored to your organisation's goals—whether that is fostering creativity, celebrating a milestone, or simply doing something remarkably different.
  </p>

  <p
    style={{
      ...aboutText,
      marginBottom: 0,
      fontWeight: 600,
      color: "#7A3E5C",
    }}
  >
    If you can’t come to the studio, we will bring the studio to you!
  </p>
</div>
        {/* WORKSHOPS */}
        <div style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
          <h3 style={sectionHeading}>Workshop Catalogue</h3>

          <div style={workshopListContainer}>
  <ol style={workshopList}>
    {workshops.map((workshop, i) => (
      <li key={i} style={workshopListItem}>
        {workshop}
      </li>
    ))}
  </ol>
</div>
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
  "Photo Frame Painting",
  "Lippan Art on MDF Circle",
  "Canvas Painting with Acrylic",
  "Glass Painting on Frame",
  "Fluid Art on Canvas",
  "Clay Fridge Magnets Making",
  "Flower Pot Painting with Planter",
  "Canvas Tote Bag Painting",
  "Colourful Mandala Art Making",
  "Painting on Pebbles Art",
  "Tissue Paper Art",
  "Doodling Day",
  "Trinket Trays with Cement",
  "Frizzy Flower Making",
  "Bird House Making & Painting",
  "Texture on Canvas Painting",
  "Resin Jewellery Making",
  "3D Paper Cut Illustration",
  "Coffee Painting Canvas",
  "Decoupage Tissue Art",
  "Dreamcatcher Making",
  "Crochet Flower Making",
  "Macrame Keychain",
  "Miniature Food Sculpture",
  "Candle Making Workshop",
  "Hand Mirror Decor & Paint",
  "Sea Shell Palette Painting",
  "MDF Puzzle Painting",
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
  color: "#5CBCC3",
  marginBottom: "24px",
  fontSize: "clamp(1.55rem, 5vw, 2.1rem)",
  fontWeight: 600,
  lineHeight: 1.15,
};

const aboutText = {
  color: "#555",
  lineHeight: "1.85",
  marginBottom: "20px",
  fontSize: "clamp(1.08rem, 2.8vw, 1.18rem)",
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

const workshopListContainer = {
  backgroundColor: "transparent",
  padding: 0,
  borderRadius: 0,
};

const workshopList = {
  columns: 2,
  columnGap: "120px",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingLeft: "40px",
};

const workshopListItem = {
  marginBottom: "14px",
  color: "#C77AA3",
  fontSize: "clamp(1.08rem, 2.8vw, 1.2rem)",
  fontWeight: 600,
  lineHeight: 1.6,
};

// const workshopTitle = {
//   color: "#C77AA3",
//   fontSize: "clamp(1.08rem, 3vw, 1.22rem)",
//   fontWeight: 600,
//   lineHeight: 1.2,
//   margin: 0,
// };

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
const studioTagline = {
  color: "#C77AA3",
  fontSize: "clamp(1.05rem, 2.8vw, 1.2rem)",
  fontWeight: 600,
  margin: "0 0 18px",
  lineHeight: 1.4,
};