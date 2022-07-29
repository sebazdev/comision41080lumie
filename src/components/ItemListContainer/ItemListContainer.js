import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        (async () => {
            setLoading(true)
            try{
                const response = await getProducts(categoryId)
                setProducts(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
      <>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </>
    )
}

export default ItemListContainer