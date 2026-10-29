import { useState } from 'react'

function Bomba() {

    const[Quantidade, setQuantidade] = useState('')
    const[Resultado, setResultado] = useState('')
    let i = 1
    let texto = ''
    let cont = 0

    function Bomba_linhas(){
        while( cont<Quantidade){
            if(i%4 != 0){
                texto += i + ' '
            }else{
                texto += 'pum '
                cont++
            }
        }
        i++

        setResultado(texto)
        
    }


  return (
    <div className='Bomba'>
        <h1>Bomba</h1>
        <label htmlFor="">Quantidade</label>
            <input type="text" 
            value={Quantidade}
            onChange={(e) => setQuantidade(e.target.value)}/>
            <button onClick={Bomba_linhas}>Ver</button>
            {Resultado}
    </div>
  )
}

export default Bomba