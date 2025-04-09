import { useNavigate } from "react-router-dom";

function AboutButton({ route }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition-colors cursor-pointer"
    >
      Saiba mais
    </button>
  );
}

export default AboutButton;
