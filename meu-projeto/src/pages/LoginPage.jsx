import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      alert("Erro ao logar: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-8">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 w-full p-3 rounded font-semibold transition-colors"
        >
          Entrar
        </button>

        {success && (
          <p className="text-green-400 text-center animate-pulse">
            Login realizado! Redirecionando...
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
