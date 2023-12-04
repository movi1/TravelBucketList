import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonials.css';

function TestimonialsCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="testimonials-container">
      <Slider {...settings} className='testimonials-carousel'>
        <div className='testimonial-slide'>
          <h3>Wow! This app has freed up so much brain space! <br></br>It has relieved me of so much stress and now I can't wait for my holiday!</h3>
          <p>JOAN, Yorkshire</p>
        </div>
        <div className='testimonial-slide'>
          <h3>I love knowing my packing list is sorted, <br></br>and I don't have to worry about forgetting anything!</h3>
          <p>DAVID, Cardiff</p>
        </div>
        <div className='testimonial-slide'>
          <h3>I get travel anxiety, so knowing I have everything I need for my trip is a load off my mind. <br></br>Love this app!</h3>
          <p>MEREDITH, Seattle</p>
        </div>
        <div className='testimonial-slide'>
          <h3>The worst thing about going on holiday is packing...<br></br>this app is a godsend!</h3>
          <p>PRIYA, Crewe</p>
        </div>
        <div className='testimonial-slide'>
          <h3>This app has meant I have one less thing to worry about... <br></br>10/10</h3>
          <p>WINSTON, Los Angeles</p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;