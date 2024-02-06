import { useNavigate } from "react-router-dom";
import React from "react";
interface Book {
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  amount: number | string;
  details?: string;
  author?: string;
}
const Card: React.FC<Book> = ({ thumbnail, title, amount, id, author }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/detail/${id}`);
  };
  return (
    <div
      className="grid grid-cols-2 gap-4 border-solid p-4 w-full  rounded-md border-border "
      onClick={handleClick}
    >
      <div className="bg-bgtertiary sm:w-[119px] sm:h-[177.5px] w-[95.5px] h-[142px] rounded-md">
        <img
          className="sm:w-[119px] sm:h-[177.5px] w-[95.5px] h-[142px] rounded-md"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="flex flex-col sm:gap-2 gap-0 mx-auto sm:w-[119px] sm:h-[177.5px] w-full h-[142px]">
        <p className=" font-semibold italic text-[22px] text-wrap text-primary sm:mt-2 mt-0 font-hanken">
          {title}
        </p>
        <p className=" font-semibold  text-[16px] text-wrap text-primary mt-2 mx-auto sm:mx-0 font-hanken">
          {author}
        </p>
        <p className=" font-bold  text-[22px] text-wrap text-secondary sm:mx-0 mx-auto font-hanken">
          {" "}
          {amount}
        </p>
        <div className="flex  mb-2 mx-auto sm:mx-0">
          <button className="rounded-full bg-primary font-semibold sm:w-[101px] md:w-[70px] lg:w-[101px] text-center p-2 text-[white] sm:text-[14px] md:text-[10px] lg:text-[14px]">
            Buy Now
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
