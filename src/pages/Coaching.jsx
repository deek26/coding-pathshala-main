import React from "react";
import { Link } from "react-router-dom";

export default function Coaching() {
  return (
    <>
      <div className="my-5 px-3">
        <div>
          <Link to={"/"} className="hover:underline px-5  font-bold">
            Home
          </Link>
          <span> &#62;</span>

          <span className="px-5">Grow With us</span>
        </div>
        <div className="md:block hidden relative  h-[500px] my-5">
          <img src="grow-top-banner.png" alt="" className="h-full" />
          <div className="absolute left-[50%] top-[10%] p-2">
            <p className="text-4xl font-mono font-extrabold">
              Get printed study package for your Coaching with your
            </p>
            <p className="text-4xl text-red-500 font-bold">Brand and Logo</p>
            <p className="my-5">
              1. Printed study package gives Professional Outlook to your
              coaching
              <br />
              2. Focus On Core Area while we take care of your study package
              <br />
              3. Launch New Courses
              <br />
              4. Increase Enquiries
              <br />
              5. Grow Trust and build a strong Brand
            </p>
            <button className="bg-red-400 p-2 font-semibold rounded-xl shadow-red-600 shadow-md text-white">
              ENQUIRE NOW
            </button>
          </div>
        </div>
        <div className="w-[90%] m-auto flex mt-10 justify-around ">
          <div className="w-[40%] font-mono text-sm">
            <img src="left-banner-cc.png" alt="" />
            <p>
              Disha Publication provides complete curriculum support solutions
              to corporate clients that include coaching institutes, tuition
              centers, and e-learning companies. We firmly believe that quality
              content and strong deliveries are the key drivers behind the
              growth of any institution .
              <br />
              We have delivered more than 75000 study sets to over 3500 coaching
              institutes across India. We have a track record of supplying
              timely and superior quality material (textbooks, solution
              booklets, classroom & homework assignments, test series, etc.) to
              a number of coaching institutes in their own name & logo. We take
              care of all your student material needs so that you can relax and
              concentrate on teaching and marketing activities.
            </p>
          </div>
          <div className="w-[40%] font-mono">
            <p>
              <span className="text-md md:text-3xl font-bold">We offer</span>
              <br />
              <span className="text-md md:text-3xl font-bold text-red-500  ">
                Customised Study Package
              </span>
              <br />
              <span className="text-md md:text-2xl font-semibold ">
                for your Institute
              </span>
            </p>
            <p className="text-md">What you Get?</p>
            <ul className="list-disc">
              <li>Complete Study Package With Your Institute Branding</li>
              <li>As Per Latest Syllabus and Pattern</li>
              <li>Quantity Based Price Slabs</li>
              <li>Quality Material Tailored To Your Needs</li>
            </ul>
            <p>Study Package available for:</p>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              JEE
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              NEET
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              FOUNDATION
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              CRASH COURSE
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              CBSE
            </button>
            <br />
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              BANKING
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              SSC
            </button>
            <button className="p-2 bg-yellow-500 font-semibold rounded my-1 mx-1 ">
              IAS
            </button>
          </div>
        </div>
        <div className="my-5">
          <img src="learn-img.png" alt="" />
        </div>
        <div>
          <img
            src="ncert_locator.png"
            alt=""
            className="m-auto  w-[200px] h-[200px]"
          />
        </div>
        <div className="flex justify-around">
          <div>
            <p>
              <span className="text-2xl text-green-500 font-bold ">DPP</span>
              <span className=" text-2xl font-bold">
                - Daily Practice Problems
              </span>
            </p>
            <p>• Revised and updated problems</p>
            <p>• As per latest syllabus & pattern</p>
            <p>• Include all variety of questions</p>
            <p>• Separate & detailed solution booklets for teachers</p>
            <p>• Institute logo on all DPP sheets</p>
            <p>• Quantity based price slabs</p>
          </div>
          <div>
            <p className="text-2xl text-green-500 font-bold">
              Classroom & Homework Assignment Modules
            </p>
            <p>• Chapter-wise and topic-wise assignments for practice</p>
            <p>• As per latest syllabus & pattern</p>
            <p>• Covers variety of questions</p>
            <p>• Separate solution manual for teachers/ institutes</p>
            <p>• Institute logo on all CR/HW assignment sheets</p>
            <p>• Quantity based price slabs</p>
          </div>
        </div>
        <div className="my-5">
          <img src="online-images.png" alt="" />
        </div>
      </div>
    </>
  );
}
