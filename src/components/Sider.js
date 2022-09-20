import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import {AiTwotoneStar} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai';
import FeaturedImg1 from '../images/featured-01.jpg';
import FeaturedImg2 from '../images/featured-02.jpg';
import FeaturedImg3 from '../images/featured-03.jpg';
import Card from '../components/Card'
import MainHead from '../components/MainHead'
import { useState } from "react";
export default function Sider() {
  const [slideperView, SetSlidePerView] = useState(3);

    window.addEventListener('resize',(e)=>{
      if(window.innerWidth <= 800)
      {
        SetSlidePerView(1)
      }else{
        SetSlidePerView(3)

      }
    })

  return (
    <div className="slide-component">
    <div className='head'>
    <MainHead title="Featured" span="Games" />
     
    </div>
    <div className='slider-wrapper'>
      <Swiper className='slider-content mySwiper' slidesPerView={slideperView}
spaceBetween={30}
slidesPerGroup={1}
loop={true}
loopFillGroupWithBlank={true}

navigation={true}
modules={[ Navigation]} >

        <SwiperSlide className='slider ' >
         <Card  Img={FeaturedImg1} name="CS-GO" rate="4.8" type="249K Download" download="23m"/>
        

        </SwiperSlide>
        <SwiperSlide className='slider'>
        <Card  Img={FeaturedImg2} name="Gamezer" rate="4.8" type="249K Download" download="23m"/>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <Card  Img={FeaturedImg3} name="Island Rusty" rate="4.8" type="249K Download" download="23m"/>

        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}
