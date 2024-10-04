import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { selectcounter } from '../features/counter/counterSlice'
import { increment , decrement } from '../features/counter/counterSlice';

export default function Counter() {
    const conter = useSelector(selectcounter);
    const dispatch = useDispatch();
    return (
    <div>
        <h2>counter is {conter}</h2>
        <button onClick={()=> dispatch(increment())} >increment</button>
        <button onClick={()=> dispatch(decrement())} >decrement</button>
    </div>
  )
}

