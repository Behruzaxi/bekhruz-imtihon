

import axios from 'axios'
import "./style.css";
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

export default function GetData() {

const [user, setUser] = useState([])

const getAllData = () => {
    axios.get("http://localhost:3000/data").then((data) => {
        setUser(data.data)
    })
}

const delete_func = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
}

useEffect(() => {
    getAllData()
}, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={10} sm={8}>
                        <Table className='tablellee' striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{"fontSize": "15px"}}> Name</th>
                                    <th style={{"fontSize": "15px"}}> Email</th>
                                    <th style={{"fontSize": "15px"}}>Password</th>
                                </tr>
                            </thead>
                            <tbody className='tble'>

                                {user?.map((data) => {
                                    return (
                                        <>
                                <tr style={{paddingTop: "10px"}}>
                                    <td style={{fontSize: "15px", paddingTop: "10px"}}>{data.name}</td>
                                    <td style={{fontSize: "15px", paddingTop: "10px"}}>{data.email}</td>
                                    <td style={{fontSize: "15px", paddingTop: "10px"}}>{data.password}</td>
                                    <button style={{marginLeft: "5px", padding: "3px, 3px ,3px, 3px", backgroundColor: "red", borderRadius: "8px", color: "white"}}  onClick={() => delete_func(data.id)}>delete</button>
                                </tr>   
                                        </>
                                    )
                                })}


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
