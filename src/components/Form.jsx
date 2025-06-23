import React, { useState } from 'react'

const Form = () => {
    const [text,setText] = useState('')
  return (
    <div>
      <form>
        
        <h3>Name</h3>
         <input type='text' onChange={(event)=>{
            setText(event.target.value)
         }}/>
        
        <button onClick={()=>{
            return alert(text)
        }}> submit</button>
      </form>
    </div>
  )
}

export default Form
