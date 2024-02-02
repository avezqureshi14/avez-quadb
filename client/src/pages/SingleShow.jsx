import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleSection1 from "../components/SingleSection1";
import CTA from "../components/CTA";
import Loader from "../components/Loader";

const SingleShow = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(data);


  if (!data) {
    return (<Loader />)
  }

  return (
    <>
      <div className="single-show">
        <div className="mt-9">
          <SingleSection1 data={data} />
        </div>
        <div className="cta m-12">
          <CTA data={data} />
        </div>
      </div>
    </>
  );
};

export default SingleShow;
