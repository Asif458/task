import React, { useState } from 'react'

const UseStatestd = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <p>count {count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>add</button>
    </div>
  )
}

export default UseStatestd;

