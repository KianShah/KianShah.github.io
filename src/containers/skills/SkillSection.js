import "./Skills.css";
import { useContext } from "react";
import {ThemeContext, themes} from "@/Theme";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import { skills } from "@/portfolio.js";
import { Slide } from "react-awesome-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg({fileName}) {
  const {theme} = useContext(ThemeContext);

  if (fileName === "FullStackImg")
    return <FullStackImg theme={themes[theme]} />;
  else if (fileName === "CloudInfraImg")
    return <CloudInfraImg theme={themes[theme]} />;
}

export default function SkillSection() {
  const {theme} = useContext(ThemeContext);

  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={index}>
              <Slide direction="left" duration={2000} triggerOnce>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} />
                </div>
              </Slide>

              <div className="skills-text-div">
                <Slide direction="right" duration={1000} damping={0.2} triggerOnce cascade>
                  <h1 className="skills-heading" style={{ color: themes[theme].text }}>
                    {skill.title}
                  </h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div>
                    {skill.skills.map((skillSentence, ind) => (
                      <p
                        className="subTitle skills-text"
                        style={{ color: themes[theme].secondaryText }}
                        key={ind}
                      >
                        {skillSentence}
                      </p>
                    ))}
                  </div>
                </Slide>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div" key={index}>
              <div className="skills-text-div">
                <Slide direction="left" duration={1000} damping={0.2} triggerOnce cascade>
                  <h1 className="skills-heading" style={{ color: themes[theme].text }}>
                    {skill.title}
                  </h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div style={{marginLeft: "10%"}}>
                    {skill.skills.map((skillSentence, ind) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: themes[theme].secondaryText }}
                          key={ind}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Slide>
              </div>
              <Slide direction="right" duration={2000} triggerOnce>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} />
                </div>
              </Slide>
            </div>
          );
        }
      })}
    </div>
  );
}