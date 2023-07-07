import { useRef } from "react"
export default function AddForm({fAddNota}) {
    
    const titulo = useRef("")
    const desc = useRef("")
    
    return <>
        <div className="col-md-4 m-5 p-5">
            <div className="mb-3">
                <input type="text" onChange={(e)=>{titulo.current = e.target.value}} className="form-control" placeholder="Input de Ejemplo" />
            </div>
            <div className="mb-3">
                <textarea onChange={(e)=>{desc.current = e.target.value}}  className="form-control" placeholder="TextArea de Ejemplo"></textarea>
            </div>
            <button onClick={()=>{fAddNota(titulo.current, desc.current)}} className="btn btn-primary">Agregar</button>
        </div>
    </>
};
