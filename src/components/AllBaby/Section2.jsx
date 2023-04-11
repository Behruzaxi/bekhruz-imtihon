import React from 'react'
import "./section2.css"
// import i18next from "i18next"
import { useTranslation } from 'react-i18next'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
const pizzaone = require("./img2/pizza.png")
const pizzatwo = require("./img2/pizza2.png")
const pizzathree = require("./img2/pizza3.png")
const burger = require("./img2/burger.png")
const burgertwo = require("./img2/burgertwo.png")
const burgerthree = require("./img2/burgethree.png")
const apps = require("./img2/Download app.png")
const phone = require("./img2/phones.png")
const woman = require("./img2/woman.png")

export default function Section2() {

    const { t } = useTranslation()

    // const handleClick = (lang) => {
    //     i18next.changeLanguage(lang)
    // }

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <h1 className='top'>{t("text.top")}<span> {t("text.tor")}</span></h1>
                    <Col xs={12}>
                        <div className='ota'>
                            <div className='onecard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={pizzaone} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>Blaze Pizza</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='twocard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={pizzatwo} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>Pizza Ranch</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='threecard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={pizzathree} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>Dion’s Pizza Hut</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div className='ota'>
                            <div className='onecard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={burger} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>Royel Burger</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='twocard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={burgertwo} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>KFC Restaurant</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='threecard'>
                                <Card style={{ width: '18rem', border: 'none' }}>
                                    <img src={burgerthree} alt='' className='pizzaone' />
                                    <Card.Body>
                                        <Card.Title>Star Food</Card.Title>
                                        <Card.Text className='soat'>11.00 AM - 10.00 PM</Card.Text>
                                        <Button className='strelkabuton'><ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={6}>
                            <h1 className='mobile'>{t("text.lo")}<span> {t("text.paa")}</span></h1>
                            <p className='itspi'>
                           {t("text.love")}<br></br>{t("text.right")}<br></br>{t("text.ahead")}
                            </p>

                            <img src={apps} alt='' className='apps'/>
                    </Col>
                    
                    <Col xs={6}>
                        <img src={phone} alt='' className='phone'/>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <h1 className='what'>{t("text.are")}<span> {t("text.say")}</span> </h1>
                    <Col xs={6}>
                        <img src={woman} alt='' className='woman'/>
                    </Col>
                    <Col xs={6}>
                        <p className='pitags'>{t("text.slah")}</p>

                        <h4 className='swam'><span>Anglina Jole</span></h4>

                        <div className='right'>

                        <WestIcon></WestIcon>
                        <EastIcon></EastIcon>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
