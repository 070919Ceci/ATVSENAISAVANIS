let data = 07 / 10 / 2021
let idade = 18
let contador

console.log("--------------------------------")
console.log("           SAVANIS")
console.log("--------------------------------")
for (let contador = 0; contador < 5; contador++) {
  console.log("-------------------------------")
  if (data <= 10 / 10 / 2021) {
    console.log("Data disponivel para evento")
    if (idade <= 19) {
      console.log("Cadastro permitido, Já atingiu maior idade")
    } else {
      console.log("Cadastro não é permitido pela idade.")
    }
  } else {
    console.log("Cadastro não será permitido por data inválida.")
  }
}
console.log("             ------------------------")
console.log("Cadastro não será permitido por ter excedido o limite!")
console.log("             ------------------------")
