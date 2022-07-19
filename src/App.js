import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('cantidad de items agregados', quantity)
  }

  return (
    <div className="App">
        <Navbar />
        {/* {show ? <Counter /> : null} */}
        <Counter show={show} stock={10} initial={1} onAdd={handleOnAdd}/>
        <ItemListContainer show={show} setShow={setShow} greeting="Hola Coders"/>
    </div>
  );
}

export default App;
