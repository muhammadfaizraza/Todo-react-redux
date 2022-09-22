import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament , decreament } from './CounterSlice'
import '../../Style/Count.css'

const Counter = () => {
 const dispatch = useDispatch()
const count = useSelector((state)=> state.counter.count) 
    

return (
    <section className='mainSection'>
<p>{count}</p>
<div className='btnContainer'>
<button onClick={()=>dispatch(increament())}>
    +



</button>
<button onClick={()=>dispatch(decreament())}>
    -



</button>


</div>


    </section>
  )
}

export default Counter