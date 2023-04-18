import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { FaLightbulb } from "react-icons/fa";

export default function Videocourses() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('courses.png')",
        }}
        className="bg-cyan-200 py-20 relative overflow-hidden"
      >
        <img
          src="courses.png"
          alt=""
          className="absolute top-5 right-20 h-[600px]"
        />

        <div className="bg-cover h-[500px]   space-y-5 p-10 ">
          <p className="text-2xl font-mono tracking-tighter">
            Uplift your UPSC CSE Preparation with Disha
          </p>
          <p className="text-3xl font-bold">Booster Crash Course</p>
          <p className="text-3xl font-bold">IAS Prelims 2023</p>
          <p className="text-2xl font-mono tracking-tight">
            Now FREE for all Aspirants
          </p>
          <button
            disabled="disabled"
            className="bg-yellow-500 rounded-full p-2 font-semibold text-white"
          >
            Enroll for free
          </button>
        </div>

        <div className="flex justify-evenly my-10 ">
          <div className="w-[30%] space-y-2 font-mono">
            <p className="font-bold text-2xl text-gray-700">
              The Problem / Need
            </p>

            <p className="font-semibold">
              After interacting with thousands of students and interviewing
              100’s of Toppers, I realized that most of the students scoreless
              not because of lack of knowledge or hard work or intelligence but
              because of lack of guidance, planned approach and poor study
              techniques. So, the problem most of the students face is not of
              potential but of converting that potential into performance.
            </p>
          </div>
          <p className="w-[30%] font-mono">
            The basic differentiating factor between a topper and you is the
            study techniques and proper strategy. Hard work coupled with
            efficient and appropriate study techniques and proper strategy
            brings achievement. And that’s what your school doesn’t teach you.
            They’ll tell you WHAT to study but never focus on HOW to study.
            Another missing link is counseling support and guidance. There is no
            place to vent out their frustration, anger, and anxiety. New normal
            of social distancing and isolation has added to the misery and
            created pressure cooker like situation ready to burst any time.
          </p>
        </div>
        <div className="w-[80%] m-auto font-mono space-y-2">
          <p className="text-center text-3xl text-gray-700 font-semibold ">
            The Solution
          </p>
          <p>
            With these insights, we have embarked on a mission to find the real
            ingredients of academic success and give students the tools for peak
            performance. Our programme “Score more for Sure” has been developed
            after interaction with hundreds of Toppers and share the study
            techniques and strategies adopted by Toppers. The programme focuses
            on 3 broad areas
          </p>
        </div>
        <div className="flex w-[70%] m-auto  my-10 font-mono border border-gray-300">
          <div className="w-[30%] space-y-3 border-gray-300 border-r p-4 ">
            <FaStarOfLife className="m-auto text-4xl" />

            <p className="text-2xl font-bold text-center">
              Effective Study Techniques
            </p>
            <p className="">
              Apart from working hard, success today demands working smart. You
              require the right study skills to improve your efficiency
            </p>
          </div>
          <div className="w-[30%] space-y-3 border-gray-300 border-r p-4 ">
            <FcGallery className="m-auto text-4xl" />

            <p className="text-2xl font-bold text-center">Correct Strategy</p>
            <p className="">
              Strategy starts right from making a daily plan and goes till the
              time you write the exam .
            </p>
          </div>
          <div className="w-[30%] space-y-3  p-4 m-auto ">
            <FaLightbulb className="m-auto text-4xl" />

            <p className="text-2xl font-bold text-center">
              Guidance and Support
            </p>
            <p className="text-center">
              Keeps you motivated and on the right track. There comes a time
              when you’ll need an outlet for your feelings, especially in this
              post corona world where everyone’s behind the masks and closed
              doors. icons
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-center font-semibold text-2xl">
            Some of the areas touched in our programme are
          </p>
          <div className="flex justify-evenly ">
            <ul className="list-disc">
              <li>Planning & Goal Setting</li>
              <li>Techniques for Problem-solving</li>
              <li>Staying motivated and happy</li>
            </ul>
            <ul className="list-disc">
              <li>Staying motivated and happy</li>
              <li>Note-taking</li>
              <li> Revise at 10X speed</li>
            </ul>
            <ul className="list-disc">
              <li> Handling Stress, anxiety and failures</li>
              <li> How to develop Interest/Concentration</li>
              <li>Striking balance between school and Competitive Exams</li>
            </ul>
          </div>
        </div>
        <p className="text-center font-semibold text-lg py-8">
          You are just a click away!
        </p>
        <div className="flex flex-wrap m-auto gap-6 justify-center">
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
          <div className=" shadow-md hover:shadow-xl rounded w-[50%]">
            <img src="coreses.webp" alt="" />
            <div className="p-4 space-y-2">
              <p className="font-semibold">UPSC Decoded</p>
              <p className="text-sm text-gray-500">
                Learn how you can CRACK UPSC in a single attempt. Hear from 8
                national toppers the answers to 16 important questions that ...
              </p>
              <p className="font-bold"> ₹ 165</p>
            </div>
          </div>
        </div>
        <div
          className="py-10 bg-cover mt-8 w-[80%] m-auto h-[250px]"
          style={{ backgroundImage: "url('aboutus.png')" }}
        >
          <p className="text-3xl font-bold text-center">OUR MISSION</p>
          <p className="text-lg text-center font-semibold font-mono">
            Our programme aims to empower millions of students by helping them
            reach their full potential and excel not only in exams but also in
            life. We want to make the process of scoring marks and cracking
            exams an exciting and stress-free journey.
          </p>
        </div>
      </div>
    </>
  );
}
