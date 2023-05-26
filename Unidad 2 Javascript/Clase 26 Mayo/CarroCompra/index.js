const Productos = [
    {
        "ProductoId" : 1,
        "Descripcion" : "Sony PlayStation 5 (Blu-Ray / Glacier White)",
        "Precio" : "529990",
        "UrlImagen" : "https://media.solotodo.com/media/products/1182943_picture_1602146793.webp",
        "Stock" : "5"
    },
    {
        "ProductoId" : 2,
        "Descripcion" : "Master-G MGMG2410",
        "Precio" : "129990",
        "UrlImagen" : "https://media.solotodo.com/media/products/1763241_picture_1684478552.webp",
        "Stock" : "10"
    },
    {
        "ProductoId" : 3,
        "Descripcion" : "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio" : "799990",
        "UrlImagen" : "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock" : "3"
    },
    {
        "ProductoId" : 3,
        "Descripcion" : "Apple iPhone 14 Pro (128 GB / Space Black)",
        "Precio" : "799990",
        "UrlImagen" : "https://media.solotodo.com/media/products/1641307_picture_1662845386.webp",
        "Stock" : "3"
    }

]




const loadProducts = (products) =>{

    products.forEach(P => {
        const card = document.createElement('div')
        card.className = "card"
        card.classList.add('col-md-3', 'text-center', 'align-items-center')


        const h2 = document.createElement('p')
        h2.innerText = P.Descripcion
        h2.className = "text-center"
        h2.classList.add('card-title')

        const img = document.createElement('img')
        img.src = P.UrlImagen
        img.classList.add('mt-2', 'd-block')
        img.style.width = "150px"

        card.appendChild(h2)
        card.appendChild(img)

        const productContainer = document.getElementById('productContainer')
        productContainer.appendChild(card)

    });

}


loadProducts(Productos)


const btnMostrarCarro = document.getElementById("MostrarCarro")
const btnCerrarCarro = document.getElementById("CerrarCarro")
const carroContainer = document.getElementById("carroContainer")

btnMostrarCarro.addEventListener('click' , () =>{
    carroContainer.style.height = '90vh'
    btnCerrarCarro.style.display = 'inline'
})
btnCerrarCarro.addEventListener('click' , () =>{
    carroContainer.style.height = '0vh'
    btnCerrarCarro.style.display = 'none'
})



