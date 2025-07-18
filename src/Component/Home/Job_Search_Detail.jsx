// import React from "react";
import "./Job.css";
import "../Home/Home.css";
import { Link } from "react-router-dom";
const CourseDetail = ({ course }) => {
  return (
    <>
      <div id="course">
        <h1 className=" text-3xl md:text-4xl font-bold px-5  py-5 text-center">
          Newest Strategies From Our Career Search Advisors
        </h1>
        <p className=" md:mx-auto px-2 text-lg text-slate-700 md:w-[800px]">
          You’re never alone in your job search. Whether you’re writing a cover
          letter, preparing for the interview or negotiating your salary, our
          resource center has articles that will help you take the next step in
          your career.
        </p>

        <div className="px-5 md:px-52 py-9  text-black md:grid md:grid-cols-4 gap-2 ">
          {course?.map((card, index) => (
            <div key={index}>
              <a href={card.link} target="_blank">
                <div className="flex flex-col justify-evenly gap-2 h-[250px] w-[260px] px-2 py-2 rounded-xl border-white shadow-md shadow-gray-400 card-container">
                  <img
                    src={card.img}
                    className="w-[300px] border-2 h-auto card-image rounded-md"
                    alt="Course"
                  />

                  <h1 className="text-xl font-bold " id="jobcard">
                    {card.title}
                  </h1>
                  {/* <div className="flex gap-1 items-center">
    
    <p id='jobcard'>{card.name}</p>
  </div> */}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className=" flex justify-center py-5">
          <Link to="https://blog.abroadium.com/">
            <button className=" text-white px-2 py-2 text-base rounded-lg font-semibold  hover:shadow-xl hover:shadow-[#0c448f] hover:bg-green-600 bg-[#0c448f]">
              Get More Career Advice
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
