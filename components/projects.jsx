"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import  photoEcommerce from "../public/project1.png"
import  photoMissTheMiss from "../public/project2.png"
import  photoWeatherWebsite from "../public/project3.png"
import  photoDanielsPortfolio from "../public/project4.png"
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Fresh Cart ",
      description:
      "Built a responsive e-commerce app using React, Axios, Formik, Yup, Tailwind CSS, and Styled Components. Features include user authentication, product listing, cart management, and checkout process.",
      image:photoEcommerce || "/placeholder.svg?height=400&width=600",
      tags: [
        "React",
        "Axios",
        "Formik",
        "Yup",
        "Tailwind CSS",
        "Styled Components"
      ],
      liveUrl: "https://fresh-cart-git-main-kareem-shalans-projects.vercel.app/",
      githubUrl: "https://github.com/kareem-shalan/Fresh-Cart",
    },
    {
      title: "Miss the Miss",
      description:
        "A sleek and feature-rich movie discovery platform with real-time data, smooth navigation, and a modern UI.",
      image: photoMissTheMiss || "/placeholder.svg?height=400&width=600",
      tags: [
        "React",
        "Vite",
        "React Router",
        "Axios",
        "Tailwind CSS",
        "React Slick",
        "Context API"
      ],
      liveUrl: "https://miss-the-miss-kareem-shalans-projects.vercel.app",
      githubUrl: "https://github.com/kareem-shalan/Miss-the-Miss",
    },
    
    {
      title: "Weather ",
      description:
        "Developed a real-time weather website using HTML, CSS, JavaScript, and Bootstrap. Integrated a weather API for location-based searches.",
      image: photoWeatherWebsite || "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Weather API"],
      liveUrl: "https://kareem-shalan.github.io/Weather",
      githubUrl: "https://github.com/kareem-shalan/Weather",
    },
    
    {
      title: "Daniels Portfolio Clone",
      description:
        "Recreated the Daniels portfolio website using React, Bootstrap, and modern UI/UX principles. Designed a fully responsive and interactive portfolio with smooth animations.",
      image: photoDanielsPortfolio ||  "/placeholder.svg?height=400&width=600",
      tags: ["React", "Bootstrap", "CSS", "JavaScript"],
      liveUrl: "https://daniels-virid.vercel.app/",
      githubUrl: "https://github.com/kareem-shalan/Daniels",
    },
    
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project showcases different skills and technologies I've worked
            with.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://vercel.com/kareem-shalans-projects"
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

