import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Studio", path: "/studio" },
  { name: "Academy", path: "/academy" },
  { name: "Founder", path: "/founder" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .magsa-navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.94);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid rgba(122, 62, 92, 0.14);
          }

          .magsa-navbar-inner {
            max-width: 1180px;
            margin: 0 auto;
            padding: 18px 36px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 36px;
          }

          .magsa-brand {
            min-width: max-content;
          }

          .magsa-brand-title {
            margin: 0;
            color: #7A3E5C;
            font-size: 1.15rem;
            font-weight: 600;
            letter-spacing: 0.03em;
            line-height: 1.1;
          }

          .magsa-brand-subtitle {
            display: block;
            margin-top: 5px;
            color: #5CBCC3;
            font-size: 0.72rem;
            font-weight: 500;
            letter-spacing: 0.08em;
          }

          .magsa-nav-strip {
            display: flex;
            align-items: center;
            border: 1px solid rgba(122, 62, 92, 0.22);
            border-radius: 999px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.72);
          }

          .magsa-nav-link {
            position: relative;
            padding: 11px 18px;
            color: #7A3E5C;
            font-size: 0.82rem;
            font-weight: 500;
            letter-spacing: 0.04em;
            line-height: 1;
            text-decoration: none;
            transition: color 0.28s ease, background-color 0.28s ease, transform 0.28s ease;
            white-space: nowrap;
          }

          .magsa-nav-link::after {
            content: "";
            position: absolute;
            left: 18px;
            right: 18px;
            bottom: 7px;
            height: 1px;
            border-radius: 999px;
            background: linear-gradient(90deg, #7A3E5C, #5CBCC3, #C77AA3);
            opacity: 0;
            transform: scaleX(0.25);
            transform-origin: center;
            transition: opacity 0.28s ease, transform 0.28s ease;
          }

          .magsa-nav-link + .magsa-nav-link {
            border-left: 1px solid rgba(122, 62, 92, 0.18);
          }

          .magsa-nav-link:hover,
          .magsa-nav-link.active {
            color: #5CBCC3;
            background: rgba(92, 188, 195, 0.045);
          }

          .magsa-nav-link:hover::after,
          .magsa-nav-link.active::after {
            opacity: 0.75;
            transform: scaleX(1);
          }

          @media (hover: hover) and (pointer: fine) {
            .magsa-nav-link:hover {
              transform: translateY(-1px);
            }

            .magsa-menu-toggle:hover {
              transform: translateY(-1px);
            }
          }

          .magsa-color-line {
            display: flex;
            height: 2px;
          }

          .magsa-menu-toggle {
            display: none;
          }

          @media (max-width: 767px) {
            .magsa-navbar-inner {
              padding: 14px 18px;
              flex-direction: row;
              align-items: center;
              gap: 18px;
            }

            .magsa-brand {
              text-align: left;
            }

            .magsa-brand-title {
              font-size: 1.02rem;
            }

            .magsa-brand-subtitle {
              margin-top: 4px;
              font-size: 0.62rem;
              letter-spacing: 0.06em;
            }

            .magsa-menu-toggle {
              display: inline-flex;
              width: 44px !important;
              height: 44px;
              min-height: 44px;
              max-width: 44px;
              padding: 0 !important;
              margin: 0;
              flex: 0 0 44px;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(122, 62, 92, 0.18);
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.86);
              cursor: pointer;
              transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
            }

            .magsa-menu-toggle:hover {
              border-color: rgba(92, 188, 195, 0.44);
              background: rgba(92, 188, 195, 0.08) !important;
              box-shadow: 0 8px 20px rgba(122, 62, 92, 0.08);
              opacity: 1;
            }

            .magsa-menu-lines {
              position: relative;
              width: 18px;
              height: 12px;
            }

            .magsa-menu-lines span {
              position: absolute;
              left: 0;
              width: 18px;
              height: 1.5px;
              border-radius: 999px;
              background: #7A3E5C;
              transition: transform 0.25s ease, top 0.25s ease, opacity 0.2s ease, background-color 0.25s ease;
            }

            .magsa-menu-lines span:nth-child(1) {
              top: 0;
            }

            .magsa-menu-lines span:nth-child(2) {
              top: 5px;
              background: #5CBCC3;
            }

            .magsa-menu-lines span:nth-child(3) {
              top: 10px;
            }

            .magsa-menu-toggle.open .magsa-menu-lines span:nth-child(1) {
              top: 5px;
              transform: rotate(42deg);
            }

            .magsa-menu-toggle.open .magsa-menu-lines span:nth-child(2) {
              opacity: 0;
            }

            .magsa-menu-toggle.open .magsa-menu-lines span:nth-child(3) {
              top: 5px;
              transform: rotate(-42deg);
            }

            .magsa-nav-strip {
              position: absolute;
              top: calc(100% + 1px);
              left: 0;
              right: 0;
              width: 100%;
              max-height: 0;
              padding: 0 18px;
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              border: 0;
              border-radius: 0;
              background: rgba(255, 255, 255, 0.98);
              box-shadow: 0 18px 34px rgba(122, 62, 92, 0.12);
              opacity: 0;
              transform: translateY(-8px);
              pointer-events: none;
              transition: max-height 0.32s ease, opacity 0.25s ease, transform 0.25s ease, padding 0.25s ease;
            }

            .magsa-nav-strip.open {
              max-height: 420px;
              padding: 10px 18px 16px;
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }

            .magsa-nav-link {
              width: 100%;
              max-width: 320px;
              padding: 14px 10px;
              color: #7A3E5C;
              font-size: 0.88rem;
              text-align: center;
              letter-spacing: 0.08em;
              line-height: 1.1;
            }

            .magsa-nav-link::after {
              left: 50%;
              right: auto;
              bottom: 7px;
              width: 22px;
              transform: translateX(-50%) scaleX(0.3);
            }

            .magsa-nav-link + .magsa-nav-link {
              border-left: 0;
              border-top: 1px solid rgba(122, 62, 92, 0.1);
            }

            .magsa-nav-link:hover,
            .magsa-nav-link.active {
              color: #5CBCC3;
              background: transparent;
            }

            .magsa-nav-link.active::after {
              display: block;
              opacity: 0.8;
              transform: translateX(-50%) scaleX(1);
            }

            .magsa-nav-link:hover::after {
              opacity: 0.55;
              transform: translateX(-50%) scaleX(1);
            }
          }
        `}
      </style>

      <nav className="magsa-navbar" aria-label="Primary navigation">
        <div className="magsa-navbar-inner">
          <div className="magsa-brand">
            <h2 className="magsa-brand-title">Mandala Art</h2>
            <span className="magsa-brand-subtitle">
              Gallery • Studio • Academy
            </span>
          </div>

          <button
            type="button"
            className={`magsa-menu-toggle ${isMenuOpen ? "open" : ""}`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="magsa-mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="magsa-menu-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div
            id="magsa-mobile-navigation"
            className={`magsa-nav-strip ${isMenuOpen ? "open" : ""}`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "magsa-nav-link active" : "magsa-nav-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="magsa-color-line" aria-hidden="true">
        <div style={{ flex: 1, backgroundColor: "#7A3E5C" }} />
        <div style={{ flex: 1, backgroundColor: "#5CBCC3" }} />
        <div style={{ flex: 1, backgroundColor: "#C77AA3" }} />
      </div>
    </>
  );
}
