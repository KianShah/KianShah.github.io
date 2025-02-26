import "./Certifications.css";
import { Fade } from "react-awesome-reveal";
import { certifications } from "@/portfolio.js";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { useContext } from "react";
import { ThemeContext, themes } from "@/app/util/ThemeContext";

function Certifications() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade direction="bottom" duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: themes[theme].text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map(cert => {
          return <CertificationCard certificate={cert} theme={themes[theme]} />;
        })}
      </div>
    </div>
  );
}

export default Certifications;
