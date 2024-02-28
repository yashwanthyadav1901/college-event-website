import React from "react";
import Slider from "react-slick";
import img1 from "./assets/images/img_1.jpg";
import img2 from "./assets/images/img_2.jpg";
import img3 from "./assets/images/img_3.jpg";
import img4 from "./assets/images/img_7.jpg";
import img5 from "./assets/images/img_5.jpg";
import img6 from "./assets/images/img_6.jpg";
import "./Carousel.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-section">
      <div className="carousel-heading-container">
        <h2 className="carousel-heading">past year glimpses</h2>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="carouselimage">
              <img src={img1} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="carouselimage">
              <img src={img2} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="carouselimage">
              <img src={img3} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="carousel-image-container">
              <img src={img4} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="carousel-image-container">
              <img src={img5} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="carousel-image-container">
              <img src={img6} alt="" width={500} className="carousel-image" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
