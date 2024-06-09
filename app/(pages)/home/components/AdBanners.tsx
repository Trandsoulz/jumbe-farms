"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  Mousewheel,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
const AdBanners = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="mySwiper"
    >
      {[...Array(5)].map((key) => (
        <SwiperSlide key={key}>
          <Image
            key={key}
            src={"/assets/asset-3.jpg"}
            width={500}
            height={500}
            alt="ad-banner"
            className="object-cover w-[250px] md:w-[500px] rounded md:h-[60vh]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdBanners;
