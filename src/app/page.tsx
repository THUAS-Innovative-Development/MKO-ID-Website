import "./index.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const heroBg = `${basePath}/assets/img/dif.jpg`;

  const mosaicTiles = [
    { image: `${basePath}/assets/img/lighthouse.jpg`, title: "Titel 1" },
    { image: `${basePath}/assets/img/lighthouse2.jpg`, title: "Titel 2" },
    { image: `${basePath}/assets/img/suriname_ingang.jpg`, title: "Titel 3" },
    { image: `${basePath}/assets/img/lighthouse2.jpg`, title: "Titel 4" },
    { image: `${basePath}/assets/img/drone.jpg`, title: "Titel 5" },
    { image: `${basePath}/assets/img/lighthouse.jpg`, title: "Titel 6" },
  ];

  const projects = [
    {
      title: "Paardenstal",
      description: "Een innovatief beheersysteem voor moderne maneges.",
      image: `${basePath}/assets/img/ps.png`,
      link: "/paardenstal",
    },
    {
      title: "Smart Kitchen",
      description: "Slimme integratie van IT in de professionele keuken.",
      image: `${basePath}/assets/img/sk.png`,
      link: "/smart-kitchen",
    },
    {
      title: "Green Innovation",
      description: "Technologie voor voedselbossen.",
      image: `${basePath}/assets/img/gi.png`,
      link: "/green-innovation",
    },
  ];

  return (
    <main className="l-page">
      <div className="home-page flex-1 w-full min-w-0">
        <section
          className="hero full-width-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="hero-overlay"></div>

          {/* ✅ Consistente padding/container */}
          <div className="l-container hero-content-container">
            <div
              className="squangle-box"
              style={{
                clipPath: "polygon(5% 0px, 100% 4%, 96% 95%, 0% 100%)",
              }}
            >
              <div className="squangle-content">
                {/* ✅ Text styling via custom classes */}
                <h2 className="t-kicker">HBO-ICT Differentiatie</h2>
                <h1 className="t-hero">Innovative Development</h1>
                <p className="t-lead">
                  Innovatieve oplossingen bedenken en uitvoeren voor bedrijven en
                  organisaties. Flexibel, en out of the box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Consistente page padding zoals afgesproken */}
        <div className="l-container">
          <section className="squangle-mosaic">
            {mosaicTiles.map((tile, index) => (
              <div key={index} className="mosaic-item group">
                <div
                  className={`squangle-tile tile-${index + 1}`}
                  style={{ backgroundImage: `url(${tile.image})` }}
                ></div>

                <div className="tile-text">
                  <h3 className="t-card-title">{tile.title}</h3>
                  <ArrowRight className="arrow-icon text-[#9EA700]" size={20} />
                </div>
              </div>
            ))}
          </section>

          <section className="projects">
            <div className="section-header">
              <h2 className="t-h2">De leukste projecten bij ID</h2>
              <Link href="/projects" className="t-link">
                Bekijk alle <ArrowRight className="arrow-icon ml-2" size={20} />
              </Link>
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
                      <h3 className="t-card-title">{p.title}</h3>
                      <p className="t-body text-white/90">{p.description}</p>

                      <Link
                        className="t-link text-white border-white/40 hover:border-white"
                        href={`/projects${p.link}`}
                      >
                        Lees meer <ArrowRight className="arrow-icon" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
