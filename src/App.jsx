
import Quiz from "./components/Quiz"
import logo from './assets/images/logo.svg'

function App() {
  return (
    <section id="app">
      <div className="h-screen flex flex-col items-center gap-8 py-16 lg:py-24 px-4 relative">
        {/*  */}
        <img src={logo} alt="Exato logo" width={200} />
        <Quiz />
        <div className="bg-orange-400 h-5/12 absolute inset-0 top-0 -z-10"></div>
      </div> 
    </section>
  )
}

export default App
