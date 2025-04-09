import AboutButton from "../components/aboutButton";

function Coach() {
  return (
    <div id="coach" className="min-h-screen">
      <h1 className="text-5xl font-extrabold text-amber-400 text-center p-5 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
        Coach
      </h1>
      
      <div className="flex justify-around gap-5 p-5">
        <div
          id="lol"
          className="relative p-[2px] rounded-lg bg-purple-600 w-full max-w-xs"
        >
          <div className="bg-gray-900 rounded-lg p-5 flex flex-col items-center h-full">
            <img
              src="./src/assets/logoLOL.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-amber-50 font-bold text-[20px] tracking-wide p-5 text-center">
                League of Legends
              </h1>
              <p className="text-amber-100 text-[16px] p-5 text-center">
                Aprenda mecânicas avançadas, macrojogo e controle de visão com
                coaches experientes. Suba de elo com consistência!
              </p>
            </div>
            <div className="mt-auto pt-4">
              <AboutButton route="/lol" />
            </div>
          </div>
        </div>
        <div
          id="Valorant"
          className="relative p-[2px] rounded-lg bg-purple-600	w-full max-w-xs"
        >
          <div className="bg-gray-900 rounded-lg p-5 flex flex-col justify-between items-center h-full">
            <img
              src="./src/assets/logovalorant.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-amber-50 font-bold text-[20px] tracking-wide mt-4 text-center">
                Valorant
              </h1>
              <p className="text-amber-100 text-[16px] p-5 text-center">
                Melhore a sua mira, posicionamento e tomada de decisão com
                treinos personalizados. Seja o MVP da sua equipe!
              </p>
            </div>
            <div className="mt-auto pt-4">
              <AboutButton route="/valorant"/>
            </div>
          </div>
        </div>
        <div
          id="Fortnite"
          className="relative p-[2px] rounded-lg bg-purple-600	w-full max-w-xs"
        >
          <div className="bg-gray-900 rounded-lg p-5 flex flex-col items-center h-full">
            <img
              src="./src/assets/logofortnite.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-amber-50 font-bold text-[20px] tracking-wide mt-4 text-center">
                Fortnite
              </h1>
              <p className="text-amber-100 text-[16px] p-5 text-center">
                Treinamento focado em construção, edição e estratégia para
                dominar as partidas e vencer com estilo.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <AboutButton route="/fortnite"/>
            </div>
          </div>
        </div>
        <div
          id="CS"
          className="relative p-[2px] rounded-lg bg-purple-600 w-full max-w-xs"
        >
          <div className="bg-gray-900 rounded-lg p-5 flex flex-col items-center h-full">
            <img
              src="./src/assets/logoCS.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-amber-50 font-bold text-[20px] tracking-wide mt-4 text-center">
                Counter Strike
              </h1>
              <p className="text-amber-100 text-[16px] p-5 text-center">
                Aprenda táticas, movimentação e controle de spray com
                especialistas em CS. Evolua seu jogo e suba de patente!
              </p>
            </div>
            <div className="mt-auto pt-4">
              <AboutButton route="/cs"/>
            </div>
          </div>
        </div>
        <div
          id="dota"
          className="relative p-[2px] rounded-lg bg-purple-600 w-full max-w-xs"
        >
          <div className="bg-gray-900 rounded-lg p-5 flex flex-col items-center h-full">
            <img
              src="./src/assets/logodota2.png"
              alt="logo"
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-amber-50 font-bold text-[20px] tracking-wide mt-4 text-center">
                Dota 2
              </h1>
              <p className="text-amber-100 text-[16px] p-5 text-center">
                Entenda rotações, farm eficiente, pick ideal e trabalho em
                equipe com quem entende do meta competitivo.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <AboutButton route="/dota"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coach;
