import Nota from "./Nota"
export default function NotaContainer({ Notas }) {
    return <div className="row">
        { Notas.map(N => <Nota key={N.Id} Nota={N} />)}
    </div>
};
