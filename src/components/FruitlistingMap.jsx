import React from 'react'

const Fruits= ['apple','banana','orange'];

const FruitlistingMap = () => {
  return (
    <div>
      <ul>
        {Fruits.map((fruit)=>{
            <li>{fruit}</li>
        })}
      </ul>
    </div>
  )
}

export default FruitlistingMap
