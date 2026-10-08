import { useState } from "react"

function Notas() {
  const [Saida, setSaida] = useState(0)


function CalcularMedia(){
  
  let nota1 = Number(prompt("nota 1:"))
  let nota2 = Number(prompt("nota 2:"))
  let nota3 = Number(prompt("nota 3:"))

  let media = (nota1 + nota2 + nota3) / 3

  if(media >= 7){

setSaida(`Sua media é:${media.toFixed(2)}, Parabens voce passou!`)
  }else if(media >=6){
    setSaida(`Sua media é:${media.toFixed(2)}, voce ainda nao passou`)
  }

  
}

  return (
    <div>
        <h2>Calcule suas notas!</h2>
        <button className="botao" onClick={CalcularMedia}>Calcule</button>
        <br />
        {Saida}
        <hr />
    </div>
  )
}

export default Notas