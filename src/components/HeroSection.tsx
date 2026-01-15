import React from "react";

interface HeroSectionProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
}

const HeroSection = ({
    backgroundImage,
    title,
    subtitle,
    description,
}: HeroSectionProps) => {
    return (
        <section className="hero full-width-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content-container">
                <div className="squangle-box" style={{ clipPath: "polygon(5% 0px, 100% 4%, 96% 95%, 0% 100%)" }}>
                    <div className="squangle-content">
                        <h2 className="hero-subtitle">{subtitle}</h2>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;