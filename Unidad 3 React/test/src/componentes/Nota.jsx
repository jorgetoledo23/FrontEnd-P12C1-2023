export default function Nota({ Nota }) {
    return <div className="card m-2 p-2 shadow">
        <h3>{Nota.Titulo}</h3>
        <a href=""><i class="bi bi-exclamation-diamond"></i></a>
        <p>{Nota.Descripcion}</p>
    </div>
};
