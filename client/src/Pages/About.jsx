import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left Panel - 40% */}
      <div className="w-full md:w-2/5 bg-cyan-400 flex justify-center md:justify-end items-center relative z-20">
        <ProfileCard />
      </div>

      {/* Right Panel - 60% */}
      <div
        className="
          w-full md:w-3/5 
          px-6 py-10 sm:px-10 sm:py-12 
          md:px-14 md:py-16 
          lg:px-[13.5rem] lg:py-20
          flex flex-col justify-center 
          relative z-10
        "
      >
        <h1 className="text-4xl sm:text-5xl font-bold">Hello</h1>
        <h2 className="text-lg sm:text-xl text-gray-400 mt-2 mb-6">
          Here's who I am & what I do
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            to="/resume"
            className="bg-cyan-400 px-6 py-2 rounded-full text-black font-semibold hover:bg-cyan-300 transition"
          >
            RESUME
          </Link>

          <Link
            to="/projects"
            className="border border-cyan-400 px-6 py-2 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            PROJECTS
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          I'm a passionate and detail-oriented developer with a strong focus on
          creating clean, efficient, and user-friendly web applications. With
          experience in both frontend and backend technologies, I enjoy building
          projects that solve real-world problems and enhance user experiences.
          Whether it's designing intuitive user interfaces or writing robust
          backend logic, I'm always eager to learn, improve, and take on new
          challenges. This portfolio showcases some of the projects I’ve built —
          each one a step forward in my journey as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
