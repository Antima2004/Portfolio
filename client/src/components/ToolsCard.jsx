import React, { useEffect, useRef, useState } from 'react';

const tools = [
  {
    title: 'VS Code',
    image: '/Tools/vscode.png',
    description: 'Visual Studio Code is my favorite code editor. I use it for writing code, debugging, and testing.',
  },
  {
    title: 'Postman',
    image: '/Tools/postman.png',
    description: 'Postman is a collaboration platform for API development, allowing you to design, test, and document APIs efficiently.',
  },
  {
    title: 'GitHub',
    image: '/Tools/github.png',
    description: 'GitHub is a web-based platform for version control and collaboration.',
  },
  {
    title: 'Git',
    image: '/Tools/git.png',
    description: 'Git is a version control system for tracking changes in source code.',
  },
  {
    title: 'XAMPP',
    image: '/Tools/xaamp.png',
    description: 'XAMPP is a web server solution stack package for PHP development.',
  },
  {
    title: 'IntelliJ IDEA',
    image: '/Tools/intellij.png',
    description: 'IntelliJ IDEA is a Java IDE with advanced coding tools.',
  },
  {
    title: 'Replit',
    image: '/Tools/replit.png',
    description: 'Replit is an online IDE to write, run, and share code in various languages.',
  },
  {
    title: 'Wix',
    image: '/Tools/wix.png',
    description: 'Wix is a website builder that allows you to create professional sites without coding.',
  },
  {
    title: 'WordPress',
    image: '/Tools/wp.png',
    description: 'WordPress is a CMS platform used to build blogs, websites, and stores.',
  },
  {
    title: 'Android Studio',
    image: '/Tools/androidst.png',
    description: 'Android Studio is the official IDE for Android development.',
  },
];

const ToolsCard = () => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container && !hovered) {
        container.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div
      className="overflow-x-auto px-4 py-10 scrollbar-hide no-scrollbar"
      ref={scrollRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-2xl p-4 pt-8 text-white shadow-md hover:shadow-xl transition-shadow duration-300 w-72 flex-shrink-0"
          >
            <div className="absolute -top-6 left-6 w-15 h-15 bg-gray-900 p-1 rounded-xl shadow-md z-10">
              <img
                src={tool.image}
                alt={tool.title}
                className="w-12 h-12 object-contain rounded-xl text-center"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{tool.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsCard;
