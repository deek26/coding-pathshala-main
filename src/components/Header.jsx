import React from "react";
import { ImWhatsapp } from "react-icons/im";
import logo from "./assets/regular_images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const auth = getAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [title, settitle] = useState("SignIn");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        settitle("Profile");
      } else {
        settitle("SignIn");
      }
    });
  }, [auth]);

  function matchroute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="w-full sm:w-full ">
      <div className="font-sans ">
        <header>
          <div className="flex justify-start md:h-[50px] md:text-inherit text-3xl  items-center bg-black h-[40px]  ">
            <div>
              <ul className="flex space-x-4  cursor-pointer px-4">
                8
                <li
                  className={`text-white font-semibold text-[15px] ${
                    matchroute("/MyAccount") ||
                    (matchroute("/Profile") && " text-white border-b-red-600")
                  } `}
                  onClick={() => navigate("/Profile")}
                >
                  {title}
                </li>
                <li className={`bg-white w-[2px] h-6 mt-[6px]`}></li>
                <li
                  className={`text-white font-semibold text-[15px] `}
                  onClick={() => navigate("/FAQS")}
                >
                  FAQs
                </li>
                <li className={`bg-white w-[2px] h-6 mt-[6px] `}></li>
                <li
                  className={`text-white font-semibold text-[15px] flex justify-center items-center `}
                  onClick={() => navigate("/Contactus")}
                >
                  Contact Us
                  <ImWhatsapp className="ml-3 h-5 w-5" />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[28%] m-auto hidden md:block">
            <div className=" relative h-12 p-[4px]  m-2 border-[4px] rounded-3xl border-orange-400">
              <input
                type="search"
                placeholder="Search entire store here...."
                className="border-[2px] border-black w-full h-full rounded-2xl pl-4 outline-none"
              />
              <IoSearch
                onClick={console.log("kya haal hai")}
                className=" h-[30px] p-[3px] w-[45px]  text-[5px] bg-green-200 rounded-3xl absolute top-[5px] right-[6px]  "
              />
              <select className=" hidden w-[170px] absolute right-[60px] outline-none rounded bg-gray-200 py-[12px] px-2">
                <option value="All">All Categories</option>
                <option value="5">AIR FORCE </option>
                <option value="21">ARITHMETIC/MATHS </option>
                <option value="26">B.ED./TEACHERS APTITUDE </option>
                <option value="3">BANK CLERK </option>
                <option value="4">BANK P.O. </option>
                <option value="27">CSIR-UGC NET/JRF/SET </option>
                <option value="1"> &nbsp;» UGC </option>
                <option value="2">
                  {" "}
                  &nbsp;» UGC NET/JRF Exam. Solved Papers{" "}
                </option>
                <option value="3"> &nbsp;» CSIR-UGC Solved Papers </option>
                <option value="27">CSIR-UGC NET/JRF/SET </option>
                <option value="121">DDA EXAM. </option>
                <option value="1"> &nbsp;» Delhi Development Authority </option>
                <option value="2"> &nbsp;» Delhi Development Authority </option>
                <option value="121">DDA EXAM. </option>
                <option value="119">DEFENCE SERVICES EXAM. </option>
                <option value="120">DELHI SSSB </option>
                <option value="10">ENGG. EXAM. </option>
                <option value="123">EPFO/ESIC </option>
                <option value="24">ESSAY/LETTERS </option>
                <option value="32">GATE/PSUs/JTO/ DRDO/IES/ISRO/TTA </option>
                <option value="33">GENERAL BOOKS </option>
                <option value="20">GENERAL ENGLISH </option>
                <option value="19">GENERAL KNOWLEDGE/STATE G.K. </option>
                <option value="124">INTELLIGENCE BUREAU (I.B.) </option>
                <option value="23">INTELLIGENCE TEST </option>
                <option value="25">INTERVIEW/PERSONALITY DEVELOPMENT </option>
                <option value="31">LAW SERIES/JUDICIAL SERVICES </option>
                <option value="115">
                  Lecturer/Trained Graduate Teacher Rect. Exam.{" "}
                </option>
                <option value="7">LIC/GIC/OIC </option>
                <option value="14">
                  MBA/MCA/BBA/BCA/ BIT/H.M./LLB./CAT/TTM{" "}
                </option>
                <option value="125">MISCELLANEOUS BOOKS </option>
                <option value="15">N.D.A./C.D.S. </option>
                <option value="9">NAVODAYA VIDYALAYA </option>
                <option value="17">NTSE/STSE </option>
                <option value="133">ONLINE TEST </option>
                <option value="11">PMT/PET/NURSING </option>
                <option value="122">POLICE CONSTABLE </option>
                <option value="13">POLICE SUB-INSPECTORS </option>
                <option value="16">POLYTECHNIC </option>
                <option value="6">RAILWAY TECHNICAL/ENGG. DIPLOMA </option>
                <option value="118">RAILWAY/S.C.R.A. EXAM. </option>
                <option value="1">RECENT RELEASES (ENGLISH BOOKS) </option>
                <option value="8">SAINIK/MILITARY SCHOOL EXAM. </option>
                <option value="12">SSC </option>
                <option value="1"> &nbsp;» Higher Secondary Level </option>
                <option value="2"> &nbsp;» Graduate Level </option>
                <option value="3"> &nbsp;» Hindi Translator </option>
                <option value="4"> &nbsp;» Section Officers </option>
                <option value="12">SSC </option>
                <option value="28">TEACHER RECRUITMENT EXAMS. </option>
                <option value="1"> &nbsp;» NVS </option>
                <option value="2"> &nbsp;» KVS </option>
                <option value="3"> &nbsp;» DELHI SSSB </option>
                <option value="4"> &nbsp;» TET </option>
                <option value="5"> &nbsp;» CTET </option>
                <option value="28">TEACHER RECRUITMENT EXAMS. </option>
                <option value="29">
                  UNION &amp; STATE CIVIL SERVICES PRE{" "}
                </option>
                <option value="1"> &nbsp;» SYLLABUS </option>
                <option value="29">
                  UNION &amp; STATE CIVIL SERVICES PRE{" "}
                </option>
                <option value="116">
                  Upkar Career Development Series Ki Pustakain{" "}
                </option>
                <option value="81">
                  अध्यापक/शिक्षक भर्ती/पात्रता परीक्षा/संविदा परीक्षा{" "}
                </option>
                <option value="1"> &nbsp;» नवोदय विद्यालय समिति </option>
                <option value="2"> &nbsp;» केन्द्रीय विद्यालय संगठन </option>
                <option value="3">
                  {" "}
                  &nbsp;» दिल्ली अधीनस्थ सेवा चयन बोर्ड{" "}
                </option>
                <option value="4"> &nbsp;» झारखण्ड </option>
                <option value="5"> &nbsp;» राजस्थान </option>
                <option value="6"> &nbsp;» अध्यापक पात्रता परीक्षा </option>
                <option value="7">
                  {" "}
                  &nbsp;» राजस्थान अध्यापक पात्रता परीक्षा प{" "}
                </option>
                <option value="8">
                  {" "}
                  &nbsp;» उत्तर प्रदेश शिक्षक पात्रता परीक्षा{" "}
                </option>
                <option value="9">
                  {" "}
                  &nbsp;» उत्तराखण्ड अध्यापक पात्रता परीक्षा{" "}
                </option>
                <option value="10">
                  {" "}
                  &nbsp;» केन्द्रीय शिक्षक पात्रता परीक्षा{" "}
                </option>
                <option value="11">
                  {" "}
                  &nbsp;» हरियाणा अध्यापक पात्रता परीक्षा{" "}
                </option>
                <option value="12">
                  {" "}
                  &nbsp;» बिहार अध्यापक पात्रता परीक्षा{" "}
                </option>
                <option value="13">
                  {" "}
                  &nbsp;» बिहार सेकण्डरी एवं हायर सेकण्डरी शिक्षक पात्रता
                  परीक्षा{" "}
                </option>
                <option value="14">
                  {" "}
                  &nbsp;» झारखण्ड शिक्षक पात्रता परीक्षा{" "}
                </option>
                <option value="15">
                  {" "}
                  &nbsp;» छत्तीसगढ़ शिक्षक पात्रता परीक्षा{" "}
                </option>
                <option value="16">
                  {" "}
                  &nbsp;» मध्य प्रदेश संविदा शाला शिक्षक पात्रता परीक्षा{" "}
                </option>
                <option value="81">
                  अध्यापक/शिक्षक भर्ती/पात्रता परीक्षा/संविदा परीक्षा{" "}
                </option>
                <option value="88">अन्य पुस्तकें </option>
                <option value="35">इंजीनियरिंग परीक्षा </option>
                <option value="130">इन्टैलीजैन्स ब्यूरो (आई.बी.) </option>
                <option value="47">ई.पी.एफ.ओ./ई.एस.आई.सी. </option>
                <option value="89">
                  उपकार कैरियर डेवलपमेंट सीरीज की पुस्तकें{" "}
                </option>
                <option value="46">एन.डी.ए./सी.डी.एस. </option>
                <option value="38">एल.आई.सी./जी.आई.सी. परीक्षा </option>
                <option value="55">
                  एल–एल.बी./सी.टी./जे.बी.टी./बी.ए./बी.कॉम./होटल मैनेजमेंट{" "}
                </option>
                <option value="39">एस.एस.सी. </option>
                <option value="1"> &nbsp;» हायर सेकण्डरी लेवल </option>
                <option value="2"> &nbsp;» स्नातक स्तरीय </option>
                <option value="3"> &nbsp;» सेक्शन ऑफीसर्स </option>
                <option value="39">एस.एस.सी. </option>
                <option value="77">गणित </option>
                <option value="57">छात्रवृत्ति परीक्षाएँ </option>
                <option value="79">टंकण कला </option>
                <option value="128">डाक विभाग </option>
                <option value="126">
                  दिल्ली अधीनस्थ सेवा चयन बोर्ड परीक्षा (DSSSB){" "}
                </option>
                <option value="84">दिल्ली पी.जी.टी. तथा टी.जी.टी. </option>
                <option value="127">दिल्ली विकास प्राधिकरण </option>
                <option value="2">नवीन प्रकाशन </option>
                <option value="42">नवोदय विद्यालय </option>
                <option value="75">निबन्ध </option>
                <option value="34">पी.एम.टी./पी.ई.टी. </option>
                <option value="49">पुलिस काँस्टेबिल/आरक्षक परीक्षा </option>
                <option value="1"> &nbsp;» उत्तर प्रदेश </option>
                <option value="2"> &nbsp;» उत्तराखण्ड </option>
                <option value="3"> &nbsp;» राजस्थान </option>
                <option value="4"> &nbsp;» मध्य प्रदेश </option>
                <option value="5"> &nbsp;» बिहार </option>
                <option value="7"> &nbsp;» छत्तीसगढ़ </option>
                <option value="6"> &nbsp;» झारखण्ड </option>
                <option value="8"> &nbsp;» दिल्ली/चण्डीगढ़ </option>
                <option value="9"> &nbsp;» रेलवे </option>
                <option value="10"> &nbsp;» B.S.F. </option>
                <option value="11"> &nbsp;» C.R.P.F. </option>
                <option value="12"> &nbsp;» CRPF </option>
                <option value="13"> &nbsp;» ITBP </option>
                <option value="14"> &nbsp;» SSB </option>
                <option value="15"> &nbsp;» SSC </option>
                <option value="49">पुलिस काँस्टेबिल/आरक्षक परीक्षा </option>
                <option value="48">
                  पुलिस सब–इंस्पेक्टर/असिस्टेंट सब–इंस्पेक्टर परीक्षा{" "}
                </option>
                <option value="1"> &nbsp;» उत्तर प्रदेश </option>
                <option value="2"> &nbsp;» उत्तराखण्ड </option>
                <option value="3"> &nbsp;» राजस्थान </option>
                <option value="4"> &nbsp;» मध्य प्रदेश </option>
                <option value="5"> &nbsp;» छत्तीसगढ़ </option>
                <option value="6"> &nbsp;» बिहार </option>
                <option value="7"> &nbsp;» झारखण्ड </option>
                <option value="8"> &nbsp;» हरियाणा </option>
                <option value="9"> &nbsp;» दिल्ली </option>
                <option value="10"> &nbsp;» आर.पी.एफ./आर.पी.एस.एफ </option>
                <option value="11"> &nbsp;» BSF </option>
                <option value="12"> &nbsp;» CISF </option>
                <option value="13"> &nbsp;» ITBP </option>
                <option value="14"> &nbsp;» C.R.P.F. </option>
                <option value="15"> &nbsp;» CAPF/CPF </option>
                <option value="16"> &nbsp;» SSB </option>
                <option value="48">
                  पुलिस सब–इंस्पेक्टर/असिस्टेंट सब–इंस्पेक्टर परीक्षा{" "}
                </option>
                <option value="50">
                  पॉलिटेक्निक/आई.टी.आई. प्रवेश परीक्षा{" "}
                </option>
                <option value="1"> &nbsp;» उत्तर प्रदेश /उत्तराखण्ड </option>
                <option value="2"> &nbsp;» मध्य प्रदेश </option>
                <option value="3"> &nbsp;» छत्तीसगढ़ </option>
                <option value="4"> &nbsp;» बिहार </option>
                <option value="5"> &nbsp;» झारखण्ड </option>
                <option value="6"> &nbsp;» राजस्थान </option>
                <option value="7"> &nbsp;» हरियाणा </option>
                <option value="8"> &nbsp;» दिल्ली </option>
                <option value="50">
                  पॉलिटेक्निक/आई.टी.आई. प्रवेश परीक्षा{" "}
                </option>
                <option value="131">प्रदेश हेतु गाइडें </option>
                <option value="1"> &nbsp;» मध्य प्रदेश </option>
                <option value="2"> &nbsp;» छत्तीसगढ़ </option>
                <option value="3"> &nbsp;» बिहार </option>
                <option value="4"> &nbsp;» झारखण्ड </option>
                <option value="5"> &nbsp;» उत्तर प्रदेश </option>
                <option value="6"> &nbsp;» उत्तराखण्ड </option>
                <option value="7"> &nbsp;» हरियाणा </option>
                <option value="8"> &nbsp;» राजस्थान </option>
                <option value="131">प्रदेश हेतु गाइडें </option>
                <option value="83">
                  प्रवक्‍ता/प्रशिक्षित स्नातक शिक्षक भर्ती परीक्षा{" "}
                </option>
                <option value="1"> &nbsp;» PGT </option>
                <option value="2"> &nbsp;» प्रवक्ता भर्ती परीक्षा </option>
                <option value="3"> &nbsp;» TGT </option>
                <option value="4">
                  {" "}
                  &nbsp;» प्रशिक्षित स्नातक शिक्षक भर्ती{" "}
                </option>
                <option value="5"> &nbsp;» उत्तराखण्ड </option>
                <option value="6">
                  {" "}
                  &nbsp;» उत्तराखण्ड अधीनस्थ शिक्षा (प्रशिक्षित स्नातक){" "}
                </option>
                <option value="7"> &nbsp;» Delhi PGT </option>
                <option value="8"> &nbsp;» Delhi TGT </option>
                <option value="83">
                  प्रवक्‍ता/प्रशिक्षित स्नातक शिक्षक भर्ती परीक्षा{" "}
                </option>
                <option value="56">बी.एड./एम.एड./डी.एड./शिक्षक अभिरूचि </option>
                <option value="36">बैंक क्लर्क&nbsp;परीक्षा </option>
                <option value="37">बैंक पी. ओ. परीक्षा </option>
                <option value="78">बौद्धिक योग्यता </option>
                <option value="82">
                  मध्य प्रदेश संविदा शाला शिक्षक पत्राता परीक्षा{" "}
                </option>
                <option value="80">यू.जी.सी.–नेट/जे.आर.एफ./सेट </option>
                <option value="1">
                  {" "}
                  &nbsp;» यू.जी.सी. नेट- सॉल्वड् पेपर्स{" "}
                </option>
                <option value="80">यू.जी.सी.–नेट/जे.आर.एफ./सेट </option>
                <option value="44">रक्षा </option>
                <option value="132">राज्य लोक सेवा आयोग </option>
                <option value="1"> &nbsp;» मध्य प्रदेश </option>
                <option value="2"> &nbsp;» उत्तर प्रदेश </option>
                <option value="3"> &nbsp;» उत्तराखण्ड </option>
                <option value="4"> &nbsp;» आर.ए.एस./आर.टी.एस. </option>
                <option value="5"> &nbsp;» झारखण्ड </option>
                <option value="6"> &nbsp;» छत्तीसगढ़ </option>
                <option value="132">राज्य लोक सेवा आयोग </option>
                <option value="41">रेलवे टेक्नीकल/इंजी. डिप्लोमा </option>
                <option value="40">रेलवे/एस.सी.आर.ए. परीक्षा </option>
                <option value="45">वायु सैनिक </option>
                <option value="87">शब्दावली </option>
                <option value="76">साक्षात्कार </option>
                <option value="68">सामान्य ज्ञान </option>
                <option value="1"> &nbsp;» दिल्ली </option>
                <option value="2"> &nbsp;» हरियाणा </option>
                <option value="3"> &nbsp;» हिमाचल प्रदेश </option>
                <option value="4"> &nbsp;» राजस्थान </option>
                <option value="5"> &nbsp;» उत्तर प्रदेश </option>
                <option value="6"> &nbsp;» उत्तराखण्ड </option>
                <option value="7"> &nbsp;» मध्य प्रदेश </option>
                <option value="8"> &nbsp;» छत्तीसगढ़ </option>
                <option value="9"> &nbsp;» बिहार </option>
                <option value="10"> &nbsp;» झारखण्ड </option>
                <option value="68">सामान्य ज्ञान </option>
                <option value="74">सामान्य हिन्दी </option>
                <option value="51">सिविल जज/ए.पी.ओ./विधि सीरीज </option>
                <option value="58">सिविल सर्विसिज (प्रारम्भिक) परीक्षा </option>
                <option value="43">
                  सैनिक स्कूल/म.प्र. उत्कृष्टता विद्यालय/नेतरहाट
                  विद्यालय/मिलिटरी स्कूल{" "}
                </option>
                <option value="1"> &nbsp;» मिलिटरी स्कूल </option>
                <option value="43">
                  सैनिक स्कूल/म.प्र. उत्कृष्टता विद्यालय/नेतरहाट
                  विद्यालय/मिलिटरी स्कूल{" "}
                </option>
              </select>
            </div>
          </div>

          <div className="flex   text-sm justify-center md:flex-wrap md:mb-[2px] md:justify-center ">
            <div>
              <img
                src={logo}
                alt="logo"
                className="h-[100px] w-[200px] cursor-pointer "
                onClick={() => navigate("/")}
              />
            </div>

            <div className="flex items-center space-x-5  relative">
              <div className="flex items-center">
                {/* <FiUsers className="h-[30px] w-[40px]" /> */}

                <div className="text-md">
                  {/* <p>
                    <Link to={"/Signin"}> Sign In</Link>{" "}
                  </p>
                  <p>
                    <Link to={"/Signup"}>Create an Account</Link>{" "}
                  </p> */}
                </div>
              </div>

              <div className="flex items-center">
                <FiHeart className="h-[30px] w-[40px]" />

                <div className="text-md">
                  <Link to="/Favourites">
                    <p>
                      <span className="text-sm font-mono">Favorite</span>
                      <br />
                      {/* My Wish List */}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <BsHandbag className="h-[30x] w-[40px]" />

                <div className="text-md">
                  <Link to="/Mycart">
                    <p>
                      <span>My Cart</span>
                      <br />
                      {/* <span>₹0.00</span> */}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hidden md:flex  md:h-[50px] md:justify-center text-white space-x-[50px] items-center bg-black h-[60px] font-semibold text-sm cursor-pointer justify-center w-[80%] m-auto rounded-3xl
         "
          >
            {/* <div className="flex items-center group pl-10 space-x-8 ml-[100px] border-[#6b705c] border-r-[1px] relative h-full  hover:bg-blue-600  ">
              <div className="text-white">ALL CATEGORIES</div>

              <div className="flex flex-col space-y-1 justify-center pr-[100px]">
                <div className=" w-7 h-[3px] bg-white"></div>
                <div className=" w-7 h-[4px] bg-white"></div>
                <div className=" w-7 h-[3px] bg-white"></div>
              </div>
              <div className=" hidden group-hover:block absolute top-[60px] left-[-40px] w-[359px] z-40 list-none bg-blue-50 text-black text-md space-y-2 font-semi-bold p-5 ">
                <li className="hover:text-yellow-400  ">
                  <Link>Civil Services &nbsp; &#62; </Link>
                </li>
                <hr />
                <li className="hover:text-yellow-400  ">
                  <Link>College Admissions &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-400  ">
                  <Link>School &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-400  ">
                  <Link>Govt. Vacancy Books &nbsp; &#62;</Link>
                </li>
                <hr />
                <li className="hover:text-yellow-400  ">
                  <Link>General Books &nbsp; &#62;</Link>
                </li>
              </div>
            </div> */}
            <div className="   ">
              <div
                className="flex space-x-2 items-center cursor-pointer  group relative h-full  py-3 px-2
               hover:rounded-lg hover:bg-green-500  rounded-lg   "
              >
                <p className=" sm:text-xs lg:text-md">Our Products</p>
                <IoIosArrowDown className="" />
                <div
                  className="hidden group-hover:block   text-black list-none  absolute top-[55px]
                left-[-10px] z-30 p-4  w-[200px]   space-y-2 rounded-md bg-blue-50
              "
                >
                  <li>
                    <Link
                      to="/Books"
                      className="hover:text-green-400  hover:font-bold "
                    >
                      Books
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Examcombos"
                      className="hover:text-green-400  hover:font-bold "
                    >
                      Exam Combos
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      to="/Onlinetests"
                      className="hover:text-green-400  hover:font-bold "
                    >
                      Online Test
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link
                      to="/Videocourses"
                      className="hover:text-green-400  hover:font-bold "
                    >
                      Video Courses
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      to="/Magazines"
                      className="hover:text-green-400  hover:font-bold "
                    >
                      Magazines
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div
              className="  flex space-x-2 items-center cursor-pointer  group relative h-full  py-3 px-2
               hover:rounded-lg tracking-tighter hover:bg-green-500  rounded-lg   "
            >
              <p className="hover:bg-green-500 px-2 rounded-lg sm:text-xs lg:text-md">
                Grow With Us
              </p>
              <IoIosArrowDown />
              <div
                className="hidden group-hover:block  bg-blue-50 text-black list-none  absolute top-[55px]
                left-[-10px] z-30 p-4  w-[200px]   space-y-2 rounded-md 
              "
              >
                <li>
                  <Link
                    to="/Authors"
                    className="hover:text-green-400  hover:font-bold "
                  >
                    Authors
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Affiliates"
                    className="hover:text-green-400  hover:font-bold "
                  >
                    Affiliates
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Partners"
                    className="hover:text-green-400  hover:font-bold "
                  >
                    Partners
                  </Link>
                </li>
              </div>
            </div>
            <div className="cursor-pointer  hover:bg-green-500 px-2 hover:rounded-lg  flex items-center h-full  ">
              <Link to="/Coaching">
                <p className="sm:text-xs lg:text-md">Coaching Institues</p>
              </Link>
            </div>
            {/* <div className="cursor-pointer  hover:bg-green-500 px-2 hover:rounded-lg h-full pt-[18px] ">
              <p>Media Coverage</p>
            </div> */}

            <div className="flex space-x-2 items-center cursor-pointer h-full hover:bg-green-500 px-2 hover:rounded-lg">
              <Link to="Examupdate">
                <p className="sm:text-xs lg:text-md">Exam Update</p>
              </Link>
              <IoIosArrowDown />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
