import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonials.css';


function TestimonialsCarousel() {
  const slider = React.useRef(null);

  const handlePrevClick = () => {
    slider?.current?.slickPrev();
  };

  const handleNextClick = () => {
    slider?.current?.slickNext();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div>
        <ul style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ listStyle: "none", margin: "0 5px" }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="testimonials">
      <div className="intro-text">
        <img src="/images/arrowImage.png" alt="Arrow" className="arrow-down" />
        <p>This is an introduction to the testimonials or any other text you want to include.</p>
      </div>
      <div className='testimonials-container'>
        <button className="custom-prev-button" onClick={handlePrevClick}>&lt;</button>
        
        <Slider ref={slider} {...settings} className='testimonials-carousel'>
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
            <h3>Packing is the worst thing about going on holiday...<br></br>so this app is a godsend!</h3>
            <p>PRIYA, Crewe</p>
          </div>
          <div className='testimonial-slide'>
            <h3>This app has meant I have one less thing to worry about... <br></br>10/10</h3>
            <p>WINSTON, Los Angeles</p>
          </div>
        </Slider>

        <button className="custom-next-button" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;