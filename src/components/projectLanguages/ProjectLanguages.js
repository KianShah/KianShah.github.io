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
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline-languages">
                  {
                    // Custom svg for nativebase because iconify doesn't have it :(
                    logo.name === "NativeBase" ? (
                      <span className="iconify">
                        <img
                          src="/images/nativebase.svg"
                          width="30px"
                          alt="NativeBase"
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