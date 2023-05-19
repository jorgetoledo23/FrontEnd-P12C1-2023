const urlAPI = "https://localhost/api/empleados/"


const btn = document.getElementById("btnCalcular")
const resultado = document.getElementById("resultado")
btn.addEventListener('click', () => {
    btn.style.backgroundColor = "#333"
    btn.style.color = "#fff"
    let edad = document.getElementById('txtEdad').value
    
    if(edad != ""){
        if(edad >= 18){
            resultado.innerText = "Eres Mayor de Edad"
        }else{
            resultado.innerText = "Eres Menor de Edad"
        }
    }
    else{
        alert("Ingresar una edad numerica")
    }

   
    
});