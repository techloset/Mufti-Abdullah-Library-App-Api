import React, { useEffect, useState } from "react";
import { Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSearch, selectIsLoading } from "../../redux/SearchSlice";
import { searchBooks } from "../../redux/SearchSlice";
import MonthlyCard from "../../components/monthlyCard/MonthlyCard";
import Loader from "../../components/loader/Loader";
import { Books, BooksDetails } from "../../constants/Types";

const Searches = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const searches = useSelector(selectAllSearch) || [];
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      dispatch(searchBooks(query) as unknown as Action);
    }
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchBooks(query) as unknown as Action);
    setQuery(" ");
  };
  useEffect(() => {
    return () => {
      dispatch(searchBooks("") as unknown as Action);
    };
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto flex flex-col  py-16 text-center px-8 font-hanken">
          <div className="grid grid-cols-1">
            <h1 className="text-center ps-0 text-5xl mt-10 mb-10 font-bold text-primary">
              Search Book
            </h1>
            <div className="items-center mx-auto bg-bgtertiary  rounded-full justify-center flex lg:w-[610px] sm:w-[334px] h-[49px] md:h-[54px]">
              <form
                onSubmit={handleSubmit}
                className="items-center mx-auto bg-bgtertiary  rounded-full justify-center flex lg:w-[610px] sm:w-[334px] h-[49px] md:h-[54px]"
              >
                <input
                  className="bg-bgtertiary text-black bg-opacity-25 placeholder-black  w-full ps-4 focus:outline-none"
                  type="text"
                  placeholder="Search Books"
                  value={query}
                  onChange={handleSearch}
                />
                <button type="submit"></button>
              </form>
            </div>
          </div>
          <h1 className="text-center flex sm:justify-start justify-center ps-0 text-[32px] text-primary mt-[180px] sm:mb-8 mb-10 font-bold">
            Search Results
          </h1>
          <div className="grid grid-cols-1 text-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searches.map((search) =>
              search.volumeInfo?.imageLinks ? (
                <MonthlyCard
                  key={search.id}
                  title={search?.volumeInfo?.title.slice(0, 18) + ".."}
                  thumbnail={search.volumeInfo.imageLinks.thumbnail}
                  author={
                    search.volumeInfo.authors &&
                    Array.isArray(search.volumeInfo.authors)
                      ? search.volumeInfo.authors.join().slice(0, 10)
                      : "Authors Not Found"
                  }
                  amount={search.amount === undefined ? search.amount : "N/A"}
                  id={search.id}
                />
              ) : (
                <div key={search.id}>N/A</div>
              )
            )}
          </div>
          <div className="bg-bgbtn flex justify-center content-center text-center items-center p-2 mx-auto h-[72px] sm:w-[362px] w-[270px] mt-5  text-secondary">
            <button className="font-bold text-[16px] font-hanken">MORE</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Searches;
