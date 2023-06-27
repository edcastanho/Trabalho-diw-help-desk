const btn = document.getElementById("ajudabtn");
const chat = document.querySelector(".chat")
const caixa = document.querySelector(".caixa")

chat.addEventListener("click", () => {
  caixa.classList.toggle("invisivel")
})

btn.addEventListener("click", () => {
  alert("Recurso indisponivel no momento!")
})
