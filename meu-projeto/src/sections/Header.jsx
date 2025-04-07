import SignupButton from "../components/SignupButton";

function Header() {
  return (
    <div className="font-roboto font-semibold">
      <header className="w-full h-[10vh] text-amber-50 flex justify-between items-center px-8">
        <a href="#" className="mr-auto group relative flex items-center">
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className="h-20 w-20 mr-auto transition-transform duration-300 group-hover:scale-110"
          />
          <span 
            className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-xl font-bold text-amber-50 whitespace-nowrap flex gap-x-1"
          >
            <span className="text-amber-50 ">PRO</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient-x">GAMER</span>
          </span>
        </a>
        <nav className="flex gap-8 md:gap-12 mx-auto">
          <a
            href="#"
            className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer"
          >
            Coach
          </a>
          <a
            href="#"
            className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer"
          >
            Sobre
          </a>
          <a
            href="#"
            className="hover:text-fuchsia-300 transition-colors px-2 py-1 cursor-pointer"
          >
            Contato
          </a>
        </nav>
        <div className="ml-auto">
          <SignupButton />
        </div>
      </header>
    </div>
  );
}

export default Header;
