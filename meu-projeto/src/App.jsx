import './styles/App.css'
import Header from './sections/Header.jsx'
import Home from './sections/Home.jsx'

function App() {

  return (
    <div className='h-screen max-w-screen bg-purple-gradient'>
      <Header />
      <main>
        <Home />
      </main>
      
    </div>
  )
}

export default App
