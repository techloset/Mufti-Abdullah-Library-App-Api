import React, { useEffect, useState }  from "react";
import Card from "../../components/bestOfMonth/Card";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSearch } from "../../redux/SearchSlice";
import { useLocation, useParams } from "react-router-dom";
import {
  Search,
  searchBooks,
  selectIsLoading,
} from "../../redux/SearchSlice";
import MonthlyCard from "../../components/mostRecomended/MonthlyCard";

const Searches= () => {
  // const { Query } = useParams();
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

  const searches=useSelector(selectAllSearch) || [];
  const [query, setQuery] = useState("");
console.log(searches)
  // const location = useLocation();
  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const newQuery = searchParams.get("query") || "";
  //   setQuery(newQuery);
  // }, [location.search]);
  useEffect(() => {
    // let isMounted = true;
    if (query) {
      dispatch(searchBooks(query))
        // .then((data) => {
        //   if (isMounted) {
        //     dispatch(searchBooksFulfilled(data));
        //   }
        // })
        .catch((error) => {
          console.error("Error in searchBooks dispatch:", error);
        });
    }
    return () => {
      // isMounted = false;
    };
  }, [dispatch, query]);
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    dispatch(searchBooks(searchQuery));
  };
  return (
    <div className="container mx-auto flex flex-col  py-16 text-center px-8" style={{fontFamily:"Hanken Grotesk"}}>
      <div className="grid grid-cols-1">
        <h1 className="text-center ps-0 text-5xl mt-10 mb-10 font-bold text-[#183B56]">
          Search Book
        </h1>
        <div className="items-center mx-auto bg-slate-200 rounded-full justify-center flex lg:w-[610px] sm:w-[334px] h-[49px] md:h-[54px]">
          <input
            className="bg-transparent w-full ps-4 focus:outline-none"
            type="text"
            placeholder="Search Books"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <h1 className="text-center flex sm:justify-start justify-center ps-0 text-[32px] text-[#183B56] mt-[180px] sm:mb-8 mb-10 font-bold">
        Search Results
      </h1>
      <div className="grid grid-cols-1 text-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {searches.map((search: Search) => (
          search.title && search.thumbnail ? (
            <MonthlyCard
              key={search.id}
              title={search.title.slice(0, 18) + ".."}
              thumbnail={search.thumbnail}
              amount={search.amount == undefined ? search.amount : "N/A"}
              id={search.id}
            />
          ) : (
            <div key={search.id}>N/A</div>
          )
        ))}
</div>
<div className="bg-[#E8F0FB] flex justify-center content-center text-center items-center p-2 mx-auto h-[72px] sm:w-[362px] w-[270px] mt-5  text-[#1565D8]">
    <button className='font-bold text-[16px]'style={{fontFamily:"Hanken Grotesk"}}>MORE</button>
</div>
    </div>
  );
};

export default Searches;

// function searchBooksFulfilled(data: import("@reduxjs/toolkit").PayloadAction<any, string, { arg: string; requestId: string; requestStatus: "fulfilled"; }, never> | import("@reduxjs/toolkit").PayloadAction<unknown, string, { arg: string; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), import("@reduxjs/toolkit").SerializedError>): any {
//   throw new Error("Function not implemented.");
// }