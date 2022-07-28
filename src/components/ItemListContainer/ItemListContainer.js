import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting, setPage }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   
    }, [])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} setPage={setPage}/>
        </>
    )
}

export default ItemListContainer