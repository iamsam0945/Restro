import React from 'react'
import {Row,Col,Container,Table,Image} from 'react-bootstrap'
import {FcContacts} from 'react-icons/fc'
import {FiPhone} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
  return (
    <>
      <Container style={{margintop:"50px"}}>
<Row>
    <Col md={6}>
    <br/><br/>
         <h1><u><i>Contact Us&nbsp;&nbsp;<FcContacts/></i></u></h1>
         <br/><br/>
         <p>
         <h4 style={{fontFamily: "Times New Roman"}}><i>We're always here to help! Use the information below to get in touch with us.</i></h4>
         <br/><br/>
        Restaurant Name: <b><i>The Restro</i></b><br/>
        Address: 123 Main Street, Dilshad Garden, New Delhi,123401<br/><br/>
Hours of Operation:-<br/><br/>

Monday - Friday: 11:00 am - 10:00 pm<br/>
Saturday: 10:00 am - 11:00 pm<br/>
Sunday: 10:00 am - 9:00 pm<br/>

         </p>
         <h3><u><i>Contact Details</i></u></h3><br></br>
         <Table striped bordered hover variant="light">
      <thead>
        <tr>
         
          <td>Phone number&nbsp;<FiPhone></FiPhone>&nbsp;</td>
          <td>7302063574</td>
         
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>E-mail&nbsp;<MdEmail></MdEmail></td>
          <td>restro142@gmail.com</td>
         
        </tr>
      </tbody>
    </Table>
    </Col>
    <Col md={6}>
      <Image src="images/restaurant.jpeg" style={{marginTop:'50px',width:'80%',height:'60%'}}></Image>
    </Col>
</Row>

      </Container>
    </>
  )
}

export default Contact
