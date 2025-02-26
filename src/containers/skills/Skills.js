import React, {useContext} from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";
import { ThemeContext, themes } from "@/util/ThemeContext";

export default function Skills() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade duration={2000} triggerOnce>
          <h1 className="skills-header" style={{ color: themes[theme].text }}>
            Here&apos;s what I do
          </h1>
        </Fade>
      </div>
      <SkillSection />
    </div>
  );
}
