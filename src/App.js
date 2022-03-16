import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectsPage from "./components/ProjectsPage";
import Contact from "./components/Contact";
import ContactPage from "./components/ContactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <About></About>
              <AboutPage></AboutPage>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects></Projects>
              <ProjectsPage></ProjectsPage>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact></Contact>
              <ContactPage></ContactPage>
            </>
          }
        />
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
