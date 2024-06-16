import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer d-flex flex-wrap align-items-center py-4 border-top bg-body-tertiary">
        <Container>
          <Row className="justify-content-between">
            <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
              <a href="/" className="link-secondary">
                <Icon.CodeSlash width={"3em"} height={"2em"} />
              </a>
              <span className="text-body-secondary">
                2024 Learning react with vite
              </span>
            </div>

            <ul className="nav col-md-6 align-items-center justify-content-center justify-content-md-end list-unstyled d-flex">
              <li className="ms-1">
                <a className="text-body-secondary" href="#">
                  <Icon.TwitterX width={"3em"} height={"1em"} />
                </a>
              </li>
              <li className="ms-1">
                <a className="text-body-secondary" href="#">
                  <Icon.Instagram width={"3em"} height={"1em"} />
                </a>
              </li>
              <li className="ms-1">
                <a className="text-body-secondary" href="#">
                  <Icon.Youtube width={"3em"} height={"1em"} />
                </a>
              </li>
            </ul>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
