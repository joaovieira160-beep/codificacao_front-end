import { useState } from "react"

function Bondinho() {

    const[Alunos, setAlunos] = useState('')
    const[Monitores, setMonitores] = useState('')
    const[Resposta, setResposta] = useState('')

function Total_bondinho(){
    let A = Number(Alunos)
    let M = Number(Monitores)
    let Total = A + M
    let total_Maximo = 50
    
    if(Total >total_Maximo){
        setResposta("Nao é seguro fazer a viagem")
    }else if(Total <= total_Maximo){
        setResposta("Voce podera fazer apenas uma viagem")
    }
}

  return (
    <div className="Bondinho">
        <h1>Bondinho</h1>
        <label htmlFor="">Alunos</label>
        <input type="text"
         value={Alunos}
        onChange={(e) => setAlunos(e.target.value)}/>

<label htmlFor="">Monitores</label>
        <input type=""
        value={Monitores}
        onChange={(e) => setMonitores(e.target.value)} />
        <button onClick={Total_bondinho}>Calcule</button>
        {Resposta}
    </div>
  )
}

export default Bondinho