import { Link } from "react-router-dom";

const stats = [
  { num: "1990", label: "Founded" },
  { num: "8", label: "Acre Campus" },
  { num: "1300+", label: "Students" },
  { num: "2", label: "Curricula — CBSE & IGCSE" },
];

const pillars = [
  {
    icon: "bi-mortarboard",
    title: "Academic Excellence",
    text: "A rigorous CBSE & IGCSE foundation that consistently ranks among India's top co-ed day schools.",
  },
  {
    icon: "bi-people",
    title: "Personalised Mentorship",
    text: "Low student-teacher ratios mean every child is known, guided and genuinely seen.",
  },
  {
    icon: "bi-globe-asia-australia",
    title: "Global Citizenship",
    text: "A curriculum that builds national identity alongside genuine international awareness.",
  },
  {
    icon: "bi-flower1",
    title: "Holistic Growth",
    text: "Academic and non-academic learning experiences are planned side by side, every single day.",
  },
];

const quickLinks = [
  { to: "/academics",img:, title: "Academics", text: "CBSE, IGCSE, and the Junior School pathway.", icon: "bi-journal-bookmark" },
  { to: "/campus-life", title: "Campus Life", text: "Labs, sports, arts and eight acres to explore.", icon: "bi-tree" },
  { to: "/news", title: "News & Events", text: "What's on, and what we're proud of.", icon: "bi-megaphone" },
];

export default function Home() {
  return (
    <>
      <header className="vvs-hero">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <p className="vvs-eyebrow">Vasant Kunj, New Delhi &middot; Est. 1990</p>
              <h1 className="vvs-hero-title">
                Excellence
                <br />
                in <em>Deed</em>.
              </h1>
              <p className="vvs-hero-sub">
                A co-educational day school on an eight-acre campus, where academic
                rigour and character are built side by side &mdash; through CBSE and
                IGCSE pathways, for classes Pre-Nursery to XII.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/academics" className="btn vvs-btn-primary">Explore Academics</Link>
                <Link to="/about" className="btn vvs-btn-outline">About the School</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="vvs-hero-media">
                <img src="/images/hero-campus.jpg" alt="Vasant Valley School campus" className="img-fluid rounded-4" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="vvs-stats row text-center gy-4 gy-lg-0">
            {stats.map((s) => (
              <div className="col-6 col-lg-3" key={s.label}>
                <span className="vvs-stat-num">{s.num}</span>
                <span className="vvs-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="vvs-section vvs-section-alt">
        <div className="container">
          <p className="vvs-eyebrow text-center">Why Vasant Valley</p>
          <h2 className="vvs-h2 text-center mb-5">Four ideas that shape every classroom</h2>
          <div className="row g-4">
            {pillars.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.title}>
                <div className="vvs-pillar">
                  <i className={`bi ${p.icon} vvs-pillar-icon`}></i>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <p className="vvs-eyebrow text-center">Find Out More</p>
          <h2 className="vvs-h2 text-center mb-5">Every page tells one part of the story</h2>
          <div className="row g-4">
            {quickLinks.map((q) => (
              <div className="col-md-4" key={q.to}>
                <Link to={q.to} className="vvs-quicklink">
                 <img src={p.image} alt="" className="vvs-pillar-bg" loading="lazy" aria-hidden="true" />
                  <i className={`bi ${q.icon}`}></i>
                  <h3>{q.title}</h3>
                  <p>{q.text}</p>
                  <span className="vvs-quicklink-cta">
                    View page <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vvs-cta">
        <div className="container text-center">
          <h2 className="vvs-cta-title">Begin your Vasant Valley journey</h2>
          <p className="vvs-cta-sub">Admissions open each January, subject to vacancy across sections.</p>
          <Link to="/contact" className="btn vvs-btn-light">Start an Application</Link>
        </div>
      </section>
    </>
  );
}
