import "./SocialMedia.css";
import { socialMediaLinks } from "@/portfolio";
import { Icon } from "@iconify/react";


export default function socialMedia() {
  return (
    <div className="social-media-div">
      {Object.keys(socialMediaLinks).map((socialMedia) => (
        <a
          href={socialMediaLinks[socialMedia]["link"]}
          className={`icon-button ${socialMedia}`}
          target="_blank"
          rel="noopener noreferrer"
          key={socialMedia}
          name={socialMedia}
        >
          <i style={{paddingTop: "3px"}}><Icon icon={socialMediaLinks[socialMedia]["icon"]} /></i>
          <span />
        </a>
      ))}
    </div>
  );
}
