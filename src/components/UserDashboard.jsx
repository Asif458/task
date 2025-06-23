import { useState, useEffect } from 'react';

function UserDashboard() {
   const [isLoggedIn,setisLoggedIn] = useState(false) 
   const [users,setUsers] = useState([])
   const [name,setname] = useState('')

   useEffect(()=>{
    const Fetchapi = async ()=>{
        const data =  await fetch('https://dummyjson.com/users?limit=5')
        const jsondata = await data.json()
        setUsers(jsondata.users)
    }
    Fetchapi()
   },[])

   const handleNameChange=(event)=>{
    setname(event.target.value)
   }
   const toggleLogin = ()=>{
    setisLoggedIn(!isLoggedIn)
   }

   

   return(
    <div>
        <h1>user dashboard</h1>
        <input type='text' 
        placeholder='enter your name'
        value={name}
        onChange={handleNameChange}/>

        <button style={{height:'15px', width:'30px'}} 
        onClick={toggleLogin}> {isLoggedIn?'logout':'login'}</button>
        
        {isLoggedIn ? (
            <div> 
                <h2>welcome,{name}</h2>
                <h3>the people which we fetch from api</h3>
                <ul>
                    {users.map((user)=>{
                    return    <li key={user.id}>{user.firstName}</li>
                    })}
                </ul>
                </div>
        ):(
            <h3>please login to see users list</h3>
        )}
    </div>
   )
}

export default UserDashboard