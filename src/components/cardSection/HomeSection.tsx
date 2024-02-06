import React, { useEffect, useState } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { MostPopularBooks, selectAllBooks } from "../../redux/MostPopularSlice";
import {
  BestMonthBooks,
  selectAllBestBooks,
} from "../../redux/BestOfThisMonthSlice";
import MonthlyCard from "../monthlyCard/MonthlyCard";
import Card from "../recomendedCard/Card";
import Loader from "../loader/Loader";

interface Books {
  id: string;
  volumeInfo?: {
    title: string;
    authors: [];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
  };
  amount: string | number;
}

function HomeSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTabletMode, setIsTabletMode] = useState<boolean>(false);

  useEffect(() => {
    checkTabletMode();
    window.addEventListener("resize", checkTabletMode);

    return () => {
      window.removeEventListener("resize", checkTabletMode);
    };
  }, []);

  const checkTabletMode = () => {
    setIsTabletMode(window.innerWidth >= 768);
  };

  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const books: Books[] = useSelector(selectAllBooks) as Books[];
  const bestBooks: Books[] = useSelector(selectAllBestBooks) as Books[];

  useEffect(() => {
    setIsLoading(true);
    dispatch(MostPopularBooks())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching Most Popular Books:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(BestMonthBooks())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching Best of the Month Books:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isTabletMode ? (
        <div className="mx-auto container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:grid-cols-full gap-8 font-hanken">
          <div className="col-span-2">
            <h1 className="ms-3 mt-3 font-bold italic text-[32px] mb-8 sm:mb-2 text-[#183B56]">
              Recommended Books
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-4">
              {books.map((book) => (
                <MonthlyCard
                  key={book.id?.toString()}
                  title={
                    book.volumeInfo?.title.slice(0, 18) + "..." ??
                    "Title Not Found"
                  }
                  thumbnail={
                    book.volumeInfo?.imageLinks?.thumbnail ??
                    "default-thumbnail.jpg"
                  }
                  author={
                    book.volumeInfo?.authors?.join(", ").slice(0, 14) + "..." ??
                    "Authors Not Found"
                  }
                  amount={book.amount !== undefined ? book.amount : "N/A"}
                  id={book.id}
                />
              ))}
            </div>
            <div className="bg-[#E8F0FB] flex justify-center content-center text-center items-center p-2 h-[72px] text-[#1565D8]">
              <p className="font-bold text-[16px] font-hanken">
                MORE RECOMMENDATIONS
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 p-3 gap-3">
            <h1 className="ms-3 font-bold italic mt-0 text-[32px] text-[#183B56]">
              Best Of this Month
            </h1>
            <div className="bg-[#B3BAC5] rounded-md p-5 space-y-3">
              {bestBooks &&
                bestBooks
                  .slice(0, 6)
                  .map((book) => (
                    <Card
                      key={book.id?.toString()}
                      title={
                        book.volumeInfo?.title.slice(0, 8) + "...." ??
                        "Title Not Exist"
                      }
                      thumbnail={
                        book.volumeInfo?.imageLinks?.thumbnail ??
                        "default-thumbnail.jpg"
                      }
                      author={book.volumeInfo?.authors?.join().slice(0, 8)}
                      amount={book.amount !== undefined ? book.amount : "N/A"}
                      id={book.id}
                    />
                  ))}
            </div>
            <hr className="border-gray-400" />
            <div className="flex justify-center p-6 text-center text-bold text-[#1565D8]">
              <p className="font-bold text-[16px] font-hanken">
                SEE BEST BOOKS
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 items-start justify-center lg:justify-start">
          <div className="w-full md:w-2/3 md:mt-4">
            <h1 className="text-wrap mx-1 font-bold italic text-center text-[32px] mb-8 sm:mb-2 text-[#183B56]">
              Recommended Books
            </h1>{" "}
            <div className="pt-8 ms-10 md:pt-0 mt-5 md:mt-0 overflow-x-auto whitespace-nowrap mx-auto no-scrollbar md:flex md:flex-wrap">
              {books.map((book) => (
                <div
                  key={book.id?.toString()}
                  className="inline-block mr-4 mb-5"
                >
                  <MonthlyCard
                    title={
                      book.volumeInfo?.title.slice(0, 20) + "..." ??
                      "Title Not Found"
                    }
                    thumbnail={
                      book.volumeInfo?.imageLinks?.thumbnail ??
                      "default-thumbnail.jpg"
                    }
                    amount={
                      book.amount !== undefined || "" ? book.amount : "N/A"
                    }
                    author={
                      book.volumeInfo?.authors?.join(", ").slice(0, 20) +
                        "..." ?? "Authors Not Found"
                    }
                    id={book.id}
                  />
                </div>
              ))}
            </div>
            <div className="bg-[#E8F0FB] flex justify-center content-center text-center items-center p-2 h-[72px] text-[#1565D8]">
              <p className="font-bold text-[16px] font-hanken">
                MORE RECOMMENDATIONS
              </p>
            </div>
          </div>
          <aside className="w-full md:w-1/4 p-4 flex flex-col items-center gap-5">
            <div>
              <h1 className="ms-3 text-center font-bold italic text-wrap text-[32px] mb-8 sm:mb-0 text-[#183B56]">
                Best Of This Month
              </h1>{" "}
              <div className="flex flex-col gap-5 items-center border-gray-200 p-4 rounded-md">
                {bestBooks &&
                  bestBooks
                    .slice(0, 6)
                    .map((book) => (
                      <Card
                        key={book.id?.toString()}
                        title={
                          book.volumeInfo?.title.slice(0, 14) + "...." ??
                          "not exist"
                        }
                        thumbnail={
                          book.volumeInfo?.imageLinks?.thumbnail ??
                          "default-thumbnail.jpg"
                        }
                        author={book.volumeInfo?.authors?.join().slice(0, 8)}
                        amount={book.amount !== undefined ? book.amount : "N/A"}
                        id={book.id}
                      />
                    ))}
              </div>
              <hr className="border-gray-400" />
              <div className="flex justify-center p-6 text-center text-bold text-[#1565D8]">
                <p className="font-bold text-[16px] font-hanken">
                  SEE BEST BOOKS
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default HomeSection;
