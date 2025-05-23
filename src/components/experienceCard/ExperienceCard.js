import { useContext } from "react";
import "./ExperienceCard.css";
import { ThemeContext, themes } from "@/Theme";

export default function ExperienceCard({ experience }) {
  const {theme} = useContext(ThemeContext)

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <a
          href={experience["company_url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="experience-card-logo"
            src={`/images/${experience["logo_path"]}`}
            alt=""
          />
        </a>
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: themes[theme].text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: themes[theme].secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: themes[theme].secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: themes[theme].secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: themes[theme].text, whiteSpace: "pre-line" }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
}