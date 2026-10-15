import { useState } from "react"

function Deslocamento() {
    const[Resultado , setResultado] = useState(0)

    function poderaIr(){
        let estaGripado = prompt("o mago esta gripado?")
        if(estaGripado.toLocaleLowerCase() == "sim"){
            estaGripado = true
        }else{
            estaGripado = false
        }

        let distancia = Number(prompt("quantos minutos a viagem tem de duraçao?"))

        if(estaGripado == false && distancia <= 45 ){
            setResultado("Viagem autorizada. Rumo ao show!")
        }else if(estaGripado == true && distancia > 45){
            setResultado("Deslocamento inviável. Melhor recusar este evento.")
        }else if(estaGripado == true && distancia <= 45){
             setResultado("Deslocamento inviável. Melhor recusar este evento.")
        }else if(estaGripado == false && distancia > 45){
             setResultado("Deslocamento inviável. Melhor recusar este evento.")
        }

    }
  return (
    <div>
        <h2>Deslocamento do mago!</h2>
        <button className="botao"  onClick={poderaIr}>ver deslocamento</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Deslocamento