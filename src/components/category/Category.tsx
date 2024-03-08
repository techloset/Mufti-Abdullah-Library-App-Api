import Arrow from "../../assets/icons/arrow-right.png";
import { categories } from "../../constants/Types";

const Category = () => {
  return (
    <div className="mx-auto w-11/12 border-t border-bgSecondry p-2 sm:p-4 relative">
      <div className="flex flex-wrap justify-center text-primary items-center relative">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-1/2 lg:w-1/4 pe-3 pt-2 sm:p-2 flex justify-center items-center"
          >
            <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px] bg-slate-300 rounded-lg border border-bgSecondry flex flex-col justify-center items-center text-center">
              <img
                src={category.imageSource}
                alt=""
                className="mx-auto h-16 w-16"
              />
              <p className="font-bold text-[16px] sm:text-[22px] italic mt-4 sm:mt-2 md:mt-10">
                {category.heading}
              </p>
              <p className="mt-1 sm:mt-1 md:mt-3 text-textHead">
                {category.subHeading}
              </p>
            </div>
          </div>
        ))}
        <button className=" shadow-lg border-white rounded-full bg-white h-14 w-14 flex justify-center items-center lg:absolute lg:left-full ">
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Category;
