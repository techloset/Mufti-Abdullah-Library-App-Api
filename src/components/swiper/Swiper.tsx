// Slider.tsx
import React, { useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/icons/arrow-left.png";
import arrowR from "../../assets/icons/arrow-right-white.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { MostPopularBooks, selectAllBooks } from "../../redux/MostPopularSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Card from "../swiperCard/Card";



interface Books {
  id: string;
  amount: number|string;
  volumeInfo?: {
    title: string;
    authors: [];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
const images = [
  "https://placekitten.com/200/200", 
  "https://placekitten.com/201/201",
  "https://placekitten.com/202/202",
  "https://placekitten.com/203/203",
  "https://placekitten.com/204/204",
  "https://placekitten.com/205/205",
  "https://placekitten.com/205/205",
  "https://placekitten.com/205/206",
  "https://placekitten.com/205/207",
  "https://placekitten.com/205/208",
  "https://placekitten.com/205/205",
  "https://placekitten.com/205/209",
  "https://placekitten.com/205/205",
  "https://placekitten.com/205/205",
];

const SliderComponent: React.FC = () => {

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const books: Books[] = useSelector(selectAllBooks) as Books[];
  useEffect(() => {
    dispatch(MostPopularBooks());
  }, [dispatch]);

  const sliderRef = React.createRef<Slider>();

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Small Desktop
        settings: {
          slidesToShow:5,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1280, // Large Desktop
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (<>
    {/* <div className="w-[1200px]">
      <div className="flex justify-end mt-4">
        <button onClick={handleNext}>
          <img src={arrowR} alt="Previous" className="border-2 border-white p-3 rounded-full rotate-180 " />
            </button>
        <button onClick={handlePrev}>
          <img src={arrow}  alt="Forward " className="border-2 border-white p-3 rounded-full relative " />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-[226px] h-[326px] rounded-lg"
            />
          </div>
        ))}

      </Slider>
    </div> */}
    <br />
    <br />
    <div className='bg-[#183B56] h-[548px]  mt-7 md:mt-24 md:px-20'>
      <div className='flex sm:justify-between justify-center pt-12 md:pt-14'>
        <div className='text text-white text-3xl font-bold italic'>Related Books</div>
        <div className='buttons sm:flex hidden '>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full' onClick={handlePrev}>
            <img className='mx-auto' src={arrow} alt='Left Arrow' />
          </button>
          <button className='h-14  w-14 border-2 mx-3 p-2 rounded-full'onClick={handleNext}>
            <img className='mx-auto' src={arrowR} alt='Right Arrow' />
          </button>
        </div>
      </div>
      <div className='mt-10 md:mt-14  sm:mx-auto mx-6 '>
      <Slider ref={sliderRef} {...settings}>
        {/* {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-[226px] h-[326px] rounded-lg"
            />
          </div>
        ))} */}
                 {books.map((book,index) => (
                  <div key={`book-${index}`}>
            <Card
                title={
                "Title:  "+  book.volumeInfo?.title.slice(0, 40) + "...." ?? "not exist"
                }
             author={"Authors:  "+ book.volumeInfo?.authors?.join(', ') ?? "Unknown Author"}
              thumbnail={
                book.volumeInfo?.imageLinks?.thumbnail ?? "default-thumbnail.jpg"
              }
              amount={"Amount:  "+book.amount !== undefined ? book.amount : "N/A"}
              id={book.id?.toString()}
            />
          </div>
                ))}
      </Slider>
           </div>
      <div className='sm:hidden flex justify-center pt-7 md:pt-14 mb-[20px]'>
        <div className='flex mb-3'>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full' onClick={handlePrev}>
            <img className='mx-auto' src={arrow} alt='Left Arrow' />
          </button>
          <button className='h-14  w-14 border-2 mx-3 p-2 rounded-full' onClick={handleNext}>
            <img className='mx-auto' src={arrowR} alt='Right Arrow' />
          </button>
        </div>
      </div>
    </div>
      </>
  );
};

export default SliderComponent;
