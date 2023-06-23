// import SearchFunctionlity from "../utils/SearchFunctionlity";
import RestuarantCard from "./RestuarantCard";
import { restaurant_list } from "./config";
import {useEffect, useState} from "react";
import React from "react";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((res) => {
    console.log(res.data.name);
    return res.data.name.toLowerCase().includes(searchText.toLowerCase());
  });

  console.log(searchText);
  console.log(restaurants);
  console.log(filteredData);

  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant ,setRestaurants] = useState(restaurant_list)
  // const srchTxt="asdas"
  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}

        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurant);
            console.log("data:" +data);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-cards">
        {restaurant.map((res) => {
          return <RestuarantCard restaurant={res} />;
        })}
      </div>
    </>
  );
};

export default Body;
