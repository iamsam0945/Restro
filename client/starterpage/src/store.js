
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools } from 'redux-devtools-extension'
import { getAllMenuReducers } from './reducers/menureducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer,loginUserReducer } from './reducers/userReducer'
import {placeOrderReducer} from './reducers/orderReducer'
const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const rootReducer= combineReducers({
    getAllMenuReducers:getAllMenuReducers,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
});

const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
};
const  middleware=[thunk];
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;