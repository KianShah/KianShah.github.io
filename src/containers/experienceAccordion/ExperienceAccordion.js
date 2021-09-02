import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion>
          {props.sections.map((section) => (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
            >
              {section["experiences"].map((experience, ind) => {
                return (
                  <ExperienceCard
                    experience={experience}
                    theme={theme}
                    key={ind}
                  />
                );
              })}
            </Panel>
          ))}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
