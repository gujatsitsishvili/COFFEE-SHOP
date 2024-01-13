import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=' h-[700px] mt-[95px] flex flex-col pb-4  items-center justify-between bg-cover    bg-[url("https://static.wixstatic.com/media/c837a6_92e0451a84214884a2f4efe4226d6c2f~mv2.jpg/v1/fill/w_1899,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_92e0451a84214884a2f4efe4226d6c2f~mv2.jpg")] '>
      <h1 className="text-white text-8xl ml-9 mb-28 ">
        FOR THE LOVE <br /> OF COFFEE
      </h1>
     <Link to="/ShopAll"> <button className="text-4xl mr-9 border-black border hover:bg-lime-700 transition duration-1000 hover:text-[#fff7d8]  font-semibold ml-9  w-[340px] h-[95px] bg-[#fff7d8]">Shop Blends</button></Link>
    </div>
  );
};

export default Banner;
