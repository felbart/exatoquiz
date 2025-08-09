
import Quiz from "./components/Quiz"
import logo from './assets/images/logo.svg'

function App() {
  return (
    <section id="app">
      <div className="min-h-screen flex flex-col items-center gap-8 py-8 lg:py-12 px-4 relative">
        {/*  */}
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-4xl md:text-6xl font-black text-white">Quiz</h1>
          <img src={logo} alt="Exato logo" className="w-[110px] md:w-[180px]" />
        </div>
        <Quiz />
        <div className="bg-orange-400 h-4/12 absolute inset-0 top-0 -z-10"></div>
      </div> 
    </section>
  )
}

export default App
