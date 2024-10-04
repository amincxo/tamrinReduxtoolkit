import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {
    const conter = useSelector(store => store.counter.counterValue)
    return (
    <div>
        <h2>counter is {conter}</h2>
    </div>
  )
}

