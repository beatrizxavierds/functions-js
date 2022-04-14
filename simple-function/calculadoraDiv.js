function divide (numeroA, numeroB) {
    if (numeroB > 0) {
        if (numeroB === 6) {
            return "Número 6 é proibido"
        }

        let numeroC = numeroA / numeroB
        
        return numeroC     
    }

    return "O número B deve ser maior do que zero"
}
    
let resultado = divide (10,7)
console.log (resultado)