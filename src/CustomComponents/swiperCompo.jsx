import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import AppImages from "../Themes/AppImages";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function SwiperCom() {
  const history = useHistory();

  let data = [
    {
      image: AppImages.img1,
    },
    {
      image: AppImages.img,
    },
    {
      image: AppImages.img2,
    },
    {
      image: AppImages.img1,
    },
    {
      image: AppImages.img,
    },
    {
      image: AppImages.img2,
    },
  ];

  return (
    <>
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 1,
          modifier: 1,
          slideShadows: true,
        }}
        
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((x) => {
          return (
            <SwiperSlide>
              <img
                onClick={() => {
                  history.push("/descriptions");
                }}
                src={x.image}
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
