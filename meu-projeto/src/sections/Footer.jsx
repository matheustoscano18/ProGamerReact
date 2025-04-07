function Footer() {
    return (
      <footer className="bg-gray-900 text-amber-50 py-10 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
  
          {/* Logo e nome */}
          <div className="flex flex-col items-center md:items-start">
            <img src="./src/assets/logo.svg" alt="Pro Gamer Logo" className="w-16 h-16 mb-2" />
            <h2 className="text-2xl font-bold tracking-wider">
              <span className="text-fuchsia-500">PRO</span> <span className="text-amber-400">GAMER</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
              Transformando jogadores em campeões.
            </p>
          </div>
  
          {/* Contatos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: contato@progamer.gg</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Discord: ProGamer#1234</li>
              <li>Instagram: @progamerofficial</li>
            </ul>
          </div>
  
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Endereço</h3>
            <p className="text-sm text-gray-300">
              Avenida dos Games, 404<br />
              Sala 01 – CyberCity, SP<br />
              CEP: 01234-567
            </p>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pro Gamer. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  
  export default Footer;