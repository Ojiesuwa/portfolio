import { useEffect, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";

function App() {
  const ref = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(undefined);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (screenWidth >= 700) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setScrollPosition(Math.abs(rect.top));
        }
      } else {
        setScrollPosition(undefined); // Set scrollPosition to null if screen width is less than 700px
      }
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="App" ref={ref}>
      <Navigation />
      <Hero />
      <AboutMe scroll={scrollPosition} />
      <Work scroll={scrollPosition} />
      <Projects scroll={scrollPosition} />
      <Connect scroll={scrollPosition} />
    </div>
  );
}

export default App;
