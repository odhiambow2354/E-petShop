import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import ExplorePet from "../../components/ExplorePet/ExplorePet";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExplorePet category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
