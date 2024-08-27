import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
import ProjectDetailsPage from "./components/ProjectDetailsPage/ProjectDetailsPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-projects/:project" element={<ProjectDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
