import './App.css'

function App() {

  function relatorios(){
    let relatoriosPF = 40
    let relatoriosPJ = 33
    let TempoRelatorioPF = 12
    let TempoRelatorioPJ = 42
    let totalPF = 2350.00
    let totalPJ = 8900.00

    let totalRelatorios = relatoriosPF + relatoriosPJ
    let tempoTotalTrabalho = TempoRelatorioPF +TempoRelatorioPJ
    let ValorTotal = totalPF + totalPJ
    let MediaValorPF = totalPF / relatoriosPF
    let MediaValorPJ = totalPJ / relatoriosPJ
    let MediaTempoPF = TempoRelatorioPF /relatoriosPF
    let MediaTempoPJ = TempoRelatorioPJ /relatoriosPJ



alert(`Relatorios para PF: ${relatoriosPF}
      Relatorios para PJ: ${relatoriosPJ}
      total de relatorios: ${totalRelatorios}

      Tempo para elaborar relatorios PF: ${TempoRelatorioPF}
      Tempo para elaborar relatorios PJ: ${TempoRelatorioPJ}
      Tempo total de trabalho: ${tempoTotalTrabalho}

      Valor total recebido de PF: R$${totalPF.toFixed(2)}
      Valor total recebido de PJ: R$${totalPJ.toFixed(2)}
      Valor total recebido: R$${ValorTotal.toFixed(2)}
      
      Media de valor por relatorio PF: R$${MediaValorPF.toFixed(2)}
      Media de valor por relatorio PJ: R$${MediaValorPJ.toFixed(2)}

      Media de tempo por relatorio PF: R$${MediaTempoPF.toFixed(2)}
      Media de tempo por relatorio PJ: R$${MediaTempoPJ.toFixed(2)}
      `)


  }
  
function freela(){
  let pagamentoDev = 500
  let recebeInicialmente = 500

  let Porhora = Number(prompt("quantas horas sao estimadas para o desenvolvimento?:"))

  let cobrar = recebeInicialmente + (350 * Porhora)
  let lucro = cobrar - pagamentoDev


  alert(`O preço estimado para se cobrar do cliente é : R$${cobrar}\nSeu lucro total sera R$${lucro}`)

}

  function IA(){
    let valorInicial = 5
  
    let caracteres = Number(prompt("quantos caracteres o prompt tem?"))

    let tokensTotal = valorInicial + caracteres

    alert(`Voce gastará ${tokensTotal} tokens`)
  }

  function jares(){
    let custocaminhao = 450
    let valorjare = 90
    let lucroPcaminhao = (valorjare * 50) - custocaminhao

    let Qcaminhoes = Number(prompt("quantos caminhoes foram pedidos?:"))

    let lucrototal = lucroPcaminhao * Qcaminhoes
    

    alert(`o lucro seria de R$${lucrototal}`)


  }

  function churrascaria(){
let totalPessoas = Number(prompt("quantas pessoas irao comer?"))

let carne = 0.5
let cerveja =1
let agua = 0.5
let refri = 0.2

  carne = carne * totalPessoas
  cerveja = cerveja * totalPessoas
  agua = agua * totalPessoas
  refri = refri * totalPessoas


alert(`o esperado a se pedir seria :\nCarne: ${carne}Kg\nCerveja:${cerveja}L\nAgua:${agua}L\nRefri:${refri}L`)
  }

  function Racao(){
    let gramas = Number(prompt("quantas gramas voce vai comprar "))

    let resultado = (gramas / 1000) * 10

    alert(`O preço sera de R$${resultado.toFixed(2)}`)
  }

  function PoliticaPrecos(){

let valorCompra = Number(prompt("quantos R$ voce pagou no item?:"))

let venderPor = valorCompra * 3

alert(`o valor que o item deve ser revendido sera de R$${venderPor.toFixed(2)}`)

}

function poupanca(){

  let salario = Number(prompt("qual o seu salariio mensal?: "))

  let gastos = {
  moradia : 0,
  agua : 0,
  luz : 0,
  internet : 0,
  gasolina : 0,
  streaming : 0,
  telefone: 0,
  outros : 0,
  total: 0
}
gastos.moradia = Number(prompt("quanto gasta em moradia?:"))
gastos.total += gastos.moradia

gastos.agua = Number(prompt("quanto gasta em agua?:"))
gastos.total += gastos.agua
gastos.luz = Number(prompt("quanto gasta em luz?:"))
gastos.total += gastos.luz
gastos.internet = Number(prompt("quanto gasta em internet?:"))
gastos.total += gastos.internet
gastos.gasolina = Number(prompt("quanto gasta em gasolina?:"))
gastos.total += gastos.gasolina
gastos.streaming = Number(prompt("quanto gasta em streaming?:"))
gastos.total += gastos.streaming
gastos.telefone= Number(prompt("quanto gasta em telefone?:"))
gastos.total += gastos.telefone
gastos.outros = Number(prompt("quanto gasta em outros?:"))
gastos.total += gastos.outros

  let sobra = salario - gastos.total 

  alert(`O seu salario final com os pagamentos e gastos descontados é R$${sobra.toFixed(2)}`)
}

      function PlanejarS(){
        let bombasF = 7
        let preco = Number(prompt("quantos reais cada bomba de fumaça custa?"))
        let shows = Number(prompt("quanto shows estao marcados?:"))

        let totalB = bombasF * shows
        let totalValor = totalB * preco

        alert(`Voce precisa de ${totalB} bombas de fumaça,o custo sera de R$${totalValor.toFixed(2)}`)
      }


      function mensalBarco(){
        let suprimentos = Number(prompt("quanto foi gasto em suprimentos e mercadorias este mes?"))
        let vendas = Number(prompt("quanto foi o faturamento de vendas de ingressos este mes?"))
        let itens = Number(prompt("quanto foi o faturamento de vendas de itens este mes?"))

        let totalfaturamento = vendas + itens
        let lucro = totalfaturamento - suprimentos
        let porcentagem = (lucro*100)/ suprimentos 


        alert(`o total de seu faturamento de vendas esse mes foi de R$${lucro}\nOu seja ${porcentagem}% `)
      }

      function faturamento(){
        let Tbruto = Number(prompt("qual o total bruto deste mes?:"))
        let premiacao = Number(prompt("qual o total de premiaçoes totais deste mes?:"))
        let presente = Number(prompt("qual o total de presentes deste mes?:"))
        let comissoes = Number(prompt("qual o total de comissões deste mes?:"))

        let Tmes = Tbruto - premiacao - presente -comissoes

        alert(`O total faturado deste mes menos os gastos sera de : R$${Tmes}`)
      }

        function frete(){
          let peso = Number(prompt("qual o peso da encomenda?:"))
          let distancia = Number(prompt("qual a distandia da encomenda?:"))
          let volume = Number(prompt("qual o volume da encomenda?:"))

          let frete = 15+(2*peso)+(0.05*distancia)+(10*volume)

          alert(`o frete da sua encomenda vai ser : R$${frete.toFixed(2)}`)
        }

        function chanceCelular(){
          let Tvezes = Number(prompt("quantas vezes o candidato usou o celular em meio a palestra?:"))

          let chance = (0.1/(1+500 * Tvezes))* 100

          alert(`As chances do canditado fulano ser aprovado são ${chance} `)
        }

        function verCarga(){
          let Pcaminhao = Number(prompt("qual o peso do caminhao somente?:"))
          let Ptotal = Number(prompt("qual o peso do caminhao já com a carga?:"))

          let Pcarga = Ptotal - Pcaminhao

          alert(`o peso da carga do caminhao é de ${Pcarga}`)
        }

      function pagamentoDiario(){
        let salarioM = Number(prompt("qual seu salario mensal?:"))
        let dias = Number(prompt("quantos dias voce trabalhou este mes?:"))

        let porDia = salarioM / dias
        let porSemana = porDia * 5

        alert(`voce recebe R$${porDia} por dia\nE recebe R$${porSemana} na semana`)

      }

  function custosMensais(){
    let custo = Number(prompt("qual o valor de seus custos mensais"))
    let doacoes =  Number(prompt("qual o valor das doaçoes?:"))

    let restante = custo - doacoes

      alert(`faltam R$${restante} para pagar sua divida de R$${custo}`)
  }

  function totalLaranjas(){
let Qinicial = Number(prompt("qual a quantidade inicial de laranjas?:"))
let Qvendida =  Number(prompt("qual a quantidade de laranjas vendidas?:"))

let Qfinal = Qinicial - Qvendida

alert(`após a venda de ${Qvendida} laranjas, sobraram ${Qfinal}`)

  }
 
  function contagemDev(){
    let clt = Number(prompt("quantos dev clt sua impresa possui?:"))
    let pj = Number(prompt("quantos dev pj sua impresa possui?:"))
    let estagiarios = Number(prompt("quantos dev estagiarios sua impresa possui?:"))

    let quantidade = clt + pj + estagiarios

    alert(`A empresa tem o total de ${quantidade} de devs`)
  }

  function Pepequeno(){

    let preco = Number(prompt("qual o preço dos calçados:"))
    let quantidade = Number(prompt("quantas unidades?: "))

    let valor = preco * quantidade

    alert(`a impresa vai recer R$${valor} em vale-trocas`)

  }
   function calcularPontos(){
        let vitorias = Number(prompt("numero de vitorias:"))
        let empates = Number(prompt("numero de empates:"))
      
        let pontos = vitorias * 3 + empates 
        
        alert(`seu time tem ${pontos} pontos `)
      }

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

      <h2>exercicios maneiros</h2>

      <button onClick={calcularPontos}>campeonato</button>
      <button onClick={Pepequeno}>ver vale-troca</button>
      <button onClick={contagemDev}>funcionarios/dev</button>
      <br />
      <button onClick={totalLaranjas}>laranjas vendidas</button>
      <button onClick={custosMensais}>custos do mes</button>
      <button onClick={pagamentoDiario}>pagamento diario</button>
      <br />
      <button onClick={verCarga}>carga do caminhao</button>
      <button onClick={chanceCelular}>veja as chances</button>
      <button onClick={frete}>ver frete</button>
      <br />
      <button onClick={faturamento}>ver faturamento</button>
      <button onClick={mensalBarco}>faturamento barco</button>
      <button onClick={PlanejarS}>planejamento de shows</button>
      <br />
      <button onClick={poupanca}>Poupança</button>
      <button onClick={PoliticaPrecos}>Politica de preços</button>
      <button onClick={Racao}>preço da raçao</button>

      <br />
      <button onClick={churrascaria}>churrascaria</button>
      <button onClick={jares}>Jares</button>
      <button onClick={IA}>IA</button>
      <br />
      <button onClick={freela}>freela</button>
      <button onClick={relatorios}>relatorios</button>
      <hr />
      


      <button onClick={testar}>surpresa</button>
      <button onClick={calcularMedia}>Media</button>
      

      </div>
  )
}

export default App

