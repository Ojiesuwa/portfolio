import { useEffect, useRef, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Work from "./components/Work/Work";

function App() {
  const ref = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

  useEffect(() => {
    const handleScroll = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setScrollPosition(Math.abs(rect.top));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App" ref={ref}>
      <Navigation />
      <Hero />
      <AboutMe scroll={scrollPosition} />
      <Work scroll={scrollPosition} />
    </div>
  );
}

export default App;
