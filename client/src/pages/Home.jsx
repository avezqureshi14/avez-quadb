import React, { useState } from "react";
import Hero from "../components/Hero";
import Shows from "../components/Shows";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Hero />
      <div className="flex m-3 mt-10" id="startups">
        <div>
          <div
            className="flex justify-center text-center m-9"

          >
            <NavLink to="/search">

            <input
              type="text"
              placeholder="Search for shows..."
              className="p-2 m-2 border border-gray-300 rounded"
              style={{ width: "100vh" }}
              />
              </NavLink>
          </div>
          <Shows />
        </div>
      </div>
    </>
  );
};

export default Home;
