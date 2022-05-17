import React, { useState } from 'react'
import style from './Counter.module.css'

const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <div className={style.box}>
        <div className={style.num}><h1 style={{color: count%2===0 ? "green" : "red"}}>{count}</h1></div>
        <div className={style.btn}> 
            <button className={style.button} onClick={()=> setCount(count+1)}>Increment</button>
            <button className={style.button} onClick={()=> setCount(count-1)}>Decerement</button>
            <button className={style.button} onClick={()=> setCount(count*2)}>Double</button>
        </div>

      
    </div>
  )
}

export default Counter
