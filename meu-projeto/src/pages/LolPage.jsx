function LolPage() {
  return (
    <div className="min-h-screen p-10 bg-gray-950 text-amber-50">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-purple-400">
        Coaching de League of Legends
      </h1>
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          ⚔️ Aulas personalizadas focadas em mecânicas, macrojogo, controle de visão
          e mentalidade competitiva.
        </p>
        <ul className="mb-6 list-disc list-inside text-amber-100">
          <li><strong>Duração:</strong> 1 hora por sessão</li>
          <li><strong>Valor:</strong> R$ 50,00 por sessão</li>
        </ul>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full p-2 rounded bg-gray-800 text-white border border-purple-600"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="w-full p-2 rounded bg-gray-800 text-white border border-purple-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors cursor-pointer"
          >
            Entrar em contato
          </button>
        </form>
      </div>
    </div>
  );
}

export default LolPage;

  