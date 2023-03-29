/*
    sairLoop: caractere
    valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
        escreva("Digite o primeiro valor: ")
        leia(valor01)
        escreva("Digite o negundo valor: ")
        leia(valor02)
        escreval("Resultado: ", valor01 + valor02)
        escreval("Deseja sair? S/N")
        leia(sairLoop)
    Ate sairLoop <> "N" && "n"
*/

function acaoBotao() {

var sairLoop, valor01, valor02
do{
    valor01 = prompt("Digite o primeiro valor: ")
    valor02 = prompt("Digite o negundo valor: ")
    document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
    sairLoop = prompt("Deseja sair? S/N")
}while(sairLoop == "n")
}
