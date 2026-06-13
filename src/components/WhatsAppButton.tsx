export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/919571230003"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            marginTop: 0,
            padding: "10px 20px",
            backgroundColor: "#5CBCC3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "0.9rem",
          }}
        >
          Contact on WhatsApp
        </button>
      </a>
    );
  }
