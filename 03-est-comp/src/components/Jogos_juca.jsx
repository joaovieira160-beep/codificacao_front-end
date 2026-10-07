import { useState } from "react"

function Jogos_juca() {
const[Resultado,setResultado] = useState(0)

    function classificar(){
    let pontos = Number(prompt("quantos pontos voce fez?"))

    if(pontos <= 10){
        setResultado("Deu ruim!")
    }else if(pontos <=100){
        setResultado("Bom! Mas pode melhorar!")
    }else if(pontos <= 200){
        setResultado("Supimpa!!")
    }else{
        setResultado("incrivel!")
    }
}

  return (
    <div className='jogo'>
        <h2>Jogo do Mano Juka</h2>
        <button onClick={classificar}>Classificar</button>
        {Resultado}
    </div>
  )
}

export default Jogos_juca