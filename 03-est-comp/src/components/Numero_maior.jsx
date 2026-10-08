import { useState } from "react"

function Numero_maior() {

    const[Saida, setSaida] = useState(0)

    function MaiorNumero(){
  let A = Number(prompt("qual o primeiro numero?:"))
  let B = Number(prompt("qual o segundo numero?:"))

  if(A > B){
   let resposta = A
    setSaida(`O numero ${resposta} é maior`)
  }
  else if(B > A){
    let resposta = B
    setSaida(`O numero ${resposta} é maior`)
  }else{
   let resposta = "os numeros sao iguais"
    setSaida(resposta)
  }
}
  return (
    <div>
        <h2>Qual numero é maior?</h2>
        <button className="botao" onClick={MaiorNumero}>Numeros</button>
        <br />
        {Saida}
        <hr />
    </div>
  )
}

export default Numero_maior