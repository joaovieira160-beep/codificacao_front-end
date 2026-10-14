import { useState } from "react"

function Entrada_plco() {

    const[Resultado, setResultado] = useState("")

    function Verificacoes(){
        let somFuncionando = prompt("O som esta funcionando?")
        if(somFuncionando.toLocaleLowerCase() == "sim"){
            somFuncionando = true
        }else{
            somFuncionando = false
        }

        let figurinoCompleto = prompt("o seu figurino esta completo?")
        if(figurinoCompleto.toLocaleLowerCase() == "sim"){
            figurinoCompleto = true
        }else{
            figurinoCompleto = false
        }

        if(somFuncionando == true && figurinoCompleto == true){
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
        }else if(somFuncionando == false && figurinoCompleto == true){
            setResultado("Sem som. Realizar apresentação alternativa no salão.")
        }else if(somFuncionando == true && figurinoCompleto == false){
            setResultado("Faltando parte do figurino. Te vira no improviso!")
        }else if(somFuncionando == false && figurinoCompleto == false){
            setResultado("Apresentação cancelada. Hora da mágica de desaparecer…")
        }
    }

  return (
    <div>
        <h2>Entrando no Palco!</h2>
        <button onClick={Verificacoes}>Verificaçao</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Entrada_plco