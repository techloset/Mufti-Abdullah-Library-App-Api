import { useNavigate } from "react-router-dom";
import { BooksDetails } from "../../constants/Types";
import HEART from "../../assets/svgs/heart.svg";
const MonthlyCard: React.FC<BooksDetails> = ({
  thumbnail,
  title,
  amount,
  id,
  author,
}) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/detail/${id}`);
  };
  return (
    <div
      className="relative  w-[270px] h-[336px] sm:w-[358px] sm:h-[260px] rounded-md md:flex md:flex-row border-2 border-border p-2"
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
          <p className="font-semibold italic text-[20px] sm:text-[22px] text-wrap text-primary mb-2 font-hanken">
            {title}
          </p>
          <p className="font-semibold text-[14px] sm:text-[16px] text-wrap text-primary font-hanken">
            {author}
          </p>
          <p className="font-bold text-[16px] sm:text-[20px] text-wrap text-secondary mt-2 font-hanken">
            {amount}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-3">
          <button className="rounded-full bg-primary font-semibold w-[111px] md:w-[70px] lg:w-[101px] text-center p-2 text-[white] sm:text-[14px] md:text-[10px] lg:text-[14px]">
            Buy Now
          </button>
          <img src={HEART} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
