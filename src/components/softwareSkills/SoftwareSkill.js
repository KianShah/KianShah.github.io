import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap"; // Used to show a tooltip when hovering over a software skill
import { Icon } from "@iconify/react";

export default function SoftwareSkill({logos}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map(logo => (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <Icon
                    icon={logo.fontAwesomeClassname}
                    style={logo.style}
                  />
                </li>
              </OverlayTrigger>
            )
          )}
        </ul>
      </div>
    </div>
  );
}