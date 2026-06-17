export default function About() {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "clamp(38px, 7vw, 60px) clamp(16px, 4vw, 20px)" }}>      
      
      <div className="container">
        
        <div
          style={{
            backgroundColor: "#fff",
            padding: "clamp(28px, 5vw, 50px) clamp(20px, 4vw, 40px)",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#5CBCC3",
              fontSize: "clamp(1.95rem, 6vw, 2.55rem)",
              fontWeight: 600,
              marginBottom: "30px",
              textAlign: "center",
              lineHeight: 1.08,
              letterSpacing: "0.02em",
            }}
          >
            About MAGSA
          </h2>

          <h3 style={subHeading}>
  Nine years of art, community, and creative purpose.
</h3>

<p style={taglineStyle}>
  Rooted in Jaipur, growing without limits.
</p>

<div style={divider} />

<h3 style={sectionHeading}>A Space Born From Love for Art</h3>

<p style={textStyle}>
  <strong>Mandala Art Gallery • Studio • Academy (MAGSA)</strong> is not simply
  an art institution. It is a living, growing creative community built on a
  simple but profound belief: that art has the power to transform how we see
  the world, how we think, and how we connect with one another.
</p>

<p style={textStyle}>
  Since 2017, MAGSA has been Jaipur's home for serious artistic learning,
  curated exhibitions, immersive studio experiences, and a community that
  places creativity at the centre of everything it does.
</p>

<div style={divider} />

<h3 style={sectionHeading}>Where It All Began</h3>

<p style={textStyle}>
  MAGSA was founded in 2017 by <strong>Vasudha Sharma</strong> at just
  nineteen years of age, out of a deeply personal love for art and a vision to
  create something Jaipur did not yet have: a space of genuine creative
  freedom, artistic rigour, and quiet peace.
</p>

<p style={textStyle}>
  A place where people could come to make art, to see art, and simply to be
  among others who understood why art matters.
</p>

<p style={textStyle}>
  What began as one person's vision has grown, over nine years, into something
  far larger than any single individual. Today, MAGSA is home to a thriving
  community of students, practising artists, collaborators, and art lovers
  united by a shared creative spirit and a belief that artistic expression is
  not a luxury, but a necessity.
</p>

<p style={textStyle}>
  From its earliest days to collaborations with <strong>Vogue India</strong>,
  <strong> Shoppers Stop</strong>, and leading creative spaces across the
  country, MAGSA has remained true to its founding impulse: art, done
  seriously, in a space that feels like it belongs to everyone who walks
  through its doors.
</p>

<div style={divider} />

<h3 style={sectionHeading}>What We Believe</h3>

<p style={textStyle}>
  At MAGSA, we believe that art is not merely a skill to be acquired; it is a
  way of seeing, thinking, and being in the world.
</p>

<p style={textStyle}>
  We believe that creativity is not the preserve of a gifted few, but
  something that can be cultivated, practised, and deepened by anyone willing
  to engage seriously with the process.
</p>

<p style={textStyle}>
  We believe that a great art institution must do three things at once:
</p>

<p style={pillarsStyle}>
  OBSERVE • CREATE • CURATE • SELL
</p>

<p style={textStyle}>
  To teach with rigour. To exhibit with intention. To build community with
  warmth.
</p>

<p style={textStyle}>
  The Gallery, the Studio, and the Academy exist because all are necessary.
  None is complete without the others.
</p>

<p style={textStyle}>
  And above all, we believe that Jaipur, a city with one of the richest
  artistic and cultural legacies in India, deserves a world-class creative
  institution it can call its own.
</p>

<p style={textStyle}>
  That is what MAGSA is working toward every day.
</p>

<div style={divider} />

<h3 style={sectionHeading}>What Makes MAGSA Different</h3>

<p style={featureTitle}>More Than an Art School</p>

<p style={textStyle}>
  MAGSA is the only institution in Jaipur that brings together a professional
  Gallery, a fully equipped Studio, and a structured Academy under one roof,
  creating an environment where learning, making, and exhibiting happen in the
  same space and in constant conversation with one another.
