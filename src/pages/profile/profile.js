import { Container, Col, Row } from "react-bootstrap";
import Library from "../../components/Library";
import MainHead from "../../components/MainHead";
import ProfileImg from "../../images/profile.jpg";
import Clip01 from "../../images/clip-01.jpg";
import Clip02 from "../../images/clip-02.jpg";
import Clip03 from "../../images/clip-03.jpg";
import Clip04 from "../../images/clip-04.jpg";
import { AiOutlineEye } from "react-icons/ai";

export default function profile() {
  return (
    <div className="profile-page">
      <Container>
        <div className="upper">
          <Row>
            <Col lg={"4"} md={"12"} sm={"12"}>
              <div className="left">
                <img src={ProfileImg} alt="profileimg" />
              </div>
            </Col>
            <Col lg={"4"} md={"12"} sm={"12"}>
              <div className="middle">
                <button className="btn btn-pink">Offilne</button>
                <h2>Alan Smithee</h2>
                <p>
                  You Haven't Gone Live yet. Go Live By Touching The Button
                  Below.
                </p>
                <button className="btn btn-pink">Start Live Stream</button>
              </div>
            </Col>
            <Col lg={"4"} md={"12"} sm={"12"}>
              <div className="right">
                <ul className="list-unstyled">
                  <li>
                    <h4>Games Downlooded</h4>
                    <span>3</span>
                  </li>
                  <li>
                    <h4>Friends Online</h4>
                    <span>16</span>
                  </li>
                  <li>
                    <h4>Live Streams</h4>
                    <span>None</span>
                  </li>
                  <li>
                    <h4>Clips</h4>
                    <span>29</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="most-popular-clips">
            <MainHead title="Your Most Popular " span="Clips" />
            <Row>
              <Col lg={"3"} md={"6"} sm={"12"}>
                <div className="box">
                  <img src={Clip01} alt="clip01" />
                  <div className="info">
                    <h2>First Clip</h2>
                    <div className="icon">
                      <AiOutlineEye />
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={"3"} md={"6"} sm={"12"}>
                <div className="box">
                  <img src={Clip02} alt="" />
                  <div className="info">
                    <h2>First Clip</h2>
                    <div className="icon">
                      <AiOutlineEye />
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={"3"} md={"6"} sm={"12"}>
                <div className="box">
                  <img src={Clip03} alt="" />
                  <div className="info">
                    <h2>First Clip</h2>
                    <div className="icon">
                      <AiOutlineEye />
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={"3"} md={"6"} sm={"12"}>
                <div className="box">
                  <img src={Clip04} alt="" />
                  <div className="info">
                    <h2>First Clip</h2>
                    <div className="icon">
                      <AiOutlineEye />
                      <span>250</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Library />
      </Container>
    </div>
  );
}
