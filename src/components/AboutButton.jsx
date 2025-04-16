import { useNavigate } from "react-router-dom";

function AboutButton({ game }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/coach/${game}`)}
      className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition-colors cursor-pointer"
    >
      Ver Detalhes
    </button>
  );
}

export default AboutButton;
