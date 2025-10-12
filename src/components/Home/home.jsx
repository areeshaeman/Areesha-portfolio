
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import PortfolioFooter from "./components/footer";
// import Testimonials from "./components/Testnomial";
import Experience from "./components/Experience";

const Home = () => {
  return (
  <>
    <Hero/>
   
    <Skills/>
     <AboutUs/>
    {/* <Testimonials/> */}
    <Projects/>
    <Experience/>
    <PortfolioFooter/>
    
</>

  );
};

export default Home;
