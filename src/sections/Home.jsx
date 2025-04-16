import ButtonCta from "../components/CtaButton";

function Home() {
  const scrollToCoach = () => {
    const coachSection = document.getElementById("coach");
    if (coachSection) {
      coachSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="h-[80vh] bg-no-repeat bg-cover bg-center px-4"
    >
      <div className="flex flex-col md:flex-row justify-between items-center pt-20 gap-10 max-w-7xl mx-auto">
        <div className="relative p-[2px] w-full xl:max-w-[600px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 bg-[length:200%_auto] animate-gradient-border">
          <div className="bg-gray-900 rounded-lg px-5 py-8 sm:p-8">
            <div className="text-amber-50 font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-wide mb-4">
              <h1>
                Eleve Sua Gameplay <br /> ao Próximo Nível!
              </h1>
            </div>
            <div className="text-emerald-400 text-base sm:text-lg tracking-wide mb-4">
              <p>
                Domine estratégias, melhore seu desempenho e conquiste suas
                vitórias com treinamento personalizado. <br /> Seja você um
                jogador casual ou competitivo, nós da Pro Gamer temos o caminho
                para sua evolução.
              </p>
            </div>
            <div className="text-amber-50 font-bold uppercase text-sm sm:text-base tracking-wide mb-6">
              <p>Junte-se a nós e comece a dominar o jogo.</p>
            </div>
            <ButtonCta onClick={scrollToCoach} />
          </div>
        </div>

        <div className="hidden md:block w-full max-w-[600px]">
          <img
            src="./src/assets/controller.png"
            alt="game controller"
            className="w-full h-auto object-contain rotate-12 xl:rotate-45"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;