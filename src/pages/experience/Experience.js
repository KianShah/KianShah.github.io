import ExperiencesSection from "../../containers/experienceAccordion/ExperiencesSection.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import Fade from "react-reveal/Fade";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main">
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Fade right duration={2000} distance="40px">
        <ExperiencesSection sections={experience["sections"]} theme={theme} />
      </Fade>
    </div>
  );
}

export default Experience;
