import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Project from "./components/GithubProjects/Project";
import Intro from "./components/introduction/Intro";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <Intro/>
      <Skills/>
      <Education/>
      <Experience/>
      <Project/>
    </div>
  );
}

export default App;
