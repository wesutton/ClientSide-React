import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError] = useState ("name is empty");
    const [lastNameError] = useState ("name is empty");
    const [emailError] = useState ("name is empty");
    const [passwordError] = useState ("name is empty");


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
                <div style = {{ fontSize: 12, color: 'red'}}>{firstNameError}</div>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName">Last</Label>
                <Input onChange={(e) => setLastName(e.target.value)} name = "lastName" value = {lastName}/>
                <div style = {{ fontSize: 12, color: 'red'}}>{lastNameError}</div>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="username">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name = "email" value = {email} />
                <div style = {{ fontSize: 12, color: 'red'}}>{emailError}</div>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type ="password" onChange={(e) => setPassword(e.target.value)} name = "password" value = {password}/>
                <div style = {{ fontSize: 12, color: 'red'}}>{passwordError}</div>
            </FormGroup>
            <Button type = "submit">Signup</Button>
        </Form>
    </div>
)
}

export default Signup;
