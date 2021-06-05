import React, {useState, useEffect, useRef} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firstRender = useRef(true);
    const [disabled, setDisabled] =  useState(true);
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null);
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);

useEffect(() => {
    if (firstRender.current){
        firstRender.current = false
        return
    }
    setDisabled(formValidation())

}, [email, password, firstName, lastName])

const formValidation = () => {
    if (firstName === ""){
        setFirstNameError('required')
        return true
    }
    if (lastName === ""){
        setLastNameError('required')
        return true
    }
    if (email === "") {
        setEmailError('must provide email')
        return true
    }
    if (password.length < 5){
        setPasswordError('must 5 or more characters')
        return true
    }
    else {
        setPasswordError(null)
        setEmailError(null)
        setFirstNameError(null)
        setLastNameError(null)
        return false
    }
}


let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/register", {
        method: 'POST', 
        body: JSON.stringify({user: {firstName: firstName, lastName: lastName, email: email, password: password}}),
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
    <div className = "signup-container">
        <h3>Signup</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="firstName">First</Label>
                <Input onChange={(e) => setFirstName(e.target.value)} name = "firstName" value = {firstName}/>
                {firstNameError && <p style = {{color: "red", fontSize: '10px' }}>required</p>}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName">Last</Label>
                <Input onChange={(e) => setLastName(e.target.value)} name = "lastName" value = {lastName}/>
                {lastNameError && <p style = {{color: "red", fontSize: '10px' }}>required</p>}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="username">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name = "email" value = {email} />
                {emailError && <p style = {{color: "red", fontSize: '10px' }}>invalid email</p>}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type ="password" onChange={(e) => setPassword(e.target.value)} name = "password" value = {password}/>
                {passwordError && <p style = {{color: "red", fontSize: '10px'}}>Password must be 5 or more characters</p>}
            </FormGroup>
            <Button type = "submit" disabled= {disabled}>Signup</Button>
        </Form>
    </div>
)
}

export default Signup;
