import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [
    {
      name: "Mohammed Ahmed",
      position: "CEO",
      desc: "The CEO is the highest-ranking employee within any organization; they report to the Board of Directors. Core responsibilities include setting and executing the organization's strategy, allocating capital, and building and overseeing the executive team",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Ahmed Mohammed",
      position: "CEO",
      desc: "The CEO is the highest-ranking employee within any organization; they report to the Board of Directors. Core responsibilities include setting and executing the organization's strategy, allocating capital, and building and overseeing the executive team",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Birhan Nega ",
      position: "CEO",
      desc: "The CEO is the highest-ranking employee within any organization; they report to the Board of Directors. Core responsibilities include setting and executing the organization's strategy, allocating capital, and building and overseeing the executive team",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Abera Getahun",
      position: "CEO",
      desc: "The CEO is the highest-ranking employee within any organization; they report to the Board of Directors. Core responsibilities include setting and executing the organization's strategy, allocating capital, and building and overseeing the executive team",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Mohammed Ahmed",
      position: "CTO",
      desc: "The CEO is the highest-ranking employee within any organization; they report to the Board of Directors. Core responsibilities include setting and executing the organization's strategy, allocating capital, and building and overseeing the executive team",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
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
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom key={index}>
              <div className="content-slider-main">
                <div className="content-slider">
                  <img
                    src={item.image}
                    alt="testimonial"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
