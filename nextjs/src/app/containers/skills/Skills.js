import React, {useContext} from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import Fade from "@/app/util/Fade";
import { ThemeContext, themes } from "@/app/util/ThemeContext";

export default function Skills() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: themes[theme].text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={themes[theme]} />
    </div>
  );
}
