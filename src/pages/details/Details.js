import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureLeft from "../../images/feature-left.jpg";
import FeatureRight from "../../images/feature-right.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { RiGamepadLine } from "react-icons/ri";
import DetailsImg1 from "../../images/details-01.jpg";
import DetailsImg2 from "../../images/details-02.jpg";
import DetailsImg3 from "../../images/details-03.jpg";
import Game01 from "../../images/game-01.jpg";
import Game02 from "../../images/game-02.jpg";
import Game03 from "../../images/game-03.jpg";
import MainHead from "../../components/MainHead";
import GameImg1 from "../../images/game-01.jpg";
import GameImg2 from "../../images/game-02.jpg";
import GameImg3 from "../../images/game-03.jpg";

import { BsPlay } from "react-icons/bs";
export default function Details() {
  return (
    <div className="details-page">
      <Container>
        <div className="images-section">
          <div className="left">
            <img src={FeatureLeft} />
          </div>
          <div className="right">
            <img src={FeatureRight} />
            <BsPlay />
          </div>
        </div>
        <h2>FORTNITE DETAILS</h2>
        <div className="fortnight-details">
          <div className="upper-section">
            <div className="left">
              <div>
                <h3>Fortnite</h3>
                <span>Sandbox</span>
              </div>
              <div>
                <div className="rate">
                  <AiTwotoneStar />
                  <span>4.8</span>
                </div>
                <div className="download">
                  <AiOutlineDownload />
                  <span>2.3M</span>
                </div>
              </div>
            </div>
            <div className="right">
              <Row>
                <Col>
                  <div className="box">
                    <AiTwotoneStar />
                    <span>4.8</span>
                  </div>
                </Col>
                <Col>
                  <div className="box">
                    <AiOutlineDownload />
                    <span>2.3M</span>
                  </div>
                </Col>
                <Col>
                  <div className="box">
                    <BiServer />
                    <span>30GB</span>
                  </div>
                </Col>
                <Col>
                  <div className="box">
                    <RiGamepadLine />
                    <span>Action</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Row>
            <Col lg={"4"} md={"12"}>
              <img src={DetailsImg1} />
            </Col>

            <Col lg={"4"} md={"12"}>
              <img src={DetailsImg2} />
            </Col>

            <Col lg={"4"} md={"12"}>
              <img src={DetailsImg3} />
            </Col>
          </Row>
          <p>
            Cyborg Gaming is free HTML CSS website template provided by
            TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small
            contribution via PayPal to info [at] templatemo.com and thank you
            for supporting. If you want to get the PSD source files, please
            contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei
            elit, sed doers eiusmod lisum hored tempor.
          </p>
          <button className="btn btn-pink">Download Fortnite Now</button>
        </div>
        <div className="other-realted-games">
          <MainHead title="Other Related" span="Games" />
          <div className="game-content">
            <ul className="list-unstyled">
              <li>
                <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
              <li>
              <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
              <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
              <li>
              <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
              <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
              <li>
              <div className="image-info">
                   <img src={GameImg1} />
                <div className="info">
                  <h2>Data 2</h2>
                  <span>Sandbox</span>
                </div>
                </div>
                <div className="icons-container">
                <div className="rate">
                      <AiTwotoneStar />
                      <span>4.8</span>
                    </div>
                    <div className="download">
                      <AiOutlineDownload />
                      <span>2.3M</span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
