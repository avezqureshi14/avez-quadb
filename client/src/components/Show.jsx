import React, { useState } from "react";
import CustomTag from "./CustomeTag";
import {NavLink} from "react-router-dom"
import img from "../assets/hero-home.webp"
const Show = ({ item }) => {
  console.log(item);
  const [showPopup, setShowPopup] = useState(false);
  const companyName = item.show.name; 
  const rating = item.show.rating.average; 
  const description = item.show.summary;
  const genres = item.show.genres;
  const image = item?.show?.image?.original;
  console.log(typeof image)
  const isMultiWord = companyName?.split(" ").length > 2;
  const handleGoogleSearch = () => {
    const query = `${companyName} Show`;
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(searchURL, "_blank");
  };

  return (
    <div className="show relative bg-customColor text-white m-2 shadow-lg rounded-lg p-6 w-80">
      <div className="flex items-center mb-4">
        <div className="show-image">
          <img src={image?.length === null ? img : image} alt="" />
        </div>
      </div>
      <div className="flex items-center mb-4">
        <h2
          className={`text-xl font-bold ${
            isMultiWord && companyName.length > 15 ? "line-clamp-2" : ""
          }`}
        >
          {companyName}
        </h2>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center ml-0">
          <div className="flex align-baseline justify-evenly">
            {genres?.slice(0, 3).map((item) => {
              return <CustomTag text={item} color={"red"} />;
            })}
          </div>
          <div className="rating mr-0">
            <i style={{ color: "yellow" }} class="bx bxs-star-half"></i>{" "}
            <span style={{ marginLeft: "5px" }}>
              {rating === null ? 0 : rating}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm mb-4 line-clamp-2">{description}</p>

      <button
        className="bg-gray-200 ml-3 hover:bg-gray-300 text-gray-800 font-bold py-2 pb-1 pr-2 px-2 rounded-full shadow-md"
        onClick={handleGoogleSearch}
      >
        <i style={{ fontSize: "23px" }} className="bx bxl-google"></i>
      </button>
      <NavLink to={`show/${item.show.id}`} >
      <button className="bg-gray-200 ml-3 hover:bg-gray-300 text-gray-800 font-bold py-3 pb-2 pr-3 px-3 rounded-full shadow-md">
        <div className="viewBtn flex justify-center align-baseline">
          <i
            style={{ fontSize: "20px", marginRight: "5px" }}
            className="bx bx-show"
          ></i>
          <span style={{ fontSize: "12px" }}>View</span>
        </div>
      </button>
      </NavLink>
    </div>
  );
};

export default Show;
