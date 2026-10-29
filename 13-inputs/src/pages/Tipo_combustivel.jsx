import React, {useState} from 'react'

function Tipo_combustivel() {

    const[Alcool, setAlcool] = useState("")
    const[Diesel, setDiesel] = useState("")
    const[Gasolina, setGasolina] = useState("")
    const[Resultado_A, setResultado_A] = useState(0)
    const[Resultado_D, setResultado_D] = useState(0)
    const[Resultado_G, setResultado_G] = useState(0)


    function Ver_Alcool(){
        let Resultado_alcool =  Resultado_A + Number(Alcool)
        setResultado_A(Resultado_alcool)

    }
    function Ver_Diesel(){
        let Resultado_Diesel =  Resultado_D + Number(Diesel)
        setResultado_D(Resultado_Diesel)

    }
    function Ver_Gasolina(){
        let Resultado_Gasolina =  Resultado_G + Number(Gasolina)
        setResultado_G(Resultado_Gasolina)

    }

  return (
    <div className='Tipo_combustivel'>
        <h1>Tipo_combustivel</h1>
        <label htmlFor="">Alcool</label>
        <input type="text" 
        value={Alcool}
        onChange={(e)=> setAlcool(e.target.value)}/>
        <button onClick={Ver_Alcool}>Adicionar</button>
        {Resultado_A}

        <label htmlFor="">Diesel</label>
        <input type="text" 
        value={Diesel}
        onChange={(e)=> setDiesel(e.target.value)}/>
        <button onClick={Ver_Diesel}>Adicionar</button>
        {Resultado_D}

        <label htmlFor="">Gasolina</label>
        <input type="text" 
        value={Gasolina}
        onChange={(e)=> setGasolina(e.target.value)}/>
        <button onClick={Ver_Gasolina}>Adicionar</button>
        {Resultado_G}

    </div>
  )
}

export default Tipo_combustivel