import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchBooks,
  selectAllSearch,
  selectIsLoading,
} from "../../redux/SearchSlice";
import { RootState } from "../../redux/Store";
import { Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import SliderComponent from "../../components/swiper/Swiper";
import Loader from "../../components/loader/Loader";
import {
  BestMonthBooks,
  selectAllBestBooks,
} from "../../redux/BestOfThisMonthSlice";
import { MostPopularBooks, selectAllBooks } from "../../redux/MostPopularSlice";
import { DetailBooks } from "../../constants/Types";

function Detail() {
  const [bookDetails, setBookDetails] = useState<DetailBooks>();
  const [dataLoaded, setDataLoaded] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const searches = useSelector(selectAllSearch) || [];
  const bestOfMonth = useSelector(selectAllBestBooks);
  const popularBooks = useSelector(selectAllBooks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(BestMonthBooks() as unknown as Action);
    dispatch(MostPopularBooks() as unknown as Action);
    if (id !== undefined) {
      dispatch(searchBooks(id) as unknown as Action);
    }
    setDataLoaded(true);
  }, [dispatch, id]);

  const selectedBook = [...bestOfMonth, ...popularBooks, ...searches].find(
    (book) => book.id === id
  );
  useEffect(() => {
    if (selectedBook) {
      setBookDetails(selectedBook as DetailBooks);
    }
  }, [selectedBook]);
  const bookTitle = bookDetails?.volumeInfo?.title || bookDetails?.title;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mx-aut0 sm:px-6  mx-6 ">
            <div className="flex flex-col md:flex-col lg:flex-row justify-between mx-4">
              <div className="md:flex-1 px-4 text-center md:text-left sm:ms-2 ms-0 mt-6 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-5xl font-bold italic leading-[60px] text-primary mb-5">
                  <span className="text-bgRegister ">Design Theory:</span>
                  <br />
                  {bookDetails?.volumeInfo?.title || bookDetails?.title}
                </h2>
                <p className="text-base md:text-lg mb-4 font-semibold text-primary">
                  {bookDetails?.volumeInfo?.authors?.join(", ") ||
                    bookDetails?.author?.join(", ")}
                </p>
                <div>
                  <p className="text-tersary text-sm md:text-base mt-7">
                    {bookDetails?.volumeInfo?.description ||
                    bookDetails?.description
                      ? bookDetails.volumeInfo?.description.slice(0, 400) +
                          ".." || bookDetails?.description.slice(0, 400) + ".."
                      : "Description not available"}
                  </p>
                </div>
                <button className="w-[228px] h-[58px] text-white bg-secondary border rounded-md mt-7">
                  See More On Google
                </button>
              </div>
              <div className="md:flex-1 flex justify-center md:justify-center items-center mt-4 md:mt-6">
                <div className="md:w-[488px] md:h-[580px] h-[333px] w-[280px] rounded-lg bg-bgSecondry mx-auto md:mx-0">
                  <div className="w-full h-full flex justify-center items-center">
                    <img
                      className="w-36 h-[215px] md:w-[250px] md:h-[375px] object-cover"
                      src={
                        bookDetails?.volumeInfo?.imageLinks.thumbnail ||
                        bookDetails?.thumbnail
                      }
                      alt="Product Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SliderComponent title={bookTitle} />
        </>
      )}
    </>
  );
}

export default Detail;
