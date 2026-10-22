import React, { useState } from 'react'

function Demo() {

    const[InputNota1, setInputNota1] = useState('')
    const[InputNota2, setInputNota2] = useState('')
    const[InputNota3, setInputNota3] = useState('')
    const[Resultado, setResultado] = useState('-')

    function calcularMedia(){
        let n1 = Number(InputNota1)
        let n2 = Number(InputNota2)
        let n3 = Number(InputNota3)
        let media = (n1 + n2 + n3) / 3
        setResultado(`Sua media anual é :${media.toFixed(1)}`)

        
    }

   
  return (
    <div className='Demo'>
            <h1>Demo - medias</h1>

            <p>Digite suas notas do trimestre</p>
            <label htmlFor="">Nota 1</label>
            <input type="text" 
            value={InputNota1}
            onChange={(e) => setInputNota1(e.target.value)}/>


            <label htmlFor="">Nota 2</label>
            <input type="text" 
            value={InputNota2}
            onChange={(e) => setInputNota2(e.target.value)}/>

            <label htmlFor="">Nota 3</label>
            <input type="text" 
            value={InputNota3}
            onChange={(e) => setInputNota3(e.target.value)}/>

            <button onClick={calcularMedia}>Calcular</button>

            {Resultado}
            

        

    </div>
  )
}

export default Demo