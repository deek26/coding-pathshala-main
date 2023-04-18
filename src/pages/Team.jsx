import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <div className="p-14">
        <div className="hidden lg:block">
          <Link to={"/"} className="hover:underline px-5  font-bold">
            Home &nbsp;
          </Link>
          <span>&#62;</span>

          <span className="px-5">Team</span>
        </div>

        <img src="team.png" alt="team" className="m-auto my-10" />
        <h1 className=" xm:text-md md:text-lg lg:text-3xl text-center font-bold my-10  ">
          Coding Pathshala
        </h1>

        <p className="text-center text-sm">
          Disha Publication over the years has garnered a team that comprises of
          renowned Teachers, Trainers, Study Coaches, Researchers, Content
          Developers, Curriculum Developers, Subject Matter Experts, Editors,
          Proof Readers (Quality ), Designers, Digital Experts, Sales and
          Marketing Professionals. They play a significant role in developing
          the study material in terms of the students’ specific requirements for
          the exam and making it accessible for students via all possible
          channels.
        </p>

        <div className="p-8">
          <p className="text-2xl font-semibold text-gray-600 text-center">
            Anurag HOD
          </p>
          <div className="lg:flex lg:space-x-4  xm:space-y-4 justify-center items-center">
            <img
              src="anurag.jpeg"
              alt=""
              className="w-[300px] xm:m-auto lg:m-0 h-[300px] cursor-zoom-in rounded-[50%]"
            />

            <p className="text-sm lg">
              I am student of F.E.T Agra college pursuing B.Tech and soon
              completed in 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
