"use client"

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Fade } from "react-awesome-reveal";
import { projects, socialMediaLinks } from "@/portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { useContext } from "react";
import { ThemeContext, themes } from "@/Theme";

export default function Projects() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="projects-main">
      <style jsx>{`
        .general-btn {
          background-color: ${themes[theme].accentBright};
        }

        .general-btn:hover {
          box-shadow: 0px 5px 15px ${themes[theme].accentBright}
        }
      `}</style>
      
      <div className="basic-projects">
        <Fade duration={2000} triggerOnce>
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={themes[theme]} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: themes[theme].text }}
              >
                Projects
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: themes[theme].secondaryText }}
              >
                My projects make use of a vast variety of modern frameworks and tools. Most of my experience consists of developing full-stack projects and deploying them on the Cloud.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, ind) => (
          <ProjectCard repo={repo} ind={ind} key={ind} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <a className="general-btn" href={socialMediaLinks.github["link"]}>
        More Projects
      </a>
      <br />
      <br />
    </div>
  );
}