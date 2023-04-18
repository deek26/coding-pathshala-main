import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutubeSquare,
  FaPinterest,
} from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import logo from "./assets/regular_images/logo.png";

export default function Footer() {
  return (
    <div className="w-full sm:w-full text-sm xm:text-[10px] overflow-hidden  ">
      <div className="md:flex  bg-gray-900 text-white md:justify-around sm:px-20 xm:px-20 py-20">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-[100px] w-[200px] cursor-pointer hidden lg:block "
          />
        </div>

        <div>
          <h1 className="mb-5 font-semibold text-blue-500 pt-[20px]">
            Support
          </h1>
          <div className="text-[17px] space-y-3 text-sm xm:text-[10px] ">
            <p>
              <Link to={"/Aboutus"}>About us</Link>
            </p>
            <p>
              <Link to={"Examudates"}>Exam Udates</Link>
            </p>
            <p>
              <Link to={"Requestforspecimen"}>Request for Specimen</Link>
            </p>
            <p>
              <Link to={"Trackyourorder"}>Track Your Order</Link>
            </p>
            <p>
              <Link to={"Connectus"}>Connect Us</Link>
            </p>
            <p>
              <Link to={"Team"}>Team</Link>
            </p>
            <p>
              <Link to={"Career"}> Career</Link>
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-5 font-semibold text-blue-500 pt-[20px]">
            My Account
          </h1>
          <div className="text-[17px] space-y-3 text-sm xm:text-[10px] ">
            <p>
              <Link to={"/Signin"}>Sign In</Link>
            </p>
            <p>
              <Link to={"/mycart"}>View Cart</Link>
            </p>
            <p>
              <Link to={"Contactus"}>Contact</Link>
            </p>
            <p>
              <Link to={"FAQs"}>FAQs</Link>
            </p>
            <p>
              <Link to={"Catalogue"}>Catalogue</Link>
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-5 font-semibold text-blue-500 pt-[20px]">
            Information
          </h1>
          <div className="text-[17px] space-y-3 text-sm xm:text-[10px] ">
            <p>
              <Link to={"/Privacypolicy"}>Privacy Policy</Link>
            </p>
            <p>
              <Link to={"/Shipping"}>Shipping, Returns & Cancellation</Link>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="mb-8 text-blue-400 font-semibold">
              Corporate Office :-
            </h1>
            <p>
              45,2nd floor , Maharishi Dayanand Marg, Corncer Market, Malviya{" "}
              <br />
              Nagar, New Delhi
            </p>
          </div>
          <div>
            <h1 className="mt-8 text-blue-400 font-semibold">
              Registerd office:-
            </h1>
            <p className="overflow-hidden">
              B-32, BASEMENT , SHIVALIK, MALVIYA NAGAR,NEW DELHI,DELHI, 110017
            </p>
          </div>

          {/* <div className="flex space-x-8 mt-8  ">
            <a href="http://www.facebook.com">
              <FaFacebookF className="bg-blue-400 h-8 w-8 p-1" />
            </a>
            <GrLinkedinOption className="bg-blue-600 h-8 w-8 p-1" />
            <FaInstagram className="bg-pink-400 h-8 w-8 p-1" />
            <FaYoutubeSquare className="bg-red-600 h-8 w-8 p-1" />
            <FaPinterest className="bg-orange-400 h-8 w-8 p-1" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
