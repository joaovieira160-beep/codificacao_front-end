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
        <button className='botoes' onClick={()=> setPagina(Pagina === 0 ? null : 0)}>Home</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 1 ? null : 1)}>Oração do Frontend</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 2 ? null : 2)}>Oração do Backend</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 3 ? null : 3)}>Oração do programador</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 4 ? null : 4)}>Oração do #devcansado</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 5 ? null : 5)}>Oração do aprendiz</button>
        <button className='botoes' onClick={()=> setPagina(Pagina === 6 ? null : 6)}>Oração do Fullstack</button>
      </nav>
 
      { Pagina == 0 && <Home/>}
      { Pagina == 1 && <Oracao_frontend/>}
      { Pagina == 2 && <Oração_Backend/>}
      { Pagina == 3 && <Oração_programador/>}
      { Pagina == 4 && <Oração_devcansado/>}
      { Pagina == 5 && <Oração_aprendiz/>}
      { Pagina == 6 && <Oração_Fullstack/>}
      <img className='Imagem_painel' src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffc91fd6e-8ab9-4702-9997-d40bff18f361%2F0a58e393-8941-414a-8200-582087058b05%2Fimage.png/size/w=1330?tok=eyJhbGciOiJFUzI1NiIsImtpZCI6IlI3dzVrRnREIiwidHlwIjoiSldUIn0.eyJzcGFjZUlkIjoiZmM5MWZkNmUtOGFiOS00NzAyLTk5OTctZDQwYmZmMThmMzYxIiwiZmlsZUlkIjoiMGE1OGUzOTMtODk0MS00MTRhLTgyMDAtNTgyMDg3MDU4YjA1IiwicmVjb3JkIjoiYmxvY2s6MjAyZDM5M2YtZjY4ZS04MTE5LThlMmUtZGY1ZjMyYjg3NWExIiwiZXhwIjoxNzkyNjk0MTYxfQ.r5fMSnnoT2nlw9fD3QRrz47K34c_julWkkQn1KducUbZqMqbv8b_w7lWeSL_aP56X8TZEtQjXFqtSJJSAxRnzQ&imgBuildSrc=createSecureFileAccessTokenImageUrl&mtd=so" alt="foto painel" />
    </div>
    
    
  )
}

export default App
