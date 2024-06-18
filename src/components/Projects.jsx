import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100 }} transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div> 
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100 }} transition={{duration: 1}}
            className="w-full lg:w-1/4">
              <img src={project.image} width={200} height={150} alt={project.title} className="mb-6 rounded" />
            </motion.div>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:100 }} transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4"> 
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <button className="rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  View on GitHub
                </button>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
