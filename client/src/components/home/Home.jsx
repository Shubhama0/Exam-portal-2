import React from "react"
 import "./home.css"
 import HomeCard from "./HomeCard";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide }  from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const m1="https://kurukshetraiasacademy.com/wp-content/uploads/2022/03/home-slide-banner-1-min.jpg" ;
const m2="https://www.selfstudys.com/uploads/images/uyNOgvYtoE9WL6w7vlKi.jpg"
const m3="https://d6pldk4490zsr.cloudfront.net/wp-content/uploads/2022/07/blog-banner-jee-exam-3.jpg"
const Home = () => {
  return (
    <>


<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={m1}></img>
        </SwiperSlide>
        <SwiperSlide><img src={m2}></img></SwiperSlide>
        
        <SwiperSlide><img src={m3}></img></SwiperSlide>

      </Swiper>



    
      <section className='recent padding'>
        <div className='container'>
          
          <HomeCard />
        </div>
      </section>

    </>
  )
}

export default Home;
