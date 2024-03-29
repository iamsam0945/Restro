import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { registerUser } from '../actions/userAction'


const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')

    const registerState=useSelector(state=>state.registerUserReducer)
    const dispatch=useDispatch()
    const registerhandler=()=>{
        if(password!==confirmPassword){
            alert('Password not matching')
        }         else{
            const user={name,email,password,confirmPassword} 
            dispatch(registerUser(user))
        }
    }
  return (
    <>
   
    <Form>
    <h1><em>Register Yourself..</em></h1>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={
            (e) =>setName(e.target.value)
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
         placeholder="Enter email"
         value={email}
        onChange={
            (e) =>setEmail(e.target.value)
        } />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password"
         value={password}
        onChange={
            (e)=>setPassword(e.target.value)
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password"
         placeholder="Confirm Password"
         value={confirmPassword}
        onChange={
           (e)=>setconfirmPassword(e.target.value)
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"
       onClick={registerhandler}>
        Register
      </Button>
    </Form>
    </>
  )
}

export default Register
