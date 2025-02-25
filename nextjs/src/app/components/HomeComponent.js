import Greeting from "@/app/containers/greeting/Greeting";
import Skills from "@/app/containers/skills/Skills";
import Contact from "@/app/components/contact/ContactComponent";

function Home() {
  return (
    <div>
      <Greeting />
      <Skills />
      <Contact id="#contact" />
    </div>
  );
}

export default Home;
