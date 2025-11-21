import React, { useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"


export default function AppNavbar({
  brand = "",
  logoSrc = "assets/logo.png",
  links = [
    { label: "Home", href: "#", active: true },
    { label: "TV Shows", href: "#" },
    { label: "Movies", href: "#" },
    { label: "Recently Added", href: "#" },
    { label: "My List", href: "#" },
  ],
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      expand="lg"
      variant="dark"
      bg="dark"
      style={{ backgroundColor: "#221f1f" }}
      className="py-2"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logoSrc}
            alt={brand || "logo"}
            style={{ width: 100, height: 55, objectFit: "cover" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            {links.map((l, idx) => (
              <Nav.Link
                key={idx}
                href={l.href}
                active={!!l.active}
                className="fw-bold"
                onClick={() => setExpanded(false)}
              >
                {l.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <i
              className="bi bi-search icons"
              role="button"
              aria-label="Cerca"
            />

            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>

            <i
              className="bi bi-bell icons"
              role="button"
              aria-label="Notifiche"
            />
            <i
              className="bi bi-person-circle icons"
              role="button"
              aria-label="Profilo"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}