import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="mt-10 mb-20 mx-5">
        <div className="hidden lg:block">
          <Link to={"/"} className="hover:underline px-5 font-bold">
            Home &nbsp;
          </Link>
          <span>&#62;</span>

          <span className="px-5">Career</span>
        </div>

        <div>
          <img src="career.png" alt="" className="m-auto my-10" />

          <div className="font-mono w-[75%] m-auto text-center space-y-5 ">
            <p className=" text-5xl font-bold tracking-wider  text-purple-900">
              We are Hiring ! <img className="" />
            </p>
            <p className="xm:text-xs lg:text-md">
              Disha Publication is offering you a chance to work with us! Disha
              Publication has been awarded as 2nd among Top Indian Academic
              Publisher. It offers a positive work environment, with learning
              opportunities that are perfect to expand your horizon and to
              challenge your comfort zone. Disha offers you the much needed
              growth.
            </p>
            <p className="xm:text-xs lg:text-md">
              Disha Publication is an ever-growing family and has various
              departments that you can have a look at and find what might be the
              best fit for you!
            </p>

            <p className="xm:text-xs lg:text-md">
              The open positions are updated weekly.
            </p>
            <p className="font-bold">The different Departments at AIETS :</p>
          </div>

          <p className="text-center text-2xl  mt-10   font-extrabold font-mono ">
            Form for job Application
          </p>
          <div className="lg:flex mb-20 justify-around  bg-purple-50 p-10 font-serif text-sm ">
            <div className="w-full xm:m-auto lg:w-[45%] space-y-2">
              <p>First Name</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg  "
              />

              <p>Email Id</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Mobile No.</p>
              <input
                type="tel"
                className=" rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Skill</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Attach Your CV (.doc,docx,.pdf,.odt)</p>
              <input
                type="file"
                multiple
                className=" rounded  p-3 w-full   shadow-lg "
              />
              <br />
              <button className="lg:block xm:hidden rounded py-3 px-8 shadow-lg bg-purple-900 text-white ">
                send
              </button>
            </div>
            <div className="w-full lg:w-[45%] space-y-2">
              <p>Qualification</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Experience</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Area of Interest</p>
              <input
                type="tel"
                className=" rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Applying for Position </p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />
              <br />
              <button className="xmblock lg:hidden rounded py-3 px-8 shadow-lg bg-purple-900 text-white ">
                send
              </button>
            </div>
          </div>

          <div className="font-mono w-[75%] m-auto text-center space-y-5 ">
            <p className="xm:text:lg lg:text-4xl font-bold tracking-wider  text-center">
              Are you the
              <span className="text-purple-700">Freelancer</span>
            </p>
            <p className="xm:text:lg lg:text-4xl font-bold tracking-wider text-center">
              we have been looking for?
            </p>
            <p className="xm:text-xs lg:text-md">
              Disha Publication is offering a chance to be a part of its ever
              expanding family! If you are passionate about content creation,
              but don’t want to sit inside a cubicle for 9 hours a day, we have
              come up with a perfect opportunity for you. Work with us, on a
              freelance basis, from the comfort of your own home or
              surroundings.
            </p>
            <p className="xm:text-xs lg:text-md">
              We offer a variety of Freelance work to choose from. Be it being
              an author or an Educator, you can be NEXT of either of the two!
              Even if you are a House Wife and possess requisite skills and a
              flair to write you can work with us.
            </p>
            <p className="xm:text-xs lg:text-md">
              The procedure to apply for Freelance opportunities is simple and
              straightforward. We are providing a freelance opportunity in the
              following segments:-
            </p>
            <p className="xm:text-xs lg:text-md">
              Editorial – Content Development, Editing & Copy Editing – Text/
              Video – UPSC, JEE, NEET, K-12 Segment, School Entrance Exams,
              General Competitive Exams, College Entrance Exams & Govt.
              Vacancies.
            </p>
            <p className="xm:text-xs lg:text-md">
              Digital – Blog Writers/ Content Writers
            </p>
            <p className="xm:text-xs lg:text-md">
              Click on the link below and fill in the form with the essential
              details, if you believe you are the right fit.
            </p>
          </div>

          <p className="text-center text-2xl  mt-10   font-extrabold font-mono  text-green-700">
            Form for ' Becaome a Freelancer '
          </p>
          <div className="lg:flex mb-20 justify-around  bg-purple-50 p-10 font-serif text-sm ">
            <div className="w-full lg:w-[45%] space-y-2">
              <p>First Name</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg  "
              />

              <p>Email Id</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Mobile No.</p>
              <input
                type="tel"
                className=" rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Skill Area</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Job Post</p>
              <select
                className="  rounded outline-none p-3 w-full 
                                shadow-lg text-gray-500"
              >
                <option value="Developer">Developer</option>
                <option value="Marketing">Marketing</option>
                <option value="Tester">Tester</option>
              </select>
              <br />
              <button className=" rounded py-3 px-8 shadow-lg bg-purple-900 text-white ">
                send
              </button>
            </div>
            <div className="w-full lg:w-[45%] space-y-2">
              <p>Qualification</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Experience</p>
              <input
                type="text"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Subject of Interest</p>
              <input
                type="tel"
                className=" rounded outline-none p-3 w-full 
                                shadow-lg "
              />

              <p>Description </p>
              <textarea
                cols="10"
                rows="1"
                className="  rounded outline-none p-3 w-full 
                                shadow-lg "
              ></textarea>
            </div>
          </div>

          <p className="text-4xl font-bold tracking-wider  text-center">
            Interns
          </p>
          <p className=" font-bold tracking-wider  text-center my-2">
            Departments – Editorial, HR, Digital, Accounts, Sales & Marketing
          </p>
          <div className="font-mono w-[75%] m-auto text-center space-y-5 ">
            <p className="xm:text-xs lg:text-md">
              We are looking for dynamic, energetic interns who are eager to
              learn and work in different functions to kick-start their
              professional career. They should be serious and would be required
              to work diligently for respective number of hours on a daily
              basis. They will be working closely with our team to conduct
              research, capture data and attend meetings and might be asked to
              take minutes. The Internships vary for a period of 1 to 3 months.
              If you prove yourself to be worthy with requisite and essential
              skill sets and an eager mind to learn, you might get lucky to
              receive a full time working opportunity with us.
            </p>
            <p className="xm:text-xs lg:text-md">
              To be successful as an Intern, you should be willing to help with
              any tasks assigned by a supervisor. You will be involved in
              upcoming projects as well as assisting with current campaigns. The
              intern must be willing to fulfill tasks set out by supervisors
              from several departments and perform research at a supervisor's
              request.
            </p>
          </div>

          <div className=" xm:m-8 lg:m-[100px] w-[80%] m-auto lg:w-[40%] lg:h-[40%] rounded-[30%] font-serif ">
            <p className=" font-bold tracking-wider mt-10 bg-green-100 ">
              Intern Requirements:
            </p>
            <div className="bg-yellow-400 rounded">
              <ul className="list-decimal text-sm   bg-orange-100">
                <li>A final year student or recent graduate.</li>
                <li>
                  Eager to learn and work with various departments in the
                  company.
                </li>
                <li>Excellent verbal and written communication skills.</li>
                <li>Proficiency in Microsoft Office .</li>
                <li>Ability to multitask.</li>
                <li>Cope well under pressure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
