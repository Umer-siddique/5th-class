import React,{useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let contextValue = useContext(counterContext);
    return (
        <div>
         <h1>Counter App using context Api</h1>
         <h2>Counter value is : {contextValue[0]}</h2>
         <button onClick={()=>{contextValue[1](++contextValue[0])}}>Increment</button>
         <button onClick={()=>{contextValue[1](--contextValue[0])}}>Decrement</button>
        </div>
    )
}

export default Child;