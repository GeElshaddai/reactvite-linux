import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

export default function JsLang() {
  return (
    <>
      <Card>
        <Card.Header className="text-center py-4">
          <FontAwesomeIcon icon={faJs} size="4x" />
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
