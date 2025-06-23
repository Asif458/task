import React from 'react'

const  users = [{
    id:1,
    name:'asif'
},
    {
        id:2,
        name:'adhil'
    },
    {
        id:3,
        name:'jills'
    }
]
const UsersMapping = () => {
  return (
    <div>
    {users.map((user)=>{
       return <p>hello,{user.name}</p>
    })}
    </div>
  )
}

export default UsersMapping
