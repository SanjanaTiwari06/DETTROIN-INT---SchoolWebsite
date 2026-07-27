export default function About() {
  return (
    <>
      <section className="vvs-page-header">
        <div className="container">
          <p className="vvs-eyebrow">About the School</p>
          <h1 className="vvs-h1">A community built on cooperation, not competition</h1>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <img
                src="https://delhinurseryschooladmission.com/wp-content/uploads/2024/11/schoolreopens_0309202110-scaled-1.jpg"
                alt="Students at Vasant Valley School"
                className="img-fluid rounded-4 vvs-shadow"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <p className="vvs-body">
                Since 1990, Vasant Valley School has grown into one of Delhi's most
                respected institutions &mdash; a self-financing, inclusive day school
                where the school day blends academic and non-academic learning
                experiences by design.
              </p>
              <p className="vvs-body">
                We inculcate ethical values, nurture original thinking, and encourage
                every student to develop both a strong sense of national identity and
                an outward-looking global citizenship.
              </p>
              <ul className="vvs-checklist">
                <li>Affiliated to CBSE, with IGCSE introduced for classes IX &amp; X</li>
                <li>AS &amp; A Levels offered for classes XI &amp; XII</li>
                <li>Fully equipped science, computer &amp; language labs</li>
                <li>Eight-acre campus in Vasant Kunj, New Delhi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="vvs-section vvs-section-alt">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="vvs-pillar">
                <i className="bi bi-award vvs-pillar-icon"></i>
                <h3>Our Founding</h3>
                <p>Founded in 1990 as a self-financing, inclusive day school on eight acres in Vasant Kunj.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vvs-pillar">
                <i className="bi bi-people vvs-pillar-icon"></i>
                <h3>Our Community</h3>
                <p>Around 1,300 students learn together across the Junior and Senior School.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vvs-pillar">
                <i className="bi bi-compass vvs-pillar-icon"></i>
                <h3>Our Approach</h3>
                <p>Every school day is planned with equal focus on academic and non-academic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
