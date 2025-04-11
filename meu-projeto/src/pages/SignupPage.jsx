import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white px-4">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Cadastrar</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 mb-4 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 rounded bg-gray-700 mb-4 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded font-semibold cursor-pointer"
        >
          Cadastrar
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-green-400">{message}</p>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
