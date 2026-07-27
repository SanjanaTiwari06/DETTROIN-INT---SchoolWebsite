import { useState } from "react";

const tabs = [
  {
    id: "cbse",
    label: "CBSE Pathway",
    title: "Central Board of Secondary Education",
    text: "Our core CBSE stream runs from the Junior School through Class XII, with marksheets and results processed each June for the graduating batch. Science, Commerce and Humanities streams are offered at the senior level.",
    image: "/public/images/CBSE.jpg",
    alt: "CBSE classroom",
  },
  {
    id: "igcse",
    label: "IGCSE & A Levels",
    title: "IGCSE, AS & A Levels",
    text: "Introduced for Classes IX and X, the IGCSE curriculum gives students an internationally benchmarked alternative, continuing into AS and A Levels for Classes XI and XII.",
    image: "/public/images/ICSE.jpg",
    alt: "IGCSE classroom",
  },
  {
    id: "junior",
    label: "Junior School",
    title: "Junior School",
    text: "The Junior School lays the groundwork for everything that follows — building curiosity, confidence and foundational skills before students move into the Senior School.",
    image: "/public/images/JuniorSchool.jpg",
    alt: "Junior school students",
  },
];

export default function Academics() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <>
      <section className="vvs-page-header">
        <div className="container">
          <p className="vvs-eyebrow">Academics</p>
          <h1 className="vvs-h1">Two curricula, one philosophy</h1>
        </div>
      </section>

      <section className="vvs-section">
        <div className="container">
          <ul className="nav vvs-tabs justify-content-center" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === tab.id}
                  className={`nav-link${active === tab.id ? " active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="vvs-tab-content mt-4">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h3>{activeTab.title}</h3>
                <p className="vvs-body">{activeTab.text}</p>
              </div>
              <div className="col-lg-5">
                <img src={activeTab.image} alt={activeTab.alt} className="img-fluid rounded-4" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
