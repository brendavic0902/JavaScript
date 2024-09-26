//Luan Campos Clemente Alves e Brenda Vitória Gomes de Matos  // 
import rl from 'readline-sync'


console.log("1 somar")
console.log("2 subtração")
console.log("3 multiplicacão")
console.log("4 divisao")
console.log("5 sair")


let o = rl.questionInt("O que deseja fazer: ") 
let x = rl.questionInt("X: ");
let y = rl.questionInt("Y: ");
let somar = x + x
let subtração = x - x
let multiplicacão = x * x
let divisao = x / x




switch (o) {
    case 1:
        if (somar) {
        
        }
    console.log(`Total: ${x+y}`)
    break;
    case 2:
        if (subtração) {
            
        }
    console.log(`Total: ${x-y}`)
    break
    case 3:
        if (multiplicacão) {
            
        }
    console.log(`Total: ${x*y}`)
    break
    case 4:
        if (divisao) {
            
        }
    console.log(`Total: ${x/y}`)
    break
    
    case 5:
        break

    default:
    console.log(`Não tem essa operação!`)
    break;
    }


