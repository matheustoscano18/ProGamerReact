import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

import SignupButton from "../components/SignupButton";
import SigninButton from "../components/SigninButton";
import { Menu, X } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair:", error.message);
    }
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="font-roboto font-semibold relative z-50">
      <header className="w-full h-[10vh] text-amber-50 flex items-center justify-between px-6 md:px-8 relative overflow-visible">
        <Link 
          to="/" 
          onClick={() => scrollToSection("home")} 
          className="flex items-center"
        >
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="hidden md:flex ml-2 text-lg font-bold text-amber-50 whitespace-nowrap gap-x-1">
            <span className="text-amber-50 text-xl md:text-lg sm:text-base">
              PRO
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text text-xl md:text-lg sm:text-base whitespace-nowrap animate-gradient-border bg-[length:200%_200%]">
              GAMER
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 sm:gap-4 text-lg sm:text-sm justify-center absolute left-1/2 -translate-x-1/2 z-20">
          {["home", "coach", "sobre", "contato"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex flex-row gap-5 sm:gap-2 z-10 text-md sm:text-xs">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition font-semibold cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <div className="flex flex-row gap-2 px-2 sm:px-1 py-2 box-content">
                <SigninButton />
                <SignupButton />
              </div>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-gray-900 py-4 text-amber-50 w-full absolute top-[10vh] left-0 z-40 shadow-lg">
          {["home", "coach", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-fuchsia-300 transition-colors px-2 py-1 capitalize"
            >
              {item}
            </button>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition font-semibold cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-row gap-2">
              <SigninButton />
              <SignupButton />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
