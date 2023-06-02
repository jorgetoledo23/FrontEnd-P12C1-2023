const Productos = [
    {
        "ProductoId": 1,
        "Descripcion": "Sony PlayStation 5 (Blu-Ray / Glacier White)",
        "Precio": "529990",
        "UrlImagen": "https://media.solotodo.com/media/products/1182943_picture_1602146793.webp",
        "Stock": "5"
    },
    {
        "ProductoId": 2,
        "Descripcion": "Master-G MGMG2410",
        "Precio": "129990",
        "UrlImagen": "https://media.solotodo.com/media/products/1763241_picture_1684478552.webp",
        "Stock": "10"
    },
    {
        "ProductoId": 3,
        "Descripcion": "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio": "799990",
        "UrlImagen": "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock": "3"
    },
    {
        "ProductoId": 3,
        "Descripcion": "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio": "799990",
        "UrlImagen": "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock": "3"
    }, {
        "ProductoId": 3,
        "Descripcion": "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio": "799990",
        "UrlImagen": "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock": "3"
    }, {
        "ProductoId": 3,
        "Descripcion": "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio": "799990",
        "UrlImagen": "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock": "3"
    }


]
//console.log(localStorage.getItem('Productos'))
// let productosFromLocalStorage
// if(localStorage.getItem('Productos') == null){
//     localStorage.setItem('Productos', JSON.stringify(Productos))
// }else{
//     productosFromLocalStorage = localStorage.getItem('Productos')
// }
const productContainer = document.getElementById('productContainer')
const btnMostrarCarro = document.getElementById("MostrarCarro")
const btnCerrarCarro = document.getElementById("CerrarCarro")
const carroContainer = document.getElementById("carroContainer")
const productCarroContainer = document.getElementById('productCarroContainer')
const CLFormat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})
let CarroCompras = []
if(localStorage.getItem('CarroCompras') == null){
    localStorage.setItem('CarroCompras', JSON.stringify(CarroCompras))
}
CarroCompras = JSON.parse(localStorage.getItem('CarroCompras'))
console.log(CarroCompras)
cargarCarro()









const loadProducts = (products) => {

    products.forEach(P => {
        const card = document.createElement('div')
        card.className = "card"
        card.classList.add('col-md-2', 'text-center', 'align-items-center', 'p-2', 'm-2')


        const h2 = document.createElement('p')
        h2.innerText = P.Descripcion
        h2.className = "text-center"
        h2.classList.add('card-title')
        h2.style.minHeight = "60px"

        const img = document.createElement('img')
        img.src = P.UrlImagen
        img.classList.add('mt-2', 'd-block', 'mx-auto')
        img.style.width = "100px"
        img.style.minHeight = "100px"
        img.style.maxHeight = "100px"

        const precio = document.createElement('p')
        precio.innerText = CLFormat.format(P.Precio)


        const btnAdd = document.createElement('button')
        btnAdd.classList.add('btn', 'col-3', 'btn-outline-primary')
        btnAdd.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'

        btnAdd.addEventListener('click', ()=>{
            CarroCompras.push(P)
            localStorage.setItem('CarroCompras', JSON.stringify(CarroCompras))
            cargarCarro()
        })
            


        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(precio)
        card.appendChild(btnAdd)


        productContainer.appendChild(card)

    });

} 

loadProducts(Productos)


btnMostrarCarro.addEventListener('click', () => {
    carroContainer.style.height = '90vh'
    btnCerrarCarro.style.display = 'inline'
    productCarroContainer.style.display = 'block'
})
btnCerrarCarro.addEventListener('click', () => {
    carroContainer.style.height = '0vh'
    btnCerrarCarro.style.display = 'none'
    productCarroContainer.style.display = 'none'
})

function cargarCarro(){
    productCarroContainer.innerHTML = ''
    CarroCompras.forEach(P =>{
        const divCarro = document.createElement('div')
        divCarro.classList.add('my-2', 'mx-5', 'p-3', 'text-center', 'flex', 'custom-card')

        const divDesc = document.createElement('div')
        divDesc.style.minWidth = "50%"

        const descCarro = document.createElement('p')
        descCarro.classList.add('card-title')
        descCarro.innerText = P.Descripcion

        const imgCarro = document.createElement('img')
        imgCarro.classList.add('mt-2', 'd-block', 'mx-auto')
        imgCarro.style.width = "100px"
        imgCarro.style.minHeight = "100px"
        imgCarro.style.maxHeight = "100px"
        imgCarro.src = P.UrlImagen

        const cantidadCarro = document.createElement('p')
        cantidadCarro.classList.add('card-title')
        cantidadCarro.innerText = 'Cantidad: '
        const spanCantidad = document.createElement('span')
        spanCantidad.innerText = 1
        cantidadCarro.appendChild(spanCantidad)

        const precioCarro = document.createElement('p')
        precioCarro.classList.add('card-title')
        precioCarro.innerText = 'Precio Unitario: ' + CLFormat.format(P.Precio)

        const subTotalCarro = document.createElement('p')
        subTotalCarro.classList.add('card-title')
        subTotalCarro.innerText = 'Subtotal: '
        const valorSubTotalCarro = document.createElement('span')
        valorSubTotalCarro.innerText = CLFormat.format(P.Precio)
        subTotalCarro.appendChild(valorSubTotalCarro)


        const btnBorrar = document.createElement('button')
        btnBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnBorrar.classList.add('btnBorrar', 'btn')
        btnBorrar.addEventListener('click', () => {
            productCarroContainer.removeChild(divCarro)
        })


        divCarro.appendChild(imgCarro)
        divDesc.appendChild(descCarro)
        divDesc.appendChild(precioCarro)
        divDesc.appendChild(cantidadCarro)
        divDesc.appendChild(subTotalCarro)
        divDesc.appendChild(btnBorrar)
        divCarro.appendChild(divDesc)

        productCarroContainer.appendChild(divCarro)


    })
    

}