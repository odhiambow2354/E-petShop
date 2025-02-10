import React from "react";
import "./ExplorePet.css";
import { pet_list } from "../../assets/assets";

function ExplorePet({ category, setCategory }) {
  return (
    <div className="explore-pet" id="explore-pet">
      <h1>Explore Our Pets</h1>
      <p className="explore-pet-text">
        Choose from a diverse pet featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dinning experience, one delicious
        meal at a time.
      </p>
      <div className="explore-pet-list">
        {pet_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.pet_name ? "All" : item.pet_name
                )
              }
              key={index}
              className="explore-pet-list-item"
            >
              <img
                className={category === item.pet_name ? "active" : ""}
                src={item.pet_image}
                alt=""
              />
              <p>{item.pet_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExplorePet;
