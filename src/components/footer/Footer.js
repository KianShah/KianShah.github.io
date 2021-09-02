import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <pre
          className="footer-text"
          style={{ color: props.theme.secondaryText }}
        >
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
          .{"  "} Powered with{" "}
          <span role="img" aria-label="heart">
            ☕
          </span>
        </pre>
      </Fade>
    </div>
  );
}
