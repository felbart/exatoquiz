
import Quiz from "./components/Quiz"
import logo from './assets/images/logo.svg'

function App() {
  return (
    <section id="app">
      <div className="h-screen flex flex-col items-center gap-8 py-16 lg:py-24 px-4">
        {/*  */}
        <img src={logo} alt="Exato logo" width={200} />
        <Quiz />
      </div> 
    </section>
  )
}

export default App
