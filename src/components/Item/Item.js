const Item = ({ product }) => {
    return (
        <li key={product.id}>{product.name}</li>
    )
}

export default Item