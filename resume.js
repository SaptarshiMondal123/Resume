import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-8 py-10 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Saptarshi Mondal</h1>
        <p className="text-lg md:text-xl text-gray-300">
          AI Engineer | LLM & GenAI Enthusiast | Multimodal AI Explorer
        </p>
        <div className="flex justify-center mt-4 gap-6">
          <a href="mailto:saptarshimondal053@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://github.com/SaptarshiMondal123" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/saptarshi-mondal-057059265/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              Computer Science undergrad with a CGPA of 8.82. Strong in ML, LLMs, RAG pipelines, and cognitive systems. I'm passionate about creating impactful AI systems, especially in low-resource and real-time applications.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <p>
              <strong>AI Intern – TechSaksham (Microsoft & SAP)</strong> (Feb-Mar 2025)
              <br />
              Contributed to AI projects, focused on responsible AI, Microsoft tools, and team problem-solving.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "AI Medical Diagnosis System",
              link: "https://github.com/SaptarshiMondal123/AI-Medical-Diagnosis-System",
              description:
                "Streamlit ML app for disease prediction (diabetes, cancer, etc.) with 80–90% accuracy."
            },
            {
              title: "Summary Generator (Gemini 2.0 + LangChain)",
              link: "https://github.com/SaptarshiMondal123/Summary_Generator",
              description:
                "Research paper summarizer with Gemini API and Q&A. Voice-to-text summarization supported."
            },
            {
              title: "MNIST Digit Recognition",
              link: "https://github.com/SaptarshiMondal123/MNIST-Digit-Recognition-with-CNN-and-Streamlit",
              description:
                "98% accurate CNN on MNIST, deployed with interactive drawing pad using Streamlit."
            },
            {
              title: "Real-Time Emotion Detection",
              link: "https://github.com/SaptarshiMondal123/Real-time-Emotion-Detection-with-CNN",
              description:
                "Face emotion detection (happy, sad, angry, etc.) using CNN, OpenCV, and Streamlit."
            }
          ].map((project) => (
            <Card className="bg-gray-800" key={project.title}>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project ↗
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <a
              href="https://www.datacamp.com/certificate/AEDS0011326508793"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              AI Engineer for Data Scientists Associate (DataCamp)
            </a>
          </li>
          <li>
            <a
              href="https://www.credly.com/badges/2fa31040-0d96-4c4c-99b1-921a97effb44/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Artificial Intelligence Fundamentals (IBM)
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-gray-400 mt-16">
        <p>&copy; {new Date().getFullYear()} Saptarshi Mondal. All rights reserved.</p>
      </footer>
    </div>
  );
}
