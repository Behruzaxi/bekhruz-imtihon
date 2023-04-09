import React from 'react'
import "./navbar.css"
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import i18next from "i18next"
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom';
const food = require("../AllBaby/img/EFood.png")
const skuter = require("../AllBaby/img/Scooter Guy.png")

export default function Navbar() {

    const { t } = useTranslation()

    const handleClick = (lang) => {
        i18next.changeLanguage(lang)
    }

    return (
        <>


            <Container>
                <Row>
                    <Col xs={8} >
                        <img src={food} alt='' className='food' />

                        <ul className='list'>
                            <Link to="/home" style={{ textDecoration: "none", listStyle: "none" }}>
                                <li className='list_item'>Home</li>
                            </Link>
                            <li className='list_item'>About</li>
                            <Link to="/Shop" style={{ textDecoration: "none", listStyle: "none" }}>
                                <li className='list_item'>Shop</li>
                            </Link>
                            <Link to="/Create" style={{ textDecoration: "none", listStyle: "none" }}>
                                <li className='list_item'>Products</li>
                            </Link>
                        </ul>

                    </Col>
                    <Col xs={2} className='d-none' style={{ marginTop: '50px' }}>
                        <SearchIcon className='serch'></SearchIcon>
                        <ShoppingCartIcon className='shop'></ShoppingCartIcon>
                    </Col>
               

                    <Col>
                        <div className='dropd'>
                            <DropdownButton id="dropdown-basic-button" title="Language">
                                <Dropdown.Item className='buto' onClick={() => handleClick("eng")}>English</Dropdown.Item>
                                <Dropdown.Item className='buto' onClick={() => handleClick("ru")}>Russian</Dropdown.Item>
                                <Dropdown.Item className='buto' onClick={() => handleClick("uz")}>Uzbek</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Col>

                </Row>
            </Container>



            <Container>
                <Row>
                    <Col sm={6} xm={4} >
                        <h1 className='hbir'>{t("text.super")} <span></span>
                            <span> </span> </h1>

                        <p className='pi'>{t("text.mi")}<br></br></p>

                        <button className='expbut'>{t("text.expbut")}</button>
                        <p className='down'>{t("text.zi")}</p>
                    </Col>
                    <Col>
                        <img src={skuter} alt='' className='skuterguy' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