</p>

<p style={featureTitle}>A Community, Not Just a Class</p>

<p style={textStyle}>
  Over nine years, MAGSA has built a genuine community of artists, students,
  and art lovers who return not only for the programmes but also for the
  people, the relationships, and the creative energy of the space.
</p>

<p style={featureTitle}>Education Through Art</p>

<p style={textStyle}>
  Our pioneering programme for children up to twelve years of age uses
  artistic practice as a tool for cognitive, analytical, and creative
  development, extending far beyond conventional art instruction.
</p>

<p style={featureTitle}>Industry Connections That Matter</p>

<p style={textStyle}>
  From Vogue India to Shoppers Stop, MAGSA's collaborations bring students and
  artists into direct contact with the professional creative world.
</p>

<p style={featureTitle}>Founded by a Practising Artist</p>

<p style={textStyle}>
  MAGSA is led by someone who actively creates art, not simply manages an
  institution. That difference is reflected in every programme, exhibition,
  and experience we offer.
</p>

<p style={featureTitle}>A Vision for the Future</p>

<p style={textStyle}>
  MAGSA continues to grow toward becoming a fully recognised professional art
  school, bringing international standards of artistic education and creative
  practice to Jaipur.
</p>

<div style={divider} />

<h3 style={sectionHeading}>The Place Itself</h3>

<p style={textStyle}>
  The MAGSA space in Jaipur is designed to feel unlike anywhere else—part
  gallery, part studio, part classroom, and entirely its own.
</p>

<p style={textStyle}>
  It is a place where the walls hold original artworks, where the tables are
  always ready for the next session, and where the atmosphere quietly insists
  that something creative is always possible.
</p>

<p style={textStyle}>
  Above all, it is a space of peace, exactly as its founder intended it to be.
</p>

<div style={divider} />

<h3 style={sectionHeading}>Come Be Part of It</h3>

<p style={textStyle}>
  Whether you are a student ready to begin, a collector drawn to the Gallery,
  a brand seeking a creative partner, or simply someone who loves art and
  wants to be around more of it, MAGSA welcomes you.
</p>

<p style={textStyle}>
  There is always room for another creative journey to begin.
</p>

        </div>
      </div>
    </section>
  );
}

/* STYLES */

const textStyle = {
  marginTop: "14px",
  color: "#4f4f4f",
  lineHeight: "1.85",
  fontSize: "clamp(0.98rem, 2.4vw, 1.05rem)",
};

const subHeading = {
  color: "#7A3E5C",
  marginBottom: "10px",
  fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
  fontWeight: 600,
  lineHeight: 1.18,
  letterSpacing: "0.02em",
  textAlign: "center" as const,
};

const sectionHeading = {
  marginTop: "30px",
  color: "#5CBCC3",
  fontSize: "clamp(1.28rem, 3.8vw, 1.48rem)",
  fontWeight: 600,
  lineHeight: 1.16,
  letterSpacing: "0.02em",
};

const divider = {
  marginTop: "30px",
  marginBottom: "10px",
  height: "1px",
  backgroundColor: "#eee",
};


const taglineStyle = {
  color: "#C77AA3",
  fontSize: "clamp(1rem, 2.8vw, 1.15rem)",
  fontWeight: 500,
  marginTop: "-6px",
  marginBottom: "10px",
  textAlign: "center" as const,
};

const pillarsStyle = {
  color: "#7A3E5C",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textAlign: "center" as const,
  margin: "22px 0",
  fontSize: "clamp(1rem, 2.8vw, 1.15rem)",
};

const featureTitle = {
  color: "#7A3E5C",
  fontWeight: 600,
  marginTop: "28px",
  marginBottom: "8px",
  fontSize: "clamp(1rem, 2.6vw, 1.12rem)",
  borderLeft: "4px solid #C77AA3",
  paddingLeft: "12px",
};
