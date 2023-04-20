import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {GiChefToque} from 'react-icons/gi'
import {GiMeal} from 'react-icons/gi'
const About = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
      <h1><u>Who We Are</u> &nbsp;<GiMeal className="text-danger"></GiMeal></h1>
      <p>
Our restaurant management system is a comprehensive solution that streamlines various aspects of
 restaurant operations. With this system, restaurant owners and managers can manage and monitor
 different aspects of their business, including inventory management, menu creation, staff scheduling,
customer orders, and billing.

Our system is designed to be user-friendly and intuitive, allowing restaurant staff to quickly learn 
how to use it. The system also provides real-time data, enabling restaurant managers to make informed
 decisions based on current trends and performance.
      </p>
      <h1><u>Our Speciality</u></h1>
      <Row>
        <Col md={6}>
Our system is customizable and can be tailored to meet the specific needs of any restaurant, regardless 
of its size or type. It is also compatible with different hardware and software systems, making it easy
to integrate with existing restaurant technology.

The restaurant management system also helps restaurants to improve their customer service by providing 
various features such as online reservations, table management, and customer feedback management. This
enables restaurants to provide a seamless customer experience, which is crucial for building customer 
loyalty.
        </Col>
        <Col md={6}>
Our system also helps restaurants to reduce waste and optimize their inventory by providing detailed
reports on inventory levels, usage, and ordering patterns. This ensures that restaurants can order
the right amount of ingredients, reduce waste, and save money.

Overall, our restaurant management system is a comprehensive solution that provides a range of features
to help restaurants streamline their operations, improve customer service, reduce waste, and optimize
inventory.
<br/><br/><br/>
        </Col>
      </Row>
      <Row>
      <br/><br/>
        <h1><u>Our Chef &nbsp;<GiChefToque className="text-success"></GiChefToque></u></h1>
        <br/><br/>
        <Col md={3}>

<b>Executive chef: </b>This is the head chef of the restaurant, responsible for managing the kitchen staff,
developing menus, and overseeing the overall operations of the kitchen.

        </Col>
        <Col md={3}>
<b>Sous chef:</b> The sous chef is the second-in-command in the kitchen, responsible for managing the
        kitchen in the absence of the executive chef. They also assist in menu planning, ordering 
        supplies, and supervising the kitchen staff.


        </Col>
        <Col md={3}>
<b>Pastry chef:</b> The pastry chef specializes in making desserts, pastries, and baked goods.
        They are responsible for creating and executing the dessert menu, including cakes, pies, 
        and other sweet treats.

        </Col>
        <Col md={3}>
<b>Line cook:</b> Line cooks work on the various stations in the kitchen, such as the grill, sauté, and
         fry stations. They are responsible for preparing the dishes according to the recipes and 
         plating them for service.
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default About
