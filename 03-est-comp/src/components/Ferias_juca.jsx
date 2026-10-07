import { useState } from "react"

function Ferias_juca() {
    const[Resultado, setResultado] = useState(0)

    function contar_dias(){
        let Dias = Number(prompt("quantos dias voce vai ficar na pousada?"))
        let valorDiaria
        

        if(Dias <= 5){
            valorDiaria = 100
        }else if(Dias >= 6 && Dias <= 10){
            valorDiaria = 90
        }else if(Dias >= 11 ){
            valorDiaria = 80
        }else{
            setResultado("numero nao encontrado")
        }

        let valorBruto = Dias * valorDiaria
        let desconto = valorBruto * 25/100
        let multa = 150
        let totalPagar = valorBruto - desconto + multa;
        setResultado(totalPagar)
    }

  return (
    <div className='pousada'>
        <h2>Pousada</h2>
        <button onClick={contar_dias}>Pousada</button>
        {Resultado}
    </div>
  )
}

export default Ferias_juca