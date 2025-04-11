import { useNavigate } from "react-router-dom";

function SignupButton() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3">
      <div id="signup">
        <button
          onClick={() => navigate("/cadastro")}
          className="bg-cyan-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default SignupButton;
