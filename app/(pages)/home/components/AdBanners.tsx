"use client";

// import Swiper core and required modules
// import {
//   Navigation,
//   Pagination,
//   EffectFade,
//   EffectCoverflow,
//   Mousewheel,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/bundle";
// import Image from "next/image";
// const AdBanners = () => {
//   return (
//     <Swiper
//       loop={true}
//       slidesPerView={"auto"}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       modules={[Pagination, Autoplay]}
//       spaceBetween={50}
//       pagination={{ clickable: true, dynamicBullets: true }}
//       className="mySwiper"
//     >
//       {[...Array(5)].map((key) => (
//         <SwiperSlide key={key}>
//           <Image
//             src={"/assets/asset-3.jpg"}
//             width={500}
//             height={250}
//             alt="ad-banner"
//             className="w-full md:h-[85%]"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default AdBanners;

import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const AdBanners = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="mx-auto">
        {[...Array(5)].map((key) => (
          <>
            <CarouselItem key={key} className="block md:hidden pl-0">
              <Image
                src={"/assets/jumbo-ad1.jpg"}
                width={450}
                height={250}
                alt="ad-banner"
                className="w-full p-8 mx-auto"
              />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>

      <CarouselContent className="mx-auto">
        {[...Array(5)].map((key) => (
          <>
            <CarouselItem key={key} className="md:block hidden pl-0">
              <Image
                src={"/assets/desktop-ad.png"}
                width={1300}
                height={700}
                alt="ad-banner"
                className="w-full p-8 mx-auto"
              />
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AdBanners;
