import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-awesome-reveal";
import FeelingProud from "./FeelingProud";
import { ThemeContext, themes } from "@/Theme";

export default function Greeting() {
  const {theme} = useContext(ThemeContext);

  return (
    <Fade duration={2000} triggerOnce>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Hello 👋.</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: themes[theme].secondaryText }}
              >
                <span>I&apos;m </span>
                <span style={{ color: themes[theme].accentColor }}>
                  Kian Shahangyan.{" "}
                </span>
                Full Stack / Backend developer 🔥. Always learning 📖.
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={themes[theme]} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
