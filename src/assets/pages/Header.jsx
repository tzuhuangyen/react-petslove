import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { CiUser, CiHeart } from "react-icons/ci";
import Logo from "/images/Logo.png";
function Header() {
  return (
    <>
      {" "}
      <header>
        <Navbar expand="lg" bg="light" variant="light">
          <div className="container-lg">
            <h1 className="logo d-flex align-items-center animate__animated animate__backInLeft animate__slow">
              <Navbar.Brand as={Link} to="/">
                <img src={Logo} alt="logo" /> Pet's Love
              </Navbar.Brand>
            </h1>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/shop">
                  Shop
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/favorite">
                  <CiHeart />
                </Nav.Link>
                <Nav.Link as={Link} to="/user">
                  <CiUser />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

//<header>
<div className="container-fluid">
  <div className="container-lg d-flex align-items-center justify-content-between">
    {/*<!-- navbar+漢堡選單按鈕+dropdown menu  -->*/}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/*<!-- logo -->*/}
        <div className="logo-search d-flex justify-content-between align-items-center">
          <h1 className="logo d-flex align-items-center animate__animated animate__backInLeft animate__slow">
            <Link to="/">
              <img src="/images/Logo.png" alt="logo" /> Pet's Love
            </Link>
          </h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link nav-link active aria-current=page"
                aria-current="page"
                href="#"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorite">
                {" "}
                <CiHeart />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                <CiUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>;
//   </header>
