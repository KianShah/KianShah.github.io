"use client"

import "./App.css";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import Contact from "@/components/contact/ContactComponent";

export default function App() {
  return (
    <div>
          <Greeting />
          <Skills />
          <Contact />
    </div>
  );
}