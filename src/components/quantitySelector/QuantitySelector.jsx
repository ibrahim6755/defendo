import React, { useState } from 'react'
import './QuantitySelectorStyles.css'

function QuantitySelector() {
    const [state, setState] = useState(0)
    const [increment, setIncrement] = useState()
    const [decrement, setDecrement] = useState()


    const handleIncrement = () => {
        setState(state + 1)
    }
    const handleDecrement = () => {
        setState(state - 1)
    }

    return (
        <div className="quantity-selector-wrapper">
            <div className="delete mx-3">
                <button onClick={handleDecrement}> <i class="bi bi-dash fs-5"></i></button>
            </div>
            <div className="state">{state}</div>
            <div className="add mx-3">
                <button onClick={handleIncrement}><i class="bi bi-plus fs-5"></i></button>
            </div>

        </div>
    )
}

export default QuantitySelector
