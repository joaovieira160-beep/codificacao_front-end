import './App.css'
import Altura from './components/Altura'
import Ferias_juca from './components/Ferias_juca'
import Jogos_juca from './components/Jogos_juca'
import Macas from './components/Macas'
import Notas from './components/Notas'
import Numero_maior from './components/Numero_maior'
import Palestras from './components/Palestras'
import Placa from './components/Placa'
import Senha from './components/Senha'
import Votar from './components/Votar'

function App() {
  return (
   <div className="app">
    <h1>03 Estados e Componentes!</h1>

    <Ferias_juca/>
    <Jogos_juca/>
    <Votar/>
    <Altura/>
    <Macas/>
    <Notas/>
    <Senha/>
    <Numero_maior/>
    <Placa/>
    <Palestras/>

   </div>
  )
}

export default App
