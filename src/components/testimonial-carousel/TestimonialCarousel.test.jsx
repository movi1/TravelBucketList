import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TestimonialCarousel from "./testimonial-carousel";


// npm run test

describe("Carousel", () => {
  beforeEach(() => {
    render(<TestimonialCarousel />);
  });

  // Test that the 'testimonials-carousel' renders:
  it("should render the carousel component", () => {
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  // Test that the 'testimonials-tagline' renders:
  it("should render tagline", () => {
    const tagline = screen.getByText("See what our users have to say!");
    expect(tagline).toBeInTheDocument();
  });

  // Test that the "Back to Top" element clicks and scrolls up to top:
  it("should scroll to the top when 'Back to Top' is clicked", () => {
    window.scrollTo = jest.fn();
    const backToTop = screen.getByText("Back to Top");
    fireEvent.click(backToTop);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
  
});
