import ExperienceCard from "@/components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { themes, ThemeContext } from "@/Theme";
import { useContext } from "react";
import {experience} from "@/portfolio";

export default function ExperiencesSection() {
  const { theme } = useContext(ThemeContext);
  const sections = experience["sections"];

  return (
    <div className="experience-accord" style={{backgroundColor: themes[theme].backgroundColor}}>
        {sections.map((section) => (
          <div key={section.title} style={{ paddingTop: "10px", color: themes[theme].text }}>
            <h3 style={{ textAlign: "center" }}>{section.title}</h3>
            {section["experiences"].map((exp, ind) => (
              <ExperienceCard experience={exp} key={ind} />
            ))}
          </div>
        ))}
    </div>
  );
}