import React, {useState} from 'react'

function Lesmas() {

    const[Lesma, setLesma] = useState("")
    const[Velocidade_lesma, setVelocidade_lesma] = useState("")
    const[Resultado, setResultado] = useState("")

    function Calcular_Nivel(){
        
        if( Velocidade_lesma < 10){
            setResultado(`A lesma ${Lesma} foi cadastrada e esta no nivel 1`)
        }else if(Velocidade_lesma > 10 && Velocidade_lesma < 20){
            setResultado(`A lesma ${Lesma} foi cadastrada e esta no nivel 2`)
        }else if(Velocidade_lesma >= 20){
            setResultado(`A lesma ${Lesma} foi cadastrada e esta no nivel 3`)
        }
    }

  return (
    <div className='Lesmas'>
        <h1>Lesmas</h1>
        <label htmlFor="">Nome da lesma</label>
            <input type="text" 
            value={Lesma}
            onChange={(e) => setLesma(e.target.value)}/>
        <label htmlFor="">Velocidade da lesma (cm/h)</label>
            <input type="text" 
            value={Velocidade_lesma}
            onChange={(e) => setVelocidade_lesma(e.target.value)}/>
            <button onClick={Calcular_Nivel}>Se Inscrever</button>
            {Resultado}

    </div>
  )
}

export default Lesmas