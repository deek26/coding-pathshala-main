import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function OnlineTest() {
  return (
    <div className="pb-5">
      <div className=" flex justify-between items-center relative ">
        <div className="space-y-3 ml-[10%]">
          <h1 className="text-4xl font-bold text-blue-500 ">
            India's #1 Online Test Series <br /> Platform
          </h1>
          <p className="text-sm font-semibold text-gray-400">
            Boost your exam preparation with Test Series for Banking, <br />
            SSC, RRB & All other Govt. Exams
          </p>
        </div>
        <img src="tests.jpg" alt="" />

        <p className="absolute bottom-[25%] left-[10%] text-gray-500 text-sm">
          520+ exams covered. Which exam are you preparing for?
        </p>
        <div>
          <input
            type="search"
            className="w-[35%] border-2 border-gray-200 px-2 absolute bottom-[14%] left-[10%] h-[50px] rounded-md outline-none"
            placeholder=" Deeksha Mam ko maro sabhi"
          />
          <RiSearch2Line className="absolute bottom-[17%] left-[42%] text-lg text-gray-400" />
        </div>
      </div>

      <div>
        <h1 className="my-8 text-3xl font-semibold font-mono text-[#525e2a] ml-10">
          Popular Test Series
        </h1>

        <div className="flex justify-evenly">
          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC CHSL Mock Test 2022-23 <br /> ( Tier I & Tier II New....
            </p>
            <p>1617 Total Tests | 12 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi</p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>50 Full Test (Tier 1)</li>
              <li>65 PYCT</li>
              <li>792 PYST</li>
              <li>+710 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              Current Affairs 2023 Mega <br /> Pack SSC/State/Railways....
            </p>
            <p>318 Total Tests | 1 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi + 5 more </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>119 Topic Wise Cureent Affairs</li>
              <li>24 Monthly Compilation</li>
              <li>143 State Current Affairs</li>
              <li>+32 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC MTS and Hawaldar <br /> Mock Test 2022-23 (Lates)....
            </p>
            <p>421 Total Tests | 1 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi + 8 more </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>112 Chater Test</li>
              <li>80 Sectional Test</li>
              <li>61 Full Test</li>
              <li>+168 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC English Previous Year <br /> Questions Mock Test Series
            </p>
            <p>703 Total Tests | 2 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>124 SSC CGL</li>
              <li>198 SSC CHSL</li>
              <li>89 SSC GD</li>
              <li>+292 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>
        </div>

        <div className="flex justify-around mt-14 my-10 ">
          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC CHSL Mock Test 2022-23 <br /> ( Tier I & Tier II New....
            </p>
            <p>1617 Total Tests | 12 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi</p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>50 Full Test (Tier 1)</li>
              <li>65 PYCT</li>
              <li>792 PYST</li>
              <li>+710 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              Current Affairs 2023 Mega <br /> Pack SSC/State/Railways....
            </p>
            <p>318 Total Tests | 1 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi + 5 more </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>119 Topic Wise Cureent Affairs</li>
              <li>24 Monthly Compilation</li>
              <li>143 State Current Affairs</li>
              <li>+32 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC MTS and Hawaldar <br /> Mock Test 2022-23 (Lates)....
            </p>
            <p>421 Total Tests | 1 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi + 8 more </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>112 Chater Test</li>
              <li>80 Sectional Test</li>
              <li>61 Full Test</li>
              <li>+168 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>

          <div
            className=" w-[20%]  py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-blue-400 border-2 border-blue-300 bg-gradient-to-b from-red-600 to-green-400 "
          >
            <img src="ssclogo.jpg" className="h-20 w-25 m-auto" />
            <p>
              SSC English Previous Year <br /> Questions Mock Test Series
            </p>
            <p>703 Total Tests | 2 Free Test</p>
            <hr className="w-[90%] my-3 " />
            <p className="ml-3">English, Hindi </p>
            <hr className="w-[90%] my-3" />
            <ul className="list-disc  ml-[10%] text-gray-500 text-sm">
              <li>124 SSC CGL</li>
              <li>198 SSC CHSL</li>
              <li>89 SSC GD</li>
              <li>+292 more tests</li>
            </ul>
            <button className="bg-blue-300 p-2 w-full rounded font-serif my-6">
              View Test Series
            </button>
          </div>
        </div>

        <div className="flex justify-between w-[70%] m-auto my-4">
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-green-600 rounded text-white font-semibold ">
              FREE
            </button>
            <h1 className="">Live Test & Quizzes</h1>
          </div>

          <div>
            <button className="bg-green-200 p-2 rounded text-blue-400">
              View All
            </button>
          </div>
        </div>

        <div className="flex justify-around  ">
          <div
            className="border-2 border-gray-100 w-[26%] h-[10%] py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl hover:shadow-red-700 space-y-2 bg-gradient-to-r from-green-300 to-red-500"
          >
            <div className="flex space-x-1">
              <div>
                <button className="bg-red-600 text-white rounded px-1">
                  • LIVE TEST
                </button>
              </div>

              <div>
                <p>INDIAN FO...</p>
              </div>

              <div>
                <button> + 12 More </button>
              </div>
            </div>

            <p className="text-sm font-bold">
              Current Affairs for All Defence Exams <br />
              (Preparation): Live Test
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <AiOutlineFileDone />
              <p> 20 Questions | 16 Mins. | 20 Marks</p>
            </div>

            <div className="flex space-x-10 text-sm text-gray-500">
              <div className="flex items-center">
                <AiOutlineClockCircle />
                <p> 1 Mar, 9:00 to 3 Mar, 21:00</p>
              </div>
              <div>
                <button>Start Now</button>
              </div>
            </div>

            <hr className="w-[90%] my-3 " />
            <p className="text-sm">English, Hindi</p>
            <hr className="w-[90%] my-3 " />
          </div>

          <div
            className="border-2 border-gray-100 w-[26%] h-[10%] py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl  hover:shadow-red-700 space-y-2 bg-gradient-to-r from-green-300 to-red-500"
          >
            <div className="flex space-x-1">
              <div>
                <button className="bg-red-600 text-white rounded px-1">
                  • LIVE TEST
                </button>
              </div>

              <div>
                <p>INDIAN FO...</p>
              </div>

              <div>
                <button> + 12 More </button>
              </div>
            </div>

            <p className="text-sm font-bold">
              Current Affairs for All Defence Exams <br />
              (Preparation): Live Test
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <AiOutlineFileDone />
              <p> 20 Questions | 16 Mins. | 20 Marks</p>
            </div>

            <div className="flex space-x-10 text-sm text-gray-500">
              <div className="flex items-center">
                <AiOutlineClockCircle />
                <p> 1 Mar, 9:00 to 3 Mar, 21:00</p>
              </div>
              <div>
                <button>Start Now</button>
              </div>
            </div>

            <hr className="w-[90%] my-3 " />
            <p className="text-sm">English, Hindi</p>
            <hr className="w-[90%] my-3 " />
          </div>

          <div
            className="border-2 border-gray-100 w-[26%] h-[10%] py-2 px-6 rounded-md shadow-lg 
            hover:shadow-2xl  hover:shadow-red-700 space-y-2 bg-gradient-to-r from-green-300 to-red-500"
          >
            <div className="flex space-x-1">
              <div>
                <button className="bg-red-600 text-white rounded px-1">
                  {" "}
                  • LIVE TEST
                </button>
              </div>

              <div>
                <p>INDIAN FO...</p>
              </div>

              <div>
                <button> + 12 More </button>
              </div>
            </div>

            <p className="text-sm font-bold">
              Current Affairs for All Defence Exams <br />
              (Preparation): Live Test
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <AiOutlineFileDone />
              <p> 20 Questions | 16 Mins. | 20 Marks</p>
            </div>

            <div className="flex space-x-10 text-sm text-gray-500">
              <div className="flex items-center">
                <AiOutlineClockCircle />
                <p> 1 Mar, 9:00 to 3 Mar, 21:00</p>
              </div>
              <div>
                <button>Start Now</button>
              </div>
            </div>

            <hr className="w-[90%] my-3 " />
            <p className="text-sm">English, Hindi</p>
            <hr className="w-[90%] my-3 " />
          </div>
        </div>
      </div>
    </div>
  );
}
