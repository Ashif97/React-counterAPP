import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

export default function Counter() {
    let [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(++count);
    };

    const handleDecrement = () => {
        setCount(--count);
    };

    const handleDecrementDisabled = () => {
        if (count === 0) {
            toast.error('Cannot go below zero!', { position: 'top-center',autoClose: 1000,theme: "dark" });
        }
    };

    return (
        
        <div className="container">
            <div className="box">
            <h2 className="heading">Counter App</h2>
                <div className="counter-display">
                    <h1>{count}</h1>
                </div>
                <div className="counter-controls">
                    <button className="button reset" onClick={() => setCount(0)}>reset</button>
                    <div onClick={handleDecrementDisabled}>
                        <button className="button decrement" onClick={handleDecrement} disabled={count === 0}>-</button>
                    </div>
                    <button className="button increment" onClick={handleIncrement}>+</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}