import React from 'react'
// import i18next from "i18next"
import "./section1.css"
import { useTranslation } from 'react-i18next'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
const burge = require("./img/burger.png")
const pizza = require("./img/pizza.png")
const sandwich = require("./img/sandwich.png")
const asian = require("./img/asian.png")
const menu = require("./img/menu.png")
const bergu = require("./img/bergu.png")
const burgerbir = require("./img/Burger (1).png")
const burgertwo = require("./img/burger2.png")
const burgerthree = require("./img/burger3.png")
const burgerfour = require("./img/burger4.png")
const man = require("./img/man.png")
const time = require("./img/time.png")
const outline = require("./img/time.png")
const kitay = require("./img/kitaay.png")

export default function Section1() {

    const { t } = useTranslation()

    // const handleClick = (lang) => {
    //     i18next.changeLanguage(lang)
    // }
    return (
        <>
            <Container>
                <Row >
                    <h2 className='our'>{t("text.our")}</h2>

                    <Col xs={12}>
                        <div className='foodcard'>
                            <img src={burge} alt='' />
                            <h3 className='burgsoz'>Burger</h3>
                        </div>

                        <div className='bexa'>
                            <img src={pizza} alt='' />
                            <h3 className='pizzasoz'>Pizza</h3>
                        </div>

                        <div className='xura'>
                            <img src={sandwich} alt='' className='sandvich' />
                            <h4 className='xurasoz'>Sandwich</h4>
                        </div>

                        <div className='alibaba'>
                            <img src={asian} alt='' className='asian' />
                            <h3 className='alibabasoz'>Asian </h3>
                        </div>

                        <div className='suuu'>
                            <img src={menu} alt='' className='menu' />
                            <h5 className='suusoz'>Set Menu</h5>
                        </div>


                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div className='cartoto'>
                            <div className='cardone'>
                                <Card style={{ width: '16rem' }}>
                                    <img className='bergur' src={bergu} alt='' />
                                    <Card.Body>
                                        <Card.Title className='chese'>{t("text.ches")}</Card.Title>
                                        <Card.Title className='ches'>$18.00</Card.Title>
                                        <Button className='cadbut'>{t("text.add")}</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='cardone'>
                                <Card style={{ width: '16rem' }}>
                                    <img className='bergur' src={burgerbir} alt='' />
                                    <Card.Body>
                                        <Card.Title className='chese'>{t("text.mol")}</Card.Title>
                                        <Card.Title className='ches'>$15.00</Card.Title>
                                        <Button className='cadbut'>{t("text.add")}</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='cardone'>
                                <Card style={{ width: '16rem' }}>
                                    <img className='bergur' src={burgertwo} alt='' />
                                    <Card.Body>
                                        <Card.Title className='chese'>{t("text.royal")}</Card.Title>
                                        <Card.Title className='ches'>$16.00</Card.Title>
                                        <Button className='cadbut'>{t("text.add")}</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='cardone'>
                                <Card style={{ width: '16rem' }}>
                                    <img className='bergur' src={burgerthree} alt='' />
                                    <Card.Body>
                                        <Card.Title className='chese'>{t("text.qora")}</Card.Title>
                                        <Card.Title className='ches'>$14.00</Card.Title>
                                        <Button className='cadbut'>{t("text.add")}</Button>
                                    </Card.Body>
                                </Card>
                            </div>


                            <div className='cardone'>
                                <Card style={{ width: '16rem' }}>
                                    <img className='bergur' src={burgerfour} alt='' />
                                    <Card.Body>
                                        <Card.Title className='chese'>{t("text.joja")}</Card.Title>
                                        <Card.Title className='ches'>$15.00</Card.Title>
                                        <Button className='cadbut'>{t("text.add")}</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col xs={6} xm={6}>
                        <img src={man} alt='' className='man' />
                    </Col>
                    <Col xs={6}>
                        <h2 className='manword'>
                            <span>{t("text.stay")} </span>{t("text.dom")}<br></br>{t("text.prov")}<span> {t("text.good")}</span>
                        </h2>

                        <p className='manpi'>{t("text.we")}<br></br>{t("text.home")}<br></br> get  of  to 50%.</p>

                        <img src={time} alt='' className='timicon' />
                        <h6 className='fastedtime'>{t("text.fasted")}</h6>

                        <img src={outline} alt='' className='outline' />
                        <h6 className='outlinetext'>{t("text.men")}</h6>

                        <img src={kitay} alt='' className='kitay' />
                        <h6 className='kitaytext'>{t("text.res")}</h6>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
