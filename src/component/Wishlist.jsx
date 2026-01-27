import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
    const wishlistCount = useSelector((state) => state.wishlist.wishlistQuantity)
  return (
    <>
    <div>Wishlist {wishlistCount}</div>
    </>
  )
}

export default Wishlist