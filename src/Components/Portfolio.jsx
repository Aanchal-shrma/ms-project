/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "frontend portfolio website 🎉",
    description:
      "My Portfolio website built with React JS, tailwind CSS and javascript fundamentals as well my portfolio website defines me by all means.",
    url: "https://aanchal-portfolio.vercel.app",
  },
  {
    title: "Tic Tac Toe game",
    description:
      "which is completely developed by HTML(hyper text markup language), CSS(cascading style sheet) and JS(javascript).",
    url: "https://aanchal-shrma.github.io/tic-tac-toe-game/",
  },
  {
    title: "Stone paper scissor",
    description:
      "which is completely developed by HTML(hyper text markup language), CSS(cascading style sheet) and JS(javascript).",
    url: "https://aanchal-shrma.github.io/stone-paper-scissor-/",
  },
  {
    title: "Quiz game",
    description:
      "Quiz game completely built with React JS, tailwind CSS and javascript fundamentals as well.",
    url: "https://mcq-game-eight.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
