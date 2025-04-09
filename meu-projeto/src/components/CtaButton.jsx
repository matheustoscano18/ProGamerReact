function CtaButton({ onClick }) {
  return (
    <button
     onClick={onClick}
     className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition-colors cursor-pointer">
      Comece Agora
    </button>
  );
}

export default CtaButton;
