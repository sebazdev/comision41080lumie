import { useState } from 'react'

const Counter = () => {
    // const state = useState(10)
    const [count, setCount] = useState(0)

    const decrement = () => {
    //    state[1](state[0] - 1)
        setCount(count - 1)
    }

    const increment = () => {
        // state[1](state[0] + 1)
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter