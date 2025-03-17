import React, { useState } from "react";
import "./home.css";
import ExplorePet from "../../components/ExplorePet/ExplorePet";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Hero from "../../components/Hero/Hero";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <ExplorePet category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
