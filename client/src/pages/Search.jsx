import React, { useEffect, useState } from "react";
import Show from "../components/Show";
import axios from "axios";
import Loader from "../components/Loader";

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchTerm
          ? `https://api.tvmaze.com/search/shows?q=${searchTerm}`
          : "https://api.tvmaze.com/search/shows?q=job";

        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div style={{marginTop:"7rem"}} className="search flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for shows..."
          className="p-2 m-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex justify-center shows">
        {data?.map((item, key) => (
          <Show key={key} item={item} />
        ))}
      </div>
    </>
  );
};

export default Search;
