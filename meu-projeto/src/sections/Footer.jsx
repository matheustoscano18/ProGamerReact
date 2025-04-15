function Footer() {
  return (
    <div id="contact">
      <footer className="bg-gray-900 text-amber-50 py-10 px-4 sm:px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 sm:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="./src/assets/logo.svg"
              alt="Pro Gamer Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-2"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
              <span className="text-fuchsia-500">PRO</span>{" "}
              <span className="text-amber-400">GAMER</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Transformando jogadores em campeões.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">
              Contato
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Email: contato@progamer.gg</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Discord: ProGamer#1234</li>
              <li>Instagram: @progamerofficial</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-amber-400">
              Endereço
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Avenida dos Games, 404
              <br />
              Sala 01 – CyberCity, SP
              <br />
              CEP: 01234-567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-3 sm:pt-4 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Pro Gamer. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
