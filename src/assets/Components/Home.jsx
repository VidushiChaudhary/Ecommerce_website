import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import Home1 from '../Images/Home1.jpg';
import Home2 from '../Images/Home2.jpg';
import Home3 from '../Images/Home3.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets & above
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div id="hero" className="w-full bg-gray-100">
      <div className=" w-full max-w-6xl mx-auto px-4 py-10">
        <Slider {...settings}>
          {[Home1, Home2, Home3].map((image, index) => (
            <div key={index} data-aos="fade-up">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80vh] object-cover  shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
