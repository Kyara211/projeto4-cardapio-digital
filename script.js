let nome = prompt("Seja bem-vindo ao site do nosso restaurante, qual o seu nome")
let perguntaEstudante = prompt("Você é estudante? S/N").toLowerCase()
//Valores indefinidos
let valor1 = 0
let valor2 = 0
let valor3 = 0
alert(`A seguir, nosso menu:
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 
let escolha1 = parseInt(prompt(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    Escolha o seu primerio prato 1/2/3/4/5(sair)
    `))
if (escolha1 === 5) {
    alert("Você saiu do site.")
} else {
    switch (escolha1) {
        case 1:
            escolha1 = "Hambúrguer"
            valor1 = 20
            break
        case 2:
            escolha1 = "Pizza"
            valor1 = 35
            break
        case 3:
            escolha1 = "Refrigerante"
            valor1 = 5
            break
        case 4:
            escolha1 = "Batata frita"
            valor1 = 12
            break
    }
let escolha2 = parseInt(prompt(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    Escolha o seu segundo prato 1/2/3/4/5(sair)
    `))
    if (escolha2 === 5 ) {
        alert("Você saiu do site.")
    } else {

        switch (escolha2) {
            case 1:
                escolha2 = "Hambúrguer"
                valor2 = 20
                break
            case 2:
                escolha2 = "Pizza"
                valor2 = 35
                break
            case 3:
                escolha2 = "Refrigerante"
                valor2 = 5
                break
            case 4:
                escolha2 = "Batata frita"
                valor2 = 12
                break
        }
let escolha3 = parseInt(prompt(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    Escolha o seu terceiro prato 1/2/3/4/5(sair)
    `))
        if (escolha3 === 5) {
            alert("Você saiu do site.")
        } else {
            switch (escolha3) {
                case 1:
                    escolha3 = "Hambúrguer"
                    valor3 = 20
                    break
                case 2:
                    escolha3 = "Pizza"
                    valor3 = 35
                    break
                case 3:
                    escolha3 = "Refrigerante"
                    valor3 = 5
                    break
                case 4:
                    escolha3 = "Batata frita"
                    valor3 = 12
                    break
            }
            //Calculos e o resultado final
            let valorTotal = parseFloat(valor1 + valor2 + valor3)
            if (perguntaEstudante === "s" && valorTotal > 50) {
                let descontoEstudante = parseFloat((valorTotal * 10) / 100)
                let descontoNormal =parseFloat((valorTotal * 5) / 100)
                let final1 = parseFloat(valorTotal - (descontoEstudante + descontoNormal))
                alert(`Obrigado ${nome}!
                    Pratos escolhidos:
                    - ${escolha1} de R$${valor1.toFixed(2)}
                    - ${escolha2} de R$${valor2.toFixed(2)}
                    - ${escolha3} de R$${valor3.toFixed(2)}
                    Total sem desconto: R$${valorTotal.toFixed(2)}
                    Total com desconto: R$${final1.toFixed(2)}`)
            } else if (perguntaEstudante === "s" && valorTotal <= 50) {
                let descontoEstudante = parseFloat((valorTotal * 10) / 100)
                let final2 = parseFloat(valorTotal - descontoEstudante)
                alert(`Obrigado ${nome}!
                    Pratos escolhidos:
                    - ${escolha1} de R$${valor1.toFixed(2)}
                    - ${escolha2} de R$${valor2.toFixed(2)}
                    - ${escolha3} de R$${valor3.toFixed(2)}
                    Total sem desconto: R$${valorTotal.toFixed(2)}
                    Total com desconto: R$${final2.toFixed(2)}`)
            } else if (perguntaEstudante === "n" && valorTotal > 50) {
                let descontoNormal = parseFloat((valorTotal * 5) / 100)
                let final3 = parseFloat(valorTotal - descontoNormal)
                alert(`Obrigado ${nome}!
                    Pratos escolhidos:
                    - ${escolha1} de R$${valor1.toFixed(2)}
                    - ${escolha2} de R$${valor2.toFixed(2)}
                    - ${escolha3} de R$${valor3.toFixed(2)}
                    Total sem desconto: R$${valorTotal.toFixed(2)}
                    Total com desconto: R$${final3.toFixed(2)}`)
            } else if (perguntaEstudante === "n" && valorTotal <= 50) {
                let final4 = parseFloat(valorTotal)
                alert(`Obrigado ${nome}!
                    Pratos escolhidos:
                    - ${escolha1} de R$${valor1.toFixed(2)}
                    - ${escolha2} de R$${valor2.toFixed(2)}
                    - ${escolha3} de R$${valor3.toFixed(2)}
                    Total sem desconto: R$${valorTotal.toFixed(2)}
                    Total com desconto: R$${final4.toFixed(2)}`)
            } 
        }
    }
}
