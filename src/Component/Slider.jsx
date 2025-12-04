import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Slider = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-[#0a1a33] via-[#0f2b4a] to-[#15395c]">

      {/* Title */}
      <h1 className="text-center font-extrabold my-8 text-5xl bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 text-transparent bg-clip-text drop-shadow-lg">
        Meet Our Lovely Animals
      </h1>

      {/* Slider Wrapper */}
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="rounded-xl p-3 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 shadow-xl border border-blue-700/40 backdrop-blur-xl">

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper rounded-xl overflow-hidden"
          >
            <SwiperSlide>
              <img
                className="w-full h-[600px] object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                src={img1}
                alt="slide 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[600px] object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                src={img2}
                alt="slide 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[600px] object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                src={img3}
                alt="slide 3"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[600px] object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                src={img4}
                alt="slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
