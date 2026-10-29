import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Pneu from './pages/Pneu'
import Hoho from './pages/Hoho'
import CNA from './pages/CNA'
import Bondinho from './pages/Bondinho'
import Bomba from './pages/Bomba'
import Tipo_combustivel from './pages/Tipo_combustivel'
import Lesmas from './pages/Lesmas'
import Filmes from './pages/Filmes'
import Loja_Heitor from './pages/Loja_Heitor'

function App() {

    const [Pagina, setPagina] = useState(0)

  return (

    
    <div className="app">
    <nav>
        <button className='botoes' onClick={()=> setPagina(Pagina === 0 ? null : 0)}>Home</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 1 ? null : 1)}>Demo</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 2 ? null : 2)}>Pneu</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 3 ? null : 3)}>HO HO!</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 4 ? null : 4)}>CNA</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 5 ? null : 5)}>Bondinho</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 6 ? null : 6)}>Bomba</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 7 ? null : 7)}>Tipo de combustivel</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 8 ? null : 8)}>Corrida de lesmas</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 9 ? null : 9)}>Filmes da Zazá</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 10 ? null : 10)}>Loja Heitor</button>
      </nav>

  
     { Pagina == 0 && <Home/>}
     { Pagina == 1 && <Demo/>}
     { Pagina == 2 &&  <Pneu/>}
     { Pagina == 3 && <Hoho/>}
     { Pagina == 4 &&   <CNA/>}
     { Pagina == 5 &&  <Bondinho/>}
     { Pagina == 6 && <Bomba/>}
     { Pagina == 7 && <Tipo_combustivel/>}
     { Pagina == 8 && <Lesmas/>}
     { Pagina == 9 &&  <Filmes/>}
     { Pagina == 10 &&  <Loja_Heitor/>}
    
  </div>
  )
}

export default App
