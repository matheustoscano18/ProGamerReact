import { useNavigate } from "react-router-dom";

function SigninButton() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="login">
        <button
          onClick={() => navigate("/login")}
          className="bg-cyan-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default SigninButton;
