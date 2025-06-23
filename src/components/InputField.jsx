import React, { useState } from 'react'

const InputField = () => {
    const [text, setText] = useState('')
  return (
    <div>
      <input onChange={(event)=>{
        setText(event.target.value)
      }}/>

      <p>yout typed : {text}</p>
    </div>
  )
}

export default InputField
