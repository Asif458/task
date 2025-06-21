import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{
            let apiData = await fetch("https://dummyjson.com/quotes")
            let result = await apiData.json();
            setData(result.quotes.slice(0,20));
        }
        fetchData();
    },[])

  return (
    <div>
      {data?data.map((quote)=>(
        <p key = {quote.id}>
            <h3>
                {quote.id};{quote.quote}
            </h3>
        </p>
      ))
    :'loading'}
    </div>
  )
}

export default Apifetch;
