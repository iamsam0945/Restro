import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaAmazonPay,FaTrash} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,deleteFromCart } from '../actions/cartActon'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import Checkout from '../components/checkout'
const CartScreen = () => {
  const cartState=useSelector(state =>state.cartReducer)
  const cartItems=cartState.cartItems
  const dispatch=useDispatch();
  const subTotal= cartItems.reduce((x,item)=>x+item.price,0)
  return (
    <>
      <Container>
        <Row>
            <Col md={6}>
                <h1><em><u>Cart Items<AiOutlineShoppingCart></AiOutlineShoppingCart></u></em></h1>
                <Row>
                  {
                    cartItems.map(item =>(
                      <>
                      <Col md={7}>
                      <h5>{item.name} [{item.varient}]</h5>
                      <h6><em>Price:</em>&nbsp;{item.price}</h6>
                    
                      <h6><em>Quanity:&nbsp;</em><AiOutlinePlusCircle className='text-success'
                      style={{cursor:"pointer"}} onClick={() =>{
                        dispatch(addToCart(item,item.quanity+1,item.varient))
                      }}></AiOutlinePlusCircle>
                      &nbsp;{item.quanity}&nbsp;<AiOutlineMinusCircle className='text-danger'
                      style={{cursor:"pointer"}} onClick={() =>{
                        dispatch(addToCart(item,item.quanity-1,item.varient))
                      }}></AiOutlineMinusCircle></h6>
    
                      <FaTrash className='text-danger' style={{cursor:"pointer"}}
                      onClick={()=>{
                        dispatch(
                          deleteFromCart(item)
        
                        )
                      }}></FaTrash>
                     
                      
                      </Col>
                      <Col md={3}>
                      <img alt='image' src={item.image} width="150px" height="100px"></img>

                      </Col>
                      <hr></hr>
                      </>
                    ))
                  }
                </Row>
            </Col>
            <Col md ={4}>
                    <h1><em><u>Payment&nbsp;<FaAmazonPay></FaAmazonPay></u></em></h1>
                    <br></br>
                    <h4><u><em>Sub Total</em></u></h4>
                    <h4>{subTotal}/-</h4>
                    <br></br>
                    <Checkout subTotal={subTotal}></Checkout>
                </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartScreen
