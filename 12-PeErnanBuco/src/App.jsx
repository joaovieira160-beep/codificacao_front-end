import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Oracao_frontend from './components/Oracao_frontend'
import Oração_Backend from './components/Oração_Backend'
import Oração_programador from './components/Oração_programador'
import Oração_devcansado from './components/Oração_devcansado'
import Oração_aprendiz from './components/Oração_aprendiz'
import Oração_Fullstack from './components/Oração_Fullstack'

function App() {
  const [Pagina, setPagina] = useState(0)

  return (
    <div className="app">
      <h1>Oraçoes disponiveis do P. Ernan Buco</h1>
      <nav>
        <button className='botoes' onClick={()=> setPagina(0)}>Home</button>
        <button className='botoes' onClick={()=> setPagina(1)}>Oração do Frontend</button>
        <button className='botoes' onClick={()=> setPagina(2)}>Oração do Backend</button>
        <button className='botoes' onClick={()=> setPagina(3)}>Oração do programador</button>
        <button className='botoes' onClick={()=> setPagina(4)}>Oração do #devcansado</button>
        <button className='botoes' onClick={()=> setPagina(5)}>Oração do aprendiz</button>
        <button className='botoes' onClick={()=> setPagina(6)}>Oração do Fullstack</button>
      </nav>
 
      { Pagina == 0 && <Home/>}
      { Pagina == 1 && <Oracao_frontend/>}
      { Pagina == 2 && <Oração_Backend/>}
      { Pagina == 3 && <Oração_programador/>}
      { Pagina == 4 && <Oração_devcansado/>}
      { Pagina == 5 && <Oração_aprendiz/>}
      { Pagina == 6 && <Oração_Fullstack/>}
    </div>
    
  )
}

export default App
