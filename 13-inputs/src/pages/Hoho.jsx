import React, { useState } from 'react'

function Hoho() {

    const[Quantidade, setQuantidade] = useState('')
    const[Resultado, setResultado] = useState('')


    function EscreverHO(){
    let resultado = "Ho ".repeat(Quantidade).trim() + "!"
    setResultado(resultado)
        
    }

  return (
    <div className='Hoho'>
        <h1>Numero de "HO!"s</h1>

         <p>Digite quantos "Ho" voçe quer que o Papai Noel fale</p>
            <label htmlFor="">Quantidade</label>
            <input type="text" 
            value={Quantidade}
            onChange={(e) => setQuantidade(e.target.value)}/>
            <button onClick={EscreverHO}>Falar</button>
            {Resultado}

    </div>
  )
}

export default Hoho