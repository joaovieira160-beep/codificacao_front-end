import { useState } from 'react'
import './App.css'

function App() {
  const [Saida, setSaida] = useState(0)


function CalcularMedia(){
  
  let nota1 = Number(prompt("nota 1:"))
  let nota2 = Number(prompt("nota 2:"))
  let nota3 = Number(prompt("nota 3:"))

  let media = (nota1 + nota2 + nota3) / 3

  setSaida(media)
}

//4
function rolarD4(){
  let n = Math.ceil(Math.random()*4)
  setSaida(n)
}
//6
function rolarD6(){
  let n = Math.ceil(Math.random()*6)
  setSaida(n)
}
//8
function rolarD8(){
  let n = Math.ceil(Math.random()*8)
  setSaida(n)
}
//10
function rolarD10(){
  let n = Math.ceil(Math.random()*10)
  setSaida(n)
}
//12
function rolarD12(){
  let n = Math.ceil(Math.random()*12)
  setSaida(n)
}
//20
function rolarD20(){
  let n = Math.ceil(Math.random()*20)
  setSaida(n)
}
//100
function rolarD100(){
  let n = Math.ceil(Math.random()*100)
  setSaida(n)
}

const [senha, setsenha] = useState(0)

function Senha(){
let senha = 1234

let senhaFalada = Number(prompt("qual sua senha??:"))

if(senhaFalada == senha){
  let resposta = "acesso permitido"
 setSaida(resposta)
}else{
  let resposta = "acesso negado"
  setSaida(resposta)
}

}

function MaiorNumero(){
  let A = Number(prompt("qual o primeiro numero?:"))
  let B = Number(prompt("qual o segundo numero?:"))

  if(A > B){
   let resposta = A
    setSaida(resposta)
  }
  else if(B > A){
    let resposta = B
    setSaida(resposta)
  }else{
   let resposta = "os numeros sao iguais"
    setSaida(resposta)
  }
}

function Placa(){

  let Numero_final_placa = Number(prompt("qual o digito final da placa do seu carro?:"))

  if(Numero_final_placa >= 0 , Numero_final_placa <= 1){
    let dia = "nao pode rodar na segunda-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 2 , Numero_final_placa <= 3){
    let dia = "nao pode rodar na terça-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 4 , Numero_final_placa <= 5){
    let dia = "nao pode rodar na quarta-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 6 , Numero_final_placa <= 7){
    let dia = "nao pode rodar na quinta-feira"
    setSaida(dia)
  }else if(Numero_final_placa >= 8 , Numero_final_placa <= 9){
    let dia = "nao pode rodar na sexta-feira"
    setSaida(dia)
  }
}


  return (
  <div className="app">
    <h1>Estados!</h1>
    <button onClick={CalcularMedia}>Media</button>
    <button onClick={rolarD4}>D4</button>
    <button onClick={rolarD6}>D6</button>
    <button onClick={rolarD8}>D8</button>
    <button onClick={rolarD10}>D10</button>
    <button onClick={rolarD12}>D12</button>
    <button onClick={rolarD20}>D20</button>
    <button onClick={rolarD100}>D100</button>
    <hr /><hr />
    <button onClick={Senha}>Senha</button>
    <button onClick={MaiorNumero}>Maior numero</button>
    <button onClick={Placa}>placas</button>

    <p>
      Resultado: {Saida}
    </p>
  </div>

  )
}

export default App
