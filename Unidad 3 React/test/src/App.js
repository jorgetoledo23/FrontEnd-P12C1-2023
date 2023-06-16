import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Card from './componentes/Card'
import axios from 'axios'
export default function App() {


    const [productos, setProductos] = React.useState([])


    React.useEffect(() => {
      axios.get('https://localhost:7038/api/Products/getProducts').then((response) => {
        setProductos(response.data);
      });
    }, []);


   
    return (
        <div className="App">
            <Navbar/>
            <div className='row'>
                {
                productos.map(x => <Card producto={x}/>)
            } </div>
        </div>
    );
}
