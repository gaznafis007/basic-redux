/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useState } from 'react';

export const CounterContext = createContext()
const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleDecrement = () =>{
        const newCount = count - 1;
        setCount(newCount)

    }
    const value = {
        count,
        setCount,
        handleIncrement,
        handleDecrement
    }
    return (
        <CounterContext.Provider value={value}>
          {children}  
        </CounterContext.Provider>
    );
};

export default CounterProvider;