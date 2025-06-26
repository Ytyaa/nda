import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <>
            <section className="hero" id="main">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Мы содействуем улучшению качества жизни и укреплению сообществ.
                    </h1>
                    <p className="hero__description">
                        Мы содействуем улучшению качества жизни людей, поддерживая инициативы, которые развивают
                        сообщества, раскрывают потенциал личности и способствуют устойчивому будущему.
                        <span><a href="">Ознакомиться с положением</a></span>
                    </p>

                    <a href="#" className="hero__button">Скачать анкету</a>

                </div>
            </section>
        </>
    );
};

export default HeroSection;