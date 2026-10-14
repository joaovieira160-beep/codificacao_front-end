import { useState } from "react"

function Centro_comando() {

const[Resultado , setResultado] = useState(0)

function Verificar(){
    let crachaValido = prompt("O cracha esta valido?")
        if(crachaValido.toLocaleLowerCase() == "sim"){
           crachaValido = true
        }else{
            crachaValido = false
        }

    let digitalReconhecida = prompt("a digital foi reconhecida?")
         if(digitalReconhecida.toLocaleLowerCase() == "sim"){
           digitalReconhecida = true
        }else{
            digitalReconhecida = false
        }

        if(crachaValido == true && digitalReconhecida == true){
            setResultado("Acesso liberado ao Centro de Comando")
        }else if(crachaValido == true && digitalReconhecida == false){
            setResultado("Falha na digital. Tente novamente ou chame o suporte")
        }else if(crachaValido == false && digitalReconhecida == true){
            setResultado("Crachá inválido. Dirija-se à recepção")
        }else if(crachaValido == false && digitalReconhecida == false){
            setResultado("Acesso negado. Verifique sua identificação.")
        }
}

  return (
     <div>
        <h2>Centro de comandos</h2>
        <button onClick={Verificar}>verificar</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Centro_comando