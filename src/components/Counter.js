import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { selectcounter } from '../features/counter/counterSlice'
import { increment , decrement , incrementByAmount } from '../features/counter/counterSlice';

export default function Counter() {
    const [value , setValue] = useState(2); 

    const conter = useSelector(selectcounter);
    const dispatch = useDispatch();
    return (
    <div>
        <h2>counter is {conter}</h2>
        <button onClick={()=> dispatch(increment())} >increment</button>
        <button onClick={()=> dispatch(decrement())} >decrement</button>
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={()=> dispatch(incrementByAmount(+value))} >increment By Amount</button>
    </div>
  )
}

