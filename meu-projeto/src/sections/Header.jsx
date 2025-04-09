import { useNavigate, useLocation } from "react-router-dom";
import SignupButton from "../components/SignupButton";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Se estiver na página inicial
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redireciona para home, e scrolla depois
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="font-roboto font-semibold">
      <header className="w-full h-[10vh] text-amber-50 flex justify-between items-center px-8">
        <a href="#" className="mr-auto group relative flex items-center">
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className="h-20 w-20 mr-auto transition-transform duration-300 group-hover:scale-110"
          />
          <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-xl font-bold text-amber-50 whitespace-nowrap flex gap-x-1">
            <span className="text-amber-50">PRO</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient-x">GAMER</span>
          </span>
        </a>
        <nav className="flex gap-8 md:gap-12 mx-auto">
          <button onClick={() => scrollToSection("home")} className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection("coach")} className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer">
            Coach
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer">
            Sobre
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer">
            Contato
          </button>
        </nav>
        <div className="ml-auto">
          <SignupButton />
        </div>
      </header>
    </div>
  );
}

export default Header;
