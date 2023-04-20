import React,{ useState } from 'react'
import {Card,Button,Row,Col} from 'react-bootstrap'
import {BiRupee} from 'react-icons/bi'
import Modal from 'react-bootstrap/Modal';
const Menu = ({menu}) => {
    const [varient,setVarient] = useState('small')
    const [quantity,setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <br></br>
    <Card style={{width:"18rem",marginTop:"30px"}}>
<Card.Img variant="top" src={menu.image} 
Style={{width:"1300px",cursor:"pointer",border:"10px solid red"}} onClick={handleShow}/>
<Card.Body>
    <Card.Title><i>{menu.name}</i></Card.Title>
    <hr Style="height:2px;border-width:0;color:gray;background-color:gray"/>
    <Card.Text>
        <Row>
            <Col md={6}>
            <br></br>
        <h6><em>Variants</em></h6>
        <select Style="padding: 10px; background-color:paleturquoise; border:none;" value={varient}  onChange={ e=>setVarient(e.target.value)}>
            {menu.varients.map(varient=>(
                <option>{varient}</option>
            ))}
        </select>
            </Col>
            <Col md={6}>
            <br></br>
                <h6><em>Quantity</em></h6>
                <select Style="padding: 10px; background-color:#ffb3b3; border:none;"value={quantity}  onChange={e=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((v,i)=>(
                <option>{i+1}</option>
            ))}
        </select>
            </Col>
        </Row>
    </Card.Text>
    <Row>
        <Col md={6}>
    <em><b>Price:&nbsp;<BiRupee></BiRupee></b>{menu.prices[0][varient]*quantity}</em>
        </Col>
        <Col md={6}>
            <Button className="bg-success text-white">Add to Cart</Button>
        </Col>
    </Row>
</Card.Body>

    </Card>

    {/*modal*/}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><em><b><u>{menu.name}</u></b></em></Modal.Title>
        </Modal.Header>
        <Modal.Body>{menu.description}<br></br><br></br><Card.Img variant="top" src={menu.image} 
Style={{width:"1300px",cursor:"pointer"}}/></Modal.Body>
      </Modal>
    </>
  )
}

export default Menu
