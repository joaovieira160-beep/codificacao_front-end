import { useState } from "react"

function Magica_fumaca() {

    const[Resultado, setResultado] = useState(0)

    function Seguranca(){
        let criancas = Number(prompt("tem alguma criança perto? quantas?"))
        let velocidadeVento = parseFloat(prompt("qual a velocidade do ar?"))

        if(criancas == 0 && velocidadeVento >= 0.5){
            setResultado("Fumaça liberada. Que comecem os mistérios!")
        }else if(criancas > 0 && velocidadeVento < 0.5){
        setResultado("Fumaça bloqueada. Aguardar condições ideais.")
        }
    }

  return (
    <div className="fumaca">
        <h2>Fumaça magica</h2>
        <button onClick={Seguranca}>Segurança</button>
        <br />
        {Resultado}
    </div>
  )}


export default Magica_fumaca