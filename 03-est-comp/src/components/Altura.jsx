import { useState } from "react"

function Altura() {

    const[resultado, setResultado] = useState(0)

    function calcular_altura(){
        let Perguntar_genero = Number(prompt("qual seu genero?\n1-feminino\n2-masculino\n"))
        let altura = Number(prompt("qual a sua altura?:"))
        let resultado

        switch(Perguntar_genero){
            case 1:
            resultado = (62.1 * altura) - 44.7;
            setResultado(`Seu peso ideal seria: ${resultado.toFixed(2)}`)
            break
            case 2:
             resultado = (72.7 * altura) - 58;
             setResultado(`Seu peso ideal seria: ${resultado.toFixed(2)}`)
        }
    }

  return (
    <div className="altura">
        <h2>Calcular peso "ideal"</h2>
        <button className="botao" onClick={calcular_altura}>Calcular</button>
        <br />
        {resultado}
        <hr />
    </div>
  )
}

export default Altura