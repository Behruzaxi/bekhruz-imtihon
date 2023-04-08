
import React from 'react'
import {  Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    
    let obj = {
        name: name,
        email: email,
        password: password
    }
    
    const postdata = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/data", obj).then(res => {
            if(res.status === 201){
                alert(res.statusText );
                 setName("")
                 setEmail("")
                 setPassword("")
                 navigate("/table")
            }
        })
    }



    return (
        <>
            <Container fluid="md">
                <Row className='justify-content-center mt-5'>
                    <Col xs={6}>
                        <Form onSubmit={postdata}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name"  onChange={(e) => setName(e.target.value)} value={name} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="email" placeholder="***@gmail.com"  onChange={(e) => setEmail(e.target.value)} value={email} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>password</Form.Label>
                                <Form.Control type="number" placeholder="*****"  onChange={(e) => setPassword(e.target.value)} value={password} required/>
                            </Form.Group>
                            <Button variant="primary" style={{width: "100%"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
