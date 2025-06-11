import React from "react";
import ToolsCard from "../components/ToolsCard";
import TechStack from "../components/TechStack";

const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex justify-end">
          <a
            href="/Cv.pdf"
            download
            className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition duration-300 disabled:opacity-50"
          >
            Download Resume
          </a>
        </div>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">Antima Mishra</h1>
          <p className="text-gray-400 mt-2">
            Software Developer | React Developer | Full Stack Developer
          </p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-center text-sm text-gray-300 space-y-2 sm:space-y-0">
          <span>
            Email:{" "}
            <a
              href="mailto:antimamishra279@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              antimamishra277@gmail.com
            </a>
          </span>
          <span>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/antima-mishra-4aa626254"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              antima-mishra
            </a>
          </span>
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/Antima2004"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              Antima2004
            </a>
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
              Education
            </h2>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">
                BACHELOR OF COMPUTER APPLICATION (BCA)
              </h3>
              <p className="text-sm text-gray-400">
                Smt. P. D. Hinduja Trust's K. P. B. Hinduja College of Commerce
                — <span className="text-cyan-400">2022 - 2025</span>
              </p>
              <p className="mt-2 text-gray-300">
                Coursework in Data Structures, Web Development, Algorithms, and
                Databases.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">HSC (Commerce)</h3>
              <p className="text-sm text-gray-400">
                DurgaDevi Saraf Junior College —{" "}
                <span className="text-cyan-400">2020 - 2022</span>
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-cyan-400">Score-</span>80%
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">SSC</h3>
              <p className="text-sm text-gray-400">
                St Joseph's High School —{" "}
                <span className="text-cyan-400">2020</span>
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-cyan-400">Score-</span>85%
              </p>
            </div>
          </div>

          {/* Experience */}
          {/* <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Experience</h2>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Frontend Developer Intern</h3>
              <p className="text-sm text-gray-400">Tech Startup | Jan 2024 - Apr 2024</p>
              <ul className="list-disc ml-5 mt-2 text-gray-300 space-y-1 text-sm">
                <li>Developed responsive user interfaces with React and Tailwind CSS.</li>
                <li>Worked on optimizing component performance and accessibility.</li>
                <li>Collaborated with designers to match UI/UX prototypes precisely.</li>
              </ul>
            </div>
          </div> */}

          {/* Tools */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Tools</h2>
            <ToolsCard />
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
