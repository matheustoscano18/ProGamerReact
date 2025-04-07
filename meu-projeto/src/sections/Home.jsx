import ButtonCta from "../components/CtaButton";

function Home() {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex flex-row justify-between items-center pt-[20vh] px-5 gap-10">
        <div className="relative p-[2px] min-w-[300px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 bg-[length:200%_auto] animate-gradient-border w-auto max-w-4xl mx-5">
          <div className="bg-gray-900 rounded-lg p-5">
            <div className="text-amber-50 font-bold text-7xl tracking-wide p-5">
              <h1>
                Eleve Sua Gameplay <br /> ao Próximo Nível!
              </h1>
            </div>
            <div className="text-emerald-400 font-semi text-[20px] tracking-wide p-5">
              <p>
                Domine estratégias, melhore seu desempenho e conquiste suas
                vitórias com treinamento personalizado. <br /> Seja você um
                jogador casual ou competitivo, nós da Pro Gamer temos o caminho
                para sua evolução.
              </p>
            </div>
            <div className="text-amber-50 font-bold uppercase text-[20px] tracking-wide p-5">
              <p>Junte-se a nós e comece a dominar o jogo.</p>
            </div>
            <div className="p-5">
              <ButtonCta />
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[800px] w-full">
          <img
            src="./src/assets/controller.png"
            alt="game controller"
            className="w-full h-auto object-domain rotate-45"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
