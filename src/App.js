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
import HomeButton from "./components/HomeButton";
import Board from "./components/Board/Board";
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
              <AboutPage></AboutPage>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <ProjectsPage></ProjectsPage>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactPage></ContactPage>
            </>
          }
        />
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
