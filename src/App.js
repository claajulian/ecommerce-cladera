import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (


    <div className="App">
      
      <NavBar />
      <ItemListContainer />
      <ItemCount max={5} initial={1}/>
      
      
    </div>
  );
}

export default App;

