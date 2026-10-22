import { useState } from "react"

function CNA() {

    const[InputNota1, setInputNota1] = useState('')
    const[InputNota2, setInputNota2] = useState('')
    const[Resultado, setResultado] = useState('-')

    function calcularMedia(){
        let n1 = Number(InputNota1)
        let n2 = Number(InputNota2)
        let media = (n1 + n2) / 2

        if(media >= 7){
            setResultado(`Sua nota final é ${media.toFixed(1)}, voçe esta aprovado!`)
        }else if(media <= 6 && media >=4){
            setResultado(`Sua nota final é ${media.toFixed(1)}, voçe esta de recuperaçao!`)
        }else if(media <4){
            setResultado(`Sua nota final é ${media.toFixed(1)}, voçe esta reprovado!`)
        }
        
    }

   
  return (
    <div className='CNA'>
            <h1>Media - CNA</h1>

            <p>Digite suas 2 notas</p>
            <label htmlFor="">Nota 1</label>
            <input type="text" 
            value={InputNota1}
            onChange={(e) => setInputNota1(e.target.value)}/>


            <label htmlFor="">Nota 2</label>
            <input type="text" 
            value={InputNota2}
            onChange={(e) => setInputNota2(e.target.value)}/>

            <button onClick={calcularMedia}>Calcular</button>

            {Resultado}
        
    </div>
  )
}



export default CNA