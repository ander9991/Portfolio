import { EDUCATIONS } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className="pb-4">
          <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100 }} transition={{duration: 0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
          <div>
            {EDUCATIONS.map((education, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100 }} transition={{duration: 1}} className="w-full lg:w-1/4"> 
                  <img src={education.image} alt="CUNY" height={300} width={300} className="py-3"/>
                </motion.div>
                <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:100 }} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4"> 
                  <h6 className="mb-2 font-semibold">{education.title}</h6>
                  <p className="mb-2 text-sm text-neutral-400">Degree: {education.degree}</p>
                  <p className="mb-2 text-sm text-neutral-400">{education.description}</p>
                  <p className="mb-2 text-sm text-neutral-400">Dates Attended: {education.year}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Education;