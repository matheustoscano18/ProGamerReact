function About() {
  return (
    <div
      id="about"
      className="h-[80vh] text-amber-50 flex flex-col items-center px-6"
    >
      <h1 className="text-5xl font-extrabold text-amber-400 text-center mb-12 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
        Sobre nós
      </h1>
      <div className="w-48 h-1 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-emerald-400 rounded-full my-6"></div>
      <div className="max-w-5xl space-y-10 text-lg leading-loose text-amber-100 text-center">
        <p className="text">
          A <span className="text-fuchsia-500 font-semibold">Pro Gamer</span>{" "}
          nasceu da paixão pelos jogos e da vontade de elevar o cenário
          competitivo a um novo patamar. Somos uma equipe formada por coaches
          especializados e jogadores experientes, prontos para transformar seu
          potencial em performance.
        </p>
        <p>
          Oferecemos treinamentos personalizados para cada estilo de jogo, com
          foco em{" "}
          <span className="text-emerald-400 font-medium">
            mecânicas, tática, mindset e evolução constante
          </span>
          . Nosso objetivo é acompanhar você em cada etapa da sua jornada — do
          bronze ao competitivo profissional.
        </p>
        <p>
          Mais do que melhorar seu rank, queremos desenvolver sua confiança,
          disciplina e visão de jogo. Porque acreditamos que{" "}
          <span className="text-fuchsia-500 font-semibold">
            todo jogador tem um campeão dentro de si
          </span>{" "}
          — só precisa de um bom treinamento para despertar.
        </p>
      </div>
    </div>
  );
}

export default About;
