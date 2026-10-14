import './App.css'
import Altura from './components/Altura'
import Capitão_Ganso from './components/Capitão_Ganso'
import Centro_comando from './components/Centro_comando'
import Deslocamento from './components/Deslocamento'
import Entrada_plco from './components/Entrada_plco'
import Ferias_juca from './components/Ferias_juca'
import Jaulas_abertas from './components/Jaulas_abertas'
import Jogos_juca from './components/Jogos_juca'
import Macas from './components/Macas'
import Magica_fumaca from './components/Magica_fumaca'
import Notas from './components/Notas'
import Novos_marujos from './components/Novos_marujos'
import Numero_maior from './components/Numero_maior'
import Palestras from './components/Palestras'
import Placa from './components/Placa'
import Senha from './components/Senha'
import Transporte_interno from './components/Transporte_interno'
import Votar from './components/Votar'

function App() {
  return (
   <div className="app">
    <h1>03 Estados e Componentes!</h1>

    <h2>#0030</h2>
    <br />
    <Capitão_Ganso/>
    <Novos_marujos/>
    <Magica_fumaca/>
    <Deslocamento/>
    <Entrada_plco/>
    <Transporte_interno/>
    <Centro_comando/>
    <Jaulas_abertas/>

    <hr />

    <h2>#0027.sq05</h2>

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
