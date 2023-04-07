import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footeer.css'
export default function Footer() {
  return (
   <>
    <Container>
        <Row  className='orange'>
            <Col>
                    <h2 className='subscribe'>Subscribe to get the Latest Offer</h2>
                    <p className='get'>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                    <input placeholder='Enter your email addres' type='email' className='input'/>
                    <button className='folow'>Subscribe</button>
            </Col>
        </Row>
    </Container>
   </>
  )
}
