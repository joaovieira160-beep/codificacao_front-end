import React, {useState} from 'react'

function Filmes() {

        const[Preco_Antigo, setPreco_Antigo] = useState("")
        const[Preco_novo, setPreco_novo] = useState("")
        const[Resultado, setResultado] = useState("")

        function Calcular(){
            let resultado = ((Preco_novo - Preco_Antigo) / Preco_Antigo) * 100
            setResultado(resultado.toFixed(2))
        }

  return (
    <div className='Filmes'>
        <h1>Filmes</h1>

        <label htmlFor="">Preço antigo</label>
            <input type="text" 
            value={Preco_Antigo}
            onChange={(e) => setPreco_Antigo(e.target.value)}/>
        <label htmlFor="">Preço novo</label>
            <input type="text" 
            value={Preco_novo}
            onChange={(e) => setPreco_novo(e.target.value)}/>
            <button onClick={Calcular}>Calcular %</button>
            {Resultado + "%"}
    </div>
  )
}

export default Filmes