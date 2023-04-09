import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footeer.css'
const faka = require("../AllBaby/img/EFood.png")

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

    <Container>
      <Row>
        <Col>
          <img src={faka} alt='' className='faka'/>
          <br></br>
          <br></br>
          <p>Dhaka, Bangladesh</p>
          <p>0943833399</p>
          <p>support@efood.com</p>

          <div className='ikonchalar'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-telegram"></i>
          </div>

          <div className='displayone'>
              <ul className='one'>
                <li className='onene'><span>Service</span></li>
                <li className='onene'>How it Works</li>
                <li className='onene'>Home delivery</li>
                <li className='onene'>Products</li>
                <li className='onene'>Menu</li>
              </ul>
          </div>

          <div className='displaytwo'>
              <ul className='two'>
                <li className='twoe'><span>Company</span></li>
                <li className='twoe'>About us</li>
                <li className='twoe'>News</li>
                <li className='twoe'>Our Trusted</li>
                <li className='twoe'>New Users</li>
              </ul>
          </div>

          <div className='displaythre'>
              <ul className='thre'>
                <li className='thre'><span>Supports</span></li>
                <li className='thre'>Help center</li>
                <li className='thre'>Feedback</li>
                <li className='thre'>Contact us</li>
                <li className='thre'>Terms Condits</li>
              </ul>
          </div>

          <div className='displayfour'>
              <ul className='four'>
                <li className='four'><span>Resources</span></li>
                <li className='four'>Download app</li>
                <li className='four'>Blog</li>
                <li className='four'>What's new</li>
                <li className='four'>Sitemap</li>
              </ul>
          </div>
          <hr></hr>
    
          <div className='fotbol'>
          <p>© 2021 EFood - All rights reserved.</p>
          </div>

          <div className='ohirgi'>
            <ul className='ohiri'>
              <li className='ohirgisi'>Privacy</li>
              <li className='ohirgisi'>Security</li>
              <li className='ohirgisi'>Terms</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
   </>
  )
}
