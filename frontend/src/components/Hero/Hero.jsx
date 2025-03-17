import React from "react";
import "./hero.css";

const Hero = () => {
  const scrollToFoodItems = () => {
    const foodSection = document.getElementById("explore-pet");
    if (foodSection) {
      foodSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Everything Your Pet Needs, All in One Place</h1>
        <h2 className="hero-tagline">Premium Food, Toys, and Care Essentials</h2>
        <p className="hero-description">
          Find high-quality pet food, comfy beds, fun toys, and essential care 
          products to keep your furry friends happy and healthy.
        </p>
        <button className="hero-btn" onClick={scrollToFoodItems}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

