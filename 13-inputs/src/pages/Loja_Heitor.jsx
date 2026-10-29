import React, {useState} from 'react'

function Loja_Heitor() {

    let maca = 1.50
    let laranja = 2
    let bergamota = 1
    let banana = 1.20
    let pera = 0.50

    const[Quantidade_Maca, setQuantidade_Maca] = useState("")
    const[Quantidade_laranja, setQuantidade_laranja] = useState("")
    const[Quantidade_bergamota, setQuantidade_bergamota] = useState("")
    const[Quantidade_banana, setQuantidade_banana] = useState("")
    const[Quantidade_pera, setQuantidade_pera] = useState("")
    const[Resultado, setResultado] = useState("")

    function Ver_recibo(){
        let resultado_maca = maca * Number(Quantidade_Maca)
        let resultado_laranja = laranja * Number(Quantidade_laranja)
        let resultado_bergamota = bergamota * Number(Quantidade_bergamota)
        let resultado_banana = banana * Number(Quantidade_banana)
        let resultado_pera = pera * Number(Quantidade_pera)
        let Total = 0
        
        let resultados_individuais = [
            resultado_maca ,
            resultado_laranja ,
            resultado_bergamota ,
            resultado_banana ,
            resultado_pera ,
        ]
        for(let i = 0; i < resultados_individuais.length ; i++){
           Total += resultados_individuais[i]
        }
        

        setResultado(
`Maçãs: ${Quantidade_Maca} = R$ ${resultado_maca}
Laranjas: ${Quantidade_laranja} = R$ ${resultado_laranja}
Bergamotas: ${Quantidade_bergamota} = R$ ${resultado_bergamota}
Bananas: ${Quantidade_banana} = R$ ${resultado_banana}
Peras: ${Quantidade_pera} = R$ ${resultado_pera}

Total = R$ ${Total}`
);

    }

  return (
    <div className='Loja_heitor'>
        <h1>Loja Heitor</h1>
        <label htmlFor="">Maças</label>
        <input type="text"
        value={Quantidade_Maca} 
        onChange={(e)=> setQuantidade_Maca(e.target.value)}/>

        <label htmlFor="">Laranjas</label>
        <input type="text"
        value={Quantidade_laranja} 
        onChange={(e)=> setQuantidade_laranja(e.target.value)} />

        <label htmlFor="">Bergamotas</label>
        <input type="text" 
        value={Quantidade_bergamota} 
        onChange={(e)=> setQuantidade_bergamota(e.target.value)}/>

        <label htmlFor="">Bananas</label>
        <input type="text" 
        value={Quantidade_banana} 
        onChange={(e)=> setQuantidade_banana(e.target.value)}/>

            <label htmlFor="">Peras</label>
        <input type="text" 
        value={Quantidade_pera} 
        onChange={(e)=> setQuantidade_pera(e.target.value)}/>

        <button onClick={Ver_recibo}>Ver Recibo</button>

        {Resultado}
    </div>
  )
}

export default Loja_Heitor