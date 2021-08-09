import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Testimonials.css";
import testimonial1 from "./testimonial1.jpeg";
import testimonial2 from "./testimonial2.jpeg";
import testimonial3 from "./testimonial3.jpeg";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Testimonials() {
  return (
    <div className="container">
      <div className="title_testwrapper"></div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="q">
          <div className="flex_testimonial">
            <img className="testimonial__img" src={testimonial1} />
            <h3 className="testimonial__name">Emma Johnson</h3>
            <p className="testimonial__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="q">
          <div className="flex_testimonial">
            <img className="testimonial__img" src={testimonial2} />
            <h3 className="testimonial__name">John Doe</h3>
            <p className="testimonial__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="q">
          <div className="flex_testimonial">
            <img className="testimonial__img" src={testimonial3} />
            <h3 className="testimonial__name">Zack Smith</h3>
            <p className="testimonial__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Testimonials;
