import React, {useState} from 'react';
import {Container, Row, Col, Button, Collapse, Card, CardBody, } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';


const Auth = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Container className='auth-container'>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} className="login-col">
                    <Login updateToken = {props.updateToken} />
                <div>
                    <Button className = "signup-button" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Don't Have an Account? Signup.</Button>
                    <div className = "signup-card">
                        <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <Col className = "signup-form">
                                <Signup updateToken = {props.updateToken} />
                                </Col>
                            </CardBody>
                        </Card>
                    
                        </Collapse>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;