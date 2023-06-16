export default function Card({ producto }) {
    return (
        <div className="card col-md-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <img src={producto.imageUrl} className="img-thumbnail"></img>
                <p className="card-text">{producto.name}</p>
                <p className="card-text">{producto.precio}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
