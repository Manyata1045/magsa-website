// import img1 from "../assets/first homepage strip/img1.jpg";
import img2 from "../assets/first homepage strip/img2.jpg";
import img3 from "../assets/first homepage strip/img3.jpg";
import img4 from "../assets/first homepage strip/img4.jpg";
import img5 from "../assets/first homepage strip/img5.jpg";
import img6 from "../assets/first homepage strip/img6.jpg";
export default function GalleryPreview() {
  return (
    <section style={sectionStyle}>
      <style>
        {`
          @media (max-width: 768px) {
            .magsa-home-strip {
              display: flex !important;
              gap: 12px !important;
              overflow-x: auto;
              overflow-y: hidden;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              padding: 0 2px 8px;
              scrollbar-width: none;
            }

            .magsa-home-strip::-webkit-scrollbar {
              display: none;
            }

            .magsa-home-strip-card {
              flex: 0 0 78%;
              max-width: 330px;
              scroll-snap-align: center;
            }

            .magsa-home-strip-img {
              height: clamp(170px, 54vw, 235px) !important;
              object-fit: cover;
              object-position: center;
            }

            .magsa-strip-heading {
              margin-bottom: 14px !important;
            }
          }

          @media (max-width: 480px) {
            .magsa-home-strip-card {
              flex-basis: 84%;
            }

            .magsa-home-strip-img {
              height: clamp(160px, 58vw, 215px) !important;
            }
          }
        `}
      </style>
      <div className="container">
        <div style={headingRow} className="magsa-strip-heading">
          <span style={eyebrow}>Observe. Create. Curate. Exhibit. Sell.</span>
          <span style={line} />
        </div>

        <div style={stripGrid} className="magsa-home-strip">
          {images.map((img, i) => (
            <div key={img} className="gallery-card magsa-home-strip-card" style={imageFrame}>
              <img
                src={img}
                alt={`MAGSA artwork preview ${i + 1}`}
                className="gallery-img magsa-home-strip-img"
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const images = [
  // img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const sectionStyle = {
  backgroundColor: "#fff",
  paddingTop: "clamp(24px, 4vw, 34px)",
  paddingBottom: "clamp(28px, 5vw, 42px)",
};

const headingRow = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "18px",
};

const eyebrow = {
  color: "#7A3E5C",
  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  whiteSpace: "nowrap" as const,
};

const line = {
  height: "1px",
  flex: 1,
  backgroundColor: "rgba(122, 62, 92, 0.18)",
};

const stripGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
  gap: "16px",
};

const imageFrame = {
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#f8f8f8",
};

const imageStyle = {
  width: "100%",
  height: "clamp(240px, 24vw, 340px)",
  objectFit: "cover" as const,
};
