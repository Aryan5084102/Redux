import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  AddToCart } from '../redux/cart/cartSlice';
import { CiHeart } from "react-icons/ci";
import { AddtoWishlist } from '../redux/wishlist/wishlistSlice';
import Pagination from './Pagination';

const Products = () => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [param, setParam] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    const ItemPerPage = 5;  

    const indexOfLastItem = currentPage * ItemPerPage
    const indexOfFirstItem = indexOfLastItem - ItemPerPage

    const currentItems = filterProducts.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(filterProducts.length / ItemPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    const dispatch = useDispatch();
    const fetchProducts = async () =>{
        try{
            setIsError(false)
            const data = await fetch("https://dummyjson.com/products")
            if(!data.ok){
                throw new Error("Failed to fetch products")
            }
            const res = await data.json();
            setProducts(res.products)
            setFilterProducts(res.products)
            setIsLoading(false)
        }catch(error){
            console.error(error, "Error")
            setIsError(true)
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        fetchProducts()
    }, [])

    // Sync filterProducts when products change (e.g., after initial fetch)
    useEffect(() => {
        if(param === ''){
            setFilterProducts(products)
        }
    }, [products])

    const addToCartHandler = (data) =>{
        dispatch(
            AddToCart(data)
        )
    }

    const handleWishlist = (data) =>{
        dispatch(AddtoWishlist(data))
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setParam(searchValue);
        const searchParam = products.filter((item) => 
            item.title.toLowerCase().includes(searchValue)
        )
        setFilterProducts(searchParam)
    }

  return (
    <>
        {isLoading ? (
            <div>
                <div className="loader-container">
                    <div className="custom-spinner"></div>
                </div>
            </div>
        ) : isError ? (
            <div style={{textAlign: 'center', padding: '20px'}}>
                <p>Error loading products. Please try again.</p>
                <button onClick={() => fetchProducts()}>Retry</button>
            </div>
        ) : (
            <div>
                <input type='search'   onChange={handleSearch}  />
                <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {currentItems?.map((data) => 
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
                        <button style={{marginRight: '5px'}} onClick={() => addToCartHandler(data)}>Add to Cart</button>
                        <CiHeart onClick={()=> handleWishlist(data)} style={{cursor: 'pointer', width: '20px', height: '20px', }} />
                    </div>
                    )}
                </div>
                <div style={{display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center'}}>
                    <button 
                        onClick={() => paginate(currentPage -1)}
                        disabled={currentPage === 1}
                        >Prev</button>
                        {[...Array(totalPages)].map((_, id) =>(
                            <button key={id} onClick={() => paginate(id + 1)}>{id + 1}</button>
                        ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >Next</button>
                </div>
            </div>
        )}
        
    </>
  )
}

export default Products