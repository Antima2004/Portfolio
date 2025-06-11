import React, { useEffect, useRef } from "react";
import {
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiPhp,
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const techStack = [
  { name: "C", icon: <FaCuttlefish size={50} /> },
  { name: "C++", icon: <SiCplusplus size={50} /> },
  { name: "Java", icon: <DiJava size={50} /> },
  { name: "Python", icon: <SiPython size={50} /> },
  { name: "HTML", icon: <SiHtml5 size={50} /> },
  { name: "CSS", icon: <SiCss3 size={50} /> },
  { name: "React", icon: <SiReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "Node.js", icon: <SiNodedotjs size={50} /> },
  { name: "JavaScript", icon: <SiJavascript size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={50} /> },
  { name: ".NET", icon: <SiDotnet size={50} /> },
  { name: "PHP", icon: <SiPhp size={50} /> },
];

const TechStackSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };

    // Clone the items to make the scroll loop look seamless
    const clone = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clone;

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-hidden whitespace-nowrap relative flex gap-8 py-4 px-2 no-scrollbar"
    >
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="group relative flex flex-col items-center shrink-0 px-4"
        >
          <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
            {tech.icon}
          </div>
          <span className="absolute bottom-[-2rem] text-xs bg-gray-800 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackSlider;
