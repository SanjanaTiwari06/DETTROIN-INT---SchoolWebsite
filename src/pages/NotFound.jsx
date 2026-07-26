import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="vvs-section text-center">
      <div className="container">
        <p className="vvs-eyebrow">404</p>
        <h1 className="vvs-h1">This page hasn't been built yet</h1>
        <p className="vvs-body">Let's get you back to somewhere useful.</p>
        <Link to="/" className="btn vvs-btn-primary mt-3">Back to Home</Link>
      </div>
    </section>
  );
}
