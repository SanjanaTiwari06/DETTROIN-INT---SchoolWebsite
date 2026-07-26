import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/news", label: "News & Events" },
  { to: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg vvs-navbar sticky-top ${scrolled ? "shadow-active" : ""}`}>
      <div className="container">
        <NavLink className="navbar-brand vvs-brand" to="/" onClick={() => setOpen(false)}>
          <span className="vvs-brand-mark">VV</span>
          <span className="vvs-brand-text">
            <span className="vvs-brand-name">Vasant Valley</span>
            <span className="vvs-brand-tag">Excellence in Deed</span>
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${open ? "show" : ""}`}>
          <ul className="navbar-nav align-items-lg-center gap-lg-1">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  to={link.to}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <NavLink className="btn vvs-btn-enquire" to="/contact" onClick={() => setOpen(false)}>
                Enquire Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
