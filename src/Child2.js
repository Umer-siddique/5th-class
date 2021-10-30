import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state,dispatch]= useReducer(CounterReducer,0);
    return (
        <div>
            <h1>Counter App using Use Reducer</h1>
            <h2>counter value is :{state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>INCREMENT</button>
            <button onClick={()=>dispatch('DECREMENT')}>DECREMENT</button>
        </div>
    )
}

export default Child2
