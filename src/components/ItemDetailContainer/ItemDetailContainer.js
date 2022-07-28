
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ page }) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById(page.id).then(response => {
            setProduct(response)
        })
    }, [page.id])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer