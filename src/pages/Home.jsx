import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = [
    {
      url: "./Sanik-School.jpg",
    },
    {
      url: "./upsssc.jpg",
    },
    {
      url: "Navodaya-IX.jpg",
    },
    { url: "./Agniveer-SSR.jpg" },
  ];
  const [Currentstate, setCurrentstate] = useState(0);

  const prevslide = () => {
    const isfirstdlide = Currentstate === 0;
    const newindex = isfirstdlide ? slides.length - 1 : Currentstate - 1;
    setCurrentstate(newindex);
  };
  const nextslide = () => {
    const isfirstdlide = Currentstate === slides.length - 1;
    const newindex = isfirstdlide ? 0 : Currentstate + 1;
    setCurrentstate(newindex);
  };
  return (
    <>
      <div className="relative w-[80%] m-auto">
        <div className="md:flex  m-auto">
          <div className="md:block hidden md:w-[80%] w-full relative ">
            <div
              style={{ backgroundImage: `url(${slides[Currentstate].url})` }}
              className="w-full h-[400px] bg-center bg-cover duration-1000"
            ></div>
            <div className="absolute top-[50%] left-[20px] rounded-full p-2 text-white bg-black cursor-pointer">
              <BsChevronLeft onClick={prevslide} />
            </div>
            <div className="absolute top-[50%] right-[20px] rounded-full p-2 text-white bg-black cursor-pointer">
              <BsChevronRight onClick={nextslide} />
            </div>
          </div>

          <div className="bg-gray-400 md:w-[30%] h-[400px] text-xs  border-2 border-gray-400    overflow-scroll md:h-[400px] relative">
            <div className=" flex justify-evenly items-center  py-2 sticky top-0 bg-gray-300  ">
              <div className="flex  items-center space-x-2 ">
                <GiHamburgerMenu className="lg:hidden block"></GiHamburgerMenu>
                <p className="lg:block hidden">Categories</p>
                <p className="lg:hidden block"> All Categories</p>
              </div>
              <button className="lg:block hidden font-semibold bg-white px-1 text-sm rounded-md">
                English
              </button>
              <button className="lg:block hidden font-semibold bg-white px-1 text-sm rounded-md ">
                Hindi
              </button>
            </div>
            <ul className="bg-white lg:text-sm  text-[10px] px-2 space-y-1 py-1">
              <li>AIR FORCE</li>
              <li>ARITHMETIC/MATHS</li>
              <li>B.ED./TEACHERS APTITUDE</li>
              <li>BANK CLERK</li>
              <li>BANK P.O.</li>
              <li>CSIR-UGC NET/JRF/SET</li>
              <li>
                DDA EXAM.
                <ul className="display:none">
                  <li>Delhi Development Authority</li>
                </ul>
              </li>
              <li>DEFENCE SERVICES EXAM.</li>
              <li>DELHI SSSB</li>
              <li>ENGG. EXAM.</li>
              <li>EPFO/ESIC</li>
              <li>ESSAY/LETTERS</li>
              <li>GATE/PSUs/JTO/ DRDO/IES/ISRO/TTA</li>
              <li>GENERAL BOOKS</li>
              <li>GENERAL ENGLISH</li>
              <li>GENERAL KNOWLEDGE/STATE G.K.</li>
              <li>INTELLIGENCE BUREAU (I.B.)</li>
              <li>INTELLIGENCE TEST</li>
              <li>INTERVIEW/PERSONALITY DEVELOPMENT</li>
              <li>LAW SERIES/JUDICIAL SERVICES</li>
              <li>Lecturer/Trained Graduate Teacher Rect. Exam.</li>
              <li>LIC/GIC/OIC</li>
              <li>MBA/MCA/BBA/BCA/ BIT/H.M./LLB./CAT/TTM</li>
              <li>MISCELLANEOUS BOOKS</li>
              <li>N.D.A./C.D.S.</li>
              <li>NAVODAYA VIDYALAYA</li>
              <li>NTSE/STSE</li>
              <li>ONLINE TEST</li>
              <li>PMT/PET/NURSING</li>
              <li>POLICE CONSTABLE</li>
              <li>POLICE SUB-INSPECTORS</li>
              <li>POLYTECHNIC</li>
              <li>RAILWAY TECHNICAL/ENGG. DIPLOMA</li>
              <li>RAILWAY/S.C.R.A. EXAM.</li>
              <li>RECENT RELEASES (ENGLISH BOOKS)</li>
              <li>SAINIK/MILITARY SCHOOL EXAM.</li>
              <li>
                SSC
                <ul className="hidden">
                  <li> Higher Secondary Level</li>
                  <li> Graduate Level</li>
                </ul>
              </li>
              <li>TEACHER RECRUITMENT EXAMS.</li>
              <li>UNION &amp; STATE CIVIL SERVICES PRE</li>
              <li>Upkar Career Development Series Ki Pustakain</li>
            </ul>
          </div>
        </div>

        <div className=" bg-red-500 rounded-t-lg w-[20.37%] text-center text-white font-semibold  mt-5">
          New Arrivals
        </div>
        <div className="relative h-[400px] flex overflow-x-scroll space-x-4 ">
          <img
            src="newarrivals.jpg"
            alt="image"
            className="absolute top-0 z-50 w-[20.37%] h-[40.37%]"
          />
          <div className="w-[20.37%] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className="w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
        </div>

        <div className=" bg-red-500 rounded-t-lg w-[20.37%] text-center text-white font-semibold  mt-5">
          New Arrivals
        </div>
        <div className="relative h-[400px] flex overflow-x-scroll space-x-4 ">
          <img
            src="newarrivals.jpg"
            alt="image"
            className="absolute top-0 z-50"
          />
          <div className="w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className="w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
        </div>
        <div className=" bg-red-500 rounded-t-lg w-[20.37%] text-center text-white font-semibold  mt-5">
          New Arrivals
        </div>
        <div className="relative h-[400px] flex overflow-x-scroll space-x-4 ">
          <img
            src="newarrivals.jpg"
            alt="image"
            className="absolute top-0 z-50"
          />
          <div className="w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className="w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
          <div className=" w-[200px] h-[250px] text-center space-y-1 p-1 ">
            <img src="14237.jpg" alt="" className="h-[230px] w-[200px]" />
            <p className="text-xs">
              यू.जी.सी. नेट/जे.आर.एफ./ सेट शिक्षाशास्त्र...
            </p>
            <p className="text-xs">By : डॉ. आदित्य नारायण अंश </p>
            <p className="text-xs">Book Code : 2697 </p>
            <strong className="text-sm">MRP :</strong>
            <strike className="text-xs">RS.320 </strike>
            <span className="text-xs">/ 30% OFF</span>
            <br />
            <strong className="text-sm">PRICE : RS.224</strong>
          </div>
        </div>
      </div>
      <div className="bg-[#e63946] my-6 p-3 flex items-center justify-center">
        <hr className="w-[20%]"></hr>
        <h1 className="text-center text-white font-mono text-3xl">
          PROMOTION & OFFER{" "}
        </h1>
        <hr className="w-[20%]"></hr>
      </div>
      {/* 
      <div className="w-[80%] m-auto flex space-x-3 mb-[100px] ">
        <img src="patwar.jpg" alt="" className="h-[500px] w-[300px]" />
        <img src="currentaffairs.jpg" alt="" className="h-[500px] w-[300px]" />
        <div className="space-y-2">
          <div className="flex space-x-3 ">
            <div className="space-y-3">
              <img src="delivery.jpg" alt="" className="h-[250px] w-[300px]" />
              <img src="dlivery-b.jpg" alt="" className="h-[100px] w-[300px]" />
            </div>
            <img src="police.jpg" alt="" className="w-[300px] h-[365px]" />
          </div>
          <img src="statebank.jpg" alt="" className="h-[125px] w-[600px]" />
        </div>
      </div> */}
      {/* <Link to="/Catalogue">
        <p className=" absolute top-[80%] left-0 bg-orange-500 sm:hidden md:block text-white text-bold px-2 rotate-90 rounded-md cursor-pointer z-50">
          CATALOGUE
        </p>
      </Link>
      <Link to="/Contactus">
        <p className=" absolute top-[80%] right-0 bg-orange-500 sm:hidden md:block text-white text-bold px-2 rotate-90 rounded-md cursor-pointer z-50">
          Feedback
        </p>
      </Link> */}
      {/* <Link to="https://wa.me/qr/M55JKRWPPDOBE1">
        <p className=" absolute top-[90%] right-0  bg-orange-500 text-white text-bold px-2 rotate-90 rounded-md cursor-pointer z-50">
          Customer care
        </p>
      </Link> */}
    </>
  );
}
