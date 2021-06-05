import React, {useState, useEffect, useRef} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firstRender = useRef(true);
    const [disabled, setDisabled] =  useState(true);
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null);
useEffect(() => {
    if (firstRender.current){
        firstRender.current = false
        return
    }
    setDisabled(formValidation())
}, [email, password])
const formValidation = () => {
    if (email === '') {
        setEmailError('must provide email')
        return true
    }
    if (password === ''){
        setPasswordError('must provide password')
        return true
    }
    else {
        setPasswordError(null)
        setEmailError(null)
        return false
    }
}
    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    return(
        <div>
            <h3>Hello, Login</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input type= 'email' onChange = {(e) => setEmail(e.target.value)} name = 'email' value = {email}/>
                    {emailError && <p style = {{color: 'red', fontSize: '10px' }}>invalid email</p>}
                    {/* <span style={{ fontWeight: ‘bold’, color: ‘red’,}}>{emailError}</span> */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input type= 'password' onChange = {(e) => setPassword(e.target.value)} name = 'password' value = {password}/>
                    {passwordError && <p style = {{color: 'red', fontSize: '10px'}}>Password must be 5 or more characters</p>}
                </FormGroup>
                <Button type = 'submit' disabled={disabled} className = 'login-button'>Login</Button>
            </Form>
        </div>
    )
}
export default Login;