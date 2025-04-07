function SignupButton() {
    return (
        <div className="flex gap-3">
            <div id="login">
                <button className="bg-cyan-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Entrar
                </button>
            </div>

            <div id="signup">
                <button className="bg-cyan-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Cadastre-se
                </button>
            </div>
        </div>
    )
}

export default SignupButton;