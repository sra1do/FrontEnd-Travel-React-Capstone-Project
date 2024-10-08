import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();

  const activeStyle = {
    fontWeight: "bold",
    color: "white"
  };

  return (
    <>
      <Navbar  variant="dark" expand="lg" sticky="top" style={{ backgroundColor: 'rgb(21, 74, 74)' }}>
        <Container varient="light">
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="Healthcare" width="60" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5 fw-bold">
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} activeStyle={activeStyle} to="/allTours">
                Tours
              </Nav.Link>
              {user.email && (
                <div className="d-flex">
                  <Nav.Link as={NavLink} activeStyle={activeStyle} to="/myBookings">
                    My Bookings
                  </Nav.Link>
                  <Nav.Link as={NavLink} activeStyle={activeStyle} to="/allReviews">
                    All Reviews
                  </Nav.Link>
                </div>
              )}
            </Nav>
            <Navbar.Text className="fs-5 fw-bold">
              {user.email ? (
                <div>
                  <i className="fas fa-user"></i> {user?.displayName}
                  <button onClick={logOut} className="btn btn-secondary text-center ms-2">
                    <i className="fas fa-sign-out-alt mx-auto"></i>
                  </button>
                </div>
              ) : (
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login">
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default Header;
