import React, { useState, useRef } from 'react'
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4)
  const projectRefs = useRef([])

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 4)
  }

  const handleShowLess = () => {
    setVisibleCount(prev => {
      const newCount = Math.max(4, prev - 4)


      setTimeout(() => {
        projectRefs.current[newCount - 1]?.scrollIntoView({
          behavior: "smooth",
          block: "center" 
        })
      }, 100)

      return newCount
    })
  }

  const visibleProjects = PROJECTS.slice(0, visibleCount)

  return (
    <div className='pb-4' id="projects">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h2>

      <div>
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            ref={el => projectRefs.current[index] = el}
            className='mb-8 flex flex-wrap lg:justify-center'
          >

            {/* IMAGE */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className='mb-6 rounded cursor-pointer hover:opacity-80 transition'
                />
              </a>
            </motion.div>

            {/* CONTENT */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >

              {/* TITLE */}
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <h3 className='mb-2 font-semibold text-2xl hover:underline cursor-pointer'>
                  {project.title}
                </h3>
              </a>

              <p className='mb-4 text-stone-400'>
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex items-center gap-4 text-xl">

                {/* Live */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
                </a>

                {/* GitHub */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  <FaGithub />
                  <span className="text-sm">Code</span>
                </a>

              </div>

            </motion.div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="text-center mt-8 flex justify-center gap-4">

        {/* SHOW MORE */}
        {visibleCount < PROJECTS.length && (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 transition"
          >
            Show More
          </button>
        )}

        {/* SHOW LESS */}
        {visibleCount > 4 && (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-stone-600 text-white rounded hover:bg-stone-500 transition"
          >
            Show Less
          </button>
        )}

      </div>
    </div>
  )
}

export default Projects