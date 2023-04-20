import React from 'react'
import All from "../pizza-data"
import {Container,Row,Col} from 'react-bootstrap'
import Menu from '../components/menu'
const Homescreen = () => {
  return (
    <>
     <Container>
        <Row>
            {All.map(menu =>(
                <Col md={4}>
                <Menu menu={menu}/>
                </Col>
            )) }
        </Row>
     </Container> 
    </>
  )
}

export default Homescreen
