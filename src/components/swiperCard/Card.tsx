import { useNavigate } from "react-router-dom";
import React from 'react'
interface Book {
  id?: string;
    title?: string;
    categories?: string[];
      thumbnail:string
      amount?: number|string;
      details?:string;
      author?:string;
  };
const Card: React.FC<Book> =({thumbnail,title,amount,id,details,author})=> {

  const history = useNavigate();
  const handleClick=()=>{

      history(`/detail/${id}`);
     }
  return (
    <div
    className="grid grid-cols-1 sm:w-[204px] sm:h-[298px] w-[206px] h-[300px] gap-4 border-solid p-4 w-full rounded-md card-container"
    onClick={handleClick}
  >
    <div className="relative group">
      <div className="bg-[#ECEEF2] sm:w-[204px] sm:h-[298px] w-[206px] h-[300px]  rounded-md">
        <img
          className="sm:w-[204px] sm:h-[298px] w-[206px] h-[300px] rounded-md"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 sm:w-[204px] sm:h-[298px] p-3 w-[206px] h-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-80 rounded-md">
      <p className=" font-semibold italic text-[22px] text-wrap text-[white] sm:mt-2 mt-0"     style={{fontFamily:"Hanken Grotesk" }}>{title}</p>
      <p className=" font-semibold  text-[16px] text-wrap text-[white] mt-2 mx-auto sm:mx-0"     style={{fontFamily:"Hanken Grotesk" }}>{author}</p>
      <p className=" font-bold  text-[22px] text-wrap text-[white] sm:mx-0 mx-auto"     style={{fontFamily:"Hanken Grotesk" }}> {amount}</p>
      <p className=" font-bold  text-[22px] text-wrap text-[white] sm:mx-0 mx-auto"     style={{fontFamily:"Hanken Grotesk" }}> {details}</p>
   
      </div>
    </div>
  
  </div>
);
};


export default Card
