import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const ProfileCard = ({
  Firstname = "Antima",
  Lastname = "Mishra",
  image = "/AntimaPhoto.jpg",
  roles = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
  ],
  socialLinks = {
    github: "https://github.com/Antima2004",
    facebook: "https://www.facebook.com/antima.mishra.5832",
    instagram:
      "https://www.instagram.com/__antima.m_12.02/profilecard/?igsh=cTNjM3Rqbmp2MTE0",
    linkedin:
      "https://www.linkedin.com/in/antima-mishra-4aa626254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
}) => {
  const socialIcons = {
    github: <FaGithub />,
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <div className="w-full flex justify-center items-center bg-cyan-400 relative z-20 py-10">
      <div
        className="
              bg-black p-10 text-center rounded-none shadow-white-glow
    w-[90%] sm:w-[22rem] md:w-[26rem] lg:w-[20rem]
    h-[34rem] sm:h-[36rem] md:h-[38rem] lg:h-[30rem]
    flex flex-col justify-between
    transform md:-translate-x-[-70%] transition-transform duration-300

        "
      >
        <div className="mt-6">
          <img
            src={image}
            alt="profile"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-cyan-400"
          />

          <div className="text-white mt-6 leading-tight">
            <h2 className="text-3xl font-semibold flex justify-center gap-2 flex-wrap">
              <span>{Firstname}</span>
              <span>{Lastname}</span>
            </h2>
          </div>

          <div className="w-12 h-1 bg-cyan-400 mx-auto my-6" />

          <p className="uppercase text-base text-white font-semibold">
            <Typewriter
              words={roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>

        <div className="pt-5 border-t border-cyan-400 mt-4">
          <div className="flex justify-center gap-6 text-cyan-400 text-2xl">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {socialIcons[platform]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
