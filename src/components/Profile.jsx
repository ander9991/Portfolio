import {PROFILE_CONTENT} from "../constants";
import profilePic from "../assets/StevenProfilePic.jpeg";
import {motion} from "framer-motion";

const contrainer = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},
    },
});

const Profile = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={contrainer(0)} initial="hidden" animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Steven Granaturov</motion.h1>
                    <motion.span variants={contrainer(0.5)} initial="hidden" animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">DevSecOps Engineer</motion.span>
                    <motion.p variants={contrainer(1.0)} initial="hidden" animate="visible" 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {PROFILE_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity: 1}} transition= {{duration: 1, delay: 1.2}}
                    src={profilePic} alt="Steven Granaturov" height={400} width={400} className="rounded"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile