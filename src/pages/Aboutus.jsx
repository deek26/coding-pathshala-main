import React from "react";

export default function Aboutus() {
  return (
    <div>
      <h1 className="text-4xl font-semi-bold">About us</h1>
      <img src="aboutus.png" alt="about us image" className="m-auto" />

      <div className="w-[60%] m-auto text-[16px] space-y-10">
        <p>
          DISHA Publication is India's leading publisher and distributor of
          print and digital learning material with strengths in school books,
          competitive exam books, e-books and online test series. DISHA has been
          awarded the
          <b className="text-lg font-sm text-blue-900">
            "Best Exam Prep Company of 2022"
          </b>
          by BW Business World and 2nd among India's Top Academic Publishers by
          the Minister of State for Education Sh. Rajkumar Ranjan Singh, during
          <b className="text-lg font-sm text-blue-900 px-[4px]">
            The People's Choice Publisher Award
          </b>
          by Front List and The Federation of Indian Publishers with Nielsen in
          March 2022.
        </p>

        <p>
          With a history of 20+ years and a catalogue of 800+ books, DISHA
          Publication provides online learning options, varying from eBooks,
          online tests, online courses, and mentorship, while also being a
          leading provider of K–12 education content and material for
          competitive exams.
        </p>
      </div>

      <div className="  text-sm  relative">
        <img src="about2.png" alt="" />
        <p className=" lg:block hidden w-[50%] absolute left-[100px] bottom-[250px]">
          DISHA caters to not just the student's academic abilities but also
          prepares them for the bigger challenges of life. The company has
          always had the upper hand in its approach to executing innovative
          ideas in revolutionizing education across the country. The vision is
          to provide the best study material with greater accuracy and
          resourcefulness for the aspirants to prepare most effectively across
          various verticals like competitive exams, govt. job vacancy exams,
          school learning, and e-learning.
        </p>
      </div>
    </div>
  );
}
