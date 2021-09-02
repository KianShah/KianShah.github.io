import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Contact from "../../components/contact/ContactComponent";

function Home(props) {
  return (
    <div>
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Contact theme={props.theme} id="#contact" />
    </div>
  );
}

export default Home;
