import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

import Home from "./pages/Hero";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[10px] focus:border focus:border-accent focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route
            path="projects/:slug"
            element={<ProjectCaseStudy />}
          />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
