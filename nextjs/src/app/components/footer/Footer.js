import React, {useContext} from "react";
import "./Footer.css";
import { ThemeContext, themes } from "@/app/util/ThemeContext";

export default function Footer() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="footer-div">
        <pre
          className="footer-text"
          style={{ color: themes[theme].secondaryText }}
        >
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
          .{"  "} Powered by{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>
        </pre>
    </div>
  );
}
