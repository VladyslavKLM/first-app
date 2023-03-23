
import {Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component, useEffect, useState} from "react";


import {
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
} from "react-bootstrap";

class Contacts extends Component {
    render() {
        function TextControlsExample() {
            const [email, setEmail] = useState('')
            const [emailDirty, setEmailDirty] = useState( false)
            const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
            const [formValid, setFormValid] = useState(false)
            const divStyleL = {
                marginLeft: '300px',
              }
              const divStyleR = {
                marginRight: '530px',
              }
              const emailHandler = (e) => {
                setEmail(e.target.value)
                const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!re.test(String(e.target.value.toLowerCase()))) {
                    setEmailError('Некоректний email')
                } else {
                    setEmailError('')
                }
            }
            useEffect ( () => {
                if (emailError) {
                    setFormValid(false)
                } else {
                    setFormValid(true)
                }
            },[emailError])
            
            
            return (
                
                
              <Form>
                
                
                <Form.Group className="mb-4 col-md-7" controlId="exampleForm.ControlInput1">
                
                  <Form.Label >Email address</Form.Label>
                  {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                                <Form.Control style={divStyleL} onChange={e => emailHandler(e)} name="email" value={email}
                                type="email" placeholder="Enter email" />

                                <Form.Text style={divStyleL} className="text-muted col-md-4">
                                         We'll never share your email with anyone else.
                                </Form.Text>
                  
                </Form.Group>
                <Form.Group className="mb-4 col-md-7" controlId="exampleForm.ControlTextarea1">
                  <Form.Label >Example textarea</Form.Label>
                  <Form.Control style={divStyleL} as="textarea" rows={3} />
                </Form.Group>
                <Button disabled={!formValid} style={divStyleR}  variant="primary" type="submit">
                Submit
            </Button>

              </Form>
            );
          }

        return (
            <div>
                <h2>
                    Contacts us
                </h2>
                <TextControlsExample />
            </div>
            
        
        
            
        );
    }
}

export default Contacts;
