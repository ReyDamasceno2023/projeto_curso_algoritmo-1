
    var valor01, valor02, operacao, resultado;

    alert = ("Este algoritmo é para você calcular valores")

   valor01 = prompt ("digite o primeiro valor")
   operacao = prompt ("Digite a operação a ser efetuada")
   valor02 = prompt ("digite o segundo valor")

  switch (operacao){
    case "+" :
      resultado = parseInt (valor01) + parseInt (valor01)
      break
      case "-" :
        resultado = parseInt (valor01) - parseInt (valor01)
        break
        case "*" :
          resultado = parseInt (valor01) * parseInt (valor01)
          break
          case "/" :
            resultado = parseInt (valor01) / parseInt (valor01)
            break
  }
