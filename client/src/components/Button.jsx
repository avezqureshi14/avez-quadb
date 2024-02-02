import React from "react";

const Button = ({ styles,data }) => (
  
  <button type="button" style={{background:"#fff"}} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary  rounded-[10px] outline-none ${styles}`}>
  <a target="_blank" href={data?.url}>Watch Now</a>  
  </button>
);

export default Button;
