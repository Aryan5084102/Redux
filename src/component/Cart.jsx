import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveToCart } from '../redux/cart/cartSlice'

const Cart = () => {
    const cartData = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
        dispatch(RemoveToCart(id))
    }

  return (
    <div style={{ border: '1px solid #110909', padding: '15px', gap: '10px', display: 'flex', flexDirection: 'column' }}>
        {cartData?.map((data) => (
            <div key={data.id}  >
                <div>
                    <img 
                        src={data?.images[0]}
                        alt={data?.title}
                        style={{width: '100px', height: '100px'}}
                    />
                </div>
                <div>
                    <h3>{data?.title}</h3>
                    <p>${data?.price}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(data?.id)} style={{backgroundColor: 'red' , padding: '5px', border: '1px solid white'}}>Delete</button>
                </div>
            </div>

        ))}
    </div>
  )
}

export default Cart