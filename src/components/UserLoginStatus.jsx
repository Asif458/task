import React, {  useState } from 'react'

const UserLoginStatus = () => {
    const [isLoggedIn,setisLoggedIn] = useState(false)
     
  return (
    <div>
    <h2> {isLoggedIn ? 'welcome Asif' : 'please log in '}</h2>

    <button onClick={()=>{
        setisLoggedIn(!isLoggedIn)
    }}>{isLoggedIn? 'Logout': 'Login'}
    
    </button>
    </div>
  )
}
export default UserLoginStatus
 
 

