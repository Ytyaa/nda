import React from "react";
import "./InviteSection.css";

const inviteData = [
    {
        title: "Устойчивое развитие",
        text: "Мы реализуем проекты, направленные на долгосрочные позитивные изменения в обществе.",
    },
    {
        title: "Социальная поддержка",
        text: "Оказываем помощь тем, кто оказался в трудной жизненной ситуации, и поддерживаем инициативы взаимопомощи.",
    },
    {
        title: "Личностный рост",
        text: "Создаём условия для развития навыков, самореализации и раскрытия потенциала каждого человека.",
    },
    {
        title: "Активное сообщество",
        text: "Объединяем людей через добровольческие инициативы и совместные проекты на благо общества.",
    },
];

const InviteSection = () => {
    const leftItems = inviteData.filter((_, i) => i < 2);
    const rightItems = inviteData.filter((_, i) => i >= 2);

    return (
        <section className="invite-section">
            <div className="container">
                <h1>Приглашаем к нам!</h1>
                <h2>
                    Давайте развивать полезные инициативы вместе — ваши идеи, участие и поддержка помогают нам двигаться
                    вперёд.
                </h2>

                <div className="invite-columns">
                    <div className="invite-column">
                        {leftItems.map((item, index) => (
                            <div className="invite-item" key={index}>
                                <div className="invite-item-header">
                                    <img src="/Image/okeyCopi.svg" alt="Галочка"/>
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="invite-column">
                        {rightItems.map((item, index) => (
                            <div className="invite-item" key={index}>
                                <div className="invite-item-header">
                                    <img src="/Image/okeyCopi.svg" alt="Галочка"/>
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InviteSection;