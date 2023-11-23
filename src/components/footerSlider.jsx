import Slider from "react-slick";
import { v4 as uuid } from "uuid";

export default function FooterSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  };

  const footerSlideText = [
    "Welcome to jeddah national hospital",
    "Welcome to jeddah national hospital",
  ];

  return (
    <Slider {...settings} className="p-2">
      {footerSlideText.map((text) => (
        <div key={uuid} className=" max-w-fit ">
          <h3
            className="
            font-bold text-base sm:2xl md:text-3xl
            text-slate-800 uppercase"
          >
            {text}
          </h3>
        </div>
      ))}
    </Slider>
  );
}
