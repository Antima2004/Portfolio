import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Download, Mail, MapPin, ExternalLink, Award, GraduationCap, Briefcase, Code, Heart, Star } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Resume = () => {
  const experience = [
    {
      title: "Web Developer Internship",
      company: "Prodigy InfoTech",
      period: "2025 - Present",
      location: "Remote",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led a team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer Internship",
      company: "Vaishnav technologies",
      period: "2024 - 2025",
      location: "Remote",
      description: "Built responsive user interfaces and improved user experience for a growing fintech startup. Collaborated with designers and backend developers to deliver high-quality features.",
      achievements: [
        "Reduced page load time by 50% through optimization",
        "Implemented responsive design improving mobile usage by 30%",
        "Created reusable component library used across products"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "CodSoft",
      period: "2023 - 2024",
      location: "Remote",
      description: "Developed and maintained multiple client projects including e-commerce platforms, corporate websites, and web applications using modern frameworks and technologies.",
      achievements: [
        "Delivered 15+ projects on time and within budget",
        "Increased client satisfaction score by 25%",
        "Introduced React testing framework improving code reliability"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor Of Computer Application (BCA)",
      school: "Smt. P. D. Hinduja Trust's K. P. B. Hinduja College of Commerce",
      period: "2022 - 2025",
      location: "Charni Road, Mumbai",
      gpa: "8.0/10.0",
      honors: "Web Development"
    },
    {
      degree: "HSC",
      school: "Durgadevi Saraf Junior College",
      period: "2020-2022",
      location: "Malad,Mumbai",
      percentage: "80%"
    },
    {
      degree: "SSC",
      school: "St Joseph`S High School",
      period: "2020",
      location: "Mira Road,Mumbai",
      percentage: "85%"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
    "Backend": ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
    "DevOps & Cloud": ["AWS", "CI/CD", "GitHub Actions", "Vercel", "Netlify"],
    "Tools & Other": ["Git", "VS Code", "Figma", "Postman", "Webpack", "Vite", "Github", "Intellij", "Replit"]
  };

  const certifications = [
    {
      name: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/17026569?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Introduction to Large Language Models",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/17026686?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Introduction to Responsible AI",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/17026848?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Prompt Design in Vertex AI",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/17022913?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Responsible AI: Applying AI Principles with Google Cloud",
      issuer: "Google Cloud Skills Boost",
      date: "2025",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/17027994?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Frontend Development",
      issuer: "OneRoadmap",
      date: "2025",
      credentialUrl: "https://oneroadmap.io/skills/frontend/certificate/CERT-6989B265"
    },
    {
      name: "Accenture Nordics - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2024",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_THcxy2t35LR7dtw4s_1732423422885_completion_certificate.pdf"
    },
    {
      name: "Certificate for HTML and CSS",
      issuer: "LetsUpgrade",
      date: "2024",
      credentialUrl: ""
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/068c67a8-0421-483f-ada0-c2aa0c53fe02/badges/12988814?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "Fundamentals Of Digital Marketing",
      issuer: "United Latino Students Association",
      date: "2024",
      credentialUrl: "https://skillshop.exceedlms.com/student/award/HeovNFGgr7z3tob5oLJbRogJ"
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      credentialUrl: "https://badgr.com/public/assertions/damMUUMkQqy7V0Tg3tSDjA"
    },
    {
      name: "Project-Based Learning: Build an AI Text Summarizer app",
      issuer: "Postman",
      date: "2024",
      credentialUrl: "https://verify.skilljar.com/c/3hbwvjfzeivy"
    },
    {
      name: "Google Ads for Beginners",
      issuer: "Coursera",
      date: "2024",
      credentialUrl: "https://coursera.org/share/68545c7305ea64dab5d2e389873b5ede"
    },
    {
      name: "Website Using Wordpress - Web Hosting",
      issuer: "Coursera",
      date: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/records/NLTAJL6NPC6T"
    },
    {
      name: "Frontend End Development - CSS",
      issuer: "Great Learning",
      date: "2024",
      credentialUrl: "https://www.mygreatlearning.com/certificate/URSNQNUX"
    },
    {
      name: "Build a website - WordPress",
      issuer: "Coursera",
      date: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/records/7WGBWNUEX3H4"
    },
    {
      name: "Scaler master class",
      issuer: "Scaler",
      date: "2023",
      credentialUrl: "https://moonshot.scaler.com/s/sl/_kkZiR26Cr"
    },
    {
      name: "Frontend End Development - HTML",
      issuer: "Great Learning",
      date: "2023",
      credentialUrl: "https://www.mygreatlearning.com/certificate/GQNOTZOQ"
    },
    {
      name: "Cloud Computing",
      issuer: "Infosys Springboard",
      date: "2024",
      credentialUrl: ""
    },
    {
      name: "AI TOOLS WORKSHOP",
      issuer: "Be10x",
      date: "2025",
      credentialUrl: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997455674 "
    },
    {
      name: "TCS ION Career Edge- Young Professional ",
      issuer: "TCS iON",
      date: "2023",
      credentialUrl: ""
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experienced Full Stack Developer with a passion for creating innovative digital solutions and mentoring the next generation of developers.
          </p>
          <Button className="bg-primary hover:bg-primary/90" size="lg" onClick={() => window.open("/Antima_Jayprakash_Mishra_Resume.pdf", "_blank")}>
            <Download className="mr-2" size={20} />
            Download PDF
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8 bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="text-primary" size={20} />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="text-primary" size={16} />
                <span className="text-muted-foreground">antimamishra277@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedinIn className="text-primary" size={16} />
                <a
                  href="https://www.linkedin.com/in/antima-mishra-4aa626254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground"
                >
                  Antima Mishra
                </a>
              </div>
              <div className="flex items-center  gap-2">
                <MapPin className="text-primary" size={16} />
                <span className="text-muted-foreground">Mumbai , Maharashtra</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Info Cards */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="text-primary" size={20} />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">1+ Years</p>
                  <p className="text-sm text-muted-foreground">Full Stack Development</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="text-primary" size={20} />
                    Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="text-primary" size={20} />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">21</p>
                  <p className="text-sm text-muted-foreground">Professional Certs</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Experience */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="text-primary" size={20} />
                    Current Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {experience.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{experience[0].title}</h3>
                      <p className="text-primary font-medium mb-2">{experience[0].location}</p>
                      <p className="text-sm text-muted-foreground mb-3">{experience[0].description}</p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js"].map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-secondary/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Top Skills */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="text-primary" size={20} />
                    Core Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                      <div key={skill} className="flex justify-between items-center">
                        <span className="text-sm text-foreground">{skill}</span>
                        <Badge variant="outline" className="text-xs">Expert</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.map((job, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={16} className="text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {job.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {job.company}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {job.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {edu.period}
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {edu.school}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.gpa && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-foreground">GPA: </span>
                        <span className="text-sm text-primary">{edu.gpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-foreground">Percentage: </span>
                        <span className="text-sm text-primary">{edu.percentage}</span>
                      </div>
                    )}
                    {edu.honors && (
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        <Star size={12} className="mr-1" />
                        {edu.honors}
                      </Badge>
                    )}
                    {edu.certification && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Award size={12} className="mr-1" />
                        {edu.certification}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="text-primary" size={20} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="bg-background/50 border-border/30">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                        <p className="text-xs text-primary mb-2">{cert.issuer}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-xs"
                            onClick={() => window.open(cert.credentialUrl, "_blank")}
                          >
                            <ExternalLink size={12} className="mr-1" />
                            Verify
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-foreground font-medium">English</span>
                    <Badge variant="outline" className="text-xs">Conversational</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-foreground font-medium">Hindi</span>
                    <Badge variant="outline" className="text-xs">Native</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm text-foreground font-medium">Marathi</span>
                    <Badge variant="outline" className="text-xs">Basic</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
