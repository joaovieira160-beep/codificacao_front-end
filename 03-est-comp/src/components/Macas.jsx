import { useState } from "react"

function Macas() {
    const[Resultado, setResultado] = useState(0)

        function contasMacas(){
            let Quantidade_macas = Number(prompt("QUantas maças voce pretende comprar?"))
            let preco 
            let resultado

            if(Quantidade_macas >= 12){
                preco = 0.30
                resultado = Quantidade_macas * preco
                setResultado(`Serao R$${resultado} em maças`)
            }else{
                preco = 0.25
                resultado = Quantidade_macas * preco
                setResultado(`Serao R$${resultado} em maças`)
            }

            
        }

  return (
    <div className="macas">
        <h2>Contador de preço para maças!</h2>
        <button className="botao" onClick={contasMacas}>Maças</button>
        <br />
        {Resultado}
        <hr />
    </div>
  )
}

export default Macas