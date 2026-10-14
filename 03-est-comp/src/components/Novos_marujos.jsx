import { useState } from "react"

function Novos_marujos() {

    const[Resultado, setResultado] = useState("")

    function Contratar_novos(){
        let nadar = prompt("o canditado sabe nadar?")

        if(nadar.toLowerCase() === "sim"){
            nadar = true
        }else{
            nadar = false
        }

        let idade = Number(prompt("quantos anos o candidato tem?"))

        let recomendacao = prompt("o candidato tem recomendaçao?")
        if(recomendacao.toLowerCase() === "sim"){
            recomendacao = true
        }else{
            recomendacao = false
        }

        if(nadar == true && idade >= 16){
            setResultado("Aprovado para o navio")
        }else if( nadar == false && recomendacao == true && idade >= 14 ){
            setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
        }else{
            setResultado("Reprovado. Volte quando estiver mais preparado para o mar")
        }
    }

  return (
    <div className="Novos_marujos">
        <h2>Contratar novos marujos</h2>
        <button onClick={Contratar_novos}>Ver curriculo</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Novos_marujos