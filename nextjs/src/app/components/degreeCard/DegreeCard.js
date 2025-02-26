import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";
import { ThemeContext, themes } from "@/util/ThemeContext";
import { useContext } from "react";

export default function DegreeCard({ degree }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="degree-card">
      <style jsx>{`
        .cardBody {
          border-bottom: 1px solid ${themes[theme].accentColor};
          border-left: 1px solid ${themes[theme].accentColor};
          border-right: 1px solid ${themes[theme].accentColor};
          border-radius: 7px;
          width: 90%;
          margin: 10px;
          box-shadow: 0px 1px 5px ${themes[theme].accentColor};
          transition: all 0.2s ease-in-out;
        }

        .cardBody:hover {
          color: rgba(255, 255, 255, 1);
          box-shadow: 0 5px 15px ${themes[theme].accentColor};
        }

        @media (max-width: 768px) {
          .cardBody {
            width: 100%;
          }
        }

        .buttonVisit {
          text-decoration: none;
          color: rgba(255, 255, 255, 1);
          background: ${themes[theme].accentColor};
          padding: 15px 15px;
          margin-top: 25px;
          border-radius: 4px;
          border-width: 0px;
          margin-bottom: 20px;
          width: 200px;
          height: 50px;
          font-weight: bold;
          font-family: "Google Sans Regular", sans-serif;
          font-size: 17px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          display: inline-block;
        }

        .buttonVisit:hover {
          color: rgba(255, 255, 255, 1);
          box-shadow: 0 5px 10px ${themes[theme].accentColor};
        }

        .degreeCard {
          width: 220px;
          height: auto;
          border-radius: 50%;
          padding: 10px;
          border: 1px solid ${themes[theme].accentColor};
          margin-right: 50px;
          box-shadow: 0px 0px 5px ${themes[theme].accentColor};
          transition: all 0.2s ease-in-out;
        }

        .degreeCard:hover {
          color: rgba(255, 255, 255, 1);
          box-shadow: 0 5px 15px ${themes[theme].accentColor};
        }

        @media (max-width: 768px) {
          .degreeCard {
            margin-left: 50px;
            margin-bottom: 15px;
            width: 175px;
          }
        }
      `}</style>

      <Flip direction="left" duration={1000} triggerOnce>
        <div className="degreeCard">
          <a href={degree.website_link}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(-70%) rotate(180deg)",
              }}
              src={`/images/${degree.logo_path}`}
              alt={degree.alt_name}
            />
          </a>
        </div>
      </Flip>
      <Fade duration={2000} triggerOnce>

        <div className="cardBody" style={{width: "100%", height: "100%"}}>
          <div
            className="body-header"
            style={{ backgroundColor: themes[theme].accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, ind) => {
              return (
                <p
                  className="content-list"
                  style={{ color: themes[theme].text }}
                  key={ind}
                >
                  {sentence}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}