import React from "react";
import { Github, Linkedin, MessageSquare } from "lucide-react";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";
import VernonNavbar from "./components/Nav";
import { ThreeDCard } from "./components/updated-project-cards";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className=" items-center gap-12" id="navbar">
        
        <VernonNavbar />
      </div>
      <section className="container mx-auto px-6 py-20" id="about">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I am <span className="text-blue-600">Vernon Kacelo</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate full-stack developer with 3 years of experience
              crafting beautiful and functional web applications. I specialize
              in React, Node.js, and cloud architecture.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="best-image.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20" id="my-work">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThreeDCard
              title="Shenatungo"
              description="A Salon Website built with NextJs and hosted on Vercel"
              image="shenatungo.png"
              tags={["Next.js"]}
              link="https://shenatungo.com"
            />
            <ThreeDCard
              title="Shift-Finance"
              description="ShiftSpace Finance is a 100% Namibian corporation registered with the Business and Intellectual Property Authority (BIPA), Registration Number CC/2022/08696. ShiftSpace Financial Services CC is licensed and regulated by the Namibia Financial Institutions Supervisory Institution Authority (NAMFISA)."
              image="shift.png"
              tags={["React", "Tailwind"]}
              link="https://shiftfinance.m1.com.na"
            />
            <ThreeDCard
              title="Hovia Educational Consultants"
              description="Hovia is a consulting firm that focuses on training, management and career consulting services."
              image="Hovia.png"
              tags={["TypeScript"]}
              link="https://hoviaconsulting.com.na/"
            />
            {/* <ThreeDCard imageDescription="Hovia is a consulting firm that focuses on training, management and career consulting services." imageTitle="Hovia Educational Consultants" imageUrl="Hovia.png" alt="image"/> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20" >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12" >
          <div className="flex-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/Kacelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vernon-kacelo-68b5171b6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCVJvcQZTSwq%2B24QkOxpVeQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/264814380939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1" id="contact">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
const imageStyle = {
  borderRadius: "3%",
};
export default Home;
