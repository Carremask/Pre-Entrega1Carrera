import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/IntemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greeting={"Bienvenidos a MASK."}/>
    </div>
  );
}

export default App;
