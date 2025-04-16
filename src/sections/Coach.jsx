import AboutButton from "../components/AboutButton";

function Coach() {
  return (
    <div id="coach" className="min-h-max mt-10 mb-10 px-4 xl:px-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 text-center p-5 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] mb-20">
        Coach
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch justify-items-center">
        {[
          {
            id: "lol",
            title: "League of Legends",
            desc: "Aprenda mecânicas avançadas, macrojogo e controle de visão com coaches experientes. Suba de elo com consistência!",
            img: "/assets/logoLOL.png",
            game: "lol",
          },
          {
            id: "valorant",
            title: "Valorant",
            desc: "Melhore a sua mira, posicionamento e tomada de decisão com treinos personalizados. Seja o MVP da sua equipe!",
            img: "/assets/logovalorant.png",
            game: "valorant",
          },
          {
            id: "fortnite",
            title: "Fortnite",
            desc: "Treinamento focado em construção, edição e estratégia para dominar as partidas e vencer com estilo.",
            img: "/assets/logofortnite.png",
            game: "fortnite",
          },
          {
            id: "cs",
            title: "Counter Strike",
            desc: "Aprenda táticas, movimentação e controle de spray com especialistas em CS. Evolua seu jogo e suba de patente!",
            img: "/assets/logoCS.png",
            game: "cs",
          },
          {
            id: "dota",
            title: "Dota 2",
            desc: "Entenda rotações, farm eficiente, pick ideal e trabalho em equipe com quem entende do meta competitivo.",
            img: "/assets/logodota2.png",
            game: "dota",
          },
          {
            id: "overwatch",
            title: "Overwatch",
            desc: "Aprenda a jogar Overwatch com especialistas em estratégias e macrojogo. Domine o campo de batalha e conquiste o controle!",
            img: "/assets/logooverwatch.png",
            game: "overwatch",
          }
        ].map((coach) => (
          <div
            key={coach.id}
            id={coach.id}
            className="relative p-[2px] bg-purple-600 rounded-lg w-full max-w-xs xl:max-w-sm"
          >
            <div className="bg-gray-900 rounded-lg p-4 sm:p-5 flex flex-col items-center h-full min-h-[460px]">
              <img
                src={coach.img}
                alt={`logo ${coach.title}`}
                className="h-20 w-20 object-contain mb-4"
              />
              <h2 className="text-amber-50 font-bold text-lg lg:text-xl text-center mb-2">
                {coach.title}
              </h2>
              <p className="text-amber-100 text-sm lg:text-base text-center mb-4">
                {coach.desc}
              </p>
              <div className="mt-auto">
                <AboutButton game={coach.game} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coach;
