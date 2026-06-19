import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import img1 from "../assets/steps-folder/1.jpg";
import img2 from "../assets/steps-folder/2.jpg";
import img3 from "../assets/steps-folder/3.jpg";
import img4 from "../assets/steps-folder/4.jpg";
import img5 from "../assets/steps-folder/5.jpg";
import img6 from "../assets/steps-folder/6.jpg";
import img7 from "../assets/steps-folder/7.jpg";
import workshopImg from "../assets/studio/workshop.jpeg";
import collaborationImg from "../assets/studio/collaboration.jpg";
import communityImg from "../assets/studio/community.jpg";
import corporateImg from "../assets/studio/corporate.jpg";
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
        <style>
{`
@media (max-width:1024px){
  .studio-grid{
    grid-template-columns: repeat(2,1fr) !important;
  }
}

@media (max-width:640px){
  .studio-grid{
    grid-template-columns:1fr !important;
  }
}
  .studio-card {
  transition: all 0.3s ease;
}

.studio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.12);
}
`}
</style>
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
 
<h3
  style={{
    ...sectionHeading,
    textAlign: "center",
    color: "#5CBCC3",
    marginTop: "50px",
    marginBottom: "30px",
  }}
>
  What The Studio Offers
</h3>

<div
  className="studio-grid"
  style={{
    ...studioGrid,
    marginTop: "40px",
    marginBottom: "60px",
  }}
>
<div style={pillarCard} className="card studio-card">
      <img src={workshopImg} alt="Art Workshops" style={pillarImage} />

    <div style={pillarContent}>
      <h4 style={{ ...pillarTitle, color: "#7A3E5C" }}>
        Art Workshops
      </h4>

      <p style={pillarText}>
        Hands-on workshops for beginners, hobbyists, and serious learners,
        designed to encourage exploration, creativity, and artistic confidence.
      </p>
    </div>
  </div>

  <div style={pillarCard} className="card studio-card">
        <img src={collaborationImg} alt="Creative Collaborations" style={pillarImage} />

    <div style={pillarContent}>
      <h4 style={{ ...pillarTitle, color: "#5CBCC3" }}>
        Creative Collaborations
      </h4>

      <p style={pillarText}>
        Partnerships with brands, cafés, cultural spaces, and creative
        organisations to bring meaningful artistic experiences to wider audiences.
      </p>
    </div>
  </div>

  <div style={pillarCard} className="card studio-card">    <img src={communityImg} alt="Community Events" style={pillarImage} />

    <div style={pillarContent}>
      <h4 style={{ ...pillarTitle, color: "#C77AA3" }}>
        Community Events
      </h4>

      <p style={pillarText}>
        Creative gatherings, art sessions, showcases, and events that strengthen
        Jaipur's growing artistic community.
      </p>
    </div>
  </div>

  <div style={pillarCard} className="card studio-card">
        <img src={corporateImg} alt="Corporate Events" style={pillarImage} />

    <div style={pillarContent}>
      <h4 style={{ ...pillarTitle, color: "#7A3E5C" }}>
        Corporate Events & Brand Experiences
      </h4>

      <p style={pillarText}>
        Bespoke workshops, team-building sessions, launches, activations, and
        immersive creative experiences tailored for organisations and brands.
      </p>
    </div>
  </div>
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

const studioGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "24px",
};

const pillarCard = {
  backgroundColor: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const pillarImage = {
  width: "100%",
  height: "300px",
  objectFit: "cover" as const,
};

const pillarContent = {
  padding: "24px",
};

const pillarTitle = {
  margin: "0 0 14px",
  fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
  fontWeight: 600,
  lineHeight: 1.2,
};

const pillarText = {
  color: "#555",
  lineHeight: "1.8",
  fontSize: "1rem",
  margin: 0,
};