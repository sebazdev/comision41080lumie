import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [page, setPage] = useState({ path: 'list', id: '1'})
  console.log(page)
  return (
    <div className="App">
        <div>
          <button onClick={() => setPage({ path: 'list', id: '1'})}>Listado</button>
          {/* <button onClick={() => setPage({ path: 'detail', id: '1'})}>Detalle</button> */}
        </div>
        {page.path === 'list' ? <ItemListContainer greeting="Hola Coders" setPage={setPage}/> : null}
        {page.path === 'detail' ? <ItemDetailContainer page={page}/> : null}
        
    </div>
  );
}

export default App;
