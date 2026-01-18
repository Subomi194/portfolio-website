import Image from "next/image";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Page() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}
