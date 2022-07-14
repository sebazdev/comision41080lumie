import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                ECOMMERCE
            </div>
            <div>
                <Button 
                    color="red" 
                    handleClick={() => console.log('celular')}
                >Celular</Button>
                <Button color="blue" handleClick={() => console.log('tablet')}>Tablet</Button>
                <Button color="green" handleClick={() => console.log('notebook')}> Notebook</Button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar
