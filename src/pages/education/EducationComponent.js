import React from "react";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import Fade from "react-reveal/Fade";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                As a recent UBC graduate, I actively participate in hackathons
                and other tech-related activities.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/*<Certifications theme={props.theme} /> TODO enable once we have enough certs*/}
      </div>
    </div>
  );
}

export default Education;
