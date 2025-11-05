import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import PortfolioFooter from "./components/footer";
import Experience from "./components/Experience";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <PortfolioFooter />
      </section>
    </>
  );
};

export default Home;
