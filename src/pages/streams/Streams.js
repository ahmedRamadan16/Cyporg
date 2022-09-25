import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../../components/Sider";
import { AiOutlineCheck } from "react-icons/ai";
import Img1 from "../../images/avatar-01.jpg";
import Img2 from "../../images/avatar-02.jpg";
import Img3 from "../../images/avatar-03.jpg";
import Img4 from "../../images/avatar-04.jpg";
import MainHead from "../../components/MainHead";
import GameCard from "../../components/GameCard";
export default function Streams() {
  let data = [
    {
      id: 1,
      img: require("../../images/stream-05.jpg"),
      avatar: require("../../images/avatar-01.jpg")
    },
    {
      id: 2,
      img: require("../../images/stream-07.jpg"),
      avatar: require("../../images/avatar-02.jpg")
    },
    {
      id: 3,
      img: require("../../images/stream-08.jpg"),
      avatar: require("../../images/avatar-03.jpg")
    },
    {
      id: 4,
      img: require("../../images/stream-06.jpg"),
      avatar: require("../../images/avatar-04.jpg")
    },
    {
      id: 5,
      img: require("../../images/stream-06.jpg"),
      avatar: require("../../images/avatar-04.jpg")
    },
    {
      id: 6,
      img: require("../../images/stream-05.jpg"),
      avatar: require("../../images/avatar-01.jpg")
    },
    {
      id: 7,
      img: require("../../images/stream-07.jpg"),
      avatar: require("../../images/avatar-02.jpg")
    },
    {
      id: 8,
      img: require("../../images/stream-06.jpg"),
      avatar: require("../../images/avatar-03.jpg")
    }
  ];
  return (
    <div className="streams-page">
      <Container>
        <div className="upper-section">
          <Row>
            <Col lg={"8"} md={"12"}>
              <div className="left-slider">
                <Slider />
              </div>
            </Col>
            <Col lg={"4"} md={"12"}>
              <div className="right">
                <MainHead title="Top" span="Streamers" />
                <div className="box">
                  <Row>
                    <Col className="first">
                      <span>01</span>
                      <img src={Img1} alt="" />
                    </Col>
                    <Col className="second">
                      <AiOutlineCheck /> <span>LahutaM</span>
                    </Col>
                    <Col>
                      <button className="btn btn-pink">Follow</button>
                    </Col>
                  </Row>
                </div>
                <div className="box">
                  <Row>
                    <Col className="first">
                      <span>01</span>
                      <img src={Img2} alt="" />
                    </Col>
                    <Col className="second">
                      <AiOutlineCheck /> <span>LahutaM</span>
                    </Col>
                    <Col>
                      <button className="btn btn-pink">Follow</button>
                    </Col>
                  </Row>
                </div>
                <div className="box">
                  <Row>
                    <Col className="first">
                      <span>01</span>
                      <img src={Img3} alt="" />
                    </Col>
                    <Col className="second">
                      <AiOutlineCheck /> <span>LahutaM</span>
                    </Col>
                    <Col>
                      <button className="btn btn-pink">Follow</button>
                    </Col>
                  </Row>
                </div>
                <div className="box">
                  <Row>
                    <Col className="first">
                      <span>01</span>
                      <img src={Img4} alt="" />
                    </Col>
                    <Col className="second">
                      <AiOutlineCheck /> <span>LahutaM</span>
                    </Col>
                    <Col>
                      <button className="btn btn-pink">Follow</button>
                    </Col>
                  </Row>
                </div>
                <div className="box">
                  <Row>
                    <Col className="first">
                      <span>01</span>
                      <img src={Img1} alt="" />
                    </Col>
                    <Col className="second">
                      <AiOutlineCheck /> <span>LahutaM</span>
                    </Col>
                    <Col>
                      <button className="btn btn-pink">Follow</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="popular-section most-popular-live-stream">
          <MainHead title="Most Popular" span="Live Stream" />
          <Row>
            {data.map(({ id, img, avatar }) => {
              return (
                <Col lg={"3"} md={"4"} sm={"12"}>
                  <GameCard Img={img} Avatar={avatar} />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}
