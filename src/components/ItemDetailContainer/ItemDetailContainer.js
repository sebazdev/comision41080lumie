import { useState, useEffect } from 'react'
import { getProductById } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const response = await getProductById(productId)
                setProduct(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <h1>Detail</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer