import "./CertificationCard.css";
import { Fade } from "react-awesome-reveal";
import {useContext} from "react";
import {ThemeContext, themes} from "@/util/ThemeContext";

export default function CertificationCard({certificate}) {
  const {theme} = useContext(ThemeContext);

  return (
    <Fade duration={2000} triggerOnce>
      <style jsx>{`
        cert-card: {
          boxShadow: 0px 2px 5px ${certificate.color_code},
          border: 1px solid ${certificate.color_code}
        }
        cert-card:hover: {
          boxShadow: 0 5px 15px ${certificate.color_code}
        }
      `}</style>
      <div className="cert-card">
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay" />
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={`/images/${certificate.logo_path}`}
                alt={certificate.alt_name}
              />
            </div>
            {/* <div className="content-details fadeIn-top">
									<h3 className="content-title" style={{ color: theme.body }}>
										Certificate
									</h3>
								</div> */}
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: themes[theme].text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}