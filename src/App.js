import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (


    <BrowserRouter>
    <NavBar />
    
    <Routes>

    <Route path ='/' element={<ItemListContainer />} />
    <Route path ='/item' element={<ItemDetailContainer/>} />

    </Routes>
      
    </BrowserRouter>
  );
}

export default App;

