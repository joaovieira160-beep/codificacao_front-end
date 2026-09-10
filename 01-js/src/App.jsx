import './App.css'

function App() {

  function testar(){
    let nome = prompt("qual seu nome ?")
    let bocaDoSapo = nome;
    alert(nome + ", seu nome esta na bocaDoSapo 🐸")
  }

  function calcularMedia(){
    
      let n1 = Number(prompt("qual sua primeira nota?"))
      let n2 = Number(prompt("qual sua segunda nota?"))
      let n3 = Number(prompt("qual sua terceira nota?"))

      let resultado = (n1 + n2 + n3) / 3

      alert(`sua media é : ${resultado.toFixed(1)}`)
  }

  return (
    <div className="const-app">
      <h1>JavaScript no Ract</h1>
      <button onClick={testar}>testar</button>
      <button onClick={calcularMedia}>Media</button>
      </div>
  )
}

export default App
