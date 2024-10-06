import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement ,selectNumber } from '../features/number/numberSlice';

export default function Number() {

    const conter = useSelector(selectNumber);
    const dispatch = useDispatch();
    return (
    <div>
        <h2>counter is {conter}</h2>
        <button onClick={()=> dispatch(increment())} >increment</button>
        <button onClick={()=> dispatch(decrement())} >decrement</button>
    </div>
  )
}

