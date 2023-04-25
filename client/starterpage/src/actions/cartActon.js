export const addToCart =(menu,quantity,varient) =>(dispatch,getState) => {
var cartItems ={
    name:menu.name,
    _id:menu._id,
    image:menu.image,
    varient:varient,
    quanity:Number(quantity),
    prices:menu.prices,
    price:menu.prices[0][varient]*quantity,
};
if(cartItems.quantity>10)
{
    alert('You can add only 10')
}
else{
    dispatch({type:"ADD_TO_CART",payload:cartItems});
localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}
if(cartItems.quantity<1)
{
    dispatch({type:'DELETE_FROM_CART',payload:menu})
}
else{
    
}
}
export const deleteFromCart= (menu) =>(dispatch,getState) =>{
    dispatch({type:'DELETE_FROM_CART',payload:menu})
    const cartItems=getState().cartReducer.cartItems;
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}