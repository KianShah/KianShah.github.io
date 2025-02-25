import React, {useContext} from "react";
import SocialMedia from "../socialMedia/SocialMedia.js";
import Fade from "@/app/util/Fade";
import "./ContactComponent.css";
import { greeting, contactPageData } from "@/portfolio.js";
// import { style } from "glamor";
import Image from "next/image";
import { ThemeContext, themes } from "@/app/util/ThemeContext.jsx";

const ContactData = contactPageData.contactSection;

function Contact() {
  const {theme} = useContext(ThemeContext);

  // const styles = style({
  //   backgroundColor: `${themes[theme].accentBright}`,
  //   ":hover": {
  //     boxShadow: `0 5px 15px ${themes[theme].accentBright}`,
  //   },
  // });

  return (
    <div className="contact-main">
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

export default Contact;
