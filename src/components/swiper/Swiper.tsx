import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../assets/icons/arrow-left.png";
import arrowR from "../../assets/icons/arrow-right-white.png";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Card from "../swiperCard/Card";
import { Books } from "../../constants/Types";
import {
  searchBooksForSwiper,
  selectAllSearchForSwiper,
} from "../../redux/SearchSliceForSwiper";

const SliderComponent: React.FC<{ title: string }> = ({ title }) => {
  const [query, setQuery] = useState(title);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const books: Books[] = useSelector(selectAllSearchForSwiper);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await dispatch(searchBooksForSwiper(query));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  const sliderRef = React.createRef<Slider>();

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1280,
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

  return (
    <>
      <div className="bg-primary h-[548px]  mt-7 md:mt-24 md:px-20">
        <div className="flex sm:justify-between justify-center pt-12 md:pt-14">
          <div className="text text-white text-3xl font-bold italic">
            Related Books
          </div>
          <div className="buttons sm:flex hidden ">
            <button
              className="h-14 w-14 border-2 mx-3 border-border p-2 rounded-full"
              onClick={handlePrev}
            >
              <img className="mx-auto" src={arrow} alt="Left Arrow" />
            </button>
            <button
              className="h-14  w-14 border-2 mx-3 p-2 border-border rounded-full"
              onClick={handleNext}
            >
              <img className="mx-auto" src={arrowR} alt="Right Arrow" />
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-14  sm:mx-auto mx-6 ">
          <Slider ref={sliderRef} {...settings}>
            {books &&
              books.map((book, index) => (
                <div key={`book-${index}`}>
                  <Card
                    title={
                      "Title:  " +
                        book.volumeInfo?.title.slice(0, 40) +
                        "...." ?? "not exist"
                    }
                    author={
                      "Authors:  " + book.volumeInfo?.authors?.join(", ") ??
                      "Unknown Author"
                    }
                    thumbnail={
                      book.volumeInfo?.imageLinks?.thumbnail ??
                      "default-thumbnail.jpg"
                    }
                    amount={
                      "Amount:  " + book.amount !== undefined
                        ? book.amount
                        : "N/A"
                    }
                    id={book.id?.toString()}
                  />
                </div>
              ))}
          </Slider>
        </div>
        <div className="sm:hidden flex justify-center pt-7 md:pt-14 mb-[20px]">
          <div className="flex mb-3">
            <button
              className="h-14 w-14 border-2 mx-3 p-2 border-border rounded-full"
              onClick={handlePrev}
            >
              <img className="mx-auto" src={arrow} alt="Left Arrow" />
            </button>
            <button
              className="h-14  w-14 border-2 mx-3 p-2 border-border rounded-full"
              onClick={handleNext}
            >
              <img className="mx-auto" src={arrowR} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
