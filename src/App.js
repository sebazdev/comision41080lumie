import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Counter />
        {/* <ItemListContainer greeting="Hola Coders"/> */}
    </div>
  );
}

export default App;
