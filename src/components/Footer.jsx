import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  const columns = [
    ["Audio and Subtitles", "Media Center", "Privacy", "Contact us"],
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Center", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
  ];

  return (
    <footer className="text-white mt-5">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 mb-3">
              {columns.map((col, idx) => (
                <Col key={idx} className="footer-links mb-3">
                  {col.map((item) => (
                    <p key={item}>
                      <a
                        href="#"
                        className="text-white-50 text-decoration-none"
                      >
                        {item}
                      </a>
                    </p>
                  ))}
                </Col>
              ))}
            </Row>

            <Row>
              <Col>
                <Button
                  size="sm"
                  className=" mt-3"
                  variant="secondary"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 text-white-50">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
