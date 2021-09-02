import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {Object.keys(socialMediaLinks).map((socialMedia) => (
        <a
          href={socialMediaLinks[socialMedia]}
          className={`icon-button ${socialMedia}`}
          target="_blank"
          rel="noopener noreferrer"
          key={socialMedia}
          name={socialMedia}
        >
          <i className={`fab fa-${socialMedia}`} />
          <span />
        </a>
      ))}
    </div>
  );
}
