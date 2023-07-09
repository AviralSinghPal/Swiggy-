// import SearchFunctionlity from "../utils/SearchFunctionlity";
import RestuarantCard from "./RestuarantCard";
// import { restaurant_list } from "./config";
import {useEffect, useState} from "react";
import React from "react";
import Shimmer from "./ShimmerUI";
import { restaurant_list } from "./config";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((res) => {
    console.log(res.data.name);
    return res.data.name.toLowerCase().includes(searchText.toLowerCase());
  });

  console.log(searchText);
  console.log(restaurants);
  console.log(filteredData);

  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant ,setRestaurants] = useState(restaurant_list)
  // const srchTxt="asdas"
  console.log("render");
  useEffect(()=>{
    console.log("getting restuarrant from swiggy api");
    getRestaurants();
  },[])


  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67616&lng=77.502442&page_type=DESKTOP_WEB_LISTING");
    const json  = await data.json();
    console.log(json);
    setRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }

  const handleSearch = () => {
    const data = filterData(searchText, restaurant);
    console.log("data: " + data);
    setRestaurants(data);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  //if restuarants aren't present hen load shimmer UI else load body

  return (!restaurant)?<Shimmer />: (
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
          onKeyPress={handleKeyPress}
        />
        <button
          className="search-btn"
          onClick={handleSearch}
          
        >
          Search
        </button>
      </div>
      <div  className="res-cards">
        {restaurant.map((res) => {
          return <RestuarantCard key={res.data?.id} restaurant={res} />;
        })}
      </div>
    </>
  );
};

export default Body;
