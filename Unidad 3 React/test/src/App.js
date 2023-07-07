import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Card from './componentes/Card'
import axios from 'axios'
import data from './data.json'
import AddForm from './componentes/AddForm';
import NotaContainer from './componentes/NotaContainer';
export default function App() {


    const [productos, setProductos] = React.useState(data)
    const [notas, setNotas] = React.useState([])

    // React.useEffect(() => {
    //   axios.get('https://localhost:7038/api/Products/getProducts').then((response) => {
    //     setProductos(response.data);
    //   });
    // }, []);

    const AddNota = (title, desc) => {
        const newNota = {
            Id : notas.length + 1,
            Titulo : title,
            Descripcion : desc
        }
        setNotas(notas => [...notas, newNota])
    }

   
    return (
        <div className="App">
            <Navbar/>
            <AddForm fAddNota={AddNota} />
            <NotaContainer Notas={notas}/>
            <div className='row justify-content-evenly'>
                { productos.map(x => <Card producto={x}/>) } </div>
        </div>
    );
}
