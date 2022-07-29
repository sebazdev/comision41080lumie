import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className='NavContainer'>
        <h3>ECOMMERCE</h3>
        <div className='Categories'>
            <Link to={`/category/celular`}>Celulares</Link>
            <Link to={`/category/tablet`}>Tablets</Link>
            <Link to={`/category/notebook`}>Notebooks</Link>
        </div>
      </nav>
    )
}

export default Navbar