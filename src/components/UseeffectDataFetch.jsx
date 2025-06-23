import { useEffect,useState } from "react"
const UseEffectDataApi = ()=>{


const[data,setdata] = useState([])
    useEffect(()=>{
        const ApiFetch =async ()=>{
            const data = await fetch('https://dummyjson.com/products?limit=5')
            const jsonData = await data.json()
            setdata(jsonData.products)
        }

        ApiFetch()
    },[])
  return (
    <div>
      <ul>
         {data.map((product)=>{
            return(
          <li key={product.id}>
            {product.title} ${product.price}
          </li>
            )
         })}
      </ul>
    </div>
  )
}

export default UseEffectDataApi