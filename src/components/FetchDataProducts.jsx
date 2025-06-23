import React, { useEffect, useState } from "react";

const FetchDataProducts = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const Api = async () => {
        const ApiData = await fetch("https://dummyjson.com/products");
        const jsonData = await ApiData.json();
        setData(jsonData.products[0]);
      };
      Api();
    }, 2000);
  }, []);
  return (
    <div>
      <h1>we gonna fetch data from api </h1>
      {/* {/* {data ? `the products aare ${data.title}` : "loading....."}
       */}

      <h2>
        {data && data.title ? `The product is: ${data.title}` : "Loading..."}
      </h2>

      <h2>
        {data   ? `The product is: ${data}` : "Loading..."}
      </h2>

    </div>
  );
};

export default FetchDataProducts;
