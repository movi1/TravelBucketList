import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial-carousel.css";

function TestimonialCarousel() {
  const testimonialsRef = useRef(null);
  const slider = useRef(null);

  // Event handlers for slider navigation:
  const handlePrevClick = () => {
    slider?.current?.slickPrev();
  };

  const handleNextClick = () => {
    slider?.current?.slickNext();
  };

  // Scroll to testimonials section on down arrow click:
  const handleDownArrowClick = () => {
    testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the top on back to top button click:
  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Settings for the testimonial slider:
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    // Customising default dots:
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

  // Testimonial section:
  return (
    <div className="testimonials" data-testid="carousel">
      <div className="testimonials-text">
        <p>TESTIMONIALS</p>
        <p className="testimonials-tagline" data-testid="tagline">
          See what our users have to say!
        </p>
        <img
          src="/images/arrowImage.png"
          alt="Arrow"
          className="down-arrow"
          onClick={handleDownArrowClick}
        />
      </div>

      <div ref={testimonialsRef} className="testimonials-container">
        <button className="custom-prev-button" onClick={handlePrevClick}>
          &lt;
        </button>

        <Slider ref={slider} {...settings} className="testimonials-carousel">
          <div className="testimonial-slide">
            <h3>
              Wow! This app has freed up so much brain space! <br></br>It has
              relieved me of so much stress and now I can't wait for my holiday!
            </h3>
            <p>JOAN, Yorkshire</p>
          </div>
          <div className="testimonial-slide">
            <h3>
              I love knowing my packing list is sorted, <br></br>and I don't
              have to worry about forgetting anything!
            </h3>
            <p>DAVID, Cardiff</p>
          </div>
          <div className="testimonial-slide">
            <h3>
              I get travel anxiety, so knowing I have everything I need for my
              trip is a load off my mind. <br></br>Love this app!
            </h3>
            <p>MEREDITH, Seattle</p>
          </div>
          <div className="testimonial-slide">
            <h3>
              Packing is the worst thing about going on holiday...<br></br>so
              this app is a godsend!
            </h3>
            <p>PRIYA, Crewe</p>
          </div>
          <div className="testimonial-slide">
            <h3>
              This app has meant I have one less thing to worry about...{" "}
              <br></br>10/10
            </h3>
            <p>WINSTON, Los Angeles</p>
          </div>
        </Slider>

        <button className="custom-next-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>

      <div className="back-to-top" onClick={handleBackToTopClick}>
        <p>Back to Top</p>
        <img src="/images/arrowImage.png" alt="Up-Arrow" className="up-arrow" />
      </div>
    </div>
  );
}

export default TestimonialCarousel;
