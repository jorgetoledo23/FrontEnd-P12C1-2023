const btnCT = document.getElementById("btnCambiarTitulo") // null 
const titulo = document.getElementById("titulo")
const btnAS = document.getElementById('btnAgregarSubtitulo')

const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

var arr = Array.from(allButtons);
arr.forEach(btn => {
    btn.style.backgroundColor = "#333"
    btn.style.color = "#fff"
    btn.style.fontSize = "20px"
})


btnCT.addEventListener('click', () => {
    let nuevoTitulo = prompt("Ingrese nuevo titulo")
    titulo.innerText = nuevoTitulo
})

btnAS.addEventListener('click', ()=>{
    let subtitulo = prompt("Ingresa Subtitulo")
    const h3 = document.createElement('h3') //<h3></h3>
    h3.innerText = subtitulo //<h3>Subtitulo</h3>
    document.body.appendChild(h3)
})