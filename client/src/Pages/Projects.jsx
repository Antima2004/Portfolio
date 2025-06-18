import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Tradix – Trade Journal',
    description: 'A web app to track trading activities and insights using MERN stack.',
    link: 'https://tradix-xi.vercel.app/home',
  },
  {
    title: 'AI-Text-Summarizer App',
    description: 'An AI-powered text summarization app that condenses long articles into concise summaries.',
    link: 'https://replit.com/@AntimaMishra1/AI-Text-Summarizer-App-Starter-Template?v=1',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing skills, projects, and achievements.',
    link: '#',
  },
  {
    title: 'Meme Verse',
    description: 'A platform for creating and sharing memes with a user-friendly interface.',
    link: 'https://meme-verse-liart.vercel.app/',
  },
  {
    title: 'Html5 And CSS Portfolio',
    description: 'A simple portfolio website built with HTML5 and CSS showcasing projects and skills.',
    link: 'https://github.com/Antima2004/Portfolio',
  },
  {
    title: 'React E-commerce Website',
    description: 'A Frontend e-commerce website built with React and Tailwind CSS.',
    link: 'https://github.com/Antima2004/frontend',
  },
  {
    title:'Nextjs-search-results-app',
    description:'A search results Static webapp built with Next.js and tailwindcss.',
    link:'https://search-results-app.vercel.app/'
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-8 mt-0">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Project Page
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-cyan-200 max-w-2xl text-center mb-8 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        This is a showcase of my recent projects built with React, Tailwind CSS, and modern tools. Explore innovative UI/UX, clean code, and web animations that bring ideas to life.
      </motion.p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg p-6 border border-cyan-400 hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2">{project.title}</h2>
            <p className="text-cyan-200 mb-4 text-sm sm:text-base">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-300 hover:underline text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
