import './App.css'
import Ferias_juca from './components/Ferias_juca'
import Jogos_juca from './components/Jogos_juca'
import Votar from './components/Votar'

function App() {
  return (
   <div className="app">
    <h1>03 Estados e Componentes!</h1>

    <Ferias_juca/>
    <Jogos_juca/>
    <Votar/>

   </div>
  )
}

export default App
