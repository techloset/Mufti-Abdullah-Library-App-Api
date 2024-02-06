import { useNavigate } from "react-router-dom";

interface Book {
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  amount: number | string;
  details?: string;
  author?: string;
}
const MonthlyCard: React.FC<Book> = ({
  thumbnail,
  title,
  amount,
  id,
  details,
  author,
}) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/detail/${id}`);
  };
  return (
    <div
      className="relative  w-[270px] h-[336px] sm:w-[358px] sm:h-[260px] rounded-md md:flex md:flex-row border-2 p-2"
      onClick={handleClick}
    >
      <div className="absolute md:static  left-20 top-[-30px] sm:top-[0px] md:h-auto md:w-auto md:flex-1">
        <img
          className="w-[92px]  sm:w-[160px] sm:h-[238px] h-[137px]   rounded-md"
          src={thumbnail}
          alt="picture"
        />
      </div>
      <div className="mt-[132px] md:mt-0 md:flex-1 p-4 flex flex-col justify-around text-center md:text-left">
        <div>
          <p className="font-semibold italic text-[22px] text-wrap text-[#183B56] mb-2 font-hanken">
            {title}
          </p>
          <p className="font-semibold  text-[16px] text-wrap text-[#183B56] font-hanken">
            {author}
          </p>
          <p className="font-bold  text-[22px] text-wrap text-[#1565D8] mt-2 font-hanken">
            {amount}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-3">
          <button className="rounded-full bg-[#183B56] font-semibold sm:w-[101px] md:w-[70px] lg:w-[101px] text-center p-2 text-[white] sm:text-[14px] md:text-[10px] lg:text-[14px]">
            Buy Now
          </button>
          <button className=" rounded-md">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79444 15.7841L16.5972 8.75993C18.5765 6.71737 18.4604 3.33534 16.2526 1.45095C14.3261 -0.190812 11.4609 0.10448 9.69251 1.9291L8.99992 2.64276L8.30734 1.9291C6.54249 0.10448 3.67376 -0.190812 1.74721 1.45095C-0.460588 3.33534 -0.576631 6.71737 1.39915 8.75993L8.20187 15.7841C8.64132 16.2377 9.35499 16.2377 9.79444 15.7841Z"
                fill="#959EAD"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
