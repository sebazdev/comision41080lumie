import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, stock }) => {

    const handleOnAdd = (quantity) => {
       console.log(`Se agergaron ${quantity} de ${name}`) 
    }

    return (
        <>
            <h1>{name}</h1>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </>
    )
}

export default ItemDetail