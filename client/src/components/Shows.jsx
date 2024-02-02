import React, { useEffect, useState } from "react";
import Show from "./Show";
import axios from "axios";
import Loader from "./Loader";
const Shows = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=job")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex justify-center shows">
        {data?.slice(0, 9).map((item, key) => {
          return (
            <>
              <Show item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shows;
