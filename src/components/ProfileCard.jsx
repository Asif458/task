// import React, { useEffect, useState } from "react";

// const ProfileCard = (props) => {
//   const [updateAge, setupdateAge] = useState(0);

//   useEffect(() => {
//     console.log("profile car is mounted");
//   }, []);

//   const { name, bio } = props;
//   return (
//     <div>
//       <h3>Name:{name}</h3>
//       <h3>Age:{updateAge}</h3>
//       <button
//         onClick={() => {
//           setupdateAge(updateAge + 1);
//         }}
//         style={{ height: "45px", width: "70px" }}
//       >
//         update Age
//       </button>
//       <button
//         onClick={() => {
//           setupdateAge(updateAge - 1);
//         }}
//         style={{ height: "60px", width: "100px" }}
//       >
//         decreaseAge
//       </button>

//       <h3>Bio:{bio}</h3>
//     </div>
//   );
// };

// export default ProfileCard;

import React, { useEffect, useState } from "react";
 

const ProfileCard = (props) => {
    const {name,bio} = props
    const [ageUpdate,setupdateAge] = useState(0)
    useEffect(()=>{
        console.log('profile card has ben mounted for the first  time ')
    },[])
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{ageUpdate}</p>
      <button onClick={()=>{
        setupdateAge(ageUpdate+1)
      }} style={{height:'50px', width:'50px'}}>update Age</button>


      <button onClick={()=>{
        setupdateAge(ageUpdate-1
            
        )
      }} style={{height:'50px', width:'50px'}}>decrease Age</button>

      <p>BIO:{bio}</p>
      
    </div>
  )
}

export default ProfileCard


