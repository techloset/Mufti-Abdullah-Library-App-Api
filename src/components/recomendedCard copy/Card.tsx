import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Heart from '../../assets/icons/heart.png';

type Book = {
  id: string;
  volumeInfo: {
    title: string;
    categories?: string[];
    imageLinks?:{
      smallThumbnail?:string
      thumbnail?:string
    };
  };
  saleInfo?: {
    listPrice?: {
      amount: number;
    };
  };
};

const BookSearch = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const API_KEY = 'AIzaSyBzUAlPY6NV_nYuRozwfGHgjj8KUHCxEaQ';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=react:keyes&key=${API_KEY}`
        );

        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log("books",books)
  return (
    <div>
      {books && books.map((book) => (
        <div key={book.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-solid p-4 border-[#ECEEF2] border-[1px] mx-auto">
    <div
  className=" mx-auto  rounded-md"
  // style={{ backgroundImage: `url(${book.imageLinks?.smallThumbnail})`, backgroundPosition:"center" }}
>
  <img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
</div>

          <div className="flex flex-col gap-3 mx-auto">
            <p className="font-[Hanken Grotesk] font-semibold italic text-[22px] text-wrap text-[#183B56] mt-2">{book.volumeInfo.title}</p>
            <p className="font-[Hanken Grotesk] font-semibold  text-[16px] text-wrap text-[#183B56] mt-2 mx-auto sm:mx-0">{book.volumeInfo.categories && book.volumeInfo.categories.join(', ')}</p>
            <p className="font-[Hanken Grotesk] font-bold  text-[22px] text-wrap text-[#1565D8] sm:mx-0 mx-auto">${book.saleInfo?.listPrice?.amount || 'N/A'}</p>
            <div className="flex flex-row gap-5 mb-2 mx-auto sm:mx-0">
              <button className="rounded-full bg-[#183B56] font-semibold w-[101px] text-center p-2 text-[white] text-[14px]">Buy Now</button>
              <img src={Heart} alt="heart" className="h-full w-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookSearch;
