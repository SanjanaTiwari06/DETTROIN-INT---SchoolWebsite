import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="vvs-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <Link className="vvs-brand mb-3 d-inline-flex" to="/">
              <span className="vvs-brand-mark vvs-brand-mark-light">VV</span>
              <span className="vvs-brand-text">
                <span className="vvs-brand-name text-white">Vasant Valley</span>
                <span className="vvs-brand-tag">Excellence in Deed</span>
              </span>
            </Link>
            <p className="vvs-footer-text">
              Sector C, Vasant Kunj, New Delhi &mdash; a self-financing, inclusive day
              school since 1990.
            </p>
            <div className="vvs-social">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="X"><i className="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <h4 className="vvs-footer-heading">Explore</h4>
            <ul className="vvs-footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/campus-life">Campus Life</Link></li>
              <li><Link to="/news">News &amp; Events</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6">
            <h4 className="vvs-footer-heading">Admissions</h4>
            <ul className="vvs-footer-links">
              <li><Link to="/contact">How to Apply</Link></li>
              <li><Link to="/contact">Fee Structure</Link></li>
              <li><Link to="/contact">Eligibility</Link></li>
              <li><Link to="/contact">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h4 className="vvs-footer-heading">Contact</h4>
            <ul className="vvs-footer-contact">
              <li><i className="bi bi-geo-alt"></i> Sector C, Vasant Kunj, New Delhi</li>
              <li><i className="bi bi-telephone"></i> +91 11 2689 2787</li>
              <li><i className="bi bi-envelope"></i> info@vasantvalley.org</li>
            </ul>
          </div>
        </div>

        <hr className="vvs-footer-rule" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span className="vvs-footer-copy">
            &copy; 2026 Vasant Valley School. Redesign concept &mdash; not an official site.
          </span>
          <span className="vvs-footer-copy">
            Built for the Dettroin Full Stack Internship assignment.
          </span>
        </div>
      </div>
    </footer>
  );
}
