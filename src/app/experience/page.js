"use client"

import ExperiencesSection from "@/containers/experienceAccordion/ExperiencesSection.js";
import "./Experience.css";
import {Fade} from "react-awesome-reveal";
import ExperienceImg from "./ExperienceImg.js";
import { useContext } from "react";
import { ThemeContext, themes } from "@/Theme.js";

export default function Experience() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="experience-main">
      <div className="basic-experience">
        <Fade duration={2000} triggerOnce>
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={themes[theme]} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: themes[theme].text }}
              >
                Experience
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: themes[theme].text }}
              >
                Work and Volunteer experience
              </h3>
            </div>
          </div>
        </Fade>
      </div>
      <Fade duration={1500} triggerOnce>
        <ExperiencesSection />
      </Fade>
    </div>
  );
}