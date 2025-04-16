import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const coachData = {
  lol: {
    title: "League of Legends",
    description: "Aprenda mecânicas avançadas, macrojogo e controle de visão.",
    price: "R$ 49,90",
    duration: "1 hora",
  },
  valorant: {
    title: "Valorant",
    description: "Melhore mira, posicionamento e estratégia.",
    price: "R$ 59,90",
    duration: "1 hora",
  },
  fortnite: {
    title: "Fortnite",
    description: "Treinamento em construção, edição e posicionamento.",
    price: "R$ 39,90",
    duration: "45 minutos",
  },
  cs: {
    title: "Counter-Strike",
    description: "Aprimore táticas, spray control e posicionamento.",
    price: "R$ 49,90",
    duration: "1 hora",
  },
  dota: {
    title: "Dota 2",
    description: "Farm eficiente, rotações e escolha de heróis.",
    price: "R$ 59,90",
    duration: "1 hora",
  },
  overwatch: {
    title: "Overwatch",
    description: "Aprenda a jogar Overwatch com especialistas em estratégias e macrojogo.",
    price: "R$ 49,90",
    duration: "1 hora",
  },
};

function GameCoachPage() {
  const { game } = useParams();
  const navigate = useNavigate();
  const coach = coachData[game];

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (!coach) {
    return (
      <div className="text-white text-center mt-10 text-xl">
        Jogo não encontrado.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-10 max-w-2xl w-full border border-purple-600">
        <h1 className="text-5xl font-extrabold text-center text-amber-400 mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] uppercase">
          {coach.title}
        </h1>

        <div className="text-center mb-8">
          <p className="text-lg text-amber-100 mb-2">{coach.description}</p>
          <p className="text-md font-semibold">💰 Valor: {coach.price}</p>
          <p className="text-md font-semibold">⏱ Duração: {coach.duration}</p>
        </div>

        {submitted ? (
          <div className="text-green-400 text-center text-lg font-semibold">
            Formulário enviado com sucesso! <br />
            Redirecionando para a página principal...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="email"
              placeholder="Seu email"
              className="p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-xl font-bold uppercase tracking-wide cursor-pointer"
            >
              Solicitar contato
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default GameCoachPage;
