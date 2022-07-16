import Button from '../Button/Button'


const Counter = () => {
    return (
        <div className="container-card">
            <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"/>
                <div className="contenido-card">
                    <h3>Diseño Gràfico</h3>
                    <p>Podemos crear la identidad corporativa de tu empresa. Diseño , Maquetación de folletos, Catálogos, Papelería y mucho más.</p>
                    <div >
                        <Button>-</Button>
                        <h4>0</h4>
                        <Button>+</Button>
                    </div>
                    <div>
                    <Button style={{ width: '80%'}} >Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Counter
