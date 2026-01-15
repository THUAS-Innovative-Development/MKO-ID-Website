import "./index.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/src/components/HeroSection";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const heroBg = "/assets/img/dif.jpg";

  const mosaicTiles = [
    { image: `${basePath}/assets/img/lighthouse.jpg`, title: "Titel 1" },
    { image: `${basePath}/assets/img/lighthouse2.jpg`, title: "Titel 2" },
    { image: `${basePath}/assets/img/suriname_ingang.jpg`, title: "Titel 3" },
    { image: `${basePath}/assets/img/lighthouse2.jpg`, title: "Titel 4" },
    { image: `${basePath}/assets/img/drone.jpg`, title: "Titel 5" },
    { image: `${basePath}/assets/img/lighthouse.jpg`, title: "Titel 6" },
  ];

  // dummy project data
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
    <div className="home-page flex-1 w-full min-w-0">
      <HeroSection
        backgroundImage={`${basePath}${heroBg}`}
        subtitle="HBO-ICT Differentiatie"
        title="Innovative Development"
        description="Innovatieve oplossingen bedenken en uitvoeren voor bedrijven en organisaties. Flexibel, en out of the box."
      />

      <div className="container">
        <section className="squangle-mosaic">
          {mosaicTiles.map((tile, index) => (
            <div key={index} className="mosaic-item group">
              <div
                className={`squangle-tile tile-${index + 1}`}
                style={{ backgroundImage: `url(${tile.image})` }}
              ></div>

              <div className="tile-text">
                <h3>
                  {tile.title}
                </h3>
                <ArrowRight className="arrow-icon text-[#9EA700]" size={20} />
              </div>
            </div>
          ))}
        </section>

        <section className="projects">
          <div className="section-header">
            <h2 className="section-title">De leukste projecten bij ID</h2>
            <Link href="/projects" className="view-all-link">
              Bekijk alle <ArrowRight className="arrow-icon ml-2" size={20} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <div className="project-image" style={{ backgroundImage: `url(${p.image})` }}>
                  <div className="overlay"></div>
                  <div className="project-text">
                    <h3>{p.title}</h3>
                    <p className="project-description">{p.description}</p>
                    <Link className="read-more-link" href={`/projects${p.link}`}> Lees meer <ArrowRight className="arrow-icon" size={20} /></Link>
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