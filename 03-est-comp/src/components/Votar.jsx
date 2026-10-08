import { useState } from "react"


function Votar() {

    const[Votar, setVotar] = useState(0)

    function Votacao(){
    let idade = Number(prompt("qual a sua idade?"))

    if(idade <16){
        setVotar("Voce ainda nao pode votar para o futuro do seu pais!")
    }else if(idade >= 16 && idade <= 17){
        setVotar("Epa! seu voto é apenas facultativo!")
    }else if(idade >=18 && idade <= 65){
        setVotar("Seu voto é obrigatorio!")
    }else if(idade > 65){
        setVotar("Depois dos 65 seu voto volta a ser faculdativo!")
    }else{
        setVotar("nao encontrado")
    }
}

  return (
    <div className="votos">
        <h2>Votos</h2>
        <button className="botao" onClick={Votacao}>Votar!</button>
        <br />
        {Votar}
        <hr />
    </div>
  )
}

export default Votar