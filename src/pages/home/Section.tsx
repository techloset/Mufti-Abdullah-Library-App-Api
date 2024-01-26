import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { MostPopularBooks, selectAllBooks } from "../../redux/MostPopularSlice";
import { BestMonthBooks, selectAllBestBooks } from "../../redux/BestOfThisMonthSlice";
import Card from "../../components/recomendedCard/Card";
import MonthlyCard from "../../components/mostRecomended/MonthlyCard";

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

export default function Section() {
    const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
    const books: Books[] = useSelector(selectAllBooks) as Books[];
    const bestBooks: Books[] = useSelector(selectAllBestBooks) as Books[];
    useEffect(() => {
      dispatch(MostPopularBooks());
    }, [dispatch]);
    useEffect(() => {
      dispatch(BestMonthBooks());
    }, [dispatch]);
    console.log("books", books);
    console.log("bookstooo", bestBooks);
    
  return (
        <>
          <div className="grid md:grid-rows-2 md:grid-flow-col  xl:grid-rows-1 xl:grid-flow-col   xl:mx-24">
            <div className="">
              <div>
                <h1 className="text-blue-950 py-4  text-[32px] font-bold font-['Hanken Grotesk'] leading-10 tracking-tight">
                  Recommended Books
                </h1>
              </div>
              <div className="grid grid-rows-1 w-[330px] md:w-[790px]   overflow-auto grid-flow-col  md:grid-rows-3 lg:grid-rows-3 lg:w-fit xl:grid-rows-3 lg:grid-flow-col mx-1">
       
              {books.map((book) => (
            <div key={book.id?.toString()} className="inline-block mr-4 mb-5">
              <MonthlyCard
                title={
                  book.volumeInfo?.title.slice(0, 20) + "..." ??
                  "Title Not Found"
                }
                thumbnail={
                  book.volumeInfo?.imageLinks?.thumbnail ??
                  "default-thumbnail.jpg"
                }
                amount={book.amount !== undefined || "" ? book.amount : "N/A"}
                author={
                  book.volumeInfo?.authors?.join(", ").slice(0, 20) + "..." ??
                  "Authors Not Found"
                }
                id={book.id}
              />
            </div>
          ))}
              </div>
              <button className="w-[330px] h-[72px] md:max-w-[330px]  bg-blue-200 rounded-lg text-blue-700  text-base font-bold leading-tight tracking-tight">
                MORE RECOMMENDATIONS
              </button>
            </div>
            <div className="text-blue-950  text-[32px] font-bold font-['Hanken Grotesk'] ">
              <h1 className="py-4 leading-10 tracking-tight">Best this Month</h1>
              <div className=" rounded-md w-fit bg-gray-50 ">
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
                    amount={book.amount !== undefined ? book.amount : "N/A"}
                    id={book.id}
                  />
                ))}
                <button className="w-full h-[72px]   border-t-2  text-blue-700  text-base font-bold leading-tight tracking-tight">
                  SEE BEST BOOKS
                </button>
              </div>
            </div>
          </div>
          <hr className="mx-5 my-10" />
    </>
          
  );
}
