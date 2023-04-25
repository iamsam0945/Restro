import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderAction'
const Checkout = ({subTotal}) => {

    const dispatch=useDispatch()
    const tokenHandler=(token)=>{
        dispatch(placeOrder(token,subTotal))
        console.log(token)
    }
  return (
  <StripeCheckout
  amount={subTotal*100}
  shippingAddress
  token={tokenHandler}
  stripeKey='pk_test_51N0VYqSIFK2UneiazRn3PXpz4KeTuis6RunzXa3trN4Rj0BvLnixVR6OrsaHfVbtHdw7XzWMIHXOCap1OQiksvSw00b396HpCf'
  currency='INR'
  >
    <button>Pay Now</button>
  </StripeCheckout>
  )
}

export default Checkout
