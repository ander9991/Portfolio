import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100 }} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100 }} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiTensorflow className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div variants={iconVariants(1.75)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiScikitlearn className="text-7xl text-amber-600"/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiMysql  className="text-7xl text-sky-800"/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <BiLogoPostgresql  className="text-7xl text-sky-400"/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <FaJava className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <SiCplusplus className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-600 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech