import { useState } from "react"

function Jogos_juca() {
const[Resultado,setResultado] = useState(0)

    function classificar(){
    let pontos = Number(prompt("quantos pontos voce fez?"))

    if(pontos <= 10){
        setResultado(`Apenas ${pontos}? Deu ruim!`)
    }else if(pontos <=100){
        setResultado(`${pontos} pontos? Bom! Mas pode melhorar!`)
    }else if(pontos <= 200){
        setResultado(`${pontos} pontos? Supimpa!!`)
    }else{
        setResultado(`${pontos} pontos? incrivel!`)
    }
}

  return (
    <div className='jogo'>
        <h2>Jogo do Mano Juka</h2>
        <button className="botao" onClick={classificar}>Classificar</button>
        <br />
        {Resultado}
        <hr />
    </div>
  )
}

export default Jogos_juca