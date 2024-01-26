import PieChart from '../../assets/icons/iconspace_Presentation Chart Up.png';
import Diamond from '../../assets/icons/iconspace_Diamond.png';
import Book from '../../assets/icons/iconspace_Book_3.png';
import Group from '../../assets/icons/iconspace_Group.png';
import Arrow from '../../assets/icons/arrow-right.png';


const Category = () => {
  return (
    <div className="flex flex-wrap justify-center items-center relative">
      <div className=" w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px] bg-slate-300 rounded-lg flex flex-col justify-center items-center text-center">
          <img src={PieChart} alt="" className="mx-auto h-16 w-16" />
          <p className='font-bold mt-4 sm:mt-2 md:mt-10'>Business & Finance</p>
          <p className='mt-1 sm:mt-1 md:mt-3'>Books about Business World</p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px] bg-slate-300 rounded-lg flex flex-col justify-center items-center text-center">
          <img src={Diamond} alt="" className="mx-auto h-16 w-16" />
          <p className='font-bold mt-4 sm:mt-2 md:mt-10'>Self Improvement</p>
          <p className='mt-1 sm:mt-1 md:mt-3'>Books for Motivate Yourself</p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px] bg-slate-300 rounded-lg flex flex-col justify-center items-center text-center">
          <img src={Book} alt="" className="mx-auto h-16 w-16" />
          <p className='font-bold mt-4 sm:mt-2 md:mt-10'>Novel Telenovela</p>
          <p className='mt-1 sm:mt-1 md:mt-3'>Books about Great Story</p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 p-2 flex justify-center items-center">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px] bg-slate-300 rounded-lg flex flex-col justify-center items-center text-center">
          <img src={Group} alt="" className="mx-auto h-16 w-16" />
          <p className='font-bold mt-4 sm:mt-2 md:mt-10'>Skill in Future</p>
          <p className='mt-1 sm:mt-1 md:mt-3'>Books for Self Preparation</p>
        </div>
      </div>
      <button className=' shadow-lg border rounded-full bg-slate-200 h-14 w-14 flex justify-center items-center lg:absolute lg:right-0 '><img src={Arrow} alt="arrow" /></button>
    </div>
  );
};

export default Category;

