import React from "react";
import About from "./components/Main/about";
import Skills from "./components/Main/skills";
import Projects from "./components/Main/projects";
import Toolbar from "./components/Toolbar/Toolbar";
import Contact from "./components/Main/contact";
import Experience from "./components/Main/experience";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
    <ThemeContextProvider>
      <Toolbar />
      <main className="main">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
