// import React from "react";
// import list from "../data";
// import Cards from "./card";
// import "../styles/amazon.css";

// const Amazon = ({ handleClick }) => {
//   return (
//     <section>
//       {list.map((item) => (
//         <Cards key={item.id} item={item} handleClick={handleClick} />
//       ))}
//     </section>
//   );
// };

// export default Amazon;


import React from "react";
import list from "./data";
import Cards from "./card";
import "./styles/amazon.css";
import { Col, Container, Row } from "react-bootstrap";

const Amazon = ({ handleClick }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <section>
              {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Amazon;
