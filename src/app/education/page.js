"use client"

import {useContext} from "react";
import Educations from "../containers/education/Educations";
import Certifications from "../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";
import { ThemeContext, themes } from "@/util/ThemeContext";

function Education() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={themes[theme]} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: themes[theme].text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: themes[theme].text }}>
                Basic Qualification and Certifications
              </h3>
            </div>
          </div>
        </Fade>
        <Educations />
        {/*<Certifications /> TODO enable once we have enough certs*/}
      </div>
    </div>
  );
}

export default Education;
