import { Link } from "react-router-dom";

const facilities = [
  { icon: "bi-flask", title: "Science & Computer Labs", image: "/public/images/Science Lab.jpg" },
  { icon: "bi-trophy", title: "Sports & Athletics", image: "/public/images/Soprts.jpg" },
  { icon: "bi-palette", title: "Arts & Performance", image: "/" },
  { icon: "bi-book", title: "Library", image: "/images/facility-library.svg" },
  { icon: "bi-heart", title: "Community Outreach", image: "/images/facility-outreach.svg" },
  { icon: "bi-compass", title: "Educational Tours", image: "/images/facility-tours.svg" },
];

export default function CampusLife() {
  return (
    <>
      <section className="vvs-page-header">
        <div className="container">
          <p className="vvs-eyebrow">Campus Life</p>
          <h1 className="vvs-h1">Eight acres, built for learning by doing</h1>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <div className="row g-4">
            {facilities.map((f) => (
              <div className="col-md-6 col-lg-4" key={f.title}>
                <div className="vvs-facility">
                  <img src={f.image} alt={f.title} loading="lazy" />
                  <div className="vvs-facility-body">
                    <i className={`bi ${f.icon}`}></i>
                    <h3>{f.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vvs-cta">
        <div className="container text-center">
          <h2 className="vvs-cta-title">Come see the campus for yourself</h2>
          <p className="vvs-cta-sub">Campus tours can be arranged alongside the admissions process.</p>
          <Link to="/contact" className="btn vvs-btn-light">Request a Visit</Link>
        </div>
      </section>
    </>
  );
}
