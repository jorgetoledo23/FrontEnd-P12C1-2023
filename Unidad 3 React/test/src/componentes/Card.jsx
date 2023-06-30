export default function Card({ producto }) {
    
    const CLFormat = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
    
    return (
        <div className="card col-md-3 m-2 p-2">
            <div className="card-body">
                <h5 className="card-title">{producto.Descripcion}</h5>
                <img width={150} src={producto.UrlImagen} className="img-thumbnail"></img>
                <p className="card-text">Stock : {producto.Stock}</p>
                <p className="card-text">Valor : {CLFormat.format(producto.Precio)}</p>
                <button className="btn btn-primary">Add</button>
            </div>
        </div>
    )
}
