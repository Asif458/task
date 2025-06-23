// import React, { useState } from 'react'

import { useState } from "react"

// import { useState } from "react";

// import { useState } from "react"

// import { useState } from "react";

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
// //   )
// // }

// const practice = () => {
//   const [contacts, setContacts] = useState([
//     {
//       id: 1,
//       name: "asif",
//     },
//     {
//       id: 2,
//       name: "abin",
//     },
//     {
//       id: 3,
//       name: "adhil",
//     },
//   ]);
//   const deleteContact = (id) => {
//     const updatedContacts = contacts.filter((contact) =>
//         contact.id !== id);
//     setContacts(updatedContacts);
//   };
//   return(
//     <div>
//         <h2>contact list</h2>
//         <ul>
//             {contacts.map((contact)=>{
//                 return(
//                 <li key={contact.id}>
//                     {contact.name}
//                 <button onClick={()=>{
//                     deleteContact(contact.id)
//                 }}>delete</button>

//                 </li>
//                 );

//             })}
//         </ul>
//     </div>
//   )
// };

// import { useState } from "react";

// const Practice = () => {
//      const[isLogged,setisLogged] =useState(false)
//      const[bgcolor,setBgcolor] = useState('green')

//      function logged(){
//       setisLogged(!isLogged)
//       setBgcolor(bgcolor === "green"?'red':'green')
//      }

//   return (
//      <>
//      <div >
//      <button style={{backgroundColor:bgcolor}} onClick={logged }>{isLogged?'logout':'login'}</button>
//      <p>{isLogged?'wekcome to hompage':'login to continue'}</p>
//      </div>
//      </>
//   );
// };
// import { useEffect, useState } from "react";

// const Practice = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {

//     // const timer = setTimeout(()=>{
//     //   console.log("Loading...")
//     // },3000)

//     const fetchApi = async () => {
//       const data = await fetch("https://dummyjson.com/products?limit=5");
//       const jsondata = await data.json();

//       setData(jsondata.products);
//     };

    
     
//     fetchApi();
//   }, []);
//   return (
//     <>
//       {data.length === 0 ? (
//         <p>loading..</p>
//       ) : (
//         data.map((res) => (
//           <div key={res.id}>
//             <h3>
//               {res.title}- {res.price}
//             </h3>
//           </div>
//         ))
//       )}
//     </>
//   );
// };
// export default Practice
// 
// import { useState } from "react";
// const Practice = ()=>{
//    const[text,settext] = useState('')
//   return(
//     <> 
//     <input placeholder="type some characters" 
//     onChange={(e)=>{
//       settext(e.target.value)
//     }}/>

//     {<p>{text.length<10?'minimum 10 characters required':'type minimum 10 characters'}</p>}
//     </>
//   )
// }

// export default Practice;

//  import { useState } from "react";
// const Practice =()=>{
//  const [text,settext] = useState('')
//  const [submit,setsubmit]  = useState('')
// return(
//   <>
//   <form action="">
//     <input type="text" placeholder="enter your name" onChange={(event)=>{
//       settext(event.target.value)
//     }}/>
//     <button onClick={(e)=>{
//       e.preventDefault()
//       setsubmit(text)
//     }}>submit</button>
//     {<p>{submit}</p>}
//    </form>
//   </>
// )
// }

// export default Practice

const Practice = ()=>{
   const[num,setnum] =useState()
  //  const[age,setage] = useState()
  return(
    <>
    <input type="number" placeholder="enter your age"
    onChange={(event)=>{
      setnum(event.target.value)
    }}
    
    />

     {<p>{num>=18?'you are eligible':'not eligible'}</p>}
     {/* {num&&<h1>ty[in</h1>} */}
    </>
  )
}

export default Practice
