/*   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("Digite o número para calcular o fatorial.")
   Leia (numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
        fimpara
        escreval ("O fatorial de ", numero, "é: ", fatorial)
        */

        function acaoBotao(params) {
            var numero, fatorial, contador;
            numero = prompt("Digite o número para calcular o fatorial.")
            fatorial = 1
            contador = contador + 1
            for (let contador = 1; contador <= numero; contador++) {
                fatorial = fatorial * contador
                
            }

        
                   document.getElementById("paragrafo").innerText = "O fatorial de " + numero + "é: " + fatorial}