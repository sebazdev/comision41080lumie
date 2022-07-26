const Item = ({ product }) => {

    const handleClick = (description) => {
        console.log(description)
    }

    return (
        <>
            <li key={product.id}>{product.name}</li>
            <button onClick={handleClick}>ver detalle</button>
        </>
    )
}

export default Item