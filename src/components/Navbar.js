import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import ProfileImg from "../images/profile-header.jpg";
import { BiSearch } from "react-icons/bi";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
export default function Navbar() {
  const [isnavsshowing, setisnavsshowing] = useState(false);

  return (
    <nav>
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <NavLink to="/">
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>
          </Col>
          <Col>
            <div className="search-box">
              <div className="box">
                <BiSearch className="icon" />
                <input type="text" placeholder="Type Something" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="links">
              <FaBars onClick={() => setisnavsshowing(prev => !prev)} />
              <ul
                className={`list-unstyled ${isnavsshowing
                  ? "show-nav"
                  : "hide-nav"}`}
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/browse">Browse</NavLink>
                </li>
                <li>
                  <NavLink to="/details">Details</NavLink>
                </li>
                <li>
                  <NavLink to="/streams">Streams</NavLink>
                </li>
                <li className="btn">
                  <NavLink to="/profile">
                    <span>Profile</span>
                    <img src={ProfileImg} alt="profileImg" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
