import CTA from "../../components/cta/CTA";
import Category from "../../components/category/Category";
import HomeSection from "../../components/cardSection/HomeSection";
import Section from "./Section";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { MostPopularBooks, selectAllBooks } from "../../redux/MostPopularSlice";
import { BestMonthBooks, selectAllBestBooks } from "../../redux/BestOfThisMonthSlice";
import { useEffect } from "react";
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

function Home() {
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
    <main className="w-full h-auto">
<div className="my-5">
      <HomeSection/>
 {/* <Section/> */}
  
</div>
<div className="my-5">
  
      <Category/> 
</div>
<div className="my-5">
      <CTA/> 
</div>


  {/* <div className="mx-auto container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:grid-cols-full gap-8">
 
          <div className="col-span-full sm:col-span-2">
            <h1 className="ms-3 font-bold italic text-4xl text-[#183B56]">
              Recommended Books
            </h1>
            <div className="grid grid-rows-1 sm:grid-cols-2 p-3 gap-4">
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
                  amount={book.volumeInfo?.pageCount ?? 0}
                  author={
                    book.volumeInfo?.authors?.join(", ").slice(0, 14) + "..." ??
                    "Authors Not Found"
                  }
                  id={book.id}
                />
              ))}
            </div>
            <div className="bg-[black] flex justify-center text-center p-2 text-[#1565D8]">
              More Recomendaions
            </div>
     
        </div>
        <div className="grid grid-cols-1 p-3 gap-3">
            <h1 className="ms-3 font-bold italic text-4xl text-[#183B56]">
              Best Of this Month
            </h1>
            <div className="bg-[#B3BAC5] rounded-md p-5 space-y-4">
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
            </div>
            <div className="bg-[black] flex justify-center text-center p-2 text-[#1565D8]">
              More Recomendaions
            </div>

        </div>
      </div> */}



    </main>
  );
}

export default Home;
