let nome = prompt("Qual é o seu nome?")
let verificacao = prompt(`Você é estudante? (sim/não)`).toLowerCase()
let prato1 = parseFloat(prompt(`Escolha o primeiro prato com os números entre 1 e 4: 
    (1) Hambúrguer - R$ 20
    (2) Pizza - R$ 35
    (3) Refrigerante - R$ 5
    (4) Batata Frita - R$ 12

    (5) Sair do Menu`))
if (prato1 === 5) {
    alert(`Obrigado pela visita, volte sempre!`)
} else {
    switch (prato1) {
        case 1:
            item = "Hambúrguer"
            precoitem = 20
            alert("Hambúrguer - R$ 20")
            break
        case 2:
            item = "Pizza"
            precoitem = 35
            alert("Pizza - R$ 35")
            break
        case 3:
            item = "Refrigerante"
            precoitem = 5
            alert("Refrigerante - R$ 5")
            break
        case 4:
            item = "Batata Frita"
            precoitem = 12
            alert("Batata Frita - R$ 12")
            break
        default:
            alert(`Escolha uma das opções`)
    }

    let prato2 = parseFloat(prompt(`Escolha o segundo prato com os números entre 1 e 4: 
    (1) Hambúrguer - R$ 20
    (2) Pizza - R$ 35
    (3) Refrigerante - R$ 5
    (4) Batata Frita - R$ 12
                
    (5) Sair do Menu`))

    if (prato2 == 5) {
        alert(`Obrigado pela visita, volte sempre!`)
    } else {
        switch (prato2) {
            case 1:
                item2 = "Hambúrguer"
                precoitem2 = 20
                alert("Hambúrguer - R$ 20")
                break
            case 2:
                item2 = "Pizza"
                precoitem2 = 35
                alert("Pizza - R$ 35")
                break
            case 3:
                item2 = "Refrigerante"
                precoitem2 = 5
                alert("Refrigerante - R$ 5")
                break
            case 4:
                item2 = "Batata Frita"
                precoitem2 = 12
                alert("Batata Frita - R$ 12")
                break
            default:
    alert(`Escolha uma das opções`)
        }
        let prato3 = parseFloat(prompt(`Escolha o terceiro prato com os números entre 1 e 4: 
    (1) Hambúrguer - R$ 20
    (2) Pizza - R$ 35
    (3) Refrigerante - R$ 5
    (4) Batata Frita - R$ 12
                        
    (5) Sair do Menu`))

        if (prato3 == 5) {
            alert(`Obrigado pela visita, volte sempre!`)
        } else {
            switch (prato3) {
                case 1:
                    item3 = "Hambúrguer"
                    precoitem3 = 20
                    alert("Hambúrguer - R$ 20")
                    break
                case 2:
                    item3 = "Pizza"
                    precoitem3 = 35
                    alert("Pizza - R$ 35")
                    break
                case 3:
                    item3 = "Refrigerante"
                    precoitem3 = 5
                    alert("Refrigerante - R$ 5")
                    break
                case 4:
                    item3 = "Batata Frita"
                    precoitem3 = 12
                    alert("Batata Frita - R$ 12")
                    break
                default:
    alert(`Escolha uma das opções`)
            }

            if (verificacao === "sim" && precoitem + precoitem2 + precoitem3 >= 50) {
                alert(`Obrigado ${nome}!
Pratos escolhidos: 
${item} de ${precoitem} R$
${item2} de ${precoitem2} R$
${item3} de ${precoitem3} R$
Total sem desconto: R$ ${precoitem + precoitem2 + precoitem3}
Total com desconto: R$ ${precoitem + precoitem2 + precoitem3 - (((precoitem + precoitem2 + precoitem3) * 0.10) + ((precoitem + precoitem2 + precoitem3)* 0.05))}`)
            } else if (verificacao === "não" && precoitem + precoitem2 + precoitem3 >= 50) {
                alert(`Obrigado ${nome}!
Pratos escolhidos: 
${item} de ${precoitem}
${item2} de ${precoitem2} 
${item3} de ${precoitem3}
Total sem desconto: R$ ${precoitem + precoitem2 + precoitem3}
Total com desconto: R$ ${precoitem + precoitem2 + precoitem3 - ((precoitem + precoitem2 + precoitem3) * 0.05)}`)
            } else if (verificacao === "sim" && precoitem + precoitem2 + precoitem3 <= 50) {
                alert(`Obrigado ${nome}!
Pratos escolhidos: 
${item} de ${precoitem}
${item2} de ${precoitem2} 
${item3} de ${precoitem3}
Total sem desconto: R$ ${precoitem + precoitem2 + precoitem3} 
Total com desonto: R$ ${precoitem + precoitem2 + precoitem3 - ((precoitem + precoitem2 + precoitem3) * 0.10)}`)
            } else {
                alert(`Obrigado ${nome}!
Pratos escolhidos: 
${item} de ${precoitem}
${item2} de ${precoitem2} 
${item3} de ${precoitem3}
Total sem desconto: R$ ${precoitem + precoitem2 + precoitem3} 
Total com desonto: Você não possui nenhum desconto.`)
            }
        }
    }

}

          
