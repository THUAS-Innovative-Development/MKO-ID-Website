import { createFileRoute } from '@tanstack/react-router';
import "../index.css";
import ps from "../assets/img/ps.png";
import sk from "../assets/img/sk.png";
import gi from "../assets/img/gi.png";

export const Route = createFileRoute('/')({
    component: Index,
})

export default function Index() {
    // dummy project data
    const projects = [
        {
            title: "Paardenstal",
            image: ps,
            link: "/project/paardenstal",
        },
        {
            title: "Smart Kitchen",
            image: sk,
            link: "/project/smart-kitchen",
        },
        {
            title: "Green Innovation",
            image: gi,
            link: "/project/green-innovation",
        },
    ];

    return (
        <div className="home-page">
            <section className="hero full-width-hero">
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
                    <div className='flex'>
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