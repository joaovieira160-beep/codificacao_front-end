import React, { useState } from 'react'


 

function Home() {

    const[inputLogin , setinputLogin] = useState("")
    const[Resposta , setResposta] = useState("")


    function efetuarLogin(){
    if( inputLogin == "admin"){
        setResposta("Voçe tem acesso")
    } else{
        setResposta("usuario nao encontrado")
    }
 }

  return (
    <div className='Home'>
     <h1>Inputs Controlados</h1>
   
    <label htmlFor="">Login</label>
    <input type="text" 
    value={inputLogin} 
    onChange={(e) => setinputLogin(e.target.value)}/>
    {Resposta}

    <button onClick={efetuarLogin}>Entrar</button>
    

    </div>
  )
}

export default Home