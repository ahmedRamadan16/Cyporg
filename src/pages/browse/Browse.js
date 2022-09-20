import React,{ useRef, useState } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import MainHead from '../../components/MainHead'

import img1 from '../../images/game-01.jpg';
import img2 from '../../images/game-02.jpg';
import img3 from '../../images/game-03.jpg';
import LiveStreamImg1 from '../../images/service-01.jpg';
import LiveStreamImg2 from '../../images/service-02.jpg';
import LiveStreamImg3 from '../../images/service-03.jpg';

import {AiTwotoneStar} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai';

import { Link } from 'react-router-dom';

import Slider from '../../components/Sider';
import GameCard from '../../components/GameCard';

export default function Browse() {

  let gameData=[
    {
      id:1,
      img:require('../../images/stream-01.jpg'),
      avatar:require('../../images/avatar-01.jpg')
    },
    {
      id:2,
      img:require('../../images/stream-02.jpg'),
      avatar:require('../../images/avatar-02.jpg')
    },
    {
      id:3,
      img:require('../../images/stream-03.jpg'),
      avatar:require('../../images/avatar-03.jpg')
    },
    {
      id:4,
      img:require('../../images/stream-04.jpg'),
      avatar:require('../../images/avatar-04.jpg')
    }
  ]
  return (
    <>
    <div className='featured-game'>
      <Container>
        <Row>
          <Col lg={'8'} md={'12'} >
              <div className='left-slider'>
              <Slider />
              </div>
          </Col>
          <Col lg={'4'} md={'12'}>
          <div className='right'>
          <MainHead title="Top" span="Downloaded" />
            <div className='box'>
              <Row>
                <Col>
                  <img src={img1} />

                </Col>
                <Col>
                  <h2>
                    Fortnite
                  </h2>
                  <span>Sendbox</span>
                  <div className='icons'>
                    <div className='icon-rate'>
                      <AiTwotoneStar />
                      <span>4.9</span>
                    </div>
                    <div className='icon-download'>

                      <AiOutlineDownload />
                      <span>2.2M</span>
                    </div>
                  </div>
                </Col>
                <Col>
                <AiOutlineDownload />

                </Col>
              </Row>
            </div>
            <div className='box'>
              <Row>
                <Col>
                  <img src={img2} />

                </Col>
                <Col>
                  <h2>
                    CS-GO
                  </h2>
                  <span>Legendary</span>
                  <div className='icons'>
                    <div className='icon-rate'>
                      <AiTwotoneStar />
                      <span>4.9</span>
                    </div>
                    <div className='icon-download'>

                      <AiOutlineDownload />
                      <span>2.2M</span>
                    </div>
                  </div>
                </Col>
                <Col>
                <AiOutlineDownload />

                </Col>
              </Row>
            </div>
            <div className='box'>
              <Row>
                <Col>
                  <img src={img3} />

                </Col>
                <Col>
                  <h2>
                    PugG
                  </h2>
                  <span>Battle Royale
</span>
                  <div className='icons'>
                    <div className='icon-rate'>
                      <AiTwotoneStar />
                      <span>4.9</span>
                    </div>
                    <div className='icon-download'>

                      <AiOutlineDownload />
                      <span>2.2M</span>
                    </div>
                  </div>
                </Col>
                <Col>
                <AiOutlineDownload />

                </Col>
              </Row>
            </div>
            <Link to="/profile" className='games-link'>View All Games</Link>
          </div>
          </Col>
        </Row>
        <div className='live-stream'>
      <MainHead title="How To Start Your " span="Live Stream"/>
        <Row>
          <Col lg={'4'} md={'6'} sm={'12'}>
            <div className='box'>
              <img src={LiveStreamImg1}/>
              <h2>Go To Your Profile</h2>
              <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.

</p>
            </div>
          </Col>
          <Col lg={'4'} md={'6'} sm={'12'}>
            <div className='box'>
              <img src={LiveStreamImg2}/>
              <h2>Live Stream Button
</h2>
              <p>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com



</p>
            </div>
          </Col>
          <Col lg={'4'} md={'6'} sm={'12'}>
            <div className='box'>
              <img src={LiveStreamImg3}/>
              <h2>You Are Live
</h2>
              <p>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.



</p>
            </div>
          </Col>
        </Row>
        <button className='btn btn-pink'>
          <Link to="/profile">Go To Profile</Link>
        </button>
    </div>
    <div className='most-popular-live-stream'>
      <MainHead title="Most Popular" span="Live Stream"/>
      <Row>
       {
        gameData.map(({id,img,avatar})=>{
          return(
            <Col lg={'3'} md={'6'} sm={'12'}>
          <GameCard Img={img} Avatar={avatar} Id={id}/>
          </Col>
          )
        })
       }
      </Row>
    </div>
      </Container>
    </div>
   
    </>
  )
}
