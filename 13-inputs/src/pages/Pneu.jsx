import { useState } from "react"

function Pneu() {

    const[N , setN] = useState('')
    const[M , setM] = useState('')
    const[Resultado , setResultado] = useState('-')

    function Calculo(){
        let resultado = N - M
        setResultado(`A pressao faltante é ${resultado}`)
    }

  return (
    <div className='Pneu'>
        <h1>Pressao no Pneu</h1>

        <label htmlFor="">Pressao final Desejada</label>
            <input type="text" 
            value={N}
            onChange={(e) => setN(e.target.value)}/>


            <label htmlFor="">Pressao atual</label>
            <input type="text" 
            value={M}
            onChange={(e) => setM(e.target.value)}/>

            <button onClick={Calculo}>calcular</button>

            {Resultado}

    </div>
  )
}

export default Pneu