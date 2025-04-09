import "./styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./sections/Home.jsx";
import Coach from "./sections/Coach.jsx";
import Header from "./sections/Header.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

import LolPage from "./pages/LolPage.jsx";
import ValorantPage from "./pages/ValorantPage.jsx";
import FortnitePage from "./pages/FortnitePage.jsx";
import CsPage from "./pages/CsPage.jsx";
import DotaPage from "./pages/DotaPage.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Coach />
                <About />
              </>
            }
          />
          <Route path="/lol" element={<LolPage />} />
          <Route path="/valorant" element={<ValorantPage />} />
          <Route path="/fortnite" element={<FortnitePage />} />
          <Route path="/cs" element={<CsPage />} />
          <Route path="/dota" element={<DotaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
