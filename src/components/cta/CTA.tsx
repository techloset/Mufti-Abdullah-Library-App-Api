import env from "../../assets/icons/envelope.png";
export default function App() {
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 rounded  flex-col md:flex-row bg-[#1565D8] sm:p-16 p-6 sm:h-[236px] h-[306px] border-0">
        <div className="text-[black] md:mb-0">
          <p className="font-bold sm:leading-[48px] leading-[36px] text-wrap sm:text-[36px] text-[28px] lg:w-[423px] lg:h-[96px] md:w-[300px] md:h-[96px] sm:h-[108px] sm:w-[280] italic text-[#FFFFFF]" style={{fontFamily:"Hanken Grotesk"}}>Be the First to know <br /> Our Promo before others!</p>
        </div>
        <div className="relative flex flex-col sm:flex-row w-full mt-8">
          <div className="relative w-full ">
            <input
              type="text "
              placeholder="Enter Email"
              className=" p-3 pl-10 border border-gray-300 rounded mb-2 sm:mb-0 w-full md:pb-3 pb-20"
            />
            <img
              src={env}
              alt=""
              className="absolute left-3 md:top-1/4 top-6 transform -translate-y-1/5"
            />
          <button className="bg-[#FAAD13] w-[95%] ms-2 md:w-auto absolute text-white p-2 mt-1.5 me-1 rounded sm:absolute md:right-0 md:left-auto left-0 top-16 md:top-0 sm:transform-none">
            Register
          </button>
          </div>
        </div>
      </div>
    </>
  );
}