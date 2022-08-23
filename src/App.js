import './App.css';
/* import Alerta from "./components/Alerta/Alerta" */
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer 
    titulo="Aca iran cositas"
    texto="y aca otras"/>
    </>
  );
}

export default App;
