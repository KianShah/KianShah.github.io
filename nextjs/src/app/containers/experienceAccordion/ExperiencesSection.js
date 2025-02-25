import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperiencesSection(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        {props.sections.map((section) => (
          <div key={section.title} style={{ paddingTop: "10px" }}>
            <h3 style={{ textAlign: "center" }}>{section.title}</h3>
            {section["experiences"].map((experience, ind) => (
              <ExperienceCard experience={experience} theme={theme} key={ind} />
            ))}
          </div>
        ))}
      </ThemeProvider>
    </div>
  );
}

export default ExperiencesSection;
