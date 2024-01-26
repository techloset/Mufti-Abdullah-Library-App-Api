import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks, selectAllSearch } from "../../redux/SearchSlice";
import { RootState } from "../../redux/Store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import SliderComponent from "../../components/swiper/Swiper";



interface Book {
  id?: string;
  title: string;
  categories?: string[];
  thumbnail: string;
  amount: number;
  description:string;
  author?:[];
}

function Detail() {

  const [isLoading, setIsLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState<any>({}); 
  const { id } = useParams();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const searches = useSelector((state: RootState) => state.search.searches) || [];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (id) {
          await dispatch(searchBooks(id));
          const searchResult = searches.find((search) => search.id === id);
          setBookDetails(searchResult);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
  
    fetchData(); 
  }, [dispatch, id, searches]);
  
 

  console.log("bookDetails", bookDetails);

  return (
<>
{isLoading?(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </div>
      </div>
):(


<>

      <div className="mx-aut0 sm:px-6  mx-6 ">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between mx-4">
          <div className="md:flex-1 px-4 text-center md:text-left sm:ms-2 ms-0 mt-6 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold italic leading-[60px] text-[#183B56] mb-5">
              <span className="text-[#FAAD13] ">Design Theory:</span>
              <br />
{bookDetails?.title}
            </h2>
            <p className="text-base md:text-lg mb-4 font-semibold text-[#183B56]">
             {bookDetails?.author?.join()}
            </p>
            <div>
              <p className="text-[#5A7184] text-sm md:text-base mt-7">
              {bookDetails?.description?.slice(0,400)+".."}             </p>
            </div>
            <button className="w-[228px] h-[58px] text-white bg-[#1565D8] border rounded-md mt-7">
              See More On Google
            </button>
          </div>
          <div className="md:flex-1 flex justify-center md:justify-center items-center mt-4 md:mt-6">
            <div className="md:w-[488px] md:h-[580px] h-[333px] w-[280px] rounded-lg bg-gray-300 mx-auto md:mx-0">
              <div className='w-full h-full flex justify-center items-center'>
                <img
                  className="w-36 h-[215px] md:w-[250px] md:h-[375px] object-cover"
                  src={bookDetails?.thumbnail}
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>







      
<SliderComponent/></>
)}

</>
  );
}

export default Detail;
