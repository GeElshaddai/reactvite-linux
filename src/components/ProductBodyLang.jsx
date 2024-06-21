import { Container, Row, Col } from "react-bootstrap";

import PyLang from "./ProductPy";
import JsLang from "./ProductJs";
import PhpLang from "./ProductPhp";

export default function ProductBodylang() {
  return (
    <>
      <Container className="my-4">
        <Row>
          <Col sm lg={4} className="p-5">
            <PyLang />
          </Col>
          <Col sm lg={4} className="p-5">
            <JsLang />
          </Col>
          <Col sm lg={4} className="p-5">
            <PhpLang />
          </Col>
        </Row>
      </Container>
    </>
  );
}
