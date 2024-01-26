import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Book {
  id?: string;
    title: string;
    categories?: string[];
      thumbnail:string
      amount: number|string;
      details?:string;
      author?:string;
  };
  
  const Card: React.FC<Book> =({thumbnail,title,amount,id,details,author})=> {
    const history = useNavigate();
    const hanldeSubmit=()=>{
      history(`/detail/${id}`);
    }
  return (
    <div className="grid grid-cols-2 flex sm:flex-col md:flex-row gap-4 w-full border-solid rounded-md" onClick={hanldeSubmit}>
      <div className="bg-[#FC5A5A] max-w-[180] flex justify-center rounded-md"><img className='w-full h-auto rounded-md' src={thumbnail} alt="thumbnail" /></div>
      <div className="flex flex-col gap-3 mb-3 mt-2">
        <p className=" font-semibold italic text-[22px] text-wrap text-[#183B56]"     style={{fontFamily:"Hanken Grotesk" }}>{title}</p>
        <p className=" font-bold  text-[22px] text-wrap text-[#1565D8]"     style={{fontFamily:"Hanken Grotesk" }}>${amount}</p>
          <button className="rounded-full bg-[#183B56] font-semibold text-center p-2 text-[white] text-[14px] w-[101px]">Buy Now</button>
        </div>
    </div>
  )
}

export default Card

