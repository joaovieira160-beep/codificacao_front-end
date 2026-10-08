import { useState } from "react"

function Palestras() {

const[Resultado,setResultado] = useState(0)

    function Palestra_local(){
        let Perguntar_palestras = Number(prompt("qual a sua proxima palestra?\n1- Animacoes com Scratch\n2- Scratch para gamers\n3- JavaScript para leigos\n 4- Topicos avancados de JavaScript\n5- Vida e carreira."))

        switch(Perguntar_palestras){
            case 1: setResultado("Esta palestra sera no laboratorio 305,as 19H")
            break
            case 2: setResultado("Esta palestra sera no laboratorio 512,as 20H")
            break
            case 3: setResultado("Esta palestra sera no laboratorio 101,as 19H")
            break
            case 4: setResultado("Esta palestra sera no laboratorio 305,as 20H")
            break
            case 5: setResultado("Esta palestra sera no auditorio,as 21H")
            break
        }
    }

  return (
    <div>
        <h2>Saiba o local de suas palestras!</h2>
        <button className="botao" onClick={Palestra_local}>Confira aqui!</button>
        <br />
        {Resultado}
        <hr />

    </div>
  )
}

export default Palestras