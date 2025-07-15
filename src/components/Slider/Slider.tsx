import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./styles.css";


const Slider = ({ section, image, style }: { section?: string; image: string[]; style: any }) => {
  return (
    <div className="slider-container">
      {section == "slider" ? (
        <div className="slider-text">
          <fieldset>
            <legend>AUTHENTIC PAN ASIAN </legend>
            <h4>Experience</h4>
          </fieldset>
        </div>
      ) : null}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        loop
      >
        {image.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
            className="hell"
              src={logo}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
              ...style}
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
