import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia.js";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "@/portfolio.js";
import Image from "next/image";
import { ThemeContext, themes } from "@/app/util/ThemeContext.jsx";

const ContactData = contactPageData.contactSection;

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
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={`/images/${ContactData["profile_image_path"]}`}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: themes[theme].text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: themes[theme].secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}