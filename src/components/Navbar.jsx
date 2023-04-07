import React from 'react'
import "./navbar.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const food = require("../img/EFood.png")
const skuter = require("../img/Scooter Guy.png")

export default function Navbar() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={8}>
                        <img src={food} alt='' className='food' />

                        <ul className='list'>
                            <li className='list_item'>Home</li>
                            <li className='list_item'>Service</li>
                            <li className='list_item'>Top cities</li>
                            <li className='list_item'>Contract</li>
                        </ul>

                    </Col>
                    <Col xs={2} style={{ marginTop: '50px' }}>
                        <SearchIcon className='serch'></SearchIcon>
                        <ShoppingCartIcon className='shop'></ShoppingCartIcon>
                    </Col>
                    <Col>
                        <Button className='btncha'>Sign Up</Button>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col xs={6}>
                        <h1 className='hbir'>Super Fast <span>Food</span><br></br>
                            <span>Delivery</span> Service</h1>

                        <p className='pi'>We provide super fast-delivery service. Let’s use our<br></br> services right now and get discounts of up to 50%</p>

                        <button className='expbut'>Explore Food</button>
                        <p className='down'>Download App</p>
                    </Col>
                    <Col>
                        <img src={skuter} alt='' className='skuterguy' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}