import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this is a static front-end assignment.
    setSubmitted(true);
  };

  return (
    <>
      <section className="vvs-page-header">
        <div className="container">
          <p className="vvs-eyebrow">Get in Touch</p>
          <h1 className="vvs-h1">We'd love to hear from you</h1>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h3 className="vvs-contact-heading">Visit or Write to Us</h3>
              <ul className="vvs-footer-contact vvs-contact-list">
                <li><i className="bi bi-geo-alt"></i> Sector C, Vasant Kunj, New Delhi</li>
                <li><i className="bi bi-telephone"></i> +91 11 2689 2787</li>
                <li><i className="bi bi-envelope"></i> info@vasantvalley.org</li>
                <li><i className="bi bi-clock"></i> Mon–Fri, 8:00 a.m – 3:00 p.m</li>
              </ul>
            </div>

            <div className="col-lg-7">
              {submitted ? (
                <div className="vvs-form-success">
                  <i className="bi bi-check-circle"></i>
                  <h3>Thank you!</h3>
                  <p>Your enquiry has been noted. Our admissions team will get back to you shortly.</p>
                </div>
              ) : (
                <form className="vvs-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input className="form-control" id="name" type="text" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input className="form-control" id="phone" type="tel" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input className="form-control" id="email" type="email" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn vvs-btn-primary">Send Enquiry</button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
