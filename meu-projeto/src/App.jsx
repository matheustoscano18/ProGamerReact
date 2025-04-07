import "./styles/App.css";
import Home from "./sections/Home.jsx";
import Coach from "./sections/Coach.jsx";
import Header from "./sections/Header.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <Header />
      <main>
        <Home />
        <Coach />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
