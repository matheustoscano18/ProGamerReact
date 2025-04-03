import "./styles/App.css";
import Header from "./sections/Header.jsx";
import Home from "./sections/Home.jsx";
import Coach from "./sections/Coach.jsx";

function App() {
  return (
    <div className='bg-[url("../assets/backgroundsite.jpg")] h-screen w-full bg-repeat bg-center shadow-inner'>
      <Header />
      <main>
        <Home />
        <Coach />
      </main>
    </div>
  );
}

export default App;
