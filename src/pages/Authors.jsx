import React from "react";
import { Link } from "react-router-dom";

export default function Authors() {
  return (
    <>
      <div>
        <div className="">
          <Link to={"/"} className="hover:underline px-5  font-bold">
            Home
          </Link>
          <span> &#62;</span>

          <span className="px-5">Authors</span>
        </div>

        <img src="author-img.png" alt="" className="m-auto" />
        <p className="text-center text-3xl font-extrabold font-mono  py-2">
          Become an Author, Nurture Lives
        </p>
        <p className=" w-[80%] m-auto text-sm font-mono py-2">
          Over the decades, Disha Publication has consistently maintained the
          supreme quality standards of its myriad books by diligently working
          with authors who are top Educators, Mentors and Subject Matter
          Experts. Our authors possess in-depth knowledge, exceptional
          expertise, and intensive experience in their respective
          fields/disciplines. Disha offers brilliant minds a chance to put their
          knowledge to paper, and shine through! Authors have a variety of
          academic writing arenas to choose from, be it School Curriculum Books
          or Competitive Exam Study Material. They have Disha’s complete support
          throughout the publication journey. Take this chance to showcase your
          writing talent and join the ranks of our established, decorated
          authors
        </p>
        <p className="text-md text-center text-yellow-400 font-bold py-2">
          To Become an Author, Write To Us
        </p>
        <div className="bg-[#efefd0] flex w-[90%] m-auto justify-center space-x-4 my-8 py-5">
          <div className="w-[45%] p-3">
            <p className=" text-sm md:text-lg font-serif ">First Name </p>
            <input
              type="text"
              className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
            />
            <p className=" text-sm md:text-lg font-serif ">Email Id </p>
            <input
              type="email"
              className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
            />
            <p className=" text-sm md:text-lg font-serif ">Mobile No. </p>
            <input
              type="tel"
              className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
            />
            <button className="border-2 border-gray-200 rounded p-2 px-8 my-4 bg-[#c59c87] text-white">
              SEND
            </button>
          </div>
          <div className="w-[45%] p-3 space-y-2">
            <p className=" text-sm md:text-lg font-serif ">Your Message </p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              className="w-full shadow-md shadow-gray-300 text-lg outline-none"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
