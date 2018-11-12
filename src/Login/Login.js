import React from 'react';
import './Login.css';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';



const login = () => {
    return (
        <div className="container" align="center">
            <div className="divLogin">
                <Form>
                    <FormGroup Row>
                        <Col sm={2}>
                            <Input type="email" name="email" class="inputField" id="email" placeholder="email" />
                        </Col>
                    </FormGroup>
                    <FormGroup Row>
                        <Col sm={2}>
                            <Input type="password" name="password" class="inputField" id="password" placeholder="password" />
                        </Col>
                    </FormGroup>
                    <Button color="danger">Enviar</Button>
                </Form>
            </div>
        </div>
    )
}

export default login;