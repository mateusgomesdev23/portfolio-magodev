/* 

Passo 1 Pega os elementos das abas no HTML
Passo 2 Identificar o click na aba
Passo 3 Após clique, desmarcar aba selecionada (removendo class = selecionado)
Passo 4 Marcar aba clicada/selecionad
Passo 5 Esconter o conteúdo anterior
Passo 6 Mostrar o próximo conteúdo
*/

const abas = document.querySelectorAll(".aba")

abas.forEach((aba => {
  aba.addEventListener("click", function () {

    if (aba.classList.contains("selecionado")) {
      return
    }
    selecionarAba(aba)
    mostrarInformacoesAba(aba)
  })
}))

function selecionarAba(aba) {
  const abaSelecionado = document.querySelector(".aba.selecionado")
  abaSelecionado.classList.remove("selecionado")
  aba.classList.add("selecionado")
}

function mostrarInformacoesAba(aba) {
  const infoSelecionado = document.querySelector(".info.selecionado")
  infoSelecionado.classList.remove("selecionado")
  const idDoElementoDeInformacoesDaAba = `info-${aba.id}`
  console.log(idDoElementoDeInformacoesDaAba)
  const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
  informacaoASerMostrada.classList.add("selecionado")
}