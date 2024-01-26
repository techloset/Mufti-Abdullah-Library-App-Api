import arrowLeft from '../../assets/icons/arrow-left.png';
import arrowRight from '../../assets/icons/arrow-right-white.png';

const Swiper: React.FC = () => {
  return (
    <div className='bg-[#183B56] h-[548px]  mt-7 md:mt-24 md:px-20'>
      <div className='flex sm:justify-between justify-center pt-12 md:pt-14'>
        <div className='text text-white text-3xl font-bold italic'>Related Books</div>
        <div className='buttons sm:flex hidden '>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowLeft} alt='Left Arrow' />
          </button>
          <button className='h-14  w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowRight} alt='Right Arrow' />
          </button>
        </div>
      </div>
      <div className='slider mt-10 md:mt-14 xl:overflow-x-hidden overflow-x-auto whitespace-nowrap sm:mx-auto mx-6 no-scrollbar'>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
      </div>
      <div className='sm:hidden flex justify-center pt-12 md:pt-14'>
        <div className='flex mb-3'>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowLeft} alt='Left Arrow' />
          </button>
          <button className='h-14  w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowRight} alt='Right Arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;


