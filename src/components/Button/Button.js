const Button = (props) => {
    return <button onClick={props.handleClick} style={{ color: props.color }}>{props.children}</button>
}

export default Button