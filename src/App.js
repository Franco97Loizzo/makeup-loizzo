import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { PaginaFirebase } from './components/PaginaFirebase/PaginaFirebase';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/firebase' element={<PaginaFirebase/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
