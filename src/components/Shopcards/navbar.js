// import React from "react";
// import "../styles/navbar.css";

// const Navbar = ({ setShow, size }) => {
//   return (
//     <nav>
//       <div className="nav_box">
//         <span className="my_shop" onClick={() => setShow(true)}>
//           My Shoping
//         </span>
//         <div className="cart" onClick={() => setShow(false)}>
//           <span>
//             <i className="fas fa-cart-plus"></i>
//           </span>
//           <span>{size}</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import "../Shopcards/styles/navbar.css";
import { Col, Container, Row } from "react-bootstrap";

const Navbar = ({ setShow, size }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <nav>
              <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                  My Shoping
                </span>
                <div className="cart" onClick={() => setShow(false)}>
                  <span>
                    <i className="fas fa-cart-plus"></i>
                  </span>
                  <span>{size}</span>
                </div>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;

