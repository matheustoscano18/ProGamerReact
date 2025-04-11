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
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded bg-gray-700"
        />
        <button className="bg-purple-600 hover:bg-purple-700 w-full p-3 rounded font-semibold cursor-pointer">
          Entrar
        </button>
        {success && (
          <p className="text-green-400 text-center">
            Login realizado! Redirecionando...
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
