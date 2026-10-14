import { useState } from "react"

function Transporte_interno() {
    const[Resultado, setResultado] = useState("")

    function Verificacoes(){
         let emManutencao = prompt("O parque esta em manutençao?")
        if(emManutencao.toLocaleLowerCase() == "sim"){
            emManutencao = true
        }else{
            emManutencao = false
        }

        let emergenciaAtiva = prompt("Tem alguma emergencia ativa?")
        if(emergenciaAtiva.toLocaleLowerCase() == "sim"){
            emergenciaAtiva = true
        }else{
            emergenciaAtiva = false
        }


        if(emManutencao == false && emergenciaAtiva == false){
            setResultado("Transporte liberado para uso")
        }else if(emManutencao == true && emergenciaAtiva == false){
            setResultado("Algo esta em MANUTENÇAO, Transporte indisponível por motivo de segurança.")
        }else if(emManutencao == false && emergenciaAtiva == true){
            setResultado("Alguma EMERGENCIA esta ativa, Transporte indisponível por motivo de segurança.")
        }else if(emManutencao == true && emergenciaAtiva == true){
            setResultado("Transporte indisponível por motivo de segurança.")
        }
    }

  return (
    <div>
        <h2>Transporte interno </h2>
        <button onClick={Verificacoes}>Verificar</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Transporte_interno