import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import {FcRules} from 'react-icons/fc'
const Policy = () => {
    return (
        <>
            <Container style={{marginTop:"50px"}}>
                <h1><em><u>Terms and Conditions&nbsp;<FcRules></FcRules></u></em></h1>
                <br></br><br></br>
                <Row>
                    <Col md={8}>
                    <h6><u><i>1.Reservation Policy:</i></u></h6>
                        <p>
                            a. We accept reservations up to two weeks in advance.<br></br>
                            b. To reserve a table, a credit card is required.<br></br>
                            c. Cancellations must be made at least 24 hours in advance to avoid a cancellation fee<br></br>
                        </p>
                        <h6><u><i>2.Payment Policy:</i></u></h6>
                        <p>
                            a. We accept all major credit cards and cash.<br></br>
                            b. A 20% gratuity will be added to parties of 6 or more.<br></br>
                            c. Splitting checks is not allowed for parties of 6 or more.<br></br>
                        </p>
                        <h6><u><i>3.Menu Policy:</i></u></h6>
                        <p>
                            a. Menu items and prices are subject to change without notice.<br></br>
                            b. We accommodate food allergies and dietary restrictions to the best of our ability.<br></br>
                            c. Substitutions may be subject to an additional charge<br></br>
                        </p>
                        <h6><u><i>4.Conduct Policy:</i></u></h6>
                        <p>
                            a. We reserve the right to refuse service to anyone for any reason.<br></br>
                            b. Disorderly conduct or use of offensive language will not be tolerated.<br></br>
                            c. Guests who are visibly intoxicated will not be served alcohol.<br></br>

                        </p>
                        <h6><u><i>5.Libality Policy:</i></u></h6>
                        <p>
                            a. We are not responsible for lost or stolen items.<br></br>
                            b. We are not liable for any injuries or accidents that occur on our premises.<br></br>
                            c. By dining with us, you agree to indemnify and hold us harmless from any claims arising from your use of our services.<br></br>
                        </p>
                    </Col>
                    <Col md={4}>
      <Image src="images/terms.jpeg" style={{marginTop:'30px',width:'80%',height:'60%'}}></Image>
    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Policy
