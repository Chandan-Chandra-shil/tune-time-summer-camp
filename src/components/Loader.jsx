import React from 'react';
import {  DotLoader } from "react-spinners";

const Loader = () => {
  return (
      <div
      className="
      h-[60vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <DotLoader size={100} color="orange" />
    </div>
    
  );
};

export default Loader;