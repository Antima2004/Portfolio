import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {Textarea}  from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { Mail, Phone, MapPin} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "antimamishra277@gmail.com",
      href: "mailto:antimamishra277@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      label: "Linkedin",
      value: "Antima Mishra",
      href: "https://www.linkedin.com/in/antima-mishra-4aa626254/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai Maharashtra",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Antima2004", label: "GitHub" },
    { icon: FaLinkedinIn, href: "http://localhost:3000/contact", label: "LinkedIn" },
    {icon:FaInstagram, href:"", label:"Instagram"}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, freelance work, or just to say hi!
          </p>
        </div>

        {/* Main Contact Section - Form */}
        <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="mt-2 bg-secondary/50 border-primary/30 text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="mt-2 bg-secondary/50 border-primary/30 text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={6}
                    className="mt-2 bg-secondary/50 border-primary/30 text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Empty placeholder instead of Map */}
            <div className="h-[500px] lg:h-auto flex items-center justify-center text-muted-foreground">
              <iframe
                title="Google Map"
                className="w-full h-full border-2 border-cyan-400 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d89247.86811670137!2d72.86136092501174!3d19.273780517190325!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749633899714!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                Let's Build Something Amazing
              </h3>
              <p className="text-muted-foreground text-sm">
                Whether you're looking to build a new application, improve an existing one,
                or just want to discuss ideas, I'm always excited to collaborate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
