import React, {useReducer, useState} from 'react';

const Wallet = () => {

    const initialState = {
        value: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {value: state.value + 1};
            case 'DECREMENT':
                return {value: state.value - 1};
            case 'RESET':
                return {value: 0};
            case 'INCREMENT_BY_VALUE':
                return {value: Number(action.payload) + state.value}
            default:
                return state;
        }
    }


    const [value, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleWalletIncrement = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const handleWalletDecrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    const handleWalletReset = () => {
        dispatch({
            type: 'RESET'
        })
    }
    const handleIByValue = () => {
        dispatch({
            type: 'INCREMENT_BY_VALUE',
            payload: value
        })
    }


    return (
        <div>
            {state.value}
            <button onClick={handleWalletIncrement}>I</button>
            <button onClick={handleWalletDecrement}>D</button>
            <button onClick={handleWalletReset}>R</button>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleIByValue}>V</button>
        </div>
    );
};

export default Wallet;