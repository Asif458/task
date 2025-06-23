import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [text ,setText] = useState('loading')
    useEffect(()=>{
        setTimeout(()=>{
      setText('hello,asif')
        },2000)

        // return ()=> clearTimeout(timer) //for Cleanup
    },[])
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Loading
