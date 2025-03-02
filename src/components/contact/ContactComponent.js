import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia.js";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import { resumeLink, profile_image_path } from "@/portfolio.js";
import Image from "next/image";
import { ThemeContext, themes } from "@/Theme.js";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="contact-main">
      <style jsx>{`
        .general-btn {
          background-color: ${themes[theme].accentBright};
        }

        .general-btn:hover {
          box-shadow: 0px 5px 15px ${themes[theme].accentBright}
        }
      `}</style>

      <div className="basic-contact">
        <Fade duration={1500} triggerOnce>
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={`/images/${profile_image_path}`}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: themes[theme].text }}
              >
                Contact Me
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: themes[theme].secondaryText }}
              >
                You can contact me at the places mentioned below. I will try to get back to you as fast as I can!
              </p>
              <SocialMedia />
              <br />
              <br />
              <a className="general-btn" href={resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}