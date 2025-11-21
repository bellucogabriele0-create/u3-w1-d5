import React from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"

 function MovieSection() {
  const sections = [
    {
      title: "Trending Now",
      images: [1, 2, 3, 4, 5, 6],
    },
    {
      title: "Watch it Again",
      images: [7, 8, 9, 10, 11, 12],
    },
    {
      title: "New Releases",
      images: [13, 14, 15, 16, 17, 18],
    },
  ]

  return (
    <Container fluid className="px-4 text-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h2 className="mb-4">TV Shows</h2>

          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle
              size="sm"
              variant="secondary"
              className="rounded-0"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex gap-3">
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>

      {sections.map((section, idx) => (
        <div key={idx}>
          <h4>{section.title}</h4>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {section.images.map((num) => (
              <Col key={num} className="mb-2 text-center px-1">
                <img
                  className="img-fluid"
                 src={image.url} alt="movie"
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  )
}
export default MovieSection