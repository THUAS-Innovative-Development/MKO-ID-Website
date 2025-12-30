import "./index.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  // dummy project data
  const projects = [
    {
      title: "Paardenstal",
      image: `${basePath}/assets/img/ps.png`,
      link: "/project/paardenstal",
    },
    {
      title: "Smart Kitchen",
      image: `${basePath}/assets/img/sk.png`,
      link: "/project/smart-kitchen",
    },
    {
      title: "Green Innovation",
      image: `${basePath}/assets/img/gi.png`,
      link: "/project/green-innovation",
    },
  ];

  const heroBg = `${basePath}/assets/img/dutch_innovation_factory_cover.jpeg`;

  return (
    <div className="home-page">
      <section
        className="hero full-width-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-content">
          <div className="hero-block">
            <h1>Dit is Innovative Development</h1>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="color-blocks">
          <div className="block" style={{ backgroundColor: "#00B1D2" }}></div>
          <div className="block" style={{ backgroundColor: "#D24E4B" }}></div>
          <div className="block" style={{ backgroundColor: "#2D3A4B" }}></div>
          <div className="block" style={{ backgroundColor: "#A4A900" }}></div>
          <div className="block" style={{ backgroundColor: "#FFC500" }}></div>
          <div className="block" style={{ backgroundColor: "#666C84" }}></div>
        </section>

        <section className="projects">
          <div className="flex">
            <h2 className="section-title">De leukste projecten bij ID</h2>
            <a>Bekijk alle →</a>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${p.image})` }}
                >
                  <div className="overlay"></div>
                  <div className="project-text">
                    <h3>{p.title}</h3>
                    Lees meer →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
