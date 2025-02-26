"use client"

import "./App.css";
import Greeting from "@/app/containers/greeting/Greeting";
import Skills from "@/app/containers/skills/Skills";
import Contact from "@/app/components/contact/ContactComponent";

export default function App() {
  return (
    <div>
          <Greeting />
          <Skills />
          <Contact />
    </div>
  );
}