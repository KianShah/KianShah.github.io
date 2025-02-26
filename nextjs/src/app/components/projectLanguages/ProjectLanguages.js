import { Icon } from "@iconify/react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
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
                          alt="NativeBase"
                        />
                      </span>
                    ) : (
                      <Icon icon={logo.iconifyClass} />
                    )
                  }
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
