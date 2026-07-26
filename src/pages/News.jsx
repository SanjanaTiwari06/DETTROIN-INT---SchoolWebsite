import { useState } from "react";

const groups = {
  events: [
    { date: "18 NOV", title: "Founder's Day", text: "Annual celebration marking the school's founding, with performances across Junior and Senior School." },
    { date: "JAN", title: "Admissions Open", text: "Applications open for the new academic session across eligible year groups." },
    { date: "JUN", title: "Class XII Results", text: "CBSE Class XII marksheets available for collection from the Senior School office." },
  ],
  notices: [
    "Marksheet collection window: Senior School Office, 10:00 a.m – 3:00 p.m, weekdays.",
    "Vasant Valley Centre for Excellence in Education — new initiative announcement.",
    "Admission criteria published as per Directorate of Education, Delhi Govt guidelines.",
  ],
  achievements: [
    "Ranked among the top co-ed day schools in India, EducationWorld India School Rankings.",
    "Students consistently represent the school in national science, arts and sporting events.",
  ],
};

const tabs = [
  { id: "events", label: "Upcoming Events" },
  { id: "notices", label: "Notices" },
  { id: "achievements", label: "Achievements" },
];

export default function News() {
  const [active, setActive] = useState("events");

  return (
    <>
      <section className="vvs-page-header">
        <div className="container">
          <p className="vvs-eyebrow">Stay Connected</p>
          <h1 className="vvs-h1">News &amp; Events</h1>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <ul className="nav nav-pills vvs-pills justify-content-center">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  type="button"
                  className={`nav-link${active === tab.id ? " active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            {active === "events" && (
              <div className="row g-4">
                {groups.events.map((e) => (
                  <div className="col-md-4" key={e.title}>
                    <div className="vvs-event-card">
                      <span className="vvs-event-date">{e.date}</span>
                      <h3>{e.title}</h3>
                      <p>{e.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {active === "notices" && (
              <div className="vvs-notice-list">
                {groups.notices.map((n) => (
                  <div className="vvs-notice-item" key={n}>
                    <i className="bi bi-file-earmark-text"></i>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            )}

            {active === "achievements" && (
              <div className="vvs-notice-list">
                {groups.achievements.map((a) => (
                  <div className="vvs-notice-item" key={a}>
                    <i className="bi bi-award"></i>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
