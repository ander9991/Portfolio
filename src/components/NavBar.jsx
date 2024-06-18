import React from 'react'
import logo from "../assets/Sg_transparent.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-0" src={logo} alt="logo" height={125} width={125} />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/stevengranaturov/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ander9991" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://x.com/1ander999" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://www.instagram.com/steven.granaturov/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="/resume/Steven_Granaturov_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4">
                    <button className="rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                        Resume
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
