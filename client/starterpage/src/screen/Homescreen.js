import React, {useEffect} from 'react'
// import All from "../pizza-data"
import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import {getAllMenu} from '../actions/menuaction'
import Menu from '../components/menu'
import { getAllMenuReducers } from '../reducers/menureducer'
import Loader from '../components/loader'
import Error from '../components/error'
const Homescreen = () => {
  const dispatch= useDispatch()
  const menustate= useSelector((state)=>state.getAllMenuReducers);
  const {loading,menu,error}=menustate;
  useEffect(() =>{
    dispatch(getAllMenu());
  }, [dispatch]);
  return(
    <>
     <Container>
     {
      loading ?(<Loader style={{height:'100px',width:'100px',marginLeft:'592px',marginTop:'268px'}}></Loader>)
      : error?(<Error>{error}</Error>)
      :
      (    <Row>
            {menu.map(menu =>(
                <Col md={4}>
                <Menu menu={menu}/>
                </Col>
            )) }
        </Row>
        )
      }
    
     </Container> 
    </>
  )
}

export default Homescreen
