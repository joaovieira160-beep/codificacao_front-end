import { useState } from "react"

function Placa() {
    const[Saida, setSaida] = useState(0)

    function Placa(){

  let Numero_final_placa = Number(prompt("qual o digito final da placa do seu carro?:"))

  if(Numero_final_placa >= 0 , Numero_final_placa <= 1){
    let dia = "nao pode rodar na segunda-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 2 , Numero_final_placa <= 3){
    let dia = "nao pode rodar na terça-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 4 , Numero_final_placa <= 5){
    let dia = "nao pode rodar na quarta-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 6 , Numero_final_placa <= 7){
    let dia = "nao pode rodar na quinta-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 8 , Numero_final_placa <= 9){
    let dia = "nao pode rodar na sexta-feira"
    setSaida(dia)
  }
}
  return (
    <div>
        <h2>Que dias seu NÃO carro pode rodar?</h2>
        <button className="botao" onClick={Placa}>Digito</button>
        <br />
        {Saida}
        <hr />
    </div>
  )
}

export default Placa