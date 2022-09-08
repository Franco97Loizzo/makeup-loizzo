import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContainer } from './components/CartContainer/CartContainer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
        <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
