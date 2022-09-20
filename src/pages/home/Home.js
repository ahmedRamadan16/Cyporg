import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import MainHead from '../../components/MainHead';

import Library from "../../components/Library";
export default function Home() {
    let data=[
        {
            id:1,
            img:require('../../images/popular-01.jpg'),
            name:'Fortnite',
            type:'Sandbox',
            download:'23M',
            rate:4.8
        },
        {
            id:2,
            img:require('../../images/popular-02.jpg'),
            name:'Pubg',
            type:'BattleS',
            download:'23M',
            rate:4.8
        },
        {
            id:3,
            img:require('../../images/popular-03.jpg'),
            name:'Dota2',
            type:'Steam-x',
            download:'23M',
            rate:4.8

        },
        {
            id:4,
            img:require('../../images/popular-04.jpg'),
            name:'Cs-Go',
            type:'Legendary',
            download:'23M',
            rate:4.8
        },
        {
            id:5,
            img:require('../../images/popular-05.jpg'),
            name:'Mini Craft',
            type:'Legendary',
            download:'23M',
            rate:4.8
        },
        {
            id:6,
            img:require('../../images/popular-06.jpg'),
            name:'Eagles Fly',
            type:'Matrix Games',
            download:'23M',
            rate:4.8
        },
        {
            id:7,
            img:require('../../images/popular-07.jpg'),
            name:'Warface',
            type:'Max 3D',
            download:'23M',
            rate:4.8
        },
        {
            id:8,
            img:require('../../images/popular-08.jpg'),
            name:'Warcraft',
            type:'Lefend',
            download:'23M',
            rate:4.8
        }
    ]
  return (
    <div className="home-content">
        <Container>
            <Row>
                <Col>
                    <div className="welecom-message">
                      <div className="info">
                      <h4>Welcome To Cyborg</h4>
                        <h1><span>Browse</span>Our Popular Games Here</h1>
                        <button className="btn btn-pink">
                            <Link to="/browse">Browse Now</Link>
                        </button>
                      </div>
                    </div>
                    <div className="most-populer">
                        <MainHead title="Most Popular" span="Right Now"/>
                          <div className="popular-content">
                          {
                                data.map(({id,img,name,type,download,rate})=>{
                                    return (
                                        <Card name={name}  Img={img} type={type} download={download} rate={rate}          />
                                    )
                                })
                            }
                          </div>
                            <button  className="btn btn-pink">
                                <Link to="/browse">Discover Popular</Link>
                            </button>
                    </div>
                  <Library />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
