import { Icon } from "@iconify/react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap"; // Used to show a tooltip when hovering over a software skill

export default function ProjectLanguages({logos}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo) => (
              <OverlayTrigger
                key={logo.name}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline-languages">
                  {
                    // Custom svg for some because iconify doesn't have it
                    logo.iconifyClass === "" ? (
                      <span className="iconify">
                        <img
                          src={`/images/${logo.name}.svg`}
                          width="30px"
                          alt={logo.name}
                        />
                      </span>
                    ) : (
                      <Icon icon={logo.iconifyClass} color="#586069" />
                    )
                  }
                </li>
              </OverlayTrigger>
            ))
          }
        </ul>
      </div>
    </div>
  );
}