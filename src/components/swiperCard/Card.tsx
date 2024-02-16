import { useNavigate } from "react-router-dom";
import React from "react";
import { BooksDetails } from "../../constants/Types";

const Card: React.FC<BooksDetails> = ({
  thumbnail,
  title,
  amount,
  id,
  description,
  author,
}) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/detail/${id}`);
  };
  return (
    <div
      className="grid grid-cols-1 sm:w-[204px] sm:h-[298px] w-[206px] h-[300px] gap-4 border-solid p-4 rounded-md"
      onClick={handleClick}
    >
      <div className="relative group">
        <div className="bg-border sm:w-[204px] sm:h-[298px] w-[206px] h-[300px]  rounded-md">
          <img
            className="sm:w-[204px] sm:h-[298px] w-[206px] h-[300px] rounded-md"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 sm:w-[204px] sm:h-[298px] p-3 w-[206px] h-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-80 rounded-md">
          <p className=" font-semibold italic text-[22px] text-wrap text-white sm:mt-2 mt-0 font-hanken">
            {title}
          </p>
          <p className=" font-semibold  text-[16px] text-wrap text-[white] mt-2 mx-auto sm:mx-0 font-hanken">
            {author}
          </p>
          <p className=" font-bold  text-[22px] text-wrap text-[white] sm:mx-0 mx-auto font-hanken">
            {" "}
            {amount}
          </p>
          <p className=" font-bold  text-[22px] text-wrap text-[white] sm:mx-0 mx-auto font-hanken">
            {" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
