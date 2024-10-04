import React from 'react'
import { useSelector } from 'react-redux'
import { selectcounter } from '../features/counter/counterSlice'

export default function Counter() {
    const conter = useSelector(selectcounter)
    return (
    <div>
        <h2>counter is {conter}</h2>
    </div>
  )
}

