import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Hero";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import ReportHubCaseStudy from "./pages/ReportHubCaseStudy";
import CVMakerCaseStudy from "./pages/CVMakerCaseStudy";
import Gallery from "./components/Gallery";

import "./App.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />

        <Route
          path="/skills"
          element={
            <Layout>
              <SkillsPage />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <ProjectsPage />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        <Route
          path="/projects/reporthub"
          element={
            <Layout>
              <ReportHubCaseStudy />
            </Layout>
          }
        />

        <Route
          path="/pages/CVMakerCaseStudy"
          element={
            <Layout>
              <CVMakerCaseStudy />
            </Layout>
          }
        />

 <Route
          path="/pages/Gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />


        <Route
          path="*"
          element={
            <Layout>
              <div className="not-found">
                <h1>404</h1>
                <p>Page not found.</p>
              </div>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;