import './App.css';
/* import Alerta from "./components/Alerta/Alerta" */
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount';
import {useState} from 'react';

function App() {
  
  const [numeroProductos, setNumeroProductos] = useState(0);

  const agregar = (productos)=>{
    alert('Agregaste ' + productos + ' productos al carrito')//luego lo cambio por un toastify
    setNumeroProductos(productos);
  }


  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemCount texto={"Cantidad de productos: "} stock={5} initial={1} agregarProducto={agregar}/>
    <ItemCount texto={"No tenemos stock :c "} stock={0} initial={0}/>
    </>
  );
}

export default App;
