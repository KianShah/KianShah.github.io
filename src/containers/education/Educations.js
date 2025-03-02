import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "@/portfolio.js";
import { Fade } from "react-awesome-reveal";
import { ThemeContext, themes } from "@/Theme";
import { useContext } from "react";


export default function Educations() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade direction="bottom" duration={2000} triggerOnce>
          <h1 className="educations-header" style={{ color: themes[theme].text }}>
            Degrees
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => (
          <DegreeCard degree={degree} key={degree.title} />
        ))}
      </div>
    </div>
  );
}