import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Movix Imdb Clone",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
    },
    {
        id: 2,
        name: "Rayban Concept Website",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
        link: "https://raybanclone.netlify.app/",
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
        },
        link: "https://cynthiaugwu-clone-project.netlify.app/",
    },
    {
        id: 4,
        name: "Sticky Notes App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.png"),
        },
    },
    {
        id: 5,
        name: "Youtube Clone",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.png"),
        },
    },
    {
        id: 6,
        name: "Google Clone",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "MorseCode Convertor",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.png"),
        },
        link: "https://morsecode-translator-project.netlify.app/",
    },
    {
        id: 8,
        name: "Todo App",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
