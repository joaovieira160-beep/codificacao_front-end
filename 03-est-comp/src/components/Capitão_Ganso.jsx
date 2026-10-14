import { useState } from "react"

function Capitão_Ganso() {

const[Resultado, setResultado] = useState("")

function contar_marujos(){
    let marujos = Number(prompt("Quantos marujos estarao a bordo??"))
    let comida = parseFloat(prompt("quantos kg de comida esta carregado?"))
    let comidaPorMarujo = comida / marujos
    let comidaMinima = marujos * 1.5 

    if(marujos >= 10 && comidaPorMarujo >= 1.5){
        let resto = comidaMinima - comida 
        let resposta = `Provisões suficientes. Rumo ao horizonte! esta sobrando ${resto}Kg de comida`
        setResultado(resposta)
    } else if(marujos < 10 && comidaPorMarujo >= 1.5){
         let resto = comidaMinima - comida 
        let resposta = `Voce precisa de mais marujos! mas tem comida sobrando! esta sobrando ${resto}Kg de comida`
        setResultado(resposta)
    }else if(marujos >= 10 && comidaPorMarujo < 1.5){
         let resto = comidaMinima - comida 
        let resposta = `Voce tem marujos suficientes, mas precisa de mais comida! esta faltando ${resto}Kg de comida`
        setResultado(resposta)
    }else if(marujos < 10 && comidaPorMarujo < 1.5){
        let resto = comidaMinima - comida 
        let resposta = `Voce NAO tem marujos suficientes, e precisa de MAIS comida! esta faltando ${resto}Kg de comida`
        setResultado(resposta)
    } 
}

  return (
    <div className="ganso">
        <h2>Capitão Ganso</h2>
        <button onClick={contar_marujos}>Calcular</button>
        <br />
        {Resultado}
        </div>
  )
}

export default Capitão_Ganso