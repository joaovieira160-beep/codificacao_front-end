import { useState } from "react"

function Jaulas_abertas() {

const[Resultado, setResultado] = useState(0)

    function Verificacoes(){
        let Pessoas = Number(prompt("quantas pessoas estao no local"))

    let horaAtual = Number(prompt("qual o horario atual?"))

        if(Pessoas == 0 && horaAtual < 8 || horaAtual > 18){
            setResultado("Liberação autorizada. Abrindo jaula.")
        }else if(Pessoas > 0 && horaAtual < 8 || horaAtual > 18){
            setResultado("Liberação negada. Área em uso.")
        }else if (Pessoas == 0 && horaAtual > 8 || horaAtual < 18){
            setResultado("Liberação negada.fora do horário permitido.")
        }else if (Pessoas > 0 && horaAtual > 8 || horaAtual < 18){
            setResultado("Liberação negada.Área em uso e fora do horário permitido.")
        }
    }
  return (
    <div>
        <h2>Verificar jaulas para serem abertas(que perigo!)</h2>
        <button className="botao"  onClick={Verificacoes}>Verificar</button>
        <br />
        {Resultado}
    </div>
  )
}

export default Jaulas_abertas