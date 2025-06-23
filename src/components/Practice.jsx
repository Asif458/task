// import React, { useState } from 'react'

 
import { useState } from "react";

// const Practice = () => {
//     const [like,setLikes] = useState(0)
//    return (
//    <div>
//     <h1>Likes:{like}</h1>

//     <button onClick={()=>{
//     return setLikes(like + 1)
//     }}>like this </button>

//     <p>{like === 3 ? "i really like this":''}</p>
//    </div>
//   )
// }

// export default Practice

// import React, { useState } from 'react'

// const Practice = () => {
//     const [text,Settext] = useState('')
//    return (
//    <div>
//     <input onChange={(event)=>{
//         Settext(event.target.value)

//     }} placeholder='post the comment '/>

//     <p>your comment will appear here -{text}</p>

//     <h4>{text.length > 100?'comment too long':'minimum 100 characters only'}</h4>
//    </div>
//   )
// }

// export default Practice

// import { useState } from 'react'

// const Practice = () => {
//     const [bgcolor,setBgcolor] = useState('white')
//     const[isVisible,setIsVisible] = useState(false)
//    return (
//     <div style={{backgroundColor:bgcolor, height:'500px'}} >

//         <button onClick={()=>{
//             setIsVisible(!isVisible)
//             setBgcolor(bgcolor==='white'?'black':'white')

//         }}>{isVisible?'lightmode':'darkmode'}</button>

//     </div>
//   )
// }

const practice = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "asif",
    },
    {
      id: 2,
      name: "abin",
    },
    {
      id: 3,
      name: "adhil",
    },
  ]);
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => 
        contact.id !== id);
    setContacts(updatedContacts);
  };
  return(
    <div>
        <h2>contact list</h2>
        <ul>
            {contacts.map((contact)=>{
                return(
                <li key={contact.id}>
                    {contact.name}
                <button onClick={()=>{
                    deleteContact(contact.id)
                }}>delete</button>
                
                </li>
                );
                
            })}
        </ul>
    </div>
  )
};
export default practice;
