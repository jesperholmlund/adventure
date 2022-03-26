import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import { Routes, Route } from "react-router-dom";
import MainParser from "./components/parser/MainParser";

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
        <Route path="/parser" element={<MainParser></MainParser>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
