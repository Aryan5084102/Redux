import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  AddToCart } from '../redux/cart/cartSlice';

const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([])

    const fetchProducts = async () =>{
        try{
            const data = await fetch("https://dummyjson.com/products")
            const res = await data.json();
            setProducts(res.products.slice(0, 15))
        }catch(error){
            console.error(error, "Error")
        }
    }

    useEffect(() =>{
        fetchProducts()
    }, [])

    const addToCartHandler = (data) =>{
        dispatch(
            AddToCart(data)
        )
    }

  return (
    <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products?.map((data) => 
        <div 
            key={data?.id}
            style={{border: '1px solid white', borderRadius: '20px', width: '200px'  }}
        >
            <img 
                src={data?.images[0]}
                alt={data?.title}
                style={{width: '100px', height: '100px'}}
            />
            <p>{data?.title}</p>
            <button onClick={() => addToCartHandler(data)}>Add to Cart</button>
        </div>
        )}
        
    </div>
  )
}

export default Products