import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { ExternalLink, Github, Star, Code2, Smartphone, Globe, TrendingUp, Users } from "lucide-react";
import TradixImg from "../assets/TradixImg.png";
import ArtistlyImg from "../assets/Artisan.png";
import memeverseImg from "../assets/memeverse.png";
import ecommerceImg from "../assets/e-commerce.png";
import summarizerImg from "../assets/summarizer.png";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Tradix - A Trading Journal Website",
      description: "A full-stack web application that helps traders record, track, and analyze their trades with journaling features, performance insights, and trade categorization.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      liveUrl: "https://tradix-xi.vercel.app/",
      githubUrl: "",
      category: "Full Stack",
      featured: true,
      image: TradixImg,
    },
    {
      title: "Artistly - Event & Artist Platform",
      description: "A fictional platform that connects event planners with top-performing artists. Built with Next.js, Tailwind CSS, and React Hook Form, it simulates onboarding, artist browsing, and dashboard functionality.",
      technologies: ["Next.js", "React", "Tailwind CSS", "React Hook Form"],
      liveUrl: "https://artistly-five-sooty.vercel.app/",
      githubUrl: "https://github.com/Antima2004/artistly",
      category: "Web App",
      featured: false,
      image: ArtistlyImg,
    },
    {
      "title": "Memeverse - Meme Sharing Platform",
      "description": "A multi-page, highly interactive website where users can explore, upload, and interact with memes. Includes features like animations, state management, API handling, and performance optimization.",
      "technologies": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      "liveUrl": "https://meme-verse-liart.vercel.app/",
      "githubUrl": "https://github.com/Antima2004/MemeVerse",
      "category": "Social",
      "featured": false,
      "image": memeverseImg
    },
    {
      "title": "Next.js E-Commerce Store",
      "description": "A modern and responsive e-commerce web app built with Next.js 14, Tailwind CSS, and TypeScript. Includes product listing, cart management, and checkout functionality.",
      "technologies": ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
      "liveUrl": "https://e-commerce-ivory-kappa-86.vercel.app/",
      "githubUrl": "https://github.com/Antima2004/e-commerce",
      "category": "Web App",
      "featured": false,
      "image": ecommerceImg
    },
    {
      "title": "AI Text Summarizer",
      "description": "An AI-powered web app that summarizes long articles, documents, or notes into concise key points. Built with React, Node.js, and NLP APIs, this project helps developers and writers save time while handling content-heavy tasks.",
      "technologies": ["React", "Node.js", "Express", "OpenAI API"],
      "liveUrl": "https://4c5d9828-a667-4c52-a604-f66c029d0b7b-00-26414sbg2kakn.kirk.replit.dev/",
      "githubUrl": "https://github.com/Antima2004/ai-text-summarizer",
      "category": "Developer Tools",
      "featured": false,
      "image": summarizerImg
    },
    
  ];

  const categories = ["All", "Full Stack", "Web App", "FinTech", "Developer Tools", "Social", "Mobile"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack": return <Code2 size={16} />;
      case "Web App": return <Globe size={16} />;
      case "FinTech": return <TrendingUp size={16} />;
      case "Developer Tools": return <Code2 size={16} />;
      case "Social": return <Users size={16} />;
      case "Mobile": return <Smartphone size={16} />;
      default: return <Globe size={16} />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of web and mobile projects built with modern tech.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                >
                  {category !== "All" && getCategoryIcon(category)}
                  <span className={category !== "All" ? "ml-1" : ""}>{category}</span>
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star size={12} className="mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(project.category)}
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="border-primary text-primary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Featured Projects */}
          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star size={12} className="mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-primary flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="border-primary text-primary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={18} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

