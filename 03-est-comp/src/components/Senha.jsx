import { useState } from "react"

function Senha() {

    const [Senha, setSenha] = useState(0)

function Senha_certa(){
let senha = 1234

let senhaFalada = Number(prompt("qual sua senha??:"))

if(senhaFalada == senha){
  let resposta = "acesso permitido"
 setSenha(resposta)
}else{
  let resposta = "acesso negado"
  setSenha(resposta)
}
}
  return (
    <div>
    <h2>Confira sua senha!</h2>
    <button className="botao" onClick={Senha_certa}>Digite aqui</button>
    <br />
    {Senha}
    <hr />
    </div>
  )
}

export default Senha