import { useState, useEffect, useCallback, useMemo } from 'react'
import './Products.css'

export const Products = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const json = await res.json();
        console.log({ json })
        setData(json.products);
      } catch (e) {
        console.log(e)
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const products = useMemo(() => {
      return (
          data.map(({ title, images, id }) => (
        <div className="products">
            <p key={id}>{title}</p>
            <img src={images[0]} alt={title} />
        </div>
        ))
        )
    }, [data]);
  
    // if (error) {
    //   return <div>An error occured: {error.message}</div>;
    // }
  
    return <div>{products}</div>;
  };