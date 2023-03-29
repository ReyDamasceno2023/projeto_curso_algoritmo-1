/*
    nome: caractere
    idade, limite,contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva ("digite a quantidade de vezes a idade será verificada: ")
    leia (limite)
    contador := 0
    enquanto contador < limite faca
        escreva ("Digite o nome da pessoa: ")
        leia (nome)
        escreva ("Digite a idade do ", nome, ": ")
        leia (idade)
        se idade > 18 então
           escreval(nome, " tem altorização para realizar esta compra.")
           senao
                escreval (nome, " não tem altorização para realizar esta compra.")
         fimse
        contador :=  contador + 1
    fimenquanto
*/
function acaoBotao(params) {

var nome, idade, limite, contador

limite = prompt("digite a quantidade de vezes a idade será verificada: ")
contador = 0
while(contador < limite){
    nome = prompt ("Digite o nome da pessoa: ")
    idade = prompt ("Digite a idade do " + nome) 

    if (idade > 18)
       document.getElementById("paragrafo").innerText = nome + " tem altorização para realizar esta compra."
    else
       document.getElementById("paragrafo").innerText = nome + " não tem altorização para realizar esta compra."
    contador ++
  }
}