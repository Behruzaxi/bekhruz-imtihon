// import React from "react";

// const Cards = ({ item, handleClick }) => {
//   const { title, author, price, img } = item;
//   return (
//     <div className="cards">
//       <div className="image_box">
//         <img src={img} alt="" />
//       </div>
//       <div className="details">
//         <p>{title}</p>
//         <p>{author}</p>
//         <p>Price - {price}Rs</p>
//         <button onClick={() => handleClick(item)}>Buy this</button>
//       </div>
//     </div>
//   );
// };

// export default Cards;

// // id, title, autor, price, img


import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="cards">
              <div className="image_box">
                <img src={img} alt="" />
              </div>
              <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}.00$</p>
                <button onClick={() => handleClick(item)}>Buy this</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;

// id, title, autor, price, img
